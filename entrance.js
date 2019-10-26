function entrance(d) {
  this.doorman = d;
  this.enter = function (friends) {
    friends.forEach(function (name) {
      this.doorman.hello(name);
    });
  }
};
