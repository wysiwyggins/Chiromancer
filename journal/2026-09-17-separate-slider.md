---
date: 2026-09-15
author: Wiley Wiggins
project: "Chiromancer"
---

# Separate Slider?

Alright, here is proof of concept for the stroke-dasharray animating method. There's a separate, visible range input as the control. There's two svg paths, one is a track/background and the other is a fill, so it's a thermometer fill, basically.

[getTotalLength() method](https://developer.mozilla.org/en-US/docs/Web/API/SVGGeometryElement/getTotalLength)

SVG measures stuff in abstract "[user units](https://www.w3.org/TR/SVG/coords.html#Units)". `getTotalLength()` measures the path in units and strokeDasharray = len makes the dash pattern one single dash as long as the whole path, followed by an equally long gap that gets offset.

I don't totally understand how the normalization works, but `t` is the fraction of the way along the track with 0 at one end and 1 at the other. I found lots of examples of people doing pretty wild svg animations using this trick.

One thing about this method is that if there's a hiccup in page load it can throw it off, so if I add custom fonts it will need to capture `len` again. Also the units that svg use are relative to a parent, so the transforms that inkscape was adding to everything were what made a lot of this so hard. I managed to 'purify' these paths of a bunch of extra junk added by vector drawing apps & should be able to update it with whatever path I make and be ok. (The robo-barfiness of most svg is stuff added by illustrator etc, it can actually be quite clean and readable without it). The unit stuff is still a little brittle though, I noticed that it broke it to put it in a flex element for some reason but the grid element its in now didn't. Something to remember.

Going to play with this a bit and think about how it would feel with a whole hand. Keeping separate sliders would give me an easy place to put the line names and I could have values...
