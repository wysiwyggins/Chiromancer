{
  const fill  = document.getElementById("fill");
  const range = document.getElementById("rangeslider");

  let len = fill.getTotalLength();
  fill.style.strokeDasharray = len;

  const render = function () {
    const t = (range.value - range.min) / (range.max - range.min); // 0 to 1
    fill.style.strokeDashoffset = len * (1 - t);
  };

  range.addEventListener("input", render);
  render();
}
