# Chiromancer

(a character-and-fate creator)

To run, open a build folder or workspace in a local server, such as VSCode's "Go Live" feature, or visit <https://wileywiggins.com/p5/chiromancer/>

---

## Research Statement

The character creation screen is a recurring feature in computer role-playing games (CRPG's), inheriting from a lineage of tabletop roleplaying games and wargames.

Games involving random number generation that emulate analog games of chance depend on actors with quantifiable features in order to model asymmetrical combat.

Creating a character in some games is a pre-game creative interaction that involves choosing the body shape, gender, facial characteristics, and sometimes clothing and hairstyles of the player character.

How do these sorts of quantified, designed characters connect to pre-modern ideas of fate and character?

In digital computers, randomly generated numbers can be unpredictable but they are never truly random, as computation is deterministic.

In a digital game, the intervention of a human player steers that deterministic result, depending on the level of freedom they are allowed within the rules of the game world.

The mechanics of belief can be theological, philosophical, scientific, a priori, rote.

Byzantine rules for cementing belief may obscure relatively crude assumptions about the world couched within them.

Is the body a marker of fate or a diverting obstacle in its flow?

---

## Conclusion

> I wasn't always sure I "got it" but mostly found grounding in this question "How do these sorts of quantified characters connect to pre-modern ideas of fate and character?" which I think is a nice one. Did you answer it? ([Barr 2026](/journal/2026-10-26-feedback.md))

The connection I'd stand behind is maybe more tenuous than "character creators are like palmistry." Both assume that a small set of measurements of a person is enough to say what will happen to them. In a game world this is mostly true: the game has to be computable, so a handful of numerical attributes plays a large part in every outcome. The 19th-century handbooks I read (*Psychonomy of the Hand*, *Palmistry for All*) claimed a connection between character and fate using shakey evidence— In Peirce's terms, they fixed belief by the method of authority, borrowing it from the Bible, the Kabbalah, the Vedas and the ancient Greeks, while dressing it in the language of his method of science (1877). Their rules of interpretation are elaborate enough to leave the reader a large space of possible readings, but the premise underneath is crude, and often openly racist, as in this passage on the Line of Saturn:

> M. Serres calls this line the Caucasian line, it being found (he says) only in the hands of the white races ; but, according to M. Desbarrolles, all hands, of whatever race, condemned to a vegetative and hard life, are devoid of the *Saturnine*. (Beemis 1864)

The idea that anyone would be *fated* to subjugation by their character rather than be subjected to the actions of their captors is hair-raising to me, but I think that it's an ideology that is still held by those in power, even if it is unspoken.

Where the two systems part ways is in who controls the measurements. To a palmist, the lines of the hand are an emanation of an immutable self. The handbooks treat character as essential and unchanging rather than as something shaped socially, materially, medically or intentionally over a lifetime, and they read the hand for what Benjamin calls "the guilt context of the living" (1978). Simply redrawing your own lines would make no sense to a 19th-century palm reader. A videogame, deterministic as it is, usually offers plenty of ways to change a character's numbers, from allocating points at the start to quaffing a potion of strength later. So games might invite the idea of a self that changes into the constellation of ideas, but that doesn't necessarily give hope of an escape from primordial ideas of fate, and it still rests in the idea of a human as a collection of numbers that ideally should tick upwards to power. Chiromancer gives the player the game's control and the palmist's outcome. You can redraw every line, but the game ends at the character sheet: once character is fully specified, there is nothing left to do.

Benjamin places this kind of mantic reading in the order of myth, which I wrote about in [a section](https://games.ucla.edu/text-archive/wileywiggins/fate-and-language/) of my [Tower of Babel](https://games.ucla.edu/text-archive/wileywiggins/) writing. [^1] Susan Buck-Morss summarizes:

> Within myth, the passage of time takes the form of predetermination. The course of events is said to be predestined by the gods, written in the stars, spoken by oracles, or inscribed in sacred texts. Strictly speaking, myth and history are incompatible. The former dictates that because human beings are powerless to interfere in the workings of fate, nothing truly new can happen, while the concept of history implies the possibility of human influence upon events (1989).

Playtesting mostly showed where the staging fell short. Before building the text generator I predicted that seeding it from the sliders "would effectively still be the same as totally random in its player effect" ([10-01](/journal/2026-10-01-chance.md)). With the few people who played it (two playtesters and class instructor Pippin Barr), that held. One said the sliders "don't mean much, neither in terms of 'mechanics' nor narratively," and Barr found adjusting them less momentous than hoped. Two of the three independently pointed to the same missing thing, a budget. With unlimited points every line can sit at 100 and nothing is traded off. I had considered but rejected a points budget because other than the life line, a longer line isn't 'better' than a short one, any more than picking one facial feature over another in a character creator. What the lines are is a non-causal association with fate. However, what makes a quantified character feel consequential in an RPG may be scarcity and anticipated consequence rather than measurement itself. If so, the fatalism I wanted to surface might have depended on making those lines feel consequential rather than arbitrary. Given more time I would prototype a points budget.

Digital RPGs and roguelikes inherit their dice-and-stats systems from tabletop roleplaying games and wargames, and those systems can look a lot like real-world systems for quantifying, identifying and sorting people. Some of those real-world systems, like IQ testing, present themselves as objective but grew out of eugenicist and fatalist ideologies, a history I visit in [The Degenerate Utopia](https://games.ucla.edu/text-archive/wileywiggins/the-degenerate-utopia/). This project doesn't establish a direct lineage from eugenics to the stat block, and it would be unfair to treat the convenience of computability, in a genre that grew up alongside the computer, as an ideology in itself. What I'd argue is that the forms resemble each other closely enough that ideas can ride along inside them unnoticed, and that this deserves attention when we study games. Nor are these ideas safely historical. Cheiro reports teaching palm reading to the heads of several hundred American businesses so they could judge their employees (1916), a role personality tests like Myers-Briggs fill in workplaces today. Facial recognition, predictive policing, and surveillance capitalism all grow from the same lineage.

Chiromancer is also one of several 'divination' sketches I've made in response to a form I see often in creative coding: the computer, or now the LLM, framed as an oracle, often with ritual elements or borrowed cultural traditions. I'm not passing judgment on those works. Divination is a rule-based, pre-computational kind of writing, and I value it as a story form. But those works rarely put fate itself in question, and I wanted a version that does.

Journaling in the repository, in the spirit of the [Materializing Design Method](https://materializing.design), let me work through these ideas while building, and it mattered most where it recorded decisions as they happened. The clearest case is the slider. SVG paths exported from vector editors fought me, so I gave up on handles placed on the palm lines and used separate range inputs instead. Only afterward did I notice that this had made the interface read more clearly as a character creator's control panel, the reference the whole project depends on.

Two questions remain open.

First, does low-tech generated text like this still read as authored, or as worth reading, now that players are used to LLM output? One playtester typed a prompt injection into the name field. My guess is that the text feels more worth reading as its connection to the sliders becomes more visible, but only up to a point. If the same slider positions always produced the same text, character would become something the player fully controls, which inverts the classical idea of fate rather than sharpening it.

Second, would a point budget, or Barr's suggestion of a version that tells the same story no matter what is chosen, make the fatalism sharper? I can't say without prototyping those variants.

---

## Works Cited

Barr, Pippin. 2026. “Chiromancer/Journal/2026-10-26-Feedback.Md at Main · Wysiwyggins/Chiromancer.” October 26. <https://github.com/wysiwyggins/Chiromancer/blob/main/journal/2026-10-26-feedback.md>.
Beemis, Richard, D’arpentigny, and Desparrolles. 1864. Psychonomy of the Hand. Frederick Pitman.
Benjamin, Walter. 1978. “Fate and Character.” In Reflections: Essays, Aphorisms, Autobiographical Writings, edited by Peter Demetz, translated by Edmund Jephcott. Harcourt Brace Jovanovich.
Buck-Morss, Susan. 1989. The Dialectics of Seeing: Walter Benjamin and the “Arcades Project.” Studies in Contemporary German Social Thought. MIT press.
Cheiro. 1916. Palmistry for All. G. P. Putnam’s Sons.
Peirce, Charles Sanders. 1877. “The Fixation of Belief.” Popular Science Monthly, November 12.

---

[^1]: Benjamin's approach to these subjects is complex and while it works to simplify it here, I should note that *Fate and Character* spends much of its time retrieving rather than condemning fortunetelling, if not as an actual predictive practice, as a metaphysical concept in relation to that "ossified order of myths."
