'use strict';var _typeof=typeof Symbol==='function'&&typeof Symbol.iterator==='symbol'?function(obj){return typeof obj}:function(obj){return obj&&typeof Symbol==='function'&&obj.constructor===Symbol&&obj!==Symbol.prototype?'symbol':typeof obj};/******/(function(modules){// webpackBootstrap
/******/// The module cache
/******/var installedModules={};/******//******/// The require function
/******/function __webpack_require__(moduleId){/******//******/// Check if module is in cache
/******/if(installedModules[moduleId]){/******/return installedModules[moduleId].exports;/******/}/******/// Create a new module (and put it into the cache)
/******/var module=installedModules[moduleId]={/******/i:moduleId,/******/l:false,/******/exports:{}/******/};/******//******/// Execute the module function
/******/modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);/******//******/// Flag the module as loaded
/******/module.l=true;/******//******/// Return the exports of the module
/******/return module.exports;/******/}/******//******//******/// expose the modules object (__webpack_modules__)
/******/__webpack_require__.m=modules;/******//******/// expose the module cache
/******/__webpack_require__.c=installedModules;/******//******/// define getter function for harmony exports
/******/__webpack_require__.d=function(exports,name,getter){/******/if(!__webpack_require__.o(exports,name)){/******/Object.defineProperty(exports,name,{enumerable:true,get:getter});/******/}/******/};/******//******/// define __esModule on exports
/******/__webpack_require__.r=function(exports){/******/if(typeof Symbol!=='undefined'&&Symbol.toStringTag){/******/Object.defineProperty(exports,Symbol.toStringTag,{value:'Module'});/******/}/******/Object.defineProperty(exports,'__esModule',{value:true});/******/};/******//******/// create a fake namespace object
/******/// mode & 1: value is a module id, require it
/******/// mode & 2: merge all properties of value into the ns
/******/// mode & 4: return value when already ns object
/******/// mode & 8|1: behave like require
/******/__webpack_require__.t=function(value,mode){/******/if(mode&1)value=__webpack_require__(value);/******/if(mode&8)return value;/******/if(mode&4&&(typeof value==='undefined'?'undefined':_typeof(value))==='object'&&value&&value.__esModule)return value;/******/var ns=Object.create(null);/******/__webpack_require__.r(ns);/******/Object.defineProperty(ns,'default',{enumerable:true,value:value});/******/if(mode&2&&typeof value!='string')for(var key in value){__webpack_require__.d(ns,key,function(key){return value[key]}.bind(null,key))}/******/return ns;/******/};/******//******/// getDefaultExport function for compatibility with non-harmony modules
/******/__webpack_require__.n=function(module){/******/var getter=module&&module.__esModule?/******/function getDefault(){return module['default']}:/******/function getModuleExports(){return module};/******/__webpack_require__.d(getter,'a',getter);/******/return getter;/******/};/******//******/// Object.prototype.hasOwnProperty.call
/******/__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)};/******//******/// __webpack_public_path__
/******/__webpack_require__.p='';/******//******//******/// Load entry module and return exports
/******/return __webpack_require__(__webpack_require__.s='./dev/js/building/script.js');/******/})(/************************************************************************//******/{/***/'./dev/js/building/modules/helpers.js':/*!********************************************!*\
  !*** ./dev/js/building/modules/helpers.js ***!
  \********************************************//*! exports provided: fadeIn, fadeOut, scrollTo, visChecker, resizeWatcher, elemVisCheck, qs, qsAll *//***/function devJsBuildingModulesHelpersJs(module,__webpack_exports__,__webpack_require__){'use strict';eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeIn", function() { return fadeIn; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeOut", function() { return fadeOut; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scrollTo", function() { return scrollTo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "visChecker", function() { return visChecker; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resizeWatcher", function() { return resizeWatcher; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elemVisCheck", function() { return elemVisCheck; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "qs", function() { return qs; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "qsAll", function() { return qsAll; });\nfunction qs(query) {\n  var root = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;\n  return root.querySelector(query);\n}\n\nfunction qsAll(query) {\n  var root = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;\n  return root.querySelectorAll(query);\n}\n\nfunction fadeIn(elem, ms, cb) {\n  var d = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : \'block\';\n  if (!elem) return;\n  elem.style.opacity = 0;\n  elem.style.display = d;\n\n  if (ms) {\n    var opacity = 0;\n    var timer = setInterval(function () {\n      opacity += 50 / ms;\n\n      if (opacity >= 1) {\n        clearInterval(timer);\n        opacity = 1;\n        if (cb) cb();\n      }\n\n      elem.style.opacity = opacity;\n    }, 50);\n  } else {\n    elem.style.opacity = 1;\n    if (cb) cb();\n  }\n}\n\nfunction fadeOut(elem, ms, cb) {\n  if (!elem) return;\n  elem.style.opacity = 1;\n\n  if (ms) {\n    var opacity = 1;\n    var timer = setInterval(function () {\n      opacity -= 50 / ms;\n\n      if (opacity <= 0) {\n        clearInterval(timer);\n        opacity = 0;\n        elem.style.display = \'none\';\n        if (cb) cb();\n      }\n\n      elem.style.opacity = opacity;\n    }, 50);\n  } else {\n    elem.style.opacity = 0;\n    elem.style.display = \'none\';\n    if (cb) cb();\n  }\n}\n\nfunction scrollTo(to, duration) {\n  if (duration <= 0) return;\n  var element = document.documentElement;\n  var difference = to - element.scrollTop;\n  var perTick = difference / duration * 10;\n  setTimeout(function () {\n    element.scrollTop += perTick;\n    window.animation.scrollTo(to, duration - 10);\n  }, 10);\n}\n\nfunction visChecker(el) {\n  var rect = el.getBoundingClientRect();\n  var wHeight = window.innerHeight || document.documentElement.clientHeight;\n  return rect.top <= wHeight * 0.65;\n}\n\nfunction resizeWatcher() {\n  var tableSel = document.querySelectorAll(\'table\');\n  var scrollArray = [];\n\n  if (tableSel.length) {\n    tableSel.forEach(function (item, i) {\n      var orgHtml = item.outerHTML;\n      item.outerHTML = "<div class=\'table-scroller".concat(i, "\'>").concat(orgHtml, "</div>");\n      var ps = new PerfectScrollbar(".table-scroller".concat(i), {\n        wheelPropagation: true\n      });\n      scrollArray.push(ps);\n    });\n    window.addEventListener(\'resize\', function () {\n      if (scrollArray.length) {\n        scrollArray.forEach(function (item) {\n          item.update();\n        });\n      }\n    });\n  }\n}\n\nfunction elemVisCheck() {\n  window.addEventListener(\'scroll\', function () {\n    qsAll(\'.h-anim\').forEach(function (elem) {\n      if (visChecker(elem)) elem.setAttribute(\'visible\', true);\n    });\n  });\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9kZXYvanMvYnVpbGRpbmcvbW9kdWxlcy9oZWxwZXJzLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2J1aWxkaW5nL21vZHVsZXMvaGVscGVycy5qcz9hNGYzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIHFzKHF1ZXJ5LCByb290ID0gZG9jdW1lbnQpIHtcbiAgcmV0dXJuIHJvb3QucXVlcnlTZWxlY3RvcihxdWVyeSk7XG59XG5cbmZ1bmN0aW9uIHFzQWxsKHF1ZXJ5LCByb290ID0gZG9jdW1lbnQpIHtcbiAgcmV0dXJuIHJvb3QucXVlcnlTZWxlY3RvckFsbChxdWVyeSk7XG59XG5cbmZ1bmN0aW9uIGZhZGVJbihlbGVtLCBtcywgY2IsIGQgPSAnYmxvY2snKSB7XG4gIGlmICghZWxlbSkgcmV0dXJuO1xuXG4gIGVsZW0uc3R5bGUub3BhY2l0eSA9IDA7XG4gIGVsZW0uc3R5bGUuZGlzcGxheSA9IGQ7XG5cbiAgaWYgKG1zKSB7XG4gICAgbGV0IG9wYWNpdHkgPSAwO1xuICAgIGNvbnN0IHRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgb3BhY2l0eSArPSA1MCAvIG1zO1xuICAgICAgaWYgKG9wYWNpdHkgPj0gMSkge1xuICAgICAgICBjbGVhckludGVydmFsKHRpbWVyKTtcbiAgICAgICAgb3BhY2l0eSA9IDE7XG4gICAgICAgIGlmIChjYikgY2IoKVxuICAgICAgfVxuICAgICAgZWxlbS5zdHlsZS5vcGFjaXR5ID0gb3BhY2l0eTtcbiAgICB9LCA1MCk7XG4gIH0gZWxzZSB7XG4gICAgZWxlbS5zdHlsZS5vcGFjaXR5ID0gMTtcbiAgICBpZiAoY2IpIGNiKCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZmFkZU91dChlbGVtLCBtcywgY2IpIHtcbiAgaWYgKCFlbGVtKSByZXR1cm47XG5cbiAgZWxlbS5zdHlsZS5vcGFjaXR5ID0gMTtcblxuICBpZiAobXMpIHtcbiAgICBsZXQgb3BhY2l0eSA9IDE7XG4gICAgY29uc3QgdGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBvcGFjaXR5IC09IDUwIC8gbXM7XG4gICAgICBpZiAob3BhY2l0eSA8PSAwKSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGltZXIpO1xuICAgICAgICBvcGFjaXR5ID0gMDtcbiAgICAgICAgZWxlbS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBpZiAoY2IpIGNiKCk7XG4gICAgICB9XG4gICAgICBlbGVtLnN0eWxlLm9wYWNpdHkgPSBvcGFjaXR5O1xuICAgIH0sIDUwKTtcbiAgfSBlbHNlIHtcbiAgICBlbGVtLnN0eWxlLm9wYWNpdHkgPSAwO1xuICAgIGVsZW0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBpZiAoY2IpIGNiKCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2Nyb2xsVG8odG8sIGR1cmF0aW9uKSB7XG4gIGlmIChkdXJhdGlvbiA8PSAwKSByZXR1cm47XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gIGNvbnN0IGRpZmZlcmVuY2UgPSB0byAtIGVsZW1lbnQuc2Nyb2xsVG9wO1xuICBjb25zdCBwZXJUaWNrID0gZGlmZmVyZW5jZSAvIGR1cmF0aW9uICogMTA7XG5cbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgZWxlbWVudC5zY3JvbGxUb3AgKz0gcGVyVGljaztcbiAgICB3aW5kb3cuYW5pbWF0aW9uLnNjcm9sbFRvKHRvLCBkdXJhdGlvbiAtIDEwKTtcbiAgfSwgMTApO1xufVxuXG5mdW5jdGlvbiB2aXNDaGVja2VyKGVsKSB7XG4gIGNvbnN0IHJlY3QgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgY29uc3Qgd0hlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuICByZXR1cm4gKFxuICAgIHJlY3QudG9wIDw9IHdIZWlnaHQgKiAwLjY1XG4gICk7XG59XG5cbmZ1bmN0aW9uIHJlc2l6ZVdhdGNoZXIoKSB7XG4gIGNvbnN0IHRhYmxlU2VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgndGFibGUnKTtcbiAgY29uc3Qgc2Nyb2xsQXJyYXkgPSBbXTtcbiAgaWYgKHRhYmxlU2VsLmxlbmd0aCkge1xuICAgIHRhYmxlU2VsLmZvckVhY2goKGl0ZW0sIGkpID0+IHtcbiAgICAgIGNvbnN0IG9yZ0h0bWwgPSBpdGVtLm91dGVySFRNTDtcblxuICAgICAgaXRlbS5vdXRlckhUTUwgPSBgPGRpdiBjbGFzcz0ndGFibGUtc2Nyb2xsZXIke2l9Jz4ke29yZ0h0bWx9PC9kaXY+YDtcbiAgICAgIGNvbnN0IHBzID0gbmV3IFBlcmZlY3RTY3JvbGxiYXIoYC50YWJsZS1zY3JvbGxlciR7aX1gLCB7XG4gICAgICAgIHdoZWVsUHJvcGFnYXRpb246IHRydWUsXG4gICAgICB9KTtcblxuICAgICAgc2Nyb2xsQXJyYXkucHVzaChwcyk7XG4gICAgfSk7XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xuICAgICAgaWYgKHNjcm9sbEFycmF5Lmxlbmd0aCkge1xuICAgICAgICBzY3JvbGxBcnJheS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgaXRlbS51cGRhdGUoKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZWxlbVZpc0NoZWNrKCkge1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKCkgPT4ge1xuICAgIHFzQWxsKCcuaC1hbmltJykuZm9yRWFjaCgoZWxlbSkgPT4ge1xuICAgICAgaWYgKHZpc0NoZWNrZXIoZWxlbSkpIGVsZW0uc2V0QXR0cmlidXRlKCd2aXNpYmxlJywgdHJ1ZSk7XG4gICAgfSk7XG4gIH0pO1xufVxuXG5leHBvcnQge1xuICBmYWRlSW4sXG4gIGZhZGVPdXQsXG4gIHNjcm9sbFRvLFxuICB2aXNDaGVja2VyLFxuICByZXNpemVXYXRjaGVyLFxuICBlbGVtVmlzQ2hlY2ssXG4gIHFzLFxuICBxc0FsbCxcbn07XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./dev/js/building/modules/helpers.js\n');/***/},/***/'./dev/js/building/modules/index.js':/*!******************************************!*\
  !*** ./dev/js/building/modules/index.js ***!
  \******************************************//*! exports provided: default *//***/function devJsBuildingModulesIndexJs(module,__webpack_exports__,__webpack_require__){'use strict';eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ "./dev/js/building/modules/helpers.js");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar Index =\n/*#__PURE__*/\nfunction () {\n  function Index(_ref) {\n    var logoClass = _ref.logoClass,\n        contactsTabClass = _ref.contactsTabClass,\n        contactsBlockClass = _ref.contactsBlockClass;\n\n    _classCallCheck(this, Index);\n\n    this.logoClass = logoClass;\n    this.contactsTabClass = contactsTabClass;\n    this.contactsBlockClass = contactsBlockClass;\n    if (Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["qs"])(logoClass)) this.logoAnimation();\n    if (Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["qs"])(contactsTabClass)) this.tabsInit();\n  }\n\n  _createClass(Index, [{\n    key: "logoAnimation",\n    value: function logoAnimation() {\n      var endPoint = 180;\n      var logoEl = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["qs"])(this.logoClass);\n      var bannerHeight = parseInt(getComputedStyle(Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["qs"])(\'.js-banner\')).height, 10);\n      var wayStart = bannerHeight / 2;\n      window.addEventListener(\'scroll\', function () {\n        var scrollPerc = (bannerHeight - endPoint - window.scrollY) / bannerHeight;\n        var nTop = bannerHeight / 2 - (wayStart - endPoint) * (1 - scrollPerc);\n\n        if (scrollPerc > 0 && nTop > 180) {\n          logoEl.style.top = "".concat(nTop, "px");\n          logoEl.classList.remove(\'dark\');\n        } else {\n          logoEl.classList.add(\'dark\');\n        }\n      });\n      window.addEventListener(\'resize\', function () {\n        bannerHeight = parseInt(getComputedStyle(Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["qs"])(\'.js-banner\')).height, 10);\n      });\n    }\n  }, {\n    key: "tabsInit",\n    value: function tabsInit() {}\n  }]);\n\n  return Index;\n}();\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9kZXYvanMvYnVpbGRpbmcvbW9kdWxlcy9pbmRleC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Rldi9qcy9idWlsZGluZy9tb2R1bGVzL2luZGV4LmpzPzdkNTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcXMgfSBmcm9tICcuL2hlbHBlcnMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHtcbiAgICAgIGxvZ29DbGFzcyxcbiAgICAgIGNvbnRhY3RzVGFiQ2xhc3MsXG4gICAgICBjb250YWN0c0Jsb2NrQ2xhc3MsXG4gICAgfSxcbiAgKSB7XG4gICAgdGhpcy5sb2dvQ2xhc3MgPSBsb2dvQ2xhc3M7XG4gICAgdGhpcy5jb250YWN0c1RhYkNsYXNzID0gY29udGFjdHNUYWJDbGFzcztcbiAgICB0aGlzLmNvbnRhY3RzQmxvY2tDbGFzcyA9IGNvbnRhY3RzQmxvY2tDbGFzcztcblxuICAgIGlmIChxcyhsb2dvQ2xhc3MpKSB0aGlzLmxvZ29BbmltYXRpb24oKTtcbiAgICBpZiAocXMoY29udGFjdHNUYWJDbGFzcykpIHRoaXMudGFic0luaXQoKTtcbiAgfVxuXG4gIGxvZ29BbmltYXRpb24oKSB7XG4gICAgY29uc3QgZW5kUG9pbnQgPSAxODA7XG4gICAgY29uc3QgbG9nb0VsID0gcXModGhpcy5sb2dvQ2xhc3MpO1xuICAgIGxldCBiYW5uZXJIZWlnaHQgPSBwYXJzZUludChnZXRDb21wdXRlZFN0eWxlKHFzKCcuanMtYmFubmVyJykpLmhlaWdodCwgMTApO1xuICAgIGNvbnN0IHdheVN0YXJ0ID0gYmFubmVySGVpZ2h0IC8gMjtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKCkgPT4ge1xuICAgICAgY29uc3Qgc2Nyb2xsUGVyYyA9IChiYW5uZXJIZWlnaHQgLSBlbmRQb2ludCAtIHdpbmRvdy5zY3JvbGxZKSAvIGJhbm5lckhlaWdodDtcbiAgICAgIGNvbnN0IG5Ub3AgPSBiYW5uZXJIZWlnaHQgLyAyIC0gKHdheVN0YXJ0IC0gZW5kUG9pbnQpICogKDEgLSBzY3JvbGxQZXJjKTtcbiAgICAgIGlmIChzY3JvbGxQZXJjID4gMCAmJiBuVG9wID4gMTgwKSB7XG4gICAgICAgIGxvZ29FbC5zdHlsZS50b3AgPSBgJHtuVG9wfXB4YDtcbiAgICAgICAgbG9nb0VsLmNsYXNzTGlzdC5yZW1vdmUoJ2RhcmsnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxvZ29FbC5jbGFzc0xpc3QuYWRkKCdkYXJrJyk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xuICAgICAgYmFubmVySGVpZ2h0ID0gcGFyc2VJbnQoZ2V0Q29tcHV0ZWRTdHlsZShxcygnLmpzLWJhbm5lcicpKS5oZWlnaHQsIDEwKTtcbiAgICB9KVxuICB9XG5cbiAgdGFic0luaXQoKSB7XG5cbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7OztBQUNBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBOzs7Ozs7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./dev/js/building/modules/index.js\n');/***/},/***/'./dev/js/building/script.js':/*!***********************************!*\
  !*** ./dev/js/building/script.js ***!
  \***********************************//*! no exports provided *//***/function devJsBuildingScriptJs(module,__webpack_exports__,__webpack_require__){'use strict';eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/helpers */ "./dev/js/building/modules/helpers.js");\n/* harmony import */ var _modules_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/index */ "./dev/js/building/modules/index.js");\n\n // import Burger from \'./modules/burger\';\n// import Contacts from \'./modules/contacts\';\n// import Forms from \'./modules/forms\';\n// import Share from \'./modules/share\';\n// import Sticky from \'./modules/sticky\';\n// import Realized from \'./modules/realized\';\n// import Filter from \'./modules/filter\';\n// import Slider from \'./modules/slider\';\n// import Partners from \'./modules/partners\';\n\ndocument.addEventListener(\'DOMContentLoaded\', function () {\n  var headerEl = Object(_modules_helpers__WEBPACK_IMPORTED_MODULE_0__["qs"])(\'.js-header\');\n  window.addEventListener(\'scroll\', function () {\n    if (window.scrollY > screen.height / 3) {\n      headerEl.classList.add(\'fixed\');\n    } else {\n      headerEl.classList.remove(\'fixed\');\n    }\n  });\n  if (Object(_modules_helpers__WEBPACK_IMPORTED_MODULE_0__["qsAll"])(\'.h-anim\').length) Object(_modules_helpers__WEBPACK_IMPORTED_MODULE_0__["elemVisCheck"])(); // const burger = new Burger();\n\n  if (document.body.classList.contains(\'index\')) {\n    var index = new _modules_index__WEBPACK_IMPORTED_MODULE_1__["default"]({\n      logoClass: \'.js-logo\',\n      contactsTabClass: \'.js-contacts-tab\',\n      contactsBlockClass: \'.js-contacts-block\'\n    });\n  } // if (qs(\'.js-realized-elem\')) {\n  //   const realized = new Realized(\'.js-realized-elem\');\n  // }\n  // if (qs(\'.js-contacts-map\')) {\n  //   const contacts = new Contacts(\'map\');\n  //   contacts.init();\n  // }\n  // if (qs(\'.js-burger\')) {\n  //   const burger = new Burger(qs(\'.js-burger\'));\n  // }\n  // if (qsAll(\'form\').length) Forms.init();\n  // if (qsAll(\'.js-share\').length) {\n  //   qsAll(\'.js-share\').forEach((shBtn) => {\n  //     shBtn.addEventListener(\'click\', (e) => {\n  //       e.preventDefault();\n  //     });\n  //   });\n  //   window.share = new Share();\n  // }\n  // if (qsAll(\'[data-fancybox]\')) {\n  //   $(\'[data-fancybox]\').fancybox({ \n  //     transitionEffect: \'slide\',\n  //     i18n: {\n  //       en: {\n  //         CLOSE: \'\u0417\u0430\u043A\u0440\u044B\u0442\u044C\',\n  //         PREV: \'\u041F\u0440\u0435\u0434\u044B\u0434\u0443\u0434\u0449\u0438\u0439\',\n  //         NEXT: \'\u0421\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0439\',\n  //       },\n  //     },\n  //   });\n  // }\n  // if (qsAll(\'.js-typecar\')) {\n  //   const typeCar = new Swiper(\'.js-typecar\', {\n  //     speed: 800,\n  //     slidesPerView: 1,\n  //     spaceBetween: 10,\n  //     loop: true,\n  //     autoHeight: true,\n  //     navigation: {\n  //       nextEl: \'.js-typecar .swiper-button-next\',\n  //       prevEl: \'.js-typecar .swiper-button-prev\',\n  //     },\n  //   });\n  // }\n  // if (qs(\'.js-sticky\')) {\n  //   const sticky = new Sticky();\n  // }\n  // if (qs(\'.js-filter\')) {\n  //   const filter = new Filter(\'.js-filter\', \'.js-filter-open\');\n  // }\n  // if (qs(\'.js-slider\')) {\n  //   const slider = new Slider(\'.js-slider\', \'.js-slider-thumbs\');\n  // }\n  // if (qs(\'.js-partners-carousel\')) {\n  //   const partners = new Partners(\'.js-partners-carousel\', \'.js-partners-prev\', \'.js-partners-next\');\n  // }\n  // if (qs(\'.js-company-paper\')) {\n  //   qs(\'.js-company-paper\').addEventListener(\'click\', () => qs(\'.js-company-openpaper\').click());\n  // }\n\n\n  Object(_modules_helpers__WEBPACK_IMPORTED_MODULE_0__["resizeWatcher"])();\n  var eventScroll;\n\n  try {\n    eventScroll = new Event(\'scroll\');\n  } catch (e) {\n    eventScroll = document.createEvent(\'Event\');\n    eventScroll.initEvent(\'scroll\', false, false);\n  }\n\n  window.dispatchEvent(eventScroll);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9kZXYvanMvYnVpbGRpbmcvc2NyaXB0LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2J1aWxkaW5nL3NjcmlwdC5qcz80ODlmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIHJlc2l6ZVdhdGNoZXIsIGVsZW1WaXNDaGVjaywgcXNBbGwsIHFzLFxufSBmcm9tICcuL21vZHVsZXMvaGVscGVycyc7XG5cbmltcG9ydCBJbmRleCBmcm9tICcuL21vZHVsZXMvaW5kZXgnO1xuLy8gaW1wb3J0IEJ1cmdlciBmcm9tICcuL21vZHVsZXMvYnVyZ2VyJztcbi8vIGltcG9ydCBDb250YWN0cyBmcm9tICcuL21vZHVsZXMvY29udGFjdHMnO1xuLy8gaW1wb3J0IEZvcm1zIGZyb20gJy4vbW9kdWxlcy9mb3Jtcyc7XG4vLyBpbXBvcnQgU2hhcmUgZnJvbSAnLi9tb2R1bGVzL3NoYXJlJztcbi8vIGltcG9ydCBTdGlja3kgZnJvbSAnLi9tb2R1bGVzL3N0aWNreSc7XG4vLyBpbXBvcnQgUmVhbGl6ZWQgZnJvbSAnLi9tb2R1bGVzL3JlYWxpemVkJztcbi8vIGltcG9ydCBGaWx0ZXIgZnJvbSAnLi9tb2R1bGVzL2ZpbHRlcic7XG4vLyBpbXBvcnQgU2xpZGVyIGZyb20gJy4vbW9kdWxlcy9zbGlkZXInO1xuLy8gaW1wb3J0IFBhcnRuZXJzIGZyb20gJy4vbW9kdWxlcy9wYXJ0bmVycyc7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG5cbiAgY29uc3QgaGVhZGVyRWwgPSBxcygnLmpzLWhlYWRlcicpO1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKCkgPT4ge1xuICAgIGlmICh3aW5kb3cuc2Nyb2xsWSA+IHNjcmVlbi5oZWlnaHQgLyAzKSB7XG4gICAgICBoZWFkZXJFbC5jbGFzc0xpc3QuYWRkKCdmaXhlZCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBoZWFkZXJFbC5jbGFzc0xpc3QucmVtb3ZlKCdmaXhlZCcpO1xuICAgIH1cbiAgfSk7XG5cbiAgaWYgKHFzQWxsKCcuaC1hbmltJykubGVuZ3RoKSBlbGVtVmlzQ2hlY2soKTtcblxuICAvLyBjb25zdCBidXJnZXIgPSBuZXcgQnVyZ2VyKCk7XG4gIGlmIChkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5jb250YWlucygnaW5kZXgnKSkge1xuICAgIGNvbnN0IGluZGV4ID0gbmV3IEluZGV4KFxuICAgICAge1xuICAgICAgICBsb2dvQ2xhc3M6ICcuanMtbG9nbycsXG4gICAgICAgIGNvbnRhY3RzVGFiQ2xhc3M6ICcuanMtY29udGFjdHMtdGFiJyxcbiAgICAgICAgY29udGFjdHNCbG9ja0NsYXNzOiAnLmpzLWNvbnRhY3RzLWJsb2NrJyxcbiAgICAgIH0sXG4gICAgKTtcbiAgfVxuXG4gIC8vIGlmIChxcygnLmpzLXJlYWxpemVkLWVsZW0nKSkge1xuICAvLyAgIGNvbnN0IHJlYWxpemVkID0gbmV3IFJlYWxpemVkKCcuanMtcmVhbGl6ZWQtZWxlbScpO1xuICAvLyB9XG5cbiAgLy8gaWYgKHFzKCcuanMtY29udGFjdHMtbWFwJykpIHtcbiAgLy8gICBjb25zdCBjb250YWN0cyA9IG5ldyBDb250YWN0cygnbWFwJyk7XG4gIC8vICAgY29udGFjdHMuaW5pdCgpO1xuICAvLyB9XG5cbiAgLy8gaWYgKHFzKCcuanMtYnVyZ2VyJykpIHtcbiAgLy8gICBjb25zdCBidXJnZXIgPSBuZXcgQnVyZ2VyKHFzKCcuanMtYnVyZ2VyJykpO1xuICAvLyB9XG5cbiAgLy8gaWYgKHFzQWxsKCdmb3JtJykubGVuZ3RoKSBGb3Jtcy5pbml0KCk7XG5cbiAgLy8gaWYgKHFzQWxsKCcuanMtc2hhcmUnKS5sZW5ndGgpIHtcbiAgLy8gICBxc0FsbCgnLmpzLXNoYXJlJykuZm9yRWFjaCgoc2hCdG4pID0+IHtcbiAgLy8gICAgIHNoQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgLy8gICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAvLyAgICAgfSk7XG4gIC8vICAgfSk7XG4gIC8vICAgd2luZG93LnNoYXJlID0gbmV3IFNoYXJlKCk7XG4gIC8vIH1cblxuICAvLyBpZiAocXNBbGwoJ1tkYXRhLWZhbmN5Ym94XScpKSB7XG4gIC8vICAgJCgnW2RhdGEtZmFuY3lib3hdJykuZmFuY3lib3goeyBcbiAgLy8gICAgIHRyYW5zaXRpb25FZmZlY3Q6ICdzbGlkZScsXG4gIC8vICAgICBpMThuOiB7XG4gIC8vICAgICAgIGVuOiB7XG4gIC8vICAgICAgICAgQ0xPU0U6ICfQl9Cw0LrRgNGL0YLRjCcsXG4gIC8vICAgICAgICAgUFJFVjogJ9Cf0YDQtdC00YvQtNGD0LTRidC40LknLFxuICAvLyAgICAgICAgIE5FWFQ6ICfQodC70LXQtNGD0Y7RidC40LknLFxuICAvLyAgICAgICB9LFxuICAvLyAgICAgfSxcbiAgLy8gICB9KTtcbiAgLy8gfVxuXG4gIC8vIGlmIChxc0FsbCgnLmpzLXR5cGVjYXInKSkge1xuICAvLyAgIGNvbnN0IHR5cGVDYXIgPSBuZXcgU3dpcGVyKCcuanMtdHlwZWNhcicsIHtcbiAgLy8gICAgIHNwZWVkOiA4MDAsXG4gIC8vICAgICBzbGlkZXNQZXJWaWV3OiAxLFxuICAvLyAgICAgc3BhY2VCZXR3ZWVuOiAxMCxcbiAgLy8gICAgIGxvb3A6IHRydWUsXG4gIC8vICAgICBhdXRvSGVpZ2h0OiB0cnVlLFxuICAvLyAgICAgbmF2aWdhdGlvbjoge1xuICAvLyAgICAgICBuZXh0RWw6ICcuanMtdHlwZWNhciAuc3dpcGVyLWJ1dHRvbi1uZXh0JyxcbiAgLy8gICAgICAgcHJldkVsOiAnLmpzLXR5cGVjYXIgLnN3aXBlci1idXR0b24tcHJldicsXG4gIC8vICAgICB9LFxuICAvLyAgIH0pO1xuICAvLyB9XG5cbiAgLy8gaWYgKHFzKCcuanMtc3RpY2t5JykpIHtcbiAgLy8gICBjb25zdCBzdGlja3kgPSBuZXcgU3RpY2t5KCk7XG4gIC8vIH1cblxuICAvLyBpZiAocXMoJy5qcy1maWx0ZXInKSkge1xuICAvLyAgIGNvbnN0IGZpbHRlciA9IG5ldyBGaWx0ZXIoJy5qcy1maWx0ZXInLCAnLmpzLWZpbHRlci1vcGVuJyk7XG4gIC8vIH1cblxuICAvLyBpZiAocXMoJy5qcy1zbGlkZXInKSkge1xuICAvLyAgIGNvbnN0IHNsaWRlciA9IG5ldyBTbGlkZXIoJy5qcy1zbGlkZXInLCAnLmpzLXNsaWRlci10aHVtYnMnKTtcbiAgLy8gfVxuXG4gIC8vIGlmIChxcygnLmpzLXBhcnRuZXJzLWNhcm91c2VsJykpIHtcbiAgLy8gICBjb25zdCBwYXJ0bmVycyA9IG5ldyBQYXJ0bmVycygnLmpzLXBhcnRuZXJzLWNhcm91c2VsJywgJy5qcy1wYXJ0bmVycy1wcmV2JywgJy5qcy1wYXJ0bmVycy1uZXh0Jyk7XG4gIC8vIH1cblxuICAvLyBpZiAocXMoJy5qcy1jb21wYW55LXBhcGVyJykpIHtcbiAgLy8gICBxcygnLmpzLWNvbXBhbnktcGFwZXInKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHFzKCcuanMtY29tcGFueS1vcGVucGFwZXInKS5jbGljaygpKTtcbiAgLy8gfVxuXG4gIHJlc2l6ZVdhdGNoZXIoKTtcbiAgbGV0IGV2ZW50U2Nyb2xsO1xuICB0cnkge1xuICAgIGV2ZW50U2Nyb2xsID0gbmV3IEV2ZW50KCdzY3JvbGwnKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGV2ZW50U2Nyb2xsID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0V2ZW50Jyk7XG4gICAgZXZlbnRTY3JvbGwuaW5pdEV2ZW50KCdzY3JvbGwnLCBmYWxzZSwgZmFsc2UpO1xuICB9XG4gIHdpbmRvdy5kaXNwYXRjaEV2ZW50KGV2ZW50U2Nyb2xsKTtcbn0pO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./dev/js/building/script.js\n');/***/}/******/});