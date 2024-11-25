// Nested safe get get(obj, ['a', 'b'], default|optional)
function get(target, path, dfault) {
  var lookup = path.reduce(function(current, prop) {
    return current && current[prop];
  }, target);
  return typeof lookup !== 'undefined' ? lookup : dfault;
}

// IS MOBILE
function isMobile() {
  return window.innerWidth <= 675;
}

// IS TABLET
function isTablet() {
  return window.innerWidth > 675 && window.innerWidth <= 980;
}

function isSidebarHidden() {
  return window.innerWidth <= 980;
}

// EVENT LISTENER FOR CLASSES
function addEventListenerList(list, event, fn) {
  for (var i = 0, len = list.length; i < len; i++) {
    list[i].addEventListener(event, fn, false);
  }
}

// REMOVE EVENT LISTENER FOR CLASSES
function removeEventListenerList(list, event, fn) {
  for (var i = 0, len = list.length; i < len; i++) {
    list[i].removeEventListener(event, fn, false);
  }
}

// HAS CLASS
function hasClass(elem, className) {
  return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
}

// ADD CLASS
function addClass(elem, className) {
  if (!hasClass(elem, className)) {
    elem.className += ' ' + className;
  }
}

// REMOVE CLASS
function removeClass(elem, className) {
  var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, ' ') + ' ';
  if (hasClass(elem, className)) {
    while (newClass.indexOf(' ' + className + ' ') >= 0 ) {
      newClass = newClass.replace(' ' + className + ' ', ' ');
    }
    elem.className = newClass.replace(/^\s+|\s+$/g, '');
  }
}

// DEBOUNCER
function debounce(func, wait, immediate) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    }, wait);
    if (immediate && !timeout) func.apply(context, args);
  };
};

//CLOSEST
var getClosest = function (elem, selector) {

  var firstChar = selector.charAt(0);

  // Get closest match
  for ( ; elem && elem !== document; elem = elem.parentNode ) {

    // If selector is a class
    if ( firstChar === '.' ) {
      if ( elem.classList.contains( selector.substr(1) ) ) {
        return elem;
      }
    }

    // If selector is an ID
    if ( firstChar === '#' ) {
      if ( elem.id === selector.substr(1) ) {
        return elem;
      }
    }

    // If selector is a data attribute
    if ( firstChar === '[' ) {
      if ( elem.hasAttribute( selector.substr(1, selector.length - 2) ) ) {
        return elem;
      }
    }

    // If selector is a tag
    if ( elem.tagName.toLowerCase() === selector ) {
      return elem;
    }

  }

  return false;

};

// PARENTS
var getParents = function (elem, selector) {

  var parents = [];
  if ( selector ) {
    var firstChar = selector.charAt(0);
  }

  // Get matches
  for ( ; elem && elem !== document; elem = elem.parentNode ) {
    if ( selector ) {

      // If selector is a class
      if ( firstChar === '.' ) {
        if ( elem.classList.contains( selector.substr(1) ) ) {
          parents.push( elem );
        }
      }

      // If selector is an ID
      if ( firstChar === '#' ) {
        if ( elem.id === selector.substr(1) ) {
          parents.push( elem );
        }
      }

      // If selector is a data attribute
      if ( firstChar === '[' ) {
        if ( elem.hasAttribute( selector.substr(1, selector.length - 1) ) ) {
          parents.push( elem );
        }
      }

      // If selector is a tag
      if ( elem.tagName.toLowerCase() === selector ) {
        parents.push( elem );
      }

    } else {
      parents.push( elem );
    }

  }

  // Return parents if any exist
  if ( parents.length === 0 ) {
    return null;
  } else {
    return parents;
  }

};

function fetchJSONFile(path, callback) {
  var httpRequest = new XMLHttpRequest();
  httpRequest.onreadystatechange = function() {
    if (httpRequest.readyState === 4) {
      if (httpRequest.status === 200) {
        var data = JSON.parse(httpRequest.responseText);
        if (callback) callback(data);
      }
    }
  };
  httpRequest.open('GET', path);
  httpRequest.send();
};

// JSONP
function jsonp(url, callback) {
  var callbackName = 'jsonp_callback_' + Math.round(100000 * Math.random());
  window[callbackName] = function(data) {
    delete window[callbackName];
    document.body.removeChild(script);
    callback(data);
  };

  var script = document.createElement('script');
  script.src = url + (url.indexOf('?') >= 0 ? '&' : '?') + 'cb=' + callbackName;
  document.body.appendChild(script);
}

// Create cookie
function createCookie(name, value, days) {
  var expires;
  if (days) {
    var date = new Date();
    date.setTime(date.getTime()+(days*24*60*60*1000));
    expires = "; expires="+date.toGMTString();
  }
  else {
    expires = "";
  }
  document.cookie = name+"="+value+expires+"; path=/";
}

// Read cookie
function readCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
    var c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1,c.length);
    }
    if (c.indexOf(nameEQ) === 0) {
      return c.substring(nameEQ.length,c.length);
    }
  }
  return null;
}

// Erase cookie
function eraseCookie(name) {
  createCookie(name,"",-1);
}

// GET PARAMETER FROM URL STRING
function getParameterByName(name, url) {
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

/**
 * Compare if the calculated width and height
 * is above the expected one.
 *
 * @param container Container for selection image.
 * @param instance instance of cropping object.
 * @param originalImage Full dimension image.
 *
 * @return dimensions Object for expected dimensions.
 */
function compare( container, instance, originalImage ) {

  let options = instance.getOptions(),
    aspectRatio = ( d = (options.aspectRatio || '').split(/:/) )[0] / d[1],
    selection = instance.getSelection(), dimensions = {};

  dimensions.expectedWidth = Math.round(( selection.width / container.width ) * originalImage.prop('naturalWidth'));
  dimensions.expectedHeight = Math.round( parseFloat( aspectRatio ) * parseInt( dimensions.expectedWidth, 10 ) );

  return dimensions;

}
