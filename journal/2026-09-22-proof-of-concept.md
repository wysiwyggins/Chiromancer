---
date: 2026-09-22
author: Wiley Wiggins
project: "Chiromancer"
---

# Proof of Concept

Ok, I've actually got a hand and all the lines in with corresponding sliders. I can see that separate sliders are the right way to go. I was toying with the idea of also making a unified line-slider version but I can tell that it would just be really busy, you'd have a hard time with all the line names on the palm, and it wouldn't read as some kind of character creation scene it would read as something new that would be cool but I think would detract from the game association and punchline.

## Grow origins

Some thoughts though- some of these lines feel like they shouldn't just grow from one side (I'm currently able to pick which side they grow from.) It would be more realistic if some of these (for example the "bracelets" of the wrist) to grow from the middle.

`stroke-dasharray` takes a *list* of values, not one. What I'm doing now is single value, whole length of the line with an equally long gap and offset it.

For center-out I'd change the dash-length with an appropriate offset.

```js
strokeDasharray  = visible + " " + len     // a dash of `visible`, then a big gap
strokeDashoffset = -(len - visible) / 2    // pull back by half the missing length
```

At `visible = 0` the dash is zero-length and nothing draws. As `visible` grows, the offset pulls the dash's starting point backwards by half of whatever was added, so it would open out symmetrically from the midpoint. The trailing `len` gap just guarantees the pattern never repeats and tiles a second dash into view. Although, on some of these lines that would probably be ok? I'd have to go back to the palmistry books to see which lines can have a center break (although that may be too much detail for this project.)

One possible difference is that `strokeDasharray` has to be set on every update instead of once at measure time, since the dash length is now the thing being animated. Currently `measure()` sets it once and `render()` only touches the offset, so the dasharray assignment moves into `render()` for the center case. I'll have to test this and see what it does.

So `from` becomes three-valued: `start`, `end`, `center`.This is per-line, so the bracelets can grow from the middle while the life line still sweeps up from the wrist. Might also suit the "Girdle of Venus".
