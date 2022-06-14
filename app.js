
const App = require("./outPut.js");



let n = App();
for (let i = 1; i; i++) {
  if (n <= 5) {
    n = App();
  } else {
    break;
  }
}
