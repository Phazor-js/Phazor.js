/*
  _____  _                                    _  _____ 
 |  __ \| |                                  | |/ ____|
 | |__) | |__   __ _ _______  _ __           | | (___  
 |  ___/| '_ \ / _` |_  / _ \| '__|      _   | |\___ \ 
 | |    | | | | (_| |/ / (_) | |     _  | |__| |____) |
 |_|    |_| |_|\__,_/___\___/|_|    (_)  \____/|_____/ 
                                                                                                                                              
*/
/* jslint node: true */
/* jshint browser: true */ 

"use strict";


const pjsversion = 'v1'
const pjsmaster = 'Hello im Phazor.JS Master. If u need more help try go to:  http://api.boomhost.ml'
const pjsmasterversion = 'v1'
const pjsinfo = 'Made by: PlurrYT. Dwonload phazor.js: http://api.boomhost.ml'

var _0x44a1=["log","color: black; font-size: 18px;","color: red; font-size: 24px;","%cBy doing anthing in this console, you risk giving attackers access to your account or computer","%cHOLD UP!","color: blue; font-size: 75px; text-shadow: 2px 2px #000;"];!function(o,e){!function(e){for(;--e;)o.push(o.shift())}(++e)}(_0x44a1,343);var _0x30b5=function(o,e){return _0x44a1[o-=0]};setTimeout(function(){console.log(_0x30b5("0x3"),_0x30b5("0x4")),console.log("%cIf someone tells you to write, copy/paste or read anything from this console, there is a 101% chance you're being scammed!",_0x30b5("0x0")),console[_0x30b5("0x5")](_0x30b5("0x2"),_0x30b5("0x0")),console[_0x30b5("0x5")]("%cNo, this console CANNOT be used to gain access to someone elses account, only yours. ",_0x30b5("0x0")),console[_0x30b5("0x5")]("%cStay safe and close this side-bar.",_0x30b5("0x1"))},1500); /* Phazor.JS Security Info */

(function() {
  if (!document || !window) {
    console.group("Phazor.js Load Master Failed"); //Master start
    throw new Error("Phazor.JS can only run in windows with a document."); /* Phazor.JS Error on loading */
    console.log("Phazor.JS Load Master version: " + pjsmasterversion); /* Phazor.JS Master Loadded */
    console.groupEnd("Phazor.js Load Master Failed"); //Master end
  } else {
    console.group("Phazor.js Load Master Work"); //Master start
    console.log("Phazor.JS loaded! Version: " + pjsversion); /* Phazor.JS Loadded */
    console.info("Phazor.JS " + pjsversion + " use cookie 'phazor.js' for normal work!"); /* Phazor.JS Cookie */
    console.log("Phazor.JS Load Master version: " + pjsmasterversion); /* Phazor.JS Master Loadded */
    function CPhazorTable(name, value) {
    this.name = name;
    this.value = value;
    }

    var tablephazorv = new CPhazorTable("Version", pjsversion);
    var tablephazormaster = new CPhazorTable("Master Version", pjsmasterversion);
    

    console.table([tablephazormaster, tablephazorv]);
    console.groupEnd("Phazor.js Load Master Work"); //Master end
  }
})();
let pjs = function(selector) { /* Phazor.JS selector */
  if(selector === "") {
		let elm = document.createElement("div")
		document.body.appendChild(elm)
      return pjs.parse([elm]);
  } else {
      return pjs.parse(document.querySelectorAll(selector));
  }
};

pjs.info = function() { /* Phazor.JS info */
  return pjsinfo
};
pjs.version = function() { /* Phazor.JS version */
  return pjsversion
};

pjs.parse = function(elements) { /* Phazor.JS parse */
  let modified = [];

  elements.forEach((element) => {
    modified.push(pjs.parseElement(element));
  });
  modified.src = function(data) {
    modified.forEach((element) => {
      element.src(data); /* Phazor.JS src */
    });
  };
  modified.href = function(data) {
    modified.forEach((element) => {
      element.href(data); /* Phazor.JS href */
    });
  };
  modified.html = function(data) {
    modified.forEach((element) => {
      element.html(data); /* Phazor.JS html */
    });
  };

  modified.click = function(data) {
    modified.forEach((element) => {
      element.click(data); /* Phazor.JS click */
    });
  };

	modified.add = function(element) {
		this.dom.appendChild(element.dom); /* Phazor.JS add */
	}

  modified.setcss = function(data) {
    modified.forEach((element) => {
      element.setcss(data); /* Phazor.JS setcss */
    });
  };

  modified.css = function(data) {
    modified.forEach((element) => {
      element.css(data); /* Phazor.JS css */
    });
  };

  modified.fix = function(w, h) {
      modified.forEach((element) => {
        element.fix(w, h); /* Phazor.JS fix */
    })
  }

  modified.fixW = function(w) {
      modified.forEach((element) => {
        element.fixW(w); /* Phazor.JS fixW */
    })
  }

  modified.fixH = function(h) {
      modified.forEach((element) => {
        element.fixH(h); /* Phazor.JS fixH */
    })
  }

  modified.fix = function(w, h) {
      modified.forEach((element) => {
        element.fix(w, h); /* Phazor.JS fix */
    })
  }

  modified.fixSW = function(w) {
      modified.forEach((element) => {
        element.fixSW(w); /* Phazor.JS fixSW */
    })
  }

  modified.fixSH = function(h) {
      modified.forEach((element) => {
        element.fixSH(h); /* Phazor.JS fixSH */
    })
  }

  modified.set = function(x, y) {
      modified.forEach((element) => {
        element.set(x, y); /* Phazor.JS set */
    })
  }

  modified.setX = function(x) {
      modified.forEach((element) => {
        element.setX(x); /* Phazor.JS setX */
    })
  }

  modified.setY = function(y) {
      modified.forEach((element) => {
        element.setY(y); /* Phazor.JS setY */
    })
  }

  modified.move = function(x, y) {
      modified.forEach((element) => {
        element.move(x, y); /* Phazor.JS move */
    })
  }

  modified.moveX = function(x) {
      modified.forEach((element) => {
        element.move(x); /* Phazor.JS moveX */
    })
  }

  modified.moveY = function(y) {
      modified.forEach((element) => {
        element.moveY(y); /* Phazor.JS moveY */
    })
  }

  if (modified.length === 1) {
    return modified[0];
  } else {
    return modified;
  }
};
pjs.parseElement = function(element) {
  let modified = {};
  modified.dom = element;
  modified.click = function(callback) {
    this.dom.addEventListener("click", callback); /* Phazor.JS click */
    return this;
  };
  modified.html = function(data) { /* Phazor.JS html */
    this.dom.innerHTML = data;
    return this;
  };
  modified.src = function(data) { /* Phazor.JS src */
    this.dom.src = data;
    return this;
  };
  modified.href = function(data) { /* Phazor.JS href */
    this.dom.href = data;
    return this;
  };
  modified.setcss = function(data) { /* Phazor.JS setcss */
    this.dom.style = data;
    return this;
  };
  modified.getcss = function(name) { /* Phazor.JS getcss */
      return this.dom.style.getPropertyValue(name)
  }
  modified.css = function(name, value) { /* Phazor.JS css */
    this.dom.style.setProperty(name, value);
    return this;
  }
  modified.setX = function(viewport) { /* Phazor.JS setX */
    this.css("position", "absolute");
      this.css("left", viewport + "vw");
    return this;
  }
  modified.setY = function(viewport) { /* Phazor.JS setY */
    this.css("position", "absolute");
      this.css("top", viewport + "vw");
    return this;
  }
  modified.moveX = function(viewport) { /* Phazor.JS moveX */
    this.css("position", "absolute");
    let leftValue = this.getcss("left") == "" ? "0vw" : this.getcss("left");
    this.setX(parseInt(parseInt(leftValue.substring(0, leftValue.length - 2)) + parseInt(viewport)));
    return this;
  }
  modified.moveY = function(viewport) { /* Phazor.JS moveY */
    this.css("position", "absolute");
    let topValue = this.getcss("top") == "" ? "0vw" : this.getcss("top");
    this.setY(parseInt(parseInt(topValue.substring(0, topValue.length - 2)) + parseInt(viewport)));
    return this;
  }
  modified.fixW = function(viewport) { /* Phazor.JS fixW */
    this.css("position", "absolute");
      this.css("width", viewport + "vw");
    return this;
  }
  modified.fixH = function(viewport) { /* Phazor.JS fixH */
    this.css("position", "absolute");
      this.css("height", viewport + "vw");
    return this;
  }
   modified.fixSW = function(viewport) { /* Phazor.JS fixSW */
    this.css("position", "absolute");
    let widthValue = this.getcss("width") == "" ? "0vw" : this.getcss("width");
    this.fixW(parseInt(parseInt(widthValue.substring(0, widthValue.length - 2)) + parseInt(viewport)));
    return this;
  }
  modified.fixSH = function(viewport) { /* Phazor.JS fixSH */
    this.css("position", "absolute");
    let heightValue = this.getcss("height") == "" ? "0vw" : this.getcss("height");
    this.fixH(parseInt(parseInt(heightValue.substring(0, heightValue.length - 2)) + parseInt(viewport)));
    return this;
  }
  modified.fixS = function(w, h) { /* Phazor.JS fixS */
      this.fixSW(w);
    this.fixSH(h);
    return this;
  }
  modified.fix = function(w, h) { /* Phazor.JS fix */
      this.fixW(w);
    this.fixH(h);
    return this;
  }
  modified.move = function(x, y) { /* Phazor.JS move */
      this.moveX(x);
    this.moveY(y);
    return this;
  }
  modified.set = function(x, y) { /* Phazor.JS set */
      this.setX(x);
    this.setY(y);
    return this;
  }

  return modified;
};
pjs.alert = function(text) { /* Phazor.JS alert */
  window.alert(text);
};
pjs.prompt = function(text) { /* Phazor.JS promt */
  return window.prompt(text);
};
pjs.get = function(url, callback) { /* Phazor.JS get */
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function() {
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
      return callback(xmlHttp.responseText);
    }
  }
  xmlHttp.open("GET", url, true);
  xmlHttp.send(null);
};

pjs.post = function(url, params, callback) { /* Phazor.JS post */
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open('POST', url, true);

  xmlHttp.onreadystatechange = function() {
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
      return callback(xmlHttp.responseText);
    }
  }
  xmlHttp.send(params);
};

pjs.refresh = function() { /* Phazor.JS refresh */
  location.reload();
};

pjs.open = function(url) { /* Phazor.JS open */
  window.open(url);
};
pjs.replace = function(url) { /* Phazor.JS replace */
  location.replace(url);
};
pjs.random = function(min, max) { /* Phazor.JS random */
  return Math.floor(min + Math.random() * (max - min));
}
pjs.confirm = function(text) { /* Phazor.JS confirm */
  window.confirm(text);
};
pjs.setcookie = function(cookie, exdays, path) { /* Phazor.JS setcookie */
    // document.cookie = cookie + "path=" + path;
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cookie + ";" + expires + ";path=" + path;
};
pjs.getcookie = function(cName) { /* Phazor.JS getcookie */
  const name = cName + "=";
  const cDecoded = decodeURIComponent(document.cookie); //to be careful
  const cArr = cDecoded.split('; ');
  let res;
  cArr.forEach(val => {
    if (val.indexOf(name) === 0) res = val.substring(name.length);
  })
  return res
};
pjs.allcokies = function() { /* Phazor.JS getcookie */
  let cookies = document.cookie;
  return cookies
};
pjs.favicontext = function(text) { /* Phazor.JS text favicon */
  const canvas = document.createElement('canvas');
  canvas.height = 64;
  canvas.width = 64;
  const ctx = canvas.getContext('2d');
  ctx.font = '64px serif';
  ctx.fillText(text, 0, 64);

  const link = document.createElement('link');
  const oldLinks = document.querySelectorAll('link[rel="shortcut icon"]');
  oldLinks.forEach(e => e.parentNode.removeChild(e));
  link.id = 'dynamic-favicon';
  link.rel = 'shortcut icon';
  link.href = canvas.toDataURL();
  document.head.appendChild(link);
};
pjs.favicon = function(durl) { /* Phazor.JS favicon */
  const link = document.createElement('link');
  const oldLinks = document.querySelectorAll('link[rel="shortcut icon"]');
  oldLinks.forEach(e => e.parentNode.removeChild(e));
  link.id = 'dynamic-favicon';
  link.rel = 'shortcut icon';
  link.href = durl;
  document.head.appendChild(link);
};
pjs.noscript = function(dtext) { /* Phazor.JS noscript */
   var tag = document.createElement("noscript");
   var text = document.createTextNode(dtext);
   tag.appendChild(text);
};
pjs.clog = function(text) { /* Phazor.JS console log */
   console.log(text)
};
pjs.cwarn = function(text) { /* Phazor.JS console warn */
   console.warn(text)
};
pjs.cerror = function(text) { /* Phazor.JS console error */
   console.error(text)
};
pjs.terror = function(text) { /* Phazor.JS throw new Error */
   throw new Error(text);
};  
pjs.ctable = function(data) { /* Phazor.JS console table */
  console.table([data]);
};
pjs.cclear = function() { /* Phazor.JS console clear */
  console.clear();
};
pjs.cassert = function(error, data) { /* Phazor.JS console assert */
  console.assert(error, data)
};
pjs.sgroup = function(data) { /* Phazor.JS console start group */
  console.group(data);
};
pjs.egroup = function(data) { /* Phazor.JS console end group */
  console.groupEnd(data)
};
pjs.cstime = function() { /* Phazor.JS console time start */
  console.time()
};
pjs.cetime = function() { /* Phazor.JS console time end */
  console.timeEnd()
}

pjs.noscript("U browser dont support some script's!") //Phazor.js Default config
pjs.setcookie("phazor.js = Version:" + pjsversion + ", Loaded: True, Master Version: " + pjsmasterversion + ", Made by: PlurrYT, Used on " + window.location.hostname, "1", "/phazor") // Phazor.JS Cookie for Normal Work
setTimeout(() => pjs.clog("Phazor.JS Fully Loaded!"));// Phazor.js Fully Loaded Message
void(0);
