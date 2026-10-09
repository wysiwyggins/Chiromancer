{
  const nameInput = document.getElementById("name");
  const ranges = [...document.querySelectorAll('input[type="range"][id$="-range"]')];
  const gameOver = document.getElementById("game-over");
  const story = document.getElementById("story");
  const storyText = document.getElementById("story-text");

 
  let characterName = "";
  // Keyed by line id, true when the slider is at or past halfway.
  let lineFlags = {};

  function getJSON(url) {
    return fetch(url).then(function (response) { return response.json(); });
  }

  const namesReady = Promise.all([
    getJSON("/assets/corpora/firstNames.json").then(function (data) { return data.firstName; }),
    getJSON("/assets/corpora/fantasyNames.json")
  ]);

  // Pick a list first, then a name, so the shorter fantasy list isn't drowned out.
  async function randomName() {
    const lists = await namesReady;
    const names = lists[Math.floor(Math.random() * lists.length)];
    return names[Math.floor(Math.random() * names.length)];
  }

  // fate.json plus every word list named in corpora.json, merged into one raw grammar.
  const grammarReady = Promise.all([
    getJSON("/assets/grammar/fate.json"),
    getJSON("/assets/grammar/corpora.json")
  ]).then(async function ([fate, manifest]) {
    delete manifest.description;

    // Several rules can share a file, so fetch each file once.
    const files = {};
    Object.values(manifest).forEach(function (spec) {
      files[spec.file] = files[spec.file] || getJSON("/assets/corpora/" + spec.file);
    });

    const raw = Object.assign({}, fate);
    for (const [rule, spec] of Object.entries(manifest)) {
      let list = await files[spec.file];
      // A file is either a bare list or an object holding the list under the rule's own name. I should probably conform it.
      if (!Array.isArray(list)) list = list[rule];
      if (spec.field) list = list.map(function (item) { return item[spec.field]; });
      raw[rule] = list;
    }
    return raw;
  });


  // Lists the variant for a pair of lines as [both long, first long only, second long only, both short].
  function pair(flags, first, second, options) {
    return options[(flags[first] ? 0 : 2) + (flags[second] ? 0 : 1)];
  }

  // Head and heart choose the fate, in pair() order. A slot with more than one fate picks at random.
  const fates = [
    ["fateHubris"],              // both long
    ["fateApprentice"],          // head long, heart short
    ["fateDuel"],                // heart long, head short
    ["fateCrime", "fateNeglect"] // both short
  ];

  function escapeHTML(s) {
    return s.replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function generateFate(raw, name, flags) {
    const choices = pair(flags, "line-of-the-head", "line-of-the-heart", fates);
    const form = choices[Math.floor(Math.random() * choices.length)];

    // The fate is HTML (for blockquotes), so the typed name is escaped
    const grammar = tracery.createGrammar(Object.assign({}, raw, { name: [escapeHTML(name)] }));
    grammar.addModifiers(baseEngModifiers);

    return { text: grammar.flatten("#" + form + "#"), form: form };
  }

  // load sounds first so there's no lag playing them
  const gameOverSounds = ["keysBad1.mp3", "keysBad2.mp3", "keysBad3.mp3"].map(function (file) {
    const audio = new Audio("/assets/sounds/" + file);
    audio.preload = "auto";
    return audio;
  });

  function playGameOverSound() {
    const audio = gameOverSounds[Math.floor(Math.random() * gameOverSounds.length)];
    audio.currentTime = 0;
    audio.play().catch(function () {});
  }

  // slider.js randomizes
  document.getElementById("random").addEventListener("click", async function () {
    nameInput.value = await randomName();
  });

  document.getElementById("play").addEventListener("click", async function () {
    characterName = nameInput.value.trim();
    if (!characterName) characterName = await randomName();

    lineFlags = {};
    ranges.forEach(function (range) {
      const t = (range.value - range.min) / (range.max - range.min);
      lineFlags[range.id.replace(/-range$/, "")] = t >= 0.5;
    });

    const fate = generateFate(await grammarReady, characterName, lineFlags);
    storyText.innerHTML = fate.text;
    storyText.className = "story-text is-" + fate.form;
    story.classList.remove("is-visible");
    story.hidden = false;
    gameOver.hidden = false;
    playGameOverSound();
  });

  gameOver.addEventListener("animationend", function () {
    gameOver.hidden = true;
    story.classList.add("is-visible");
  });

  document.getElementById("try-again").addEventListener("click", function () {
    story.classList.remove("is-visible");
    story.hidden = true;

    nameInput.value = "";
    ranges.forEach(function (range) {
      range.value = range.defaultValue;
      // slider.js redraws the line and readout on input.
      range.dispatchEvent(new Event("input"));
    });

    characterName = "";
    lineFlags = {};
  });
}
