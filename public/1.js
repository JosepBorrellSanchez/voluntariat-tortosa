webpackJsonp([1],{

/***/ 145:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(146);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(90)("cf799e34", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-060884a2\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Volunteer.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-060884a2\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Volunteer.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 146:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)(true);
// imports


// module
exports.push([module.i, "\n.component-fade-enter-active, .component-fade-leave-active {\n    -webkit-transition: opacity .3s ease;\n    transition: opacity .3s ease;\n}\n.component-fade-enter, .component-fade-leave-to\n    /* .component-fade-leave-active below version 2.1.8 */ {\n    opacity: 0;\n}\n.ul-list {\n    list-style-type: none;\n}\n", "", {"version":3,"sources":["/home/grey/CODE/greygonz/voluntariat-tortosa/resources/assets/js/voluntariat/components/resources/assets/js/voluntariat/components/Volunteer.vue"],"names":[],"mappings":";AA4EA;IACA,qCAAA;IAAA,6BAAA;CACA;AACA;;IAEA,WAAA;CACA;AACA;IACA,sBAAA;CACA","file":"Volunteer.vue","sourcesContent":["<template>\n   <v-app>\n       <!--<transition name=\"component-fade\" appear>-->\n       <v-container>\n           <v-layout>\n               <v-flex xs12>\n                   <v-alert class=\"ma-1\" type=\"warning\" :value=\"true\" v-if=\"!info.validat\">\n                     Aquest usuari no ha omplert el formulari.\n                   </v-alert>\n                   <v-card class=\"ma-1\">\n                       <v-card-title class=\"display-1 green lighten-1\">{{ volunteer.name }}</v-card-title>\n                       <v-layout row>\n                           <v-card-text>\n                               <ul class=\"ul-list\">\n                                   <li>Email: {{ volunteer.email }}</li>\n                               </ul>\n                           </v-card-text>\n                       </v-layout>\n                   </v-card>\n               </v-flex>\n           </v-layout>\n           <v-layout>\n               <v-flex xs12 lg6>\n                   <v-card class=\"ma-1\" v-if=\"info.validat\">\n                       <v-card-title>\n                           <h2>Info</h2>\n                       </v-card-title>\n                       <v-card-text>\n                           <ul class=\"ul-list\">\n                               <li>Nom: {{ volunteer.name }}</li>\n                               <li>Cognoms: {{ info.cognoms }}</li>\n                               <li>Correu: {{ volunteer.email }}</li>\n                               <li>DNI: {{ info.dni }}</li>\n                               <li>Tel: {{ info.telefon }}</li>\n                               <li>Poblacio: {{ info.poblacio }}</li>\n                               <li>Codi postal: {{ info.codi_postal }} </li>\n                               <li>Adreça: {{ info.adreca }}</li>\n                               <li>Data de naixement: {{ info.data_naixement }}</li>\n                               <li>Nacionalitat: {{ info.nacionaliat }}</li>\n                               <li>Llengües parlades: {{ info.llengues }}</li>\n                               <li>Disponibilitat: {{ info.disponibilitat_mensual }} - {{ info.disponibilitat_diaria }} - {{ info.disponibilitat_horaria }}</li>\n                               <li>Disponibilitat de vehicle: {{ info.disponibilitat_vehicle ? 'Si' : 'No'}}</li>\n                               <li>Franges d'edat preferents: {{ info.franges_edat_preferents }}</li>\n                               <li>Condició física: {{ info.condicio_fisica }}</li>\n                           </ul>\n                       </v-card-text>\n                   </v-card>\n               </v-flex>\n               <v-flex xs12 lg6>\n                   <v-card class=\"ma-1\">\n                       <v-card-title>\n                         <h2>Inscrit a:</h2>\n                       </v-card-title>\n                       <v-data-table\n                         :headers=\"headers\"\n                         :items=\"user_activities\"\n                         class=\"elevation-1\">\n                         <template slot=\"items\" slot-scope=\"props\">\n                           <tr @click=\"sendEmit('redirect', props.item.id)\">\n                             <td>{{ props.item.nom }}</td>\n                             <td class=\"text-xs-right\">\n                                 <v-btn icon :loading=\"loading\" @click.stop=\"sendEmit('delete', props.item)\">\n                                     <v-icon>clear</v-icon>\n                                 </v-btn>\n                             </td>\n                           </tr>\n                         </template>\n                       </v-data-table>\n                   </v-card>\n               </v-flex>\n           </v-layout>\n       </v-container>\n       <!--</transition>-->\n   </v-app>\n</template>\n\n<style>\n    .component-fade-enter-active, .component-fade-leave-active {\n        transition: opacity .3s ease;\n    }\n    .component-fade-enter, .component-fade-leave-to\n        /* .component-fade-leave-active below version 2.1.8 */ {\n        opacity: 0;\n    }\n    .ul-list {\n        list-style-type: none;\n    }\n</style>\n\n<script>\n\n  export default {\n    data () {\n      return {\n        show: false,\n        headers: [\n          { text: 'Nom', align: 'left', value: 'name' },\n        ]\n      }\n    },\n    props: [\n      'volunteer',\n      'info',\n      'user_activities',\n      'loading'\n    ],\n    methods: {\n      sendEmit(message, value) {\n        this.$emit(message, value)\n      }\n    }\n  }\n</script>"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      show: false,
      headers: [{ text: 'Nom', align: 'left', value: 'name' }]
    };
  },

  props: ['volunteer', 'info', 'user_activities', 'loading'],
  methods: {
    sendEmit: function sendEmit(message, value) {
      this.$emit(message, value);
    }
  }
});

/***/ }),

/***/ 148:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-app",
    [
      _c(
        "v-container",
        [
          _c(
            "v-layout",
            [
              _c(
                "v-flex",
                { attrs: { xs12: "" } },
                [
                  !_vm.info.validat
                    ? _c(
                        "v-alert",
                        {
                          staticClass: "ma-1",
                          attrs: { type: "warning", value: true }
                        },
                        [
                          _vm._v(
                            "\n                  Aquest usuari no ha omplert el formulari.\n                "
                          )
                        ]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _c(
                    "v-card",
                    { staticClass: "ma-1" },
                    [
                      _c(
                        "v-card-title",
                        { staticClass: "display-1 green lighten-1" },
                        [_vm._v(_vm._s(_vm.volunteer.name))]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-layout",
                        { attrs: { row: "" } },
                        [
                          _c("v-card-text", [
                            _c("ul", { staticClass: "ul-list" }, [
                              _c("li", [
                                _vm._v("Email: " + _vm._s(_vm.volunteer.email))
                              ])
                            ])
                          ])
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-layout",
            [
              _c(
                "v-flex",
                { attrs: { xs12: "", lg6: "" } },
                [
                  _vm.info.validat
                    ? _c(
                        "v-card",
                        { staticClass: "ma-1" },
                        [
                          _c("v-card-title", [_c("h2", [_vm._v("Info")])]),
                          _vm._v(" "),
                          _c("v-card-text", [
                            _c("ul", { staticClass: "ul-list" }, [
                              _c("li", [
                                _vm._v("Nom: " + _vm._s(_vm.volunteer.name))
                              ]),
                              _vm._v(" "),
                              _c("li", [
                                _vm._v("Cognoms: " + _vm._s(_vm.info.cognoms))
                              ]),
                              _vm._v(" "),
                              _c("li", [
                                _vm._v("Correu: " + _vm._s(_vm.volunteer.email))
                              ]),
                              _vm._v(" "),
                              _c("li", [
                                _vm._v("DNI: " + _vm._s(_vm.info.dni))
                              ]),
                              _vm._v(" "),
                              _c("li", [
                                _vm._v("Tel: " + _vm._s(_vm.info.telefon))
                              ]),
                              _vm._v(" "),
                              _c("li", [
                                _vm._v("Poblacio: " + _vm._s(_vm.info.poblacio))
                              ]),
                              _vm._v(" "),
                              _c("li", [
                                _vm._v(
                                  "Codi postal: " +
                                    _vm._s(_vm.info.codi_postal) +
                                    " "
                                )
                              ]),
                              _vm._v(" "),
                              _c("li", [
                                _vm._v("Adreça: " + _vm._s(_vm.info.adreca))
                              ]),
                              _vm._v(" "),
                              _c("li", [
                                _vm._v(
                                  "Data de naixement: " +
                                    _vm._s(_vm.info.data_naixement)
                                )
                              ]),
                              _vm._v(" "),
                              _c("li", [
                                _vm._v(
                                  "Nacionalitat: " +
                                    _vm._s(_vm.info.nacionaliat)
                                )
                              ]),
                              _vm._v(" "),
                              _c("li", [
                                _vm._v(
                                  "Llengües parlades: " +
                                    _vm._s(_vm.info.llengues)
                                )
                              ]),
                              _vm._v(" "),
                              _c("li", [
                                _vm._v(
                                  "Disponibilitat: " +
                                    _vm._s(_vm.info.disponibilitat_mensual) +
                                    " - " +
                                    _vm._s(_vm.info.disponibilitat_diaria) +
                                    " - " +
                                    _vm._s(_vm.info.disponibilitat_horaria)
                                )
                              ]),
                              _vm._v(" "),
                              _c("li", [
                                _vm._v(
                                  "Disponibilitat de vehicle: " +
                                    _vm._s(
                                      _vm.info.disponibilitat_vehicle
                                        ? "Si"
                                        : "No"
                                    )
                                )
                              ]),
                              _vm._v(" "),
                              _c("li", [
                                _vm._v(
                                  "Franges d'edat preferents: " +
                                    _vm._s(_vm.info.franges_edat_preferents)
                                )
                              ]),
                              _vm._v(" "),
                              _c("li", [
                                _vm._v(
                                  "Condició física: " +
                                    _vm._s(_vm.info.condicio_fisica)
                                )
                              ])
                            ])
                          ])
                        ],
                        1
                      )
                    : _vm._e()
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-flex",
                { attrs: { xs12: "", lg6: "" } },
                [
                  _c(
                    "v-card",
                    { staticClass: "ma-1" },
                    [
                      _c("v-card-title", [_c("h2", [_vm._v("Inscrit a:")])]),
                      _vm._v(" "),
                      _c("v-data-table", {
                        staticClass: "elevation-1",
                        attrs: {
                          headers: _vm.headers,
                          items: _vm.user_activities
                        },
                        scopedSlots: _vm._u([
                          {
                            key: "items",
                            fn: function(props) {
                              return [
                                _c(
                                  "tr",
                                  {
                                    on: {
                                      click: function($event) {
                                        _vm.sendEmit("redirect", props.item.id)
                                      }
                                    }
                                  },
                                  [
                                    _c("td", [_vm._v(_vm._s(props.item.nom))]),
                                    _vm._v(" "),
                                    _c(
                                      "td",
                                      { staticClass: "text-xs-right" },
                                      [
                                        _c(
                                          "v-btn",
                                          {
                                            attrs: {
                                              icon: "",
                                              loading: _vm.loading
                                            },
                                            on: {
                                              click: function($event) {
                                                $event.stopPropagation()
                                                _vm.sendEmit(
                                                  "delete",
                                                  props.item
                                                )
                                              }
                                            }
                                          },
                                          [_c("v-icon", [_vm._v("clear")])],
                                          1
                                        )
                                      ],
                                      1
                                    )
                                  ]
                                )
                              ]
                            }
                          }
                        ])
                      })
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-060884a2", module.exports)
  }
}

/***/ }),

/***/ 83:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(145)
}
var normalizeComponent = __webpack_require__(6)
/* script */
var __vue_script__ = __webpack_require__(147)
/* template */
var __vue_template__ = __webpack_require__(148)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/voluntariat/components/Volunteer.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-060884a2", Component.options)
  } else {
    hotAPI.reload("data-v-060884a2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 90:
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(91)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction) {
  isProduction = _isProduction

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ 91:
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3ZvbHVudGFyaWF0L2NvbXBvbmVudHMvVm9sdW50ZWVyLnZ1ZT9lMzg1Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvdm9sdW50YXJpYXQvY29tcG9uZW50cy9Wb2x1bnRlZXIudnVlP2ZhYzUiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9hc3NldHMvanMvdm9sdW50YXJpYXQvY29tcG9uZW50cy9Wb2x1bnRlZXIudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvdm9sdW50YXJpYXQvY29tcG9uZW50cy9Wb2x1bnRlZXIudnVlPzk5MzYiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy92b2x1bnRhcmlhdC9jb21wb25lbnRzL1ZvbHVudGVlci52dWUiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvbGlzdFRvU3R5bGVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBRUE7QUFDQSxxQ0FBeU87QUFDek87QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNKQUFzSixrRkFBa0Y7QUFDeE8sK0pBQStKLGtGQUFrRjtBQUNqUDtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxnQ0FBZ0MsVUFBVSxFQUFFO0FBQzVDLEM7Ozs7Ozs7QUNwQkE7QUFDQTs7O0FBR0E7QUFDQSx1RkFBd0YsMkNBQTJDLG1DQUFtQyxHQUFHLCtHQUErRyxpQkFBaUIsR0FBRyxZQUFZLDRCQUE0QixHQUFHLFVBQVUsbU1BQW1NLE1BQU0sV0FBVyxXQUFXLEtBQUssTUFBTSxVQUFVLEtBQUssS0FBSyxXQUFXLHlnQkFBeWdCLGtCQUFrQix5TUFBeU0sbUJBQW1CLG1rQkFBbWtCLGtCQUFrQixxREFBcUQsZ0JBQWdCLG9EQUFvRCxtQkFBbUIsaURBQWlELFlBQVksaURBQWlELGdCQUFnQixzREFBc0QsaUJBQWlCLHlEQUF5RCxvQkFBb0IscURBQXFELGVBQWUsK0RBQStELHVCQUF1QiwwREFBMEQsb0JBQW9CLCtEQUErRCxpQkFBaUIsNERBQTRELCtCQUErQixLQUFLLDhCQUE4QixLQUFLLCtCQUErQix1RUFBdUUsNENBQTRDLHVFQUF1RSxnQ0FBZ0MsNkRBQTZELHdCQUF3Qiwwc0JBQTBzQixrQkFBa0IsMHBCQUEwcEIsdUNBQXVDLE9BQU8sdUhBQXVILHFCQUFxQixPQUFPLGdCQUFnQixnQ0FBZ0MsT0FBTyw0Q0FBNEMsZUFBZSxnQkFBZ0IsdURBQXVELDRDQUE0QyxxQkFBcUIsT0FBTyxxSEFBcUgsa0NBQWtDLDZDQUE2QyxPQUFPLEtBQUssOEJBQThCOztBQUVub0s7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbUZBO3dCQUVBOztZQUVBO2VBQ0Esc0NBR0E7QUFMQTtBQU1BOztTQUNBLENBQ0EsYUFDQSxRQUNBLG1CQUVBOztnREFFQTswQkFDQTtBQUVBO0FBSkE7QUFmQSxHOzs7Ozs7O0FDM0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixTQUFTLFdBQVcsRUFBRTtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEMseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHNCQUFzQjtBQUMzQztBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsMkNBQTJDO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsU0FBUyxVQUFVLEVBQUU7QUFDOUM7QUFDQTtBQUNBLHNDQUFzQyx5QkFBeUI7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixTQUFTLG9CQUFvQixFQUFFO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLHNCQUFzQjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyx5QkFBeUI7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixTQUFTLG9CQUFvQixFQUFFO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixzQkFBc0I7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLCtCQUErQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7OztBQ25SQTtBQUNBO0FBQ0E7QUFDQSx5QkFBc007QUFDdE07QUFDQTtBQUNBO0FBQ0EsNENBQXNSO0FBQ3RSO0FBQ0EsOENBQW1MO0FBQ25MO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRDs7Ozs7Ozs7QUM1Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsaUJBQWlCO0FBQzNCO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1CQUFtQixtQkFBbUI7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsbUJBQW1CLHNCQUFzQjtBQUN6QztBQUNBO0FBQ0EsdUJBQXVCLDJCQUEyQjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixtQkFBbUI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsMkJBQTJCO0FBQ2hEO0FBQ0E7QUFDQSxZQUFZLHVCQUF1QjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EscUJBQXFCLHVCQUF1QjtBQUM1QztBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUN0TkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsaUJBQWlCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyx3QkFBd0I7QUFDM0QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiMS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi0wNjA4ODRhMlxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9Wb2x1bnRlZXIudnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikoXCJjZjc5OWUzNFwiLCBjb250ZW50LCBmYWxzZSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi0wNjA4ODRhMlxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9Wb2x1bnRlZXIudnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTA2MDg4NGEyXFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1ZvbHVudGVlci52dWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIhLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtMDYwODg0YTJcIixcInNjb3BlZFwiOmZhbHNlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvdm9sdW50YXJpYXQvY29tcG9uZW50cy9Wb2x1bnRlZXIudnVlXG4vLyBtb2R1bGUgaWQgPSAxNDVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5jb21wb25lbnQtZmFkZS1lbnRlci1hY3RpdmUsIC5jb21wb25lbnQtZmFkZS1sZWF2ZS1hY3RpdmUge1xcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgLjNzIGVhc2U7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgLjNzIGVhc2U7XFxufVxcbi5jb21wb25lbnQtZmFkZS1lbnRlciwgLmNvbXBvbmVudC1mYWRlLWxlYXZlLXRvXFxuICAgIC8qIC5jb21wb25lbnQtZmFkZS1sZWF2ZS1hY3RpdmUgYmVsb3cgdmVyc2lvbiAyLjEuOCAqLyB7XFxuICAgIG9wYWNpdHk6IDA7XFxufVxcbi51bC1saXN0IHtcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbn1cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiL2hvbWUvZ3JleS9DT0RFL2dyZXlnb256L3ZvbHVudGFyaWF0LXRvcnRvc2EvcmVzb3VyY2VzL2Fzc2V0cy9qcy92b2x1bnRhcmlhdC9jb21wb25lbnRzL3Jlc291cmNlcy9hc3NldHMvanMvdm9sdW50YXJpYXQvY29tcG9uZW50cy9Wb2x1bnRlZXIudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUE0RUE7SUFDQSxxQ0FBQTtJQUFBLDZCQUFBO0NBQ0E7QUFDQTs7SUFFQSxXQUFBO0NBQ0E7QUFDQTtJQUNBLHNCQUFBO0NBQ0FcIixcImZpbGVcIjpcIlZvbHVudGVlci52dWVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcbiAgIDx2LWFwcD5cXG4gICAgICAgPCEtLTx0cmFuc2l0aW9uIG5hbWU9XFxcImNvbXBvbmVudC1mYWRlXFxcIiBhcHBlYXI+LS0+XFxuICAgICAgIDx2LWNvbnRhaW5lcj5cXG4gICAgICAgICAgIDx2LWxheW91dD5cXG4gICAgICAgICAgICAgICA8di1mbGV4IHhzMTI+XFxuICAgICAgICAgICAgICAgICAgIDx2LWFsZXJ0IGNsYXNzPVxcXCJtYS0xXFxcIiB0eXBlPVxcXCJ3YXJuaW5nXFxcIiA6dmFsdWU9XFxcInRydWVcXFwiIHYtaWY9XFxcIiFpbmZvLnZhbGlkYXRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgIEFxdWVzdCB1c3Vhcmkgbm8gaGEgb21wbGVydCBlbCBmb3JtdWxhcmkuXFxuICAgICAgICAgICAgICAgICAgIDwvdi1hbGVydD5cXG4gICAgICAgICAgICAgICAgICAgPHYtY2FyZCBjbGFzcz1cXFwibWEtMVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICA8di1jYXJkLXRpdGxlIGNsYXNzPVxcXCJkaXNwbGF5LTEgZ3JlZW4gbGlnaHRlbi0xXFxcIj57eyB2b2x1bnRlZXIubmFtZSB9fTwvdi1jYXJkLXRpdGxlPlxcbiAgICAgICAgICAgICAgICAgICAgICAgPHYtbGF5b3V0IHJvdz5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8di1jYXJkLXRleHQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cXFwidWwtbGlzdFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+RW1haWw6IHt7IHZvbHVudGVlci5lbWFpbCB9fTwvbGk+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LWNhcmQtdGV4dD5cXG4gICAgICAgICAgICAgICAgICAgICAgIDwvdi1sYXlvdXQ+XFxuICAgICAgICAgICAgICAgICAgIDwvdi1jYXJkPlxcbiAgICAgICAgICAgICAgIDwvdi1mbGV4PlxcbiAgICAgICAgICAgPC92LWxheW91dD5cXG4gICAgICAgICAgIDx2LWxheW91dD5cXG4gICAgICAgICAgICAgICA8di1mbGV4IHhzMTIgbGc2PlxcbiAgICAgICAgICAgICAgICAgICA8di1jYXJkIGNsYXNzPVxcXCJtYS0xXFxcIiB2LWlmPVxcXCJpbmZvLnZhbGlkYXRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgPHYtY2FyZC10aXRsZT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+SW5mbzwvaDI+XFxuICAgICAgICAgICAgICAgICAgICAgICA8L3YtY2FyZC10aXRsZT5cXG4gICAgICAgICAgICAgICAgICAgICAgIDx2LWNhcmQtdGV4dD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XFxcInVsLWxpc3RcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+Tm9tOiB7eyB2b2x1bnRlZXIubmFtZSB9fTwvbGk+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5Db2dub21zOiB7eyBpbmZvLmNvZ25vbXMgfX08L2xpPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+Q29ycmV1OiB7eyB2b2x1bnRlZXIuZW1haWwgfX08L2xpPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+RE5JOiB7eyBpbmZvLmRuaSB9fTwvbGk+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5UZWw6IHt7IGluZm8udGVsZWZvbiB9fTwvbGk+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5Qb2JsYWNpbzoge3sgaW5mby5wb2JsYWNpbyB9fTwvbGk+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5Db2RpIHBvc3RhbDoge3sgaW5mby5jb2RpX3Bvc3RhbCB9fSA8L2xpPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+QWRyZcOnYToge3sgaW5mby5hZHJlY2EgfX08L2xpPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+RGF0YSBkZSBuYWl4ZW1lbnQ6IHt7IGluZm8uZGF0YV9uYWl4ZW1lbnQgfX08L2xpPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+TmFjaW9uYWxpdGF0OiB7eyBpbmZvLm5hY2lvbmFsaWF0IH19PC9saT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkxsZW5nw7xlcyBwYXJsYWRlczoge3sgaW5mby5sbGVuZ3VlcyB9fTwvbGk+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5EaXNwb25pYmlsaXRhdDoge3sgaW5mby5kaXNwb25pYmlsaXRhdF9tZW5zdWFsIH19IC0ge3sgaW5mby5kaXNwb25pYmlsaXRhdF9kaWFyaWEgfX0gLSB7eyBpbmZvLmRpc3BvbmliaWxpdGF0X2hvcmFyaWEgfX08L2xpPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+RGlzcG9uaWJpbGl0YXQgZGUgdmVoaWNsZToge3sgaW5mby5kaXNwb25pYmlsaXRhdF92ZWhpY2xlID8gJ1NpJyA6ICdObyd9fTwvbGk+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5GcmFuZ2VzIGQnZWRhdCBwcmVmZXJlbnRzOiB7eyBpbmZvLmZyYW5nZXNfZWRhdF9wcmVmZXJlbnRzIH19PC9saT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkNvbmRpY2nDsyBmw61zaWNhOiB7eyBpbmZvLmNvbmRpY2lvX2Zpc2ljYSB9fTwvbGk+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cXG4gICAgICAgICAgICAgICAgICAgICAgIDwvdi1jYXJkLXRleHQ+XFxuICAgICAgICAgICAgICAgICAgIDwvdi1jYXJkPlxcbiAgICAgICAgICAgICAgIDwvdi1mbGV4PlxcbiAgICAgICAgICAgICAgIDx2LWZsZXggeHMxMiBsZzY+XFxuICAgICAgICAgICAgICAgICAgIDx2LWNhcmQgY2xhc3M9XFxcIm1hLTFcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgPHYtY2FyZC10aXRsZT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgPGgyPkluc2NyaXQgYTo8L2gyPlxcbiAgICAgICAgICAgICAgICAgICAgICAgPC92LWNhcmQtdGl0bGU+XFxuICAgICAgICAgICAgICAgICAgICAgICA8di1kYXRhLXRhYmxlXFxuICAgICAgICAgICAgICAgICAgICAgICAgIDpoZWFkZXJzPVxcXCJoZWFkZXJzXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICA6aXRlbXM9XFxcInVzZXJfYWN0aXZpdGllc1xcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImVsZXZhdGlvbi0xXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHNsb3Q9XFxcIml0ZW1zXFxcIiBzbG90LXNjb3BlPVxcXCJwcm9wc1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIEBjbGljaz1cXFwic2VuZEVtaXQoJ3JlZGlyZWN0JywgcHJvcHMuaXRlbS5pZClcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt7IHByb3BzLml0ZW0ubm9tIH19PC90ZD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cXFwidGV4dC14cy1yaWdodFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtYnRuIGljb24gOmxvYWRpbmc9XFxcImxvYWRpbmdcXFwiIEBjbGljay5zdG9wPVxcXCJzZW5kRW1pdCgnZGVsZXRlJywgcHJvcHMuaXRlbSlcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1pY29uPmNsZWFyPC92LWljb24+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LWJ0bj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cXG4gICAgICAgICAgICAgICAgICAgICAgIDwvdi1kYXRhLXRhYmxlPlxcbiAgICAgICAgICAgICAgICAgICA8L3YtY2FyZD5cXG4gICAgICAgICAgICAgICA8L3YtZmxleD5cXG4gICAgICAgICAgIDwvdi1sYXlvdXQ+XFxuICAgICAgIDwvdi1jb250YWluZXI+XFxuICAgICAgIDwhLS08L3RyYW5zaXRpb24+LS0+XFxuICAgPC92LWFwcD5cXG48L3RlbXBsYXRlPlxcblxcbjxzdHlsZT5cXG4gICAgLmNvbXBvbmVudC1mYWRlLWVudGVyLWFjdGl2ZSwgLmNvbXBvbmVudC1mYWRlLWxlYXZlLWFjdGl2ZSB7XFxuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4zcyBlYXNlO1xcbiAgICB9XFxuICAgIC5jb21wb25lbnQtZmFkZS1lbnRlciwgLmNvbXBvbmVudC1mYWRlLWxlYXZlLXRvXFxuICAgICAgICAvKiAuY29tcG9uZW50LWZhZGUtbGVhdmUtYWN0aXZlIGJlbG93IHZlcnNpb24gMi4xLjggKi8ge1xcbiAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgfVxcbiAgICAudWwtbGlzdCB7XFxuICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICAgIH1cXG48L3N0eWxlPlxcblxcbjxzY3JpcHQ+XFxuXFxuICBleHBvcnQgZGVmYXVsdCB7XFxuICAgIGRhdGEgKCkge1xcbiAgICAgIHJldHVybiB7XFxuICAgICAgICBzaG93OiBmYWxzZSxcXG4gICAgICAgIGhlYWRlcnM6IFtcXG4gICAgICAgICAgeyB0ZXh0OiAnTm9tJywgYWxpZ246ICdsZWZ0JywgdmFsdWU6ICduYW1lJyB9LFxcbiAgICAgICAgXVxcbiAgICAgIH1cXG4gICAgfSxcXG4gICAgcHJvcHM6IFtcXG4gICAgICAndm9sdW50ZWVyJyxcXG4gICAgICAnaW5mbycsXFxuICAgICAgJ3VzZXJfYWN0aXZpdGllcycsXFxuICAgICAgJ2xvYWRpbmcnXFxuICAgIF0sXFxuICAgIG1ldGhvZHM6IHtcXG4gICAgICBzZW5kRW1pdChtZXNzYWdlLCB2YWx1ZSkge1xcbiAgICAgICAgdGhpcy4kZW1pdChtZXNzYWdlLCB2YWx1ZSlcXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG48L3NjcmlwdD5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtMDYwODg0YTJcIixcInNjb3BlZFwiOmZhbHNlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvdm9sdW50YXJpYXQvY29tcG9uZW50cy9Wb2x1bnRlZXIudnVlXG4vLyBtb2R1bGUgaWQgPSAxNDZcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiPHRlbXBsYXRlPlxuICAgPHYtYXBwPlxuICAgICAgIDwhLS08dHJhbnNpdGlvbiBuYW1lPVwiY29tcG9uZW50LWZhZGVcIiBhcHBlYXI+LS0+XG4gICAgICAgPHYtY29udGFpbmVyPlxuICAgICAgICAgICA8di1sYXlvdXQ+XG4gICAgICAgICAgICAgICA8di1mbGV4IHhzMTI+XG4gICAgICAgICAgICAgICAgICAgPHYtYWxlcnQgY2xhc3M9XCJtYS0xXCIgdHlwZT1cIndhcm5pbmdcIiA6dmFsdWU9XCJ0cnVlXCIgdi1pZj1cIiFpbmZvLnZhbGlkYXRcIj5cbiAgICAgICAgICAgICAgICAgICAgIEFxdWVzdCB1c3Vhcmkgbm8gaGEgb21wbGVydCBlbCBmb3JtdWxhcmkuXG4gICAgICAgICAgICAgICAgICAgPC92LWFsZXJ0PlxuICAgICAgICAgICAgICAgICAgIDx2LWNhcmQgY2xhc3M9XCJtYS0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgIDx2LWNhcmQtdGl0bGUgY2xhc3M9XCJkaXNwbGF5LTEgZ3JlZW4gbGlnaHRlbi0xXCI+e3sgdm9sdW50ZWVyLm5hbWUgfX08L3YtY2FyZC10aXRsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgPHYtbGF5b3V0IHJvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWNhcmQtdGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJ1bC1saXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5FbWFpbDoge3sgdm9sdW50ZWVyLmVtYWlsIH19PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LWNhcmQtdGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgPC92LWxheW91dD5cbiAgICAgICAgICAgICAgICAgICA8L3YtY2FyZD5cbiAgICAgICAgICAgICAgIDwvdi1mbGV4PlxuICAgICAgICAgICA8L3YtbGF5b3V0PlxuICAgICAgICAgICA8di1sYXlvdXQ+XG4gICAgICAgICAgICAgICA8di1mbGV4IHhzMTIgbGc2PlxuICAgICAgICAgICAgICAgICAgIDx2LWNhcmQgY2xhc3M9XCJtYS0xXCIgdi1pZj1cImluZm8udmFsaWRhdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICA8di1jYXJkLXRpdGxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPkluZm88L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICA8L3YtY2FyZC10aXRsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgPHYtY2FyZC10ZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwidWwtbGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5Ob206IHt7IHZvbHVudGVlci5uYW1lIH19PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+Q29nbm9tczoge3sgaW5mby5jb2dub21zIH19PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+Q29ycmV1OiB7eyB2b2x1bnRlZXIuZW1haWwgfX08L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5ETkk6IHt7IGluZm8uZG5pIH19PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+VGVsOiB7eyBpbmZvLnRlbGVmb24gfX08L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5Qb2JsYWNpbzoge3sgaW5mby5wb2JsYWNpbyB9fTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkNvZGkgcG9zdGFsOiB7eyBpbmZvLmNvZGlfcG9zdGFsIH19IDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkFkcmXDp2E6IHt7IGluZm8uYWRyZWNhIH19PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+RGF0YSBkZSBuYWl4ZW1lbnQ6IHt7IGluZm8uZGF0YV9uYWl4ZW1lbnQgfX08L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5OYWNpb25hbGl0YXQ6IHt7IGluZm8ubmFjaW9uYWxpYXQgfX08L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5MbGVuZ8O8ZXMgcGFybGFkZXM6IHt7IGluZm8ubGxlbmd1ZXMgfX08L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5EaXNwb25pYmlsaXRhdDoge3sgaW5mby5kaXNwb25pYmlsaXRhdF9tZW5zdWFsIH19IC0ge3sgaW5mby5kaXNwb25pYmlsaXRhdF9kaWFyaWEgfX0gLSB7eyBpbmZvLmRpc3BvbmliaWxpdGF0X2hvcmFyaWEgfX08L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5EaXNwb25pYmlsaXRhdCBkZSB2ZWhpY2xlOiB7eyBpbmZvLmRpc3BvbmliaWxpdGF0X3ZlaGljbGUgPyAnU2knIDogJ05vJ319PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+RnJhbmdlcyBkJ2VkYXQgcHJlZmVyZW50czoge3sgaW5mby5mcmFuZ2VzX2VkYXRfcHJlZmVyZW50cyB9fTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkNvbmRpY2nDsyBmw61zaWNhOiB7eyBpbmZvLmNvbmRpY2lvX2Zpc2ljYSB9fTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICA8L3YtY2FyZC10ZXh0PlxuICAgICAgICAgICAgICAgICAgIDwvdi1jYXJkPlxuICAgICAgICAgICAgICAgPC92LWZsZXg+XG4gICAgICAgICAgICAgICA8di1mbGV4IHhzMTIgbGc2PlxuICAgICAgICAgICAgICAgICAgIDx2LWNhcmQgY2xhc3M9XCJtYS0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgIDx2LWNhcmQtdGl0bGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgPGgyPkluc2NyaXQgYTo8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICA8L3YtY2FyZC10aXRsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgPHYtZGF0YS10YWJsZVxuICAgICAgICAgICAgICAgICAgICAgICAgIDpoZWFkZXJzPVwiaGVhZGVyc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgOml0ZW1zPVwidXNlcl9hY3Rpdml0aWVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImVsZXZhdGlvbi0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHNsb3Q9XCJpdGVtc1wiIHNsb3Qtc2NvcGU9XCJwcm9wc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIEBjbGljaz1cInNlbmRFbWl0KCdyZWRpcmVjdCcsIHByb3BzLml0ZW0uaWQpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57eyBwcm9wcy5pdGVtLm5vbSB9fTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInRleHQteHMtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWJ0biBpY29uIDpsb2FkaW5nPVwibG9hZGluZ1wiIEBjbGljay5zdG9wPVwic2VuZEVtaXQoJ2RlbGV0ZScsIHByb3BzLml0ZW0pXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtaWNvbj5jbGVhcjwvdi1pY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LWJ0bj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgICAgPC92LWRhdGEtdGFibGU+XG4gICAgICAgICAgICAgICAgICAgPC92LWNhcmQ+XG4gICAgICAgICAgICAgICA8L3YtZmxleD5cbiAgICAgICAgICAgPC92LWxheW91dD5cbiAgICAgICA8L3YtY29udGFpbmVyPlxuICAgICAgIDwhLS08L3RyYW5zaXRpb24+LS0+XG4gICA8L3YtYXBwPlxuPC90ZW1wbGF0ZT5cblxuPHN0eWxlPlxuICAgIC5jb21wb25lbnQtZmFkZS1lbnRlci1hY3RpdmUsIC5jb21wb25lbnQtZmFkZS1sZWF2ZS1hY3RpdmUge1xuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4zcyBlYXNlO1xuICAgIH1cbiAgICAuY29tcG9uZW50LWZhZGUtZW50ZXIsIC5jb21wb25lbnQtZmFkZS1sZWF2ZS10b1xuICAgICAgICAvKiAuY29tcG9uZW50LWZhZGUtbGVhdmUtYWN0aXZlIGJlbG93IHZlcnNpb24gMi4xLjggKi8ge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgICAudWwtbGlzdCB7XG4gICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICB9XG48L3N0eWxlPlxuXG48c2NyaXB0PlxuXG4gIGV4cG9ydCBkZWZhdWx0IHtcbiAgICBkYXRhICgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHNob3c6IGZhbHNlLFxuICAgICAgICBoZWFkZXJzOiBbXG4gICAgICAgICAgeyB0ZXh0OiAnTm9tJywgYWxpZ246ICdsZWZ0JywgdmFsdWU6ICduYW1lJyB9LFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBwcm9wczogW1xuICAgICAgJ3ZvbHVudGVlcicsXG4gICAgICAnaW5mbycsXG4gICAgICAndXNlcl9hY3Rpdml0aWVzJyxcbiAgICAgICdsb2FkaW5nJ1xuICAgIF0sXG4gICAgbWV0aG9kczoge1xuICAgICAgc2VuZEVtaXQobWVzc2FnZSwgdmFsdWUpIHtcbiAgICAgICAgdGhpcy4kZW1pdChtZXNzYWdlLCB2YWx1ZSlcbiAgICAgIH1cbiAgICB9XG4gIH1cbjwvc2NyaXB0PlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByZXNvdXJjZXMvYXNzZXRzL2pzL3ZvbHVudGFyaWF0L2NvbXBvbmVudHMvVm9sdW50ZWVyLnZ1ZSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJ2LWFwcFwiLFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcInYtY29udGFpbmVyXCIsXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidi1sYXlvdXRcIixcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2LWZsZXhcIixcbiAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHhzMTI6IFwiXCIgfSB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICFfdm0uaW5mby52YWxpZGF0XG4gICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInYtYWxlcnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWEtMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcIndhcm5pbmdcIiwgdmFsdWU6IHRydWUgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgQXF1ZXN0IHVzdWFyaSBubyBoYSBvbXBsZXJ0IGVsIGZvcm11bGFyaS5cXG4gICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2LWNhcmRcIixcbiAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtYS0xXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWNhcmQtdGl0bGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZGlzcGxheS0xIGdyZWVuIGxpZ2h0ZW4tMVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0udm9sdW50ZWVyLm5hbWUpKV1cbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInYtbGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHJvdzogXCJcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi1jYXJkLXRleHRcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidWxcIiwgeyBzdGF0aWNDbGFzczogXCJ1bC1saXN0XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJsaVwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIkVtYWlsOiBcIiArIF92bS5fcyhfdm0udm9sdW50ZWVyLmVtYWlsKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ2LWxheW91dFwiLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInYtZmxleFwiLFxuICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgeHMxMjogXCJcIiwgbGc2OiBcIlwiIH0gfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfdm0uaW5mby52YWxpZGF0XG4gICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInYtY2FyZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtYS0xXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LWNhcmQtdGl0bGVcIiwgW19jKFwiaDJcIiwgW192bS5fdihcIkluZm9cIildKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtY2FyZC10ZXh0XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInVsXCIsIHsgc3RhdGljQ2xhc3M6IFwidWwtbGlzdFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGlcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJOb206IFwiICsgX3ZtLl9zKF92bS52b2x1bnRlZXIubmFtZSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImxpXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiQ29nbm9tczogXCIgKyBfdm0uX3MoX3ZtLmluZm8uY29nbm9tcykpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImxpXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiQ29ycmV1OiBcIiArIF92bS5fcyhfdm0udm9sdW50ZWVyLmVtYWlsKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGlcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJETkk6IFwiICsgX3ZtLl9zKF92bS5pbmZvLmRuaSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImxpXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiVGVsOiBcIiArIF92bS5fcyhfdm0uaW5mby50ZWxlZm9uKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGlcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJQb2JsYWNpbzogXCIgKyBfdm0uX3MoX3ZtLmluZm8ucG9ibGFjaW8pKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJsaVwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkNvZGkgcG9zdGFsOiBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLmluZm8uY29kaV9wb3N0YWwpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGlcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJBZHJlw6dhOiBcIiArIF92bS5fcyhfdm0uaW5mby5hZHJlY2EpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJsaVwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkRhdGEgZGUgbmFpeGVtZW50OiBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLmluZm8uZGF0YV9uYWl4ZW1lbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGlcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJOYWNpb25hbGl0YXQ6IFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uaW5mby5uYWNpb25hbGlhdClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJsaVwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkxsZW5nw7xlcyBwYXJsYWRlczogXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5pbmZvLmxsZW5ndWVzKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImxpXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiRGlzcG9uaWJpbGl0YXQ6IFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uaW5mby5kaXNwb25pYmlsaXRhdF9tZW5zdWFsKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiAtIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uaW5mby5kaXNwb25pYmlsaXRhdF9kaWFyaWEpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIC0gXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5pbmZvLmRpc3BvbmliaWxpdGF0X2hvcmFyaWEpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGlcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJEaXNwb25pYmlsaXRhdCBkZSB2ZWhpY2xlOiBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5pbmZvLmRpc3BvbmliaWxpdGF0X3ZlaGljbGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiU2lcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJOb1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGlcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJGcmFuZ2VzIGQnZWRhdCBwcmVmZXJlbnRzOiBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLmluZm8uZnJhbmdlc19lZGF0X3ByZWZlcmVudHMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGlcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJDb25kaWNpw7MgZsOtc2ljYTogXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5pbmZvLmNvbmRpY2lvX2Zpc2ljYSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2LWZsZXhcIixcbiAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHhzMTI6IFwiXCIsIGxnNjogXCJcIiB9IH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidi1jYXJkXCIsXG4gICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibWEtMVwiIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtY2FyZC10aXRsZVwiLCBbX2MoXCJoMlwiLCBbX3ZtLl92KFwiSW5zY3JpdCBhOlwiKV0pXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtZGF0YS10YWJsZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJlbGV2YXRpb24tMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyczogX3ZtLmhlYWRlcnMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zOiBfdm0udXNlcl9hY3Rpdml0aWVzXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwiaXRlbXNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24ocHJvcHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNlbmRFbWl0KFwicmVkaXJlY3RcIiwgcHJvcHMuaXRlbS5pZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KF92bS5fcyhwcm9wcy5pdGVtLm5vbSkpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LXhzLXJpZ2h0XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb246IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogX3ZtLmxvYWRpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zZW5kRW1pdChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkZWxldGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMuaXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfYyhcInYtaWNvblwiLCBbX3ZtLl92KFwiY2xlYXJcIildKV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbm1vZHVsZS5leHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi0wNjA4ODRhMlwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtMDYwODg0YTJcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3ZvbHVudGFyaWF0L2NvbXBvbmVudHMvVm9sdW50ZWVyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTQ4XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG5mdW5jdGlvbiBpbmplY3RTdHlsZSAoc3NyQ29udGV4dCkge1xuICBpZiAoZGlzcG9zZWQpIHJldHVyblxuICByZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleD97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMDYwODg0YTJcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vVm9sdW50ZWVyLnZ1ZVwiKVxufVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbnZhciBfX3Z1ZV9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV1dLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFtcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLHtcXFwicG9seWZpbGxcXFwiOmZhbHNlLFxcXCJoZWxwZXJzXFxcIjpmYWxzZX1dXX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9Wb2x1bnRlZXIudnVlXCIpXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi0wNjA4ODRhMlxcXCIsXFxcImhhc1Njb3BlZFxcXCI6ZmFsc2UsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL1ZvbHVudGVlci52dWVcIilcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBpbmplY3RTdHlsZVxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9hc3NldHMvanMvdm9sdW50YXJpYXQvY29tcG9uZW50cy9Wb2x1bnRlZXIudnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTA2MDg4NGEyXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtMDYwODg0YTJcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvdm9sdW50YXJpYXQvY29tcG9uZW50cy9Wb2x1bnRlZXIudnVlXG4vLyBtb2R1bGUgaWQgPSA4M1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4gIE1vZGlmaWVkIGJ5IEV2YW4gWW91IEB5eXg5OTA4MDNcbiovXG5cbnZhciBoYXNEb2N1bWVudCA9IHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCdcblxuaWYgKHR5cGVvZiBERUJVRyAhPT0gJ3VuZGVmaW5lZCcgJiYgREVCVUcpIHtcbiAgaWYgKCFoYXNEb2N1bWVudCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAndnVlLXN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50LiAnICtcbiAgICBcIlVzZSB7IHRhcmdldDogJ25vZGUnIH0gaW4geW91ciBXZWJwYWNrIGNvbmZpZyB0byBpbmRpY2F0ZSBhIHNlcnZlci1yZW5kZXJpbmcgZW52aXJvbm1lbnQuXCJcbiAgKSB9XG59XG5cbnZhciBsaXN0VG9TdHlsZXMgPSByZXF1aXJlKCcuL2xpc3RUb1N0eWxlcycpXG5cbi8qXG50eXBlIFN0eWxlT2JqZWN0ID0ge1xuICBpZDogbnVtYmVyO1xuICBwYXJ0czogQXJyYXk8U3R5bGVPYmplY3RQYXJ0PlxufVxuXG50eXBlIFN0eWxlT2JqZWN0UGFydCA9IHtcbiAgY3NzOiBzdHJpbmc7XG4gIG1lZGlhOiBzdHJpbmc7XG4gIHNvdXJjZU1hcDogP3N0cmluZ1xufVxuKi9cblxudmFyIHN0eWxlc0luRG9tID0gey8qXG4gIFtpZDogbnVtYmVyXToge1xuICAgIGlkOiBudW1iZXIsXG4gICAgcmVmczogbnVtYmVyLFxuICAgIHBhcnRzOiBBcnJheTwob2JqPzogU3R5bGVPYmplY3RQYXJ0KSA9PiB2b2lkPlxuICB9XG4qL31cblxudmFyIGhlYWQgPSBoYXNEb2N1bWVudCAmJiAoZG9jdW1lbnQuaGVhZCB8fCBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdKVxudmFyIHNpbmdsZXRvbkVsZW1lbnQgPSBudWxsXG52YXIgc2luZ2xldG9uQ291bnRlciA9IDBcbnZhciBpc1Byb2R1Y3Rpb24gPSBmYWxzZVxudmFyIG5vb3AgPSBmdW5jdGlvbiAoKSB7fVxuXG4vLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbi8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcbnZhciBpc09sZElFID0gdHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgL21zaWUgWzYtOV1cXGIvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChwYXJlbnRJZCwgbGlzdCwgX2lzUHJvZHVjdGlvbikge1xuICBpc1Byb2R1Y3Rpb24gPSBfaXNQcm9kdWN0aW9uXG5cbiAgdmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhwYXJlbnRJZCwgbGlzdClcbiAgYWRkU3R5bGVzVG9Eb20oc3R5bGVzKVxuXG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUgKG5ld0xpc3QpIHtcbiAgICB2YXIgbWF5UmVtb3ZlID0gW11cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGl0ZW0gPSBzdHlsZXNbaV1cbiAgICAgIHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdXG4gICAgICBkb21TdHlsZS5yZWZzLS1cbiAgICAgIG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKVxuICAgIH1cbiAgICBpZiAobmV3TGlzdCkge1xuICAgICAgc3R5bGVzID0gbGlzdFRvU3R5bGVzKHBhcmVudElkLCBuZXdMaXN0KVxuICAgICAgYWRkU3R5bGVzVG9Eb20oc3R5bGVzKVxuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXMgPSBbXVxuICAgIH1cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldXG4gICAgICBpZiAoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgZG9tU3R5bGUucGFydHNbal0oKVxuICAgICAgICB9XG4gICAgICAgIGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20gKHN0eWxlcyAvKiBBcnJheTxTdHlsZU9iamVjdD4gKi8pIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IHN0eWxlc1tpXVxuICAgIHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdXG4gICAgaWYgKGRvbVN0eWxlKSB7XG4gICAgICBkb21TdHlsZS5yZWZzKytcbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSlcbiAgICAgIH1cbiAgICAgIGZvciAoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0pKVxuICAgICAgfVxuICAgICAgaWYgKGRvbVN0eWxlLnBhcnRzLmxlbmd0aCA+IGl0ZW0ucGFydHMubGVuZ3RoKSB7XG4gICAgICAgIGRvbVN0eWxlLnBhcnRzLmxlbmd0aCA9IGl0ZW0ucGFydHMubGVuZ3RoXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBwYXJ0cyA9IFtdXG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgcGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdKSlcbiAgICAgIH1cbiAgICAgIHN0eWxlc0luRG9tW2l0ZW0uaWRdID0geyBpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50ICgpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJylcbiAgc3R5bGVFbGVtZW50LnR5cGUgPSAndGV4dC9jc3MnXG4gIGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVFbGVtZW50KVxuICByZXR1cm4gc3R5bGVFbGVtZW50XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlIChvYmogLyogU3R5bGVPYmplY3RQYXJ0ICovKSB7XG4gIHZhciB1cGRhdGUsIHJlbW92ZVxuICB2YXIgc3R5bGVFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc3R5bGVbZGF0YS12dWUtc3NyLWlkfj1cIicgKyBvYmouaWQgKyAnXCJdJylcblxuICBpZiAoc3R5bGVFbGVtZW50KSB7XG4gICAgaWYgKGlzUHJvZHVjdGlvbikge1xuICAgICAgLy8gaGFzIFNTUiBzdHlsZXMgYW5kIGluIHByb2R1Y3Rpb24gbW9kZS5cbiAgICAgIC8vIHNpbXBseSBkbyBub3RoaW5nLlxuICAgICAgcmV0dXJuIG5vb3BcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gaGFzIFNTUiBzdHlsZXMgYnV0IGluIGRldiBtb2RlLlxuICAgICAgLy8gZm9yIHNvbWUgcmVhc29uIENocm9tZSBjYW4ndCBoYW5kbGUgc291cmNlIG1hcCBpbiBzZXJ2ZXItcmVuZGVyZWRcbiAgICAgIC8vIHN0eWxlIHRhZ3MgLSBzb3VyY2UgbWFwcyBpbiA8c3R5bGU+IG9ubHkgd29ya3MgaWYgdGhlIHN0eWxlIHRhZyBpc1xuICAgICAgLy8gY3JlYXRlZCBhbmQgaW5zZXJ0ZWQgZHluYW1pY2FsbHkuIFNvIHdlIHJlbW92ZSB0aGUgc2VydmVyIHJlbmRlcmVkXG4gICAgICAvLyBzdHlsZXMgYW5kIGluamVjdCBuZXcgb25lcy5cbiAgICAgIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudClcbiAgICB9XG4gIH1cblxuICBpZiAoaXNPbGRJRSkge1xuICAgIC8vIHVzZSBzaW5nbGV0b24gbW9kZSBmb3IgSUU5LlxuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrXG4gICAgc3R5bGVFbGVtZW50ID0gc2luZ2xldG9uRWxlbWVudCB8fCAoc2luZ2xldG9uRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudCgpKVxuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIGZhbHNlKVxuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIHRydWUpXG4gIH0gZWxzZSB7XG4gICAgLy8gdXNlIG11bHRpLXN0eWxlLXRhZyBtb2RlIGluIGFsbCBvdGhlciBjYXNlc1xuICAgIHN0eWxlRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudCgpXG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudClcbiAgICByZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpXG4gICAgfVxuICB9XG5cbiAgdXBkYXRlKG9iailcblxuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUgKG5ld09iaiAvKiBTdHlsZU9iamVjdFBhcnQgKi8pIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJlxuICAgICAgICAgIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmXG4gICAgICAgICAgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpXG4gICAgfVxuICB9XG59XG5cbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXVxuXG4gIHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJylcbiAgfVxufSkoKVxuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnIChzdHlsZUVsZW1lbnQsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmouY3NzXG5cbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpXG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpXG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZUVsZW1lbnQuY2hpbGROb2Rlc1xuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKVxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGVFbGVtZW50Lmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSlcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGNzc05vZGUpXG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcgKHN0eWxlRWxlbWVudCwgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzXG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcFxuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpXG4gIH1cblxuICBpZiAoc291cmNlTWFwKSB7XG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIuY2hyb21lLmNvbS9kZXZ0b29scy9kb2NzL2phdmFzY3JpcHQtZGVidWdnaW5nXG4gICAgLy8gdGhpcyBtYWtlcyBzb3VyY2UgbWFwcyBpbnNpZGUgc3R5bGUgdGFncyB3b3JrIHByb3Blcmx5IGluIENocm9tZVxuICAgIGNzcyArPSAnXFxuLyojIHNvdXJjZVVSTD0nICsgc291cmNlTWFwLnNvdXJjZXNbMF0gKyAnICovJ1xuICAgIC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG4gICAgY3NzICs9ICdcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LCcgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgJyAqLydcbiAgfVxuXG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3NcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZClcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpXG4gIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1xuLy8gbW9kdWxlIGlkID0gOTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCIsIi8qKlxuICogVHJhbnNsYXRlcyB0aGUgbGlzdCBmb3JtYXQgcHJvZHVjZWQgYnkgY3NzLWxvYWRlciBpbnRvIHNvbWV0aGluZ1xuICogZWFzaWVyIHRvIG1hbmlwdWxhdGUuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbGlzdFRvU3R5bGVzIChwYXJlbnRJZCwgbGlzdCkge1xuICB2YXIgc3R5bGVzID0gW11cbiAgdmFyIG5ld1N0eWxlcyA9IHt9XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXVxuICAgIHZhciBpZCA9IGl0ZW1bMF1cbiAgICB2YXIgY3NzID0gaXRlbVsxXVxuICAgIHZhciBtZWRpYSA9IGl0ZW1bMl1cbiAgICB2YXIgc291cmNlTWFwID0gaXRlbVszXVxuICAgIHZhciBwYXJ0ID0ge1xuICAgICAgaWQ6IHBhcmVudElkICsgJzonICsgaSxcbiAgICAgIGNzczogY3NzLFxuICAgICAgbWVkaWE6IG1lZGlhLFxuICAgICAgc291cmNlTWFwOiBzb3VyY2VNYXBcbiAgICB9XG4gICAgaWYgKCFuZXdTdHlsZXNbaWRdKSB7XG4gICAgICBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0geyBpZDogaWQsIHBhcnRzOiBbcGFydF0gfSlcbiAgICB9IGVsc2Uge1xuICAgICAgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpXG4gICAgfVxuICB9XG4gIHJldHVybiBzdHlsZXNcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2xpc3RUb1N0eWxlcy5qc1xuLy8gbW9kdWxlIGlkID0gOTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCJdLCJzb3VyY2VSb290IjoiIn0=