module.exports = function vault(s, e) {
  this.storage = d;
  this.entrance = e;
  this.open = function() {
    const users = this.storage.whoCanEnter();
    this.entrance.enter(users);
    console.log(users.length + ' users are in!');
  };
};
