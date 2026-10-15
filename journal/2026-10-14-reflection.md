---
date: 2026-10-14
author: Wiley Wiggins
project: "Chiromancer"
---

# Reflection

In the previous project I failed to start out with a clearly defined, testable idea. I skirted around this and immediately attacked a small design question on the way to a larger prototype that involved things like randomized content, a comic interaction (press the button for a sour piano key and a big game over title) both of which I had in my head the moment I had the initial idea. The actual question (I hesitate to call it a "design" question) or rather the unknown that was attatched to my initial impulse, was something like, "what is the unspoken assumption about fate and character, emblematized by mantic reading as in palmistry, and how does it relate to fantasy game mechanics, as in the parametric character creator, the allotment of "skills," the quatification of a game-self for computability, but that drags with it implicit ghosts of things like eugenics, intelligence tests etc... without explicitly jumping to race and fantasy races, as I've already seen in other works. What things still get a pass and are difficult to untangle from the form without unraveling the game?" I didn't set out attempting to make any kind of preconceived point, but rather show a constellation of associated things in a way that was quick and funny, qualities I am not exactly known for, but that suit a 4 week project.

I think that I am ending this project with some new questions about generated text in the style that I've been working with since having met and studied with Allison Parrish in 2020. What kind of impression will these sorts of low-tech randomized texts have going forward now that people are becoming accustomed to LLM output? There was a potential version of this game that had no "fate" text and just ended with game over, but it wouldn't have been worth playing with twice.

## Materializing design method reflection

I can say that I've already been practicing something fairly similar to this method of devlog journaling before taking the class, but the difference is including journals in the repository itself, so that it can be browsed with commits. My first instinct was to say that it won't be until I need to dig up an old project that I'll see the usefulness of this method, but looking back through the repo that isn't quite true.

The failure I described above, not starting from a testable idea, is something the journal caught while it was happening. On the first day I asked myself whether I was starting from "a real and living doubt" (Peirce 1877) and joked: "All my doubts are in my abilities." In class I asked whether a commit message can record a doubt, or only the belief that resolved it after the fact. Doubts definitely are captured in the journal rather than in commit messages, which are pretty sparse. We talked in class about how git client ui affords commit messages and gives an idea of how detailed they should be, not to mention git cli commits. The journals also show what profs Khaled and Barr called "wayfinding through questions" (2023), from a granular how-do-I question about a slider to the broader question about fate and character that the project was actually about. Peirce says the method of science is the only method with "a right and a wrong way" to do it. It's fair to ask what doing MDM badly looks like. I think my commit messages are an example (haha).

The journal surfaced how design decisions can happen from friction with the material of code/data formats. In the SVG entry (09-16) the material pushed back— vector editors tend to leave cruft in the paths like unecessary transforms, and the handle stuck when you dragged it along a diagonal path. I gave up on putting the slider handle on the palm line and moved to separate range inputs. Only after that did I notice it had changed the concept, turning the ui into a "control panel… some kind of mad scientist thing" that brings videogame character creation back as a reference, where the interactive palm lines would have been something new, unsusual, and probably busy. Dearden might call this a conversation with the material (2006). Malafouris's version is that forms "do not determine, but they limit and channel" (Gosden and Malafouris 2015). If I had written only a postmortem, I think I would have told this as a choice I made. The journal shows SVG making it with me.

So the journaling wasn't only an archive for later, or something for an instructor to appraise. Writing entries like "Am I doing random text because it's in my well-worn bag of things-I-do?" was part of how the decisions got made. It worked less like a lossy record of the process and more like a second making alongside the code. Even so, I'm more modest about what the repo will recover later. It probably keeps the *conditions* of the work better than the reasoning: what was broken, what I was reading, what I doubted. The part where I judged something "funny enough" is probably still missing (it was the moment I made the GAME OVER text pop in instantly and added the sour note sounds instead of fading in).

---

## Related Readings

Bowers, John. 2012. The Logic of Annotated Portfolios: Communicating the Value of “Research through Design.”
Buchanan, Richard. 1985. “Declaration by Design: Rhetoric, Argument, and Demonstration in Design Practice.” Design Issues 2 (1): 4. <https://doi.org/10.2307/1511524>.
Dalsgaard, Peter. n.d. Pragmatism and Design Thinking.
Dearden, Andy. 2006. “Designing as a Conversation with Digital Materials.” Design Studies 27 (3): 399–421. <https://doi.org/10.1016/j.destud.2005.11.004>.
Frayling, Christopher. 1993. Research in Art and Design. Royal College of Art.
Gaver, Bill, and John Bowers. 2012. “Annotated Portfolios.” Interactions 19 (4): 40–49. <https://doi.org/10.1145/2212877.2212889>.
Gosden, Chris, and Lambros Malafouris. 2015. “Process Archaeology (P-Arch).” World Archaeology 47 (5): 701–17. <https://doi.org/10.1080/00438243.2015.1078741>.
Iliopoulos, Antonis. 2019. “Material Engagement Theory and Its Philosophical Ties to Pragmatism.” Phenomenology and the Cognitive Sciences 18 (1): 39–63. <https://doi.org/10.1007/s11097-018-9596-5>.
Inside Photoshop – Computational Culture. n.d.
Khaled, Rilla, and Pippin Barr. 2023. “Generative Logics and Conceptual Clicks: A Case Study of the Method for Design Materialization.” Design Issues 39 (1): 55–69. <https://doi.org/10.1162/desi_a_00706>.
Knappett, Carl, and Lambros Malafouris, eds. 2008. Material Agency. Springer US. <https://doi.org/10.1007/978-0-387-74711-8>.
Kolko, Jon. 2010. “Abductive Thinking and Sensemaking: The Drivers of Design Synthesis.” Design Issues 26 (1): 15–28. <https://doi.org/10.1162/desi.2010.26.1.15>.
Mareis, Claudia. 2012. “The Epistemology of the Unspoken: On the Concept of Tacit Knowledge in Contemporary Design Research.” Design Issues 28 (2): 61–71. <https://doi.org/10.1162/DESI_a_00143>.
Nicoll, Benjamin, and Brendan Keogh. 2019. The Unity Game Engine and the Circuits of Cultural Software. Springer International Publishing. <https://doi.org/10.1007/978-3-030-25012-6>.
Peirce, Charles S. n.d. How to Make Our Ideas Clear.
Peirce, Charles Sanders. 1877. “The Fixation of Belief.” Popular Science Monthly, November 12.
Tufte, Edward. 2006. “The Cognitive Style of PowerPoint.” In The Cognitive Style of PowerPoint : Pitching out Corrupts Within. Cheshire, Conn. : Graphics Press.
Winograd, Terry, ed. 1996. “Reflective Conversation with Materials An Interview with Donald Schön by John Bennett.” In Bringing Design to Software. ACM Press ; Addison- Wesley.
