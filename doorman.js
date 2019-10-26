
function doorman(t) {
  this.text = t;
  this.hello = function (name) {
    console.log(this.text.replace(/\{name\}/, name));
  }
};
