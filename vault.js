function vault(s, e) {
  this.storage = d;
  this.entrance = e;
  this.open = function () {
    var users = this.storage.whoCanEnter();
    this.entrance.enter(users);
    console.log(users.length + " users are in!");
  }
};
