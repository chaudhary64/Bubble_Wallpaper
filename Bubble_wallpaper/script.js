let main = document.querySelector(".main");
let runner;
let runner_in_mouseleave;
// Creating divs with class gooey and random position
for(let i = 0; i < 50; i++){
  let g = document.createElement("div");
  g.setAttribute("class", "gooey");
  let x = Math.floor(Math.random() * 100);
  let y = Math.floor(Math.random() * 100);
  g.style.left = x + "%";
  g.style.top = y + "%";
  main.appendChild(g);
}
// Just after creating the divs they will be assigned a random position and will be animated to that position in 5s as we have set the transition property to 5s in <style> inside index.html file
let destroy = setInterval(() => {
  document.querySelectorAll(".gooey").forEach((item) => {
    let x = Math.floor(Math.random() * 100);
    let y = Math.floor(Math.random() * 100);
    item.style.left = x + "%";
    item.style.top = y + "%";
  });
}, 100);
// Destroying the above runner in 0.1s
setTimeout(() => {
  clearInterval(destroy);
}, 100);
// After the above runner is destroyed a new runner will be created which will run in 5s and will assign a random position to all divs
runner = setInterval(() => {
  document.querySelectorAll(".gooey").forEach((item) => {
    let x = Math.floor(Math.random() * 100);
    let y = Math.floor(Math.random() * 100);

    item.style.left = x + "%";
    item.style.top = y + "%";
  });
}, 5000);
// Mouse move karne pe sare divs cursor ke position pe aa jayenge
main.addEventListener("mousemove", (event) => {
  // Mouse move karte ke sath sarre divs 0.1s me cursor ke position pe aa jayenge
    document.querySelectorAll(".gooey").forEach((item) => {
    let xclick = event.pageX;
    let yclick = event.pageY;
    item.style.left = xclick + "px";
    item.style.top = yclick + "px";
    item.style.transition = "all 0.1s linear";
  });
  // Stoping the runner
  clearInterval(runner);
  // try to stop the runner_in_mouseleave if it exists
  if (runner_in_mouseleave) {
    clearInterval(runner_in_mouseleave);
  }
});
// Mouse leave karte hi sare divs random position par aa jayenge and this time animation will be take over by runner_in_mouseleave which will run in 5s as runner has been stopped in mousemove event but this runner_in_mouseleave will be stopped when mousemove event will be triggered again and starts again when mouseleave event will be triggered again
main.addEventListener("mouseleave", (e) => {
  // Mouse leave karte hi sare divs random position par 0.1s me aa chalenge
  document.querySelectorAll(".gooey").forEach((item) => {
    let x = Math.floor(Math.random() * 100);
    let y = Math.floor(Math.random() * 100);
    item.style.left = x + "%";
    item.style.top = y + "%";
    item.style.transition = "all 0.1s linear";
  });
  // Am temp runner similar to destry in which an random position is assigned to all divs in 0.5s which should be cleared in 5s after that runner_in_mouseleave will take over the control of animating it in 5s
  let temp = setInterval(() => {
    document.querySelectorAll(".gooey").forEach((item) => {
      let x = Math.floor(Math.random() * 100);
      let y = Math.floor(Math.random() * 100);
      item.style.left = x + "%";
      item.style.top = y + "%";
      item.style.transition = "all 5s linear";
    });
  }, 500);
// Stoping the temp runner
  setTimeout(() => {
    clearInterval(temp);
  }, 500);
  // runner will start again with a different name
  runner_in_mouseleave = setInterval(() => {
    document.querySelectorAll(".gooey").forEach((item) => {
      let x = Math.floor(Math.random() * 100);
      let y = Math.floor(Math.random() * 100);
      item.style.left = x + "%";
      item.style.top = y + "%";
    });
  }, 5000);
});
