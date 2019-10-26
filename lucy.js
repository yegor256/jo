var lucy = {
  hello: function (name, locale, c = console) {
    if (locale == "fr") {
      c.log("Bon jour, " + name);
    } else {
      c.log("Hello, " + name);
    }
  }
};
