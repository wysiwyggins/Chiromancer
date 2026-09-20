let m = {x:50,y:50};// mouse position
let drag = false;
let pathLength = thePath.getTotalLength();
let pos = pathLength / 2;
let val = range.value;
let oPos = thePath.getPointAtLength(pos);
let d={};

thumb.addEventListener("mousedown",onStart);
thumb.addEventListener("touchstart",onStart);

svg.addEventListener("mousemove",onMove);
svg.addEventListener("touchmove",onMove);

svg.addEventListener("mouseup",onEnd);
svg.addEventListener("mouseleave",onEnd);
svg.addEventListener("touchend",onEnd);

function onMove(e){
   //para prevenir el desplazamiento de pantalla
   e.preventDefault();
  if(drag){
    m = oMousePosSVG(e);

    pos = map5(m.x, 0, 100, 0, pathLength, true);
    val = constrain(m.x, 0, 100); 
    oPos = thePath.getPointAtLength(pos);
    range.value = val;
    thumb.setAttributeNS(null,"cx",oPos.x);
    thumb.setAttributeNS(null,"cy",oPos.y);
    txt.setAttributeNS(null,"x",oPos.x);
    txt.setAttributeNS(null,"y",oPos.y);
    txt.textContent = parseInt(val);
    
  }
}
function onStart(e){m = oMousePosSVG(e);                      
  drag = true;                
}
function onEnd(e){drag = false;}


//a p5.js function
function map5(n, a, stop1, start2, stop2, withinBounds) {
  var newval = (n - a) / (stop1 - a) * (stop2 - start2) + start2;
  if (!withinBounds) {
    return newval;
  }
  if (start2 < stop2) {
    return this.constrain(newval, start2, stop2);
  } else {
    return this.constrain(newval, stop2, start2);
  }
};

function constrain(n, low, high) {
  return Math.max(Math.min(n, high), low);
};


function oMousePosSVG(ev) {
  let e = ev.touches ? ev.touches[0] : ev;
      var p = svg.createSVGPoint();
      p.x = e.clientX;
      p.y = e.clientY;
      var ctm = svg.getScreenCTM().inverse();
      var p =  p.matrixTransform(ctm);
      return p;
}