---
date: 2026-09-14
author: Wiley Wiggins
project: "Chiromancer"
---

#### Chiromancer

Thoughts about a possible first prototype for Materializing Design '26 building off the ideas from Benjamin's Fate and Character essay, and my ideas about rpg "stats":

- A parametric character creator that lets you adjust the lines on a character's hands as a sort of stat adjustment. Palm reading (writing?). [^1]

- when you save the character to begin the game you instantly get a "Game Over" and a story is generated about the character's fate, with the process that seeds the story from the palm-line-sliders being opaque.

- Ideally the interface for this would be slider handles *on the irregular palm lines themselves.* you could tab-cycle through them, revealing the handles and names of the lines.

#### Slip n' Slider?

Our first project is supposed to be small enough to fit in a 4 week sprint. So maybe I will start with just a slider that can move on a deformed path, which might be funny on its own as a UI element in a sort of Pippin-esque way.

Am I starting from a place of doubt (genuine doubt, not fake doubt, per Peirce, *The Fixation of Belief*!)? All my doubts are in my abilities.

In lieu of a doubt, my "design question" is pretty granular at this point and it's how do I do a slider input along a totally irregular path, preferably that I can draw beforehand. But that's a how, the real question I suppose is what happens when someone tries to use it? How deformed it can get before it no longer makes sense as a thing that gets adjusted between two points with a click-drag?

I may try to start with javascript and then if it's too hard move to a game engine, for a different flavor of hard.

How much can you deform a slider in p5?
<https://p5js.org/reference/p5/createSlider/>

I imagine you'd have to create something from scratch. An svg path and then a handle object that is grabbable and moves along it.

I feel like the last time I tried doing something with svg in p5 is was weird/hard? it's been a long time.
[https://p5js.org/reference/p5/p5.Vector/](https://github.com/processing/p5.js/issues/458)

I really just want to draw some lines in a vector art program and pop them in. Maybe that's a paper.js thing instead of a p5 thing. Or use a game engine, which feels like immense overkill for just this but not for the whole idea that it slots into.

Everything I see in the conversation about SVG in p5 is about *exporting* svg. I want to *import* it because it's trivial to draw a thing from nature compared to trying to plot it with code.

aha!!!
<https://codepen.io/giaco/pen/jXbLBX>

ok this is a place to start!

also here are some chiromancy (palmistry) links:

- [The Psychonomy of the Hand](https://archive.org/details/b28110791)
- [Artes Prohibite](https://en.wikipedia.org/wiki/Artes_prohibitae)
- [Wonders of Palmistry](https://search.worldcat.org/title/428013957?oclcNum=428013957)
- [The Laws of Scientific Hand Reading](https://books.google.ca/books?id=qjCskHHrLMgC&redir_esc=y)

---

[^1]: One day maybe I'll do an accompanying program with a 3d a phrenology head that you punch and mold to make a character into whatever eugenics bullshit personality profile is supposed to go with whatever head shape.
