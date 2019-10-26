lucy.hello("Louise", "fr");
var printed = // Grab the text just printed
if ("Bon jour, Louise" !== printed) {
  throw "lucy.hello() printed this: " + printed;
}
