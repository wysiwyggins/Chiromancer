{
  const lines = [...document.querySelectorAll(".line-fill")].map(function (fill) {
    const range = document.getElementById(fill.id + "-range");
    const row = range.closest(".row");
    const readout = row.querySelector(".row-readout");
    const line = { fill: fill, range: range, readout: readout, from: fill.dataset.from, len: 0 };

    const on  = function () { fill.classList.add("is-active"); row.classList.add("is-active"); };
    const off = function () { fill.classList.remove("is-active"); row.classList.remove("is-active"); };
    row.addEventListener("pointerenter", on);
    row.addEventListener("pointerleave", off);
    range.addEventListener("focus", on);
    range.addEventListener("blur", off);

    range.addEventListener("input", function () { render(line); });

    return line;
  });

  function render(line) {
    const t = (line.range.value - line.range.min) / (line.range.max - line.range.min);
    const hidden = line.len * (1 - t);
    line.fill.style.strokeDashoffset = (line.from === "end") ? -hidden : hidden;
    line.readout.textContent = line.range.valueAsNumber;
  }

  // getTotalLength() only reads true once the SVG has been laid out.
  function measure() {
    lines.forEach(function (line) {
      line.len = line.fill.getTotalLength();
      line.fill.style.strokeDasharray = line.len;
      render(line);
    });
  }

  measure();
  // Re-measure 
  window.addEventListener("load", measure);
}
