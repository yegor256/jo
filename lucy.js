var lucy = {
  hello: function (name, locale) {
    console.log(this.greeting(name, locale));
  },
  greeting: function (n, lang) {
    var text;
    if (lang == "fr") {
      text = "Bon jour, " + n;
    } else {
      text = "Hello, " + n;
    }
    return text;
  }
};
