const ProgressBar = require("progress");
module.exports = class Bar extends ProgressBar {
  constructor(tpl, options) {
    if (!options) options = {};
    const green = "\u001b[42m \u001b[0m";
    const red = "\u001b[41m \u001b[0m";
    options.complete = green;
    options.incomplete = red;
    super(tpl, options);
  }
};
