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

    if (line.from === "center") {
      // Grow the dash itself and pull it back by half of what's missing, so it
      // opens out from the path's midpoint. A round cap paints a dot even at
      // zero length, so hide the stroke outright when there's nothing to draw.
      line.fill.style.strokeDasharray = (line.len - hidden) + " " + line.len;
      line.fill.style.strokeDashoffset = -hidden / 2;
      line.fill.style.visibility = (t === 0) ? "hidden" : "";
    } else {
      line.fill.style.strokeDasharray = line.len;
      line.fill.style.strokeDashoffset = (line.from === "end") ? -hidden : hidden;
    }

    line.readout.textContent = line.range.valueAsNumber;
  }

  // getTotalLength() only reads true once the SVG has been laid out.
  function measure() {
    lines.forEach(function (line) {
      line.len = line.fill.getTotalLength();
      render(line);
    });
  }

  measure();
  // Re-measure 
  window.addEventListener("load", measure);
}
