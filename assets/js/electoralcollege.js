let year = " ";

changeTo2012 = function() {
    var reds = ["al", "ak", "az", "ar", "ga", "id", "in", "ks", "ky", "la", "ms", "mo", "mt", "ne", "ne1", "ne2", "ne3", "nc", "nd", "ok", "sc", "sd", "tn", "tx", "ut", "wv", "wy"]
    for (var i = 0; i < reds.length; i++) {
      var currentState = document.getElementsByClassName("hex state " + reds[i]);
      for (var j = 0; j < currentState.length; j++) {
        var kid = currentState[j].children;
        kid[0].style.borderBottom = "7.5px solid #CE351A";
        kid[1].style.backgroundColor = "#CE351A";
        kid[2].style.borderTop = "7.5px solid #CE351A";
      }
    }
    var blues = ["ca", "co", "ct", "de", "dc", "fl", "hi", "il", "ia", "me", "me1", "me2", "md", "ma", "mi", "mn", "nv", "nh", "nj", "nm", "ny", "oh", "or", "pa", "ri", "vt", "va", "wa", "wi"]
    for (var i = 0; i < blues.length; i++) {
      var currentState = document.getElementsByClassName("hex state " + blues[i]);
      for (var j = 0; j < currentState.length; j++) {
        var kid = currentState[j].children;
        kid[0].style.borderBottom = "7.5px solid #1A34CE";
        kid[1].style.backgroundColor = "#1A34CE";
        kid[2].style.borderTop = "7.5px solid #1A34CE";
      }
    }
    var ratings = document.getElementsByClassName("rating");
    ratings[0].innerHTML = 332;
    ratings[0].style.width = "664px";
    for (var k = 1; k <= 7; k++) {
      ratings[k].innerHTML = "";
      ratings[k].style.width = "0px";
    }
    ratings[8].innerHTML = 206;
    ratings[8].style.width = "412px"; 
    return 2012;
};
changeTo2016 = function() {
    var reds = ["al", "ak", "az", "ar", "fl", "ga", "id", "in", "ia", "ks", "ky", "la", "me2", "mi", "ms", "mo", "mt", "ne", "ne1", "ne2", "ne3", "nc", "nd", "oh", "ok", "pa", "sc", "sd", "tn", "tx", "ut", "wv", "wi", "wy"]
    for (var i = 0; i < reds.length; i++) {
      var currentState = document.getElementsByClassName("hex state " + reds[i]);
      for (var j = 0; j < currentState.length; j++) {
        var kid = currentState[j].children;
        kid[0].style.borderBottom = "7.5px solid #CE351A";
        kid[1].style.backgroundColor = "#CE351A";
        kid[2].style.borderTop = "7.5px solid #CE351A";
      }
    }
    var blues = ["ca", "co", "ct", "de", "dc", "hi", "il", "me", "me1", "md", "ma", "mn", "nv", "nh", "nj", "nm", "ny", "or", "ri", "vt", "va", "wa"]
    for (var i = 0; i < blues.length; i++) {
      var currentState = document.getElementsByClassName("hex state " + blues[i]);
      for (var j = 0; j < currentState.length; j++) {
        var kid = currentState[j].children;
        kid[0].style.borderBottom = "7.5px solid #1A34CE";
        kid[1].style.backgroundColor = "#1A34CE";
        kid[2].style.borderTop = "7.5px solid #1A34CE";
      }
    }
    var ratings = document.getElementsByClassName("rating");
    ratings[0].innerHTML = 232;
    ratings[0].style.width = "464px";
    for (var k = 1; k <= 7; k++) {
      ratings[k].innerHTML = "";
      ratings[k].style.width = "0px";
    }
    ratings[8].innerHTML = 306;
    ratings[8].style.width = "612px"; 
    return 2016;
};

changeTo2020 = function() {
    var reds = ["al", "ak", "ar", "fl", "id", "in", "ia", "ks", "ky", "la", "me2", "ms", "mo", "mt", "ne", "ne1", "ne3", "nc", "nd", "oh", "ok", "sc", "sd", "tn", "tx", "ut", "wv", "wy"]
    for (var i = 0; i < reds.length; i++) {
      var currentState = document.getElementsByClassName("hex state " + reds[i]);
      for (var j = 0; j < currentState.length; j++) {
        var kid = currentState[j].children;
        kid[0].style.borderBottom = "7.5px solid #CE351A";
        kid[1].style.backgroundColor = "#CE351A";
        kid[2].style.borderTop = "7.5px solid #CE351A";
      }
    }
    var blues = ["az", "ca", "co", "ct", "de", "dc", "ga", "hi", "il", "me", "me1", "md", "ma", "mi", "mn", "ne2", "nv", "nh", "nj", "nm", "ny", "or", "pa", "ri", "vt", "va", "wa", "wi"]
    for (var i = 0; i < blues.length; i++) {
      var currentState = document.getElementsByClassName("hex state " + blues[i]);
      for (var j = 0; j < currentState.length; j++) {
        var kid = currentState[j].children;
        kid[0].style.borderBottom = "7.5px solid #1A34CE";
        kid[1].style.backgroundColor = "#1A34CE";
        kid[2].style.borderTop = "7.5px solid #1A34CE";
      }
    }
    var ratings = document.getElementsByClassName("rating");
    ratings[0].innerHTML = 306;
    ratings[0].style.width = "612px";
    for (var k = 1; k <= 7; k++) {
      ratings[k].innerHTML = "";
      ratings[k].style.width = "0px";
    }
    ratings[8].innerHTML = 232;
    ratings[8].style.width = "464px"; 
    return 2020;
};

april2020 = function() {
  var safed = ["wa", "or", "ca", "nm", "hi", "il", "va", "md",
      "md", "dc", "de", "nj", "ny", "vt", "ma", "ct", "ri", "me1"];
  var likelyd = ["co", "mn", "nv"];
  var leand = ["me", "mi", "nh", "pa"];
  var tossup = ["az", "nc", "wi"];
  var leanr = ["fl", "me2", "ne2", "oh"];
  var likelyr = ["ga", "ia", "tx", "sc"];
  var safer = ["ak", "ut", "id", "mt", "wy", "nd", "sd", "ne",
      "ks", "ok", "mo", "ar", "la", "ms", "al", "tn", "ky", "in",
      "wv", "ne1", "ne3"];
  var ratings = document.getElementsByClassName("rating");
  ratings[0].innerHTML = 201;
  ratings[0].style.width = "402px";
  ratings[1].innerHTML = 25;
  ratings[1].style.width = "50px";
  ratings[2].innerHTML = 42;
  ratings[2].style.width = "84px";
  
  ratings[4].innerHTML = 36;
  ratings[4].style.width = "72px";

  ratings[6].innerHTML = 49;
  ratings[6].style.width = "98px";
  ratings[7].innerHTML = 69;
  ratings[7].style.width = "138px";
  ratings[8].innerHTML = 116;
  ratings[8].style.width = "232px"; 
  return changeTo2020_ratings(safed, likelyd, leand, tossup, leanr, likelyr, safer);
};

may2020 = function() {
  var safed = ["wa", "or", "ca", "nm", "hi", "il", "va", "md",
      "md", "dc", "de", "nj", "ny", "vt", "ma", "ct", "ri", "me1"];
  var likelyd = ["co", "mn", "nv", "nh", "mi"];
  var leand = ["me", "pa", "az", "wi"];
  var tossup = ["fl", "nc", "me2", "ne2"];
  var leanr = ["tx", "ga", "oh"];
  var likelyr = ["ia", "sc"];
  var safer = ["ak", "ut", "id", "mt", "wy", "nd", "sd", "ne",
      "ks", "ok", "mo", "ar", "la", "ms", "al", "tn", "ky", "in",
      "wv", "ne1", "ne3"];
  var ratings = document.getElementsByClassName("rating");
  ratings[0].innerHTML = 201;
  ratings[0].style.width = "402px";
  ratings[1].innerHTML = 45;
  ratings[1].style.width = "90px";
  ratings[2].innerHTML = 43;
  ratings[2].style.width = "86px";
  
  ratings[4].innerHTML = 46;
  ratings[4].style.width = "92px";

  ratings[6].innerHTML = 72;
  ratings[6].style.width = "144px";
  ratings[7].innerHTML = 15;
  ratings[7].style.width = "30px";
  ratings[8].innerHTML = 116;
  ratings[8].style.width = "232px"; 
  return changeTo2020_ratings(safed, likelyd, leand, tossup, leanr, likelyr, safer);
};

june2020 = function() {
  var safed = ["wa", "or", "ca", "nm", "hi", "il", "va", "md",
      "md", "dc", "de", "nj", "ny", "vt", "ma", "ct", "ri", 
      "me1", "co"];
  var likelyd = ["mn", "nv", "nh", "mi"];
  var leand = ["me", "pa", "az", "wi"];
  var tossup = ["fl", "nc", "me2", "ne2"];
  var leanr = ["tx", "ga", "oh"];
  var likelyr = ["ia", "sc", "mt", "ut", "mo"];
  var safer = ["ak", "id", "wy", "nd", "sd", "ne", "ks", "ok",
      "ar", "la", "ms", "al", "tn", "ky", "in", "wv", "ne1",
      "ne3"];
  var ratings = document.getElementsByClassName("rating");
  ratings[0].innerHTML = 210;
  ratings[0].style.width = "420px";
  ratings[1].innerHTML = 36;
  ratings[1].style.width = "72px";
  ratings[2].innerHTML = 43;
  ratings[2].style.width = "86px";

  ratings[4].innerHTML = 46;
  ratings[4].style.width = "92px";

  ratings[6].innerHTML = 72;
  ratings[6].style.width = "144px";
  ratings[7].innerHTML = 34;
  ratings[7].style.width = "68px";
  ratings[8].innerHTML = 97;
  ratings[8].style.width = "194px"; 
  return changeTo2020_ratings(safed, likelyd, leand, tossup, leanr, likelyr, safer);
};

july2020 = function() {
  var safed = ["wa", "or", "ca", "nm", "hi", "il", "va", "md",
      "md", "dc", "de", "nj", "ny", "vt", "ma", "ct", "ri", 
      "me1", "co"];
  var likelyd = ["mn", "nv", "nh", "mi", "wi"];
  var leand = ["me", "pa", "az", "fl", "nc"];
  var tossup = ["me2", "ne2", "oh", "ia", "ga"];
  var leanr = ["tx"];
  var likelyr = ["ia", "sc", "mt", "ut", "mo"];
  var safer = ["ak", "id", "wy", "nd", "sd", "ne", "ks", "ok",
      "ar", "la", "ms", "al", "tn", "ky", "in", "wv", "ne1",
      "ne3"];
  var ratings = document.getElementsByClassName("rating");
  ratings[0].innerHTML = 210;
  ratings[0].style.width = "420px";
  ratings[1].innerHTML = 46;
  ratings[1].style.width = "92px";
  ratings[2].innerHTML = 77;
  ratings[2].style.width = "154px";

  ratings[4].innerHTML = 42;
  ratings[4].style.width = "84px";

  ratings[6].innerHTML = 38;
  ratings[6].style.width = "76px";
  ratings[7].innerHTML = 28;
  ratings[7].style.width = "56px";
  ratings[8].innerHTML = 97;
  ratings[8].style.width = "194px"; 
  return changeTo2020_ratings(safed, likelyd, leand, tossup, leanr, likelyr, safer);
};

august2020 = function() {
  var safed = ["wa", "or", "ca", "nm", "hi", "il", "va", "md",
      "md", "dc", "de", "nj", "ny", "vt", "ma", "ct", "ri", 
      "me1", "co"];
  var likelyd = ["mn", "nv", "nh", "mi", "wi", "pa"];
  var leand = ["me", "az", "fl"];
  var tossup = ["me2", "ne2", "oh", "ia", "ga", "tx", "nc"];
  var leanr = [];
  var likelyr = ["ia", "sc", "mt", "ut", "mo", "ak"];
  var safer = ["id", "wy", "nd", "sd", "ne", "ks", "ok",
      "ar", "la", "ms", "al", "tn", "ky", "in", "wv", "ne1",
      "ne3"];
  var ratings = document.getElementsByClassName("rating");
  ratings[0].innerHTML = 210;
  ratings[0].style.width = "420px";
  ratings[1].innerHTML = 46;
  ratings[1].style.width = "92px";
  ratings[2].innerHTML = 77;
  ratings[2].style.width = "154px";

  ratings[4].innerHTML = 42;
  ratings[4].style.width = "84px";

  ratings[6].innerHTML = 38;
  ratings[6].style.width = "76px";
  ratings[7].innerHTML = 28;
  ratings[7].style.width = "56px";
  ratings[8].innerHTML = 97;
  ratings[8].style.width = "194px"; 
  return changeTo2020_ratings(safed, likelyd, leand, tossup, leanr, likelyr, safer);
};



/* 2020 - the long one... */
changeTo2020_ratings = function(safed, likelyd, leand, tossup, leanr, likelyr, safer) {
	/*SAFE D*/
    for (var i = 0; i < safed.length; i++) {
      var currentState = document.getElementsByClassName("hex state " + safed[i]);
      for (var j = 0; j < currentState.length; j++) {
        var kid = currentState[j].children;
        kid[0].style.borderBottom = "7.5px solid #1A35CE";
        kid[1].style.backgroundColor = "#1A35CE";
        kid[2].style.borderTop = "7.5px solid #1A35CE";
      }
    }

  /*LIKELY D*/
    for (var i = 0; i < likelyd.length; i++) {
      var currentState = document.getElementsByClassName("hex state " + likelyd[i]);
      for (var j = 0; j < currentState.length; j++) {
        var kid = currentState[j].children;
        kid[0].style.borderBottom = "7.5px solid #4F5ED6";
        kid[1].style.backgroundColor = "#4F5ED6";
        kid[2].style.borderTop = "7.5px solid #4F5ED6";
      }
    }
	/*LIKELY R*/
    for (var i = 0; i < likelyr.length; i++) {
      var currentState = document.getElementsByClassName("hex state " + likelyr[i]);
      for (var j = 0; j < currentState.length; j++) {
        var kid = currentState[j].children;
        kid[0].style.borderBottom = "7.5px solid #DA736A";
        kid[1].style.backgroundColor = "#DA736A";
        kid[2].style.borderTop = "7.5px solid #DA736A";
      }
    }
	/*LEAN D*/
    for (var i = 0; i < leand.length; i++) {
      var currentState = document.getElementsByClassName("hex state " + leand[i]);
      for (var j = 0; j < currentState.length; j++) {
        var kid = currentState[j].children;
        kid[0].style.borderBottom = "7.5px solid #8487DE";
        kid[1].style.backgroundColor = "#8487DE";
        kid[2].style.borderTop = "7.5px solid #8487DE";
      }
    }
	/*LEAN R*/
    for (var i = 0; i < leanr.length; i++) {
      var currentState = document.getElementsByClassName("hex state " + leanr[i]);
      for (var j = 0; j < currentState.length; j++) {
        var kid = currentState[j].children;
        kid[0].style.borderBottom = "7.5px solid #E6B0B9";
        kid[1].style.backgroundColor = "#E6B0B9";
        kid[2].style.borderTop = "7.5px solid #E6B0B9";
      }
    }
  /*TOSSUP*/  
    for (var i = 0; i < tossup.length; i++) {
      var currentState = document.getElementsByClassName("hex state " + tossup[i]);
      for (var j = 0; j < currentState.length; j++) {
        var kid = currentState[j].children;
        kid[0].style.borderBottom = "7.5px solid #B59CCC";
        kid[1].style.backgroundColor = "#B59CCC";
        kid[2].style.borderTop = "7.5px solid #B59CCC";
      }
    }
  /*SAFE R*/  
    for (var i = 0; i < safer.length; i++) {
      var currentState = document.getElementsByClassName("hex state " + safer[i]);
      for (var j = 0; j < currentState.length; j++) {
        var kid = currentState[j].children;
        kid[0].style.borderBottom = "7.5px solid #CE351A";
        kid[1].style.backgroundColor = "#CE351A";
        kid[2].style.borderTop = "7.5px solid #CE351A";
      }
    }
	/*BARELY D
	for (var i = 0; i < barelyd.length; i++) {
      var currentState = document.getElementsByClassName("hex state " + barelyd[i]);
      for (var j = 0; j < currentState.length; j++) {
        var kid = currentState[j].children;
        kid[0].style.borderBottom = "7.5px solid #C8C8DC";
        kid[1].style.backgroundColor = "#C8C8DC";
        kid[2].style.borderTop = "7.5px solid #C8C8DC";
      }
    }
	BARELY R
	for (var i = 0; i < barelyr.length; i++) {
      var currentState = document.getElementsByClassName("hex state " + barelyr[i]);
      for (var j = 0; j < currentState.length; j++) {
        var kid = currentState[j].children;
        kid[0].style.borderBottom = "7.5px solid #DCC8C8";
        kid[1].style.backgroundColor = "#DCC8C8";
        kid[2].style.borderTop = "7.5px solid #DCC8C8";
      }
    }*/
  return 2020;
};