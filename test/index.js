const ColorProgressBar = require("../");

const bar = new ColorProgressBar("downloading :bar :percent :etas", {
  width: 50,
  total: 100,
});
let i = 0;
const timer = setInterval(function () {
  bar.tick();
  i++;
  if (i == 100) {
    console.log("\ncomplete\n");
    clearInterval(timer);
  }
}, 50);
