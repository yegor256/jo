var fake = {
  printed: "",
  log: function (text) {
    printed = text;
  }
};
lucy.hello("Louise", "fr", fake);
if ("Bon jour, Louise" !== fake.printed) {
  throw "lucy.hello() printed this: " + fake.printed;
}
