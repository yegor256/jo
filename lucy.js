var lucy = {
  hello: function (name, locale) {
    var text;
    if (lang == "fr") {
      text = "Bon jour, " + name;
    } else {
      text = "Hello, " + name;
    }
    console.log(text);
  }
};
