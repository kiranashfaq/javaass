alert("welcome to the mobile recommender");
alert(
  "please answer the following questions to help us suggest the perfect mobile for your use"
);
var budget = prompt("choose your budget", "low, med, high");
var system = prompt("which type of system do you prefer", "android, IOS");
if (budget === "high") {
  if (system === "ios") {
    var camera = prompt(
      "what camera quality do you need?",
      "basic, moderate, high"
    );
    if (camera == "basic") {
      // prompt("we have this model in basic camera quality", "ios13");
      alert("We have this model in basic camera quality \n Iphone 13 ");
    } else if (camera == "moderate") {
      // prompt("we have this model in moderate camera quality", "ios14");
      alert(
        "We have this model in moderate camera quality \n Iphone 14ProMax "
      );
    } else if (camera == "high") {
      // prompt("we have this model in high camera quality", "ios15");
      alert("We have this model in high camera quality \n Iphone 15 ");
    }
    var battery = prompt("how important is battery life to you? ");
    if (battery == "short") {
      // prompt("we have this model in short battery life", "iphone6");
      alert("We have this model in short battery life \n Iphone 11 Pro Max ");
    } else if (battery == "long") {
      // prompt("we have this model in long battery life", "iphone15");
      alert("We have this model in long battery life \n Iphone 15 Pro Max ");
    } else if (battery == "average") {
      // prompt("we have this model in long battery life", "iphone12");
      alert("We have this model in average battery life \n Iphone 12 Pro Max ");
    }

    var size = prompt("what screen size do you prefer ");
    if (size == "medium") {
      // prompt("we have this model in medium screen size", "iphone8");
      alert("We have this model in medium screen size \n Iphone 8 ");
    } else if (size == "small") {
      // prompt("we have this model in small screen size", "iphone6");
      alert("We have this model in small screen size \n Iphone 6 ");
    } else if (size == "large") {
      // prompt("we have this model in large screen size", "iphone15");
      alert("We have this model in large screen size\n Iphone 15Pro ");
    } else {
      alert("not available");
    }
  } else if (system === "android") {
    var camera = prompt(
      "what camera quality do you need?",
      "basic, moderate, high"
    );
    if (camera == "basic") {
      // prompt("we have this model in basic camera quality", "vivo");
      alert("We have this model in basic camera quality \n  Vivo ");
    } else if (camera == "moderate") {
      // prompt("we have this model in moderate camera quality", "techno");
      alert("We have this model in moderate camera quality \n  Techno 10 ");
    } else if (camera == "high") {
      // prompt("we have this model in high camera quality", "samsungS24 ultra");
      alert("We have this model in high camera quality \n samsungS24 ultra");
    }
    var battery = prompt("how important is battery life to you? ");
    if (battery == "short") {
      // prompt("we have this model in short battery life", "google pixel");
      alert("We have this model in short battery life \n Google Pixel 3a ");
    } else if (battery == "long") {
      // prompt("we have this model in long battery life", "realme");
      alert("We have this model in long battery life \n Realme 8 Pro ");
    } else if (battery == "average") {
      // prompt("we have this model in long battery life", "infinix");
      alert("We have this model in average battery life \n Infinix ");
    }

    var size = prompt("what screen size do you prefer ");
    if (size == "medium") {
      // prompt("we have this model in medium screen size", "google pixel 3a");
      alert("We have this model in medium screen size \n Google Pixel 3a ");
    } else if (size == "small") {
      // prompt("we have this model in small screen size", "motorollaE4");
      alert("We have this model in small screen size \n Motorola E4 ");
    } else if (size == "large") {
      // prompt("we have this model in large screen size", "SamsungS24 ultra");
      alert("We have this model in large screen size \n Samsung S24 ultra ");
    }
  } else {
    alert("not available");
  }
} else if (budget === "medium") {
  if (system === "ios") {
    var camera = prompt(
      "what camera quality do you need?",
      "basic, moderate, high"
    );
    if (camera == "basic") {
      // prompt("we have this model in basic camera quality", "ios7");
      alert("We have this model in basic camera quality \n Iphone 7 ");
    } else if (camera == "moderate") {
      // prompt("we have this model in moderate camera quality", "iphonex");
      alert("We have this model in moderate camera quality \n Iphone X ");
    } else if (camera == "high") {
      // prompt("we have this model in high camera quality", "iphone xsmax");
      alert("We have this model in high camera quality \n Iphone XS Max ");
    }
    var battery = prompt("how important is battery life to you? ");
    if (battery == "short") {
      // prompt("we have this model in short battery life", "iphone6");
      alert("We have this model in short battery life \n Iphone 6 ");
    } else if (battery == "long") {
      // prompt("we have this model in long battery life", "iphone12");
      alert("We have this model in long battery life \n Iphone 12 ");
    } else if (battery == "average") {
      // prompt("we have this model in long battery life", "iphone11");
      alert("We have this model in average battery life \n Iphone 11 ");
    }

    var size = prompt("what screen size do you prefer ");
    if (size == "medium") {
      // prompt("we have this model in medium screen size", "iphone7+");
      alert("We have this model in medium screen size \n Iphone 7 Plus ");
    } else if (size == "small") {
      // prompt("we have this model in small screen size", "iphone6s");
      alert("We have this model in small screen size \n Iphone 6s ");
    } else if (size == "large") {
      // prompt("we have this model in large screen size", "iphone11pro");
      alert("We have this model in large screen size \n Iphone 11 Pro ");
    } else {
      alert("not available");
    }
  } else if (system === "android") {
    var camera = prompt(
      "what camera quality do you need?",
      "basic, moderate, high"
    );
    if (camera == "basic") {
      // prompt("we have this model in basic camera quality", "technospark4");
      alert("We have this model in basic camera quality \n Techno Spark 4 ");
    } else if (camera == "moderate") {
      // prompt("we have this model in moderate camera quality", "infinix");
      alert("We have this model in moderate camera quality \n Infinix ");
    } else if (camera == "high") {
      // prompt("we have this model in high camera quality", "samsung A10");
      alert("We have this model in high camera quality \n Samsung A10 ");
    }
    var battery = prompt("how important is battery life to you? ");
    if (battery == "short") {
      // prompt("we have this model in short battery life", "googlepixel");
      alert("We have this model in short battery life \n Google Pixel 3a ");
    } else if (battery == "long") {
      // prompt("we have this model in long battery life", "nokia");
      alert("We have this model in long battery life \n Infinix ");
    } else if (battery == "average") {
      // prompt("we have this model in average battery life", "infinix");
      alert("We have this model in average battery life \n Nokia 1");
    }

    var size = prompt("what screen size do you prefer ");
    if (size == "medium") {
      // prompt("we have this model in medium screen size", "google pixel 3a");
      alert("We have this model in medium screen size \n Google Pixel 3a ");
    } else if (size == "small") {
      // prompt("we have this model in small screen size", "nokia 1");
      alert("We have this model in small screen size \n Nokia 1 ");
    } else if (size == "large") {
      // prompt("we have this model in large screen size", "REALMME C9");
      alert("We have this model in large screen size \n REALMME 9i");
    }
  } else {
    alert("not available");
  }
} else if (budget === "low") {
  if (system === "ios") {
    var camera = prompt(
      "what camera quality do you need?",
      "basic, moderate, high"
    );
    if (camera == "basic") {
      // prompt("we have this model in basic camera quality", "iphone 5");
      alert("We have this model in basic camera quality \n Iphone 5 ");
    } else if (camera == "moderate") {
      // prompt("we have this model in moderate camera quality", "ios6");
      alert("We have this model in moderate camera quality \n Iphone 6 ");
    } else if (camera == "high") {
      // prompt("we have this model in high camera quality", "ios6s");
      alert("We have this model in high camera quality \n Iphone 6s ");
    }
    var battery = prompt("how important is battery life to you? ");
    if (battery == "short") {
      // prompt("we have this model in short battery life", "iphone6");
      alert("We have this model in short battery life \n Iphone 6 ");
    } else if (battery == "long") {
      // prompt("we have this model in long battery life", "iphone 7+");
      alert("We have this model in long battery life \n Iphone 7 Plus ");
    } else if (battery == "average") {
      // prompt("we have this model in long battery life", "iphone7");
      alert("We have this model in average battery life \n Iphone 7 ");
    }

    var size = prompt("what screen size do you prefer ");
    if (size == "medium") {
      // prompt("we have this model in medium screen size", "iphone8");
      alert("We have this model in medium screen size \n Iphone 8 ");
    } else if (size == "small") {
      // prompt("we have this model in small screen size", "iphone6");
      alert("We have this model in small screen size \n Iphone 6 ");
    } else if (size == "large") {
      // prompt("we have this model in large screen size", "iphone7+");
      alert("We have this model in large screen size \n Iphone 7 Plus ");
    } else {
      alert("not available");
    }
  } else if (system === "android") {
    var camera = prompt(
      "what camera quality do you need?",
      "basic, moderate, high"
    );
    if (camera == "basic") {
      // prompt("we have this model in basic camera quality", "vivo");
      alert("We have this model in basic camera quality \n Vivo ");
    } else if (camera == "moderate") {
      // prompt("we have this model in moderate camera quality", "techno");
      alert("We have this model in moderate camera quality \n Techno ");
    } else if (camera == "high") {
      // prompt("we have this model in high camera quality", "samsungS24 ultra");
      alert("We have this model in high camera quality \n Samsung S24 Ultra ");
    }
    var battery = prompt("how important is battery life to you? ");
    if (battery == "short") {
      // prompt("we have this model in short battery life", "vivo");
      alert("We have this model in short battery life \n Vivo ");
    } else if (battery == "long") {
      // prompt("we have this model in long battery life", "techno");
      alert("We have this model in long battery life \n Techno ");
    } else if (battery == "average") {
      // prompt("we have this model in long battery life", "infinix");
      alert("We have this model in average battery life \n Infinix ");
    }

    var size = prompt("what screen size do you prefer ");
    if (size == "medium") {
      // prompt("we have this model in medium screen size", "amazon");
      alert("We have this model in medium screen size \n Amazon ");
    } else if (size == "small") {
      // prompt("we have this model in small screen size", "nokia");
      alert("We have this model in small screen size \n Nokia");
    } else if (size == "large") {
      // prompt("we have this model in large screen size", "realme");
      alert("We have this model in large screen size \n Realme");
    }
  } else {
    alert("not available");
  }
} else {
  alert("The system you are looking for is not available ");
}
