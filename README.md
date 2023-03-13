# color-progress-bar

## About

Node.js progress bar with color base [progress](https://www.npmjs.com/package/progress) package.


## How use

### npm
```bash
npm i color-progress-bar --save
```

### yarn

```bash
yarn add color-progress-bar -S
```

### example
```javascript

const ProgressBar = require('color-progress-bar');
 
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


```

## Tpl args

These are keywords you can use in the format of your progress bar tpl.

- `:bar` the progress bar itself
- `:current` current tick number
- `:total` total ticks
- `:elapsed` time elapsed in seconds
- `:percent` completion percentage
- `:eta` estimated completion time in seconds
- `:rate` rate of ticks per second

## More API doc
[link to progress](https://www.npmjs.com/package/progress)
