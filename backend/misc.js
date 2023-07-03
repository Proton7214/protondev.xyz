document.onkeypress = function(event) {
    event = (event || window.event);
    if (event.keyCode == 123) {
      return false;
    }
  }
  document.onmousedown = function(event) {
    event = (event || window.event);
    if (event.keyCode == 123) {
      return false;
    }
  }
  document.onkeydown = function(event) {
    event = (event || window.event);
    if (event.keyCode == 123) {
      return false;
    }
  }

  var message = "Sorry, right-click has been disabled";

  function clickIE() {
    if (document.all) {
      (message);
      return false;
    }
  }

  function clickNS(e) {
    if (document.layers || (document.getElementById && !document.all)) {
      if (e.which == 2 || e.which == 3) {
        (message);
        return false;
      }
    }
  }
  if (document.layers) {
    document.captureEvents(Event.MOUSEDOWN);
    document.onmousedown = clickNS;
  } else {
    document.onmouseup = clickNS;
    document.oncontextmenu = clickIE;
  }
  document.oncontextmenu = new Function("return false")

  function disableCtrlKeyCombination(e) {

    var forbiddenKeys = new Array('a', 'n', 'c', 'x', 'v', 'j', 'u', 'w', 'i');
    var key;
    var isCtrl;
    if (window.event) {
      key = window.event.keyCode;
      if (window.event.ctrlKey)
        isCtrl = true;
      else
        isCtrl = false;
    } else {
      key = e.which;
      if (e.ctrlKey)
        isCtrl = true;
      else
        isCtrl = false;
    }
    if (isCtrl) {
      for (i = 0; i < forbiddenKeys.length; i++) {
        if (forbiddenKeys[i].toLowerCase() == String.fromCharCode(key).toLowerCase()) {
          return true;
        }
      }
    }
    return true;
  }

  $(window).on('keydown', function(event) {
    if (event.keyCode == 123) {
      return false;
    } else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) {
      return false;
    } else if (event.ctrlKey && event.keyCode == 73) {
      return false;
    }
  });
  $(document).on("contextmenu", function(e) {
    e.preventDefault();
  });

  $(window).on('keydown', function(event) {
    if (event.keyCode == 123) {
      return false;
    } else if (event.ctrlKey && event.shiftKey && event.keyCode == 74) {
      return false;
    } else if (event.ctrlKey && event.keyCode == 74) {
      return false;
    }
  });
  $(document).on("contextmenu", function(e) {
    e.preventDefault();
  });
  $(window).on('keydown', function(event) {
    if (event.keyCode == 123) {
      return false;
    } else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) {
      return false;
    } else if (event.ctrlKey && event.keyCode == 73) {
      return false;
    }
  });
  $(document).on("contextmenu", function(e) {
    e.preventDefault();
  });

  $(window).on('keydown', function(event) {
    if (event.keyCode == 123) {
      return false;
    } else if (event.ctrlKey && event.keyCode == 70) {
      return false;
    } else if (event.ctrlKey && event.keyCode == 70) {
      return false;
    }
  });
  $(document).on("contextmenu", function(e) {
    e.preventDefault();
  });
  $(window).on('keydown', function(event) {
    if (event.keyCode == 123) {
      return false;
    } else if (event.keyCode == 122) {
      return false;
    } else if (event.keyCode == 122) {
      return false;
    }
  });
  $(document).on("contextmenu", function(e) {
    e.preventDefault();
  });
  
  
  //no ctrl + u
  document.onkeydown = function(e) {
  if (e.ctrlKey && 
    (e.keyCode === 67 || 
     e.keyCode === 86 || 
     e.keyCode === 85 || 
     e.keyCode === 117)) {
    //what it does
    return false;
  } else {
    return true;
  }
};