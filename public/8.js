webpackJsonp([8],{

/***/ 106:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(107);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(90)("618675d5", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-fc4ce5fc\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Activitat.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-fc4ce5fc\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Activitat.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 107:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)(true);
// imports


// module
exports.push([module.i, "\n.component-fade-enter-active, .component-fade-leave-active {\n    -webkit-transition: opacity .3s ease;\n    transition: opacity .3s ease;\n}\n.component-fade-enter, .component-fade-leave-to\n    /* .component-fade-leave-active below version 2.1.8 */ {\n    opacity: 0;\n}\n.ul-list {\n    list-style-type: none;\n}\n", "", {"version":3,"sources":["/home/grey/CODE/greygonz/voluntariat-tortosa/resources/assets/js/voluntariat/components/resources/assets/js/voluntariat/components/Activitat.vue"],"names":[],"mappings":";AAwGA;IACA,qCAAA;IAAA,6BAAA;CACA;AACA;;IAEA,WAAA;CACA;AACA;IACA,sBAAA;CACA","file":"Activitat.vue","sourcesContent":["<template>\n   <v-app>\n       <!--<transition name=\"component-fade\" appear>-->\n       <v-container>\n           <v-layout row>\n               <v-flex d-flex xs12>\n                   <v-card class=\"ma-1\">\n                       <v-card-title class=\"display-1 green lighten-1\">\n                           <v-layout row justify-space-between>\n                               <span>{{ activitat.nom }}</span>\n                               <!--<v-btn color=\"blue\" class=\"white&#45;&#45;text\">-->\n                                   <!--<v-icon left>add_circle</v-icon>-->\n                                   <!--inscriume-->\n                               <!--</v-btn>-->\n                           </v-layout>\n                       </v-card-title>\n                       <v-layout row wrap>\n                           <v-card-text>\n                               <ul class=\"ul-list\">\n                                   <li>Àmbit: {{ activitat.ambit}}</li>\n                                   <li>Voluntaris necessaris: {{ activitat.num_voluntaris_necessaris }}</li>\n                                   <li>Horari: {{ String(activitat.hora_inici).substring(0, 5) }} - {{ String(activitat.hora_fi).substring(0, 5) }}</li>\n                               </ul>\n                           </v-card-text>\n                           <v-card-text>{{ activitat.descripcio }}</v-card-text>\n                       </v-layout>\n                   </v-card>\n               </v-flex>\n           </v-layout>\n           <v-layout row wrap>\n               <v-flex xs6>\n                   <v-card class=\"ma-1\">\n                       <v-card-title>\n                           <h3>Requisits:</h3>\n                       </v-card-title>\n                       <v-card-text>\n                           <ul class=\"ul-list\">\n                               <li>Horari: {{ activitat.tipus_horari }}</li>\n                               <li>Coneixements: {{ activitat.coneximents_req }}</li>\n                               <li>Habilitats: {{ activitat.habilitats_req }}</li>\n                               <li>Experiencia: {{ activitat.experiencia_req }}</li>\n                               <li>Formació: {{ activitat.titols_formacio_req }}</li>\n                               <li>Idiomes: {{ activitat.idiomes_req }}</li>\n                               <li>Vehicle: {{ activitat.disponibilitat_vehicle_req }}</li>\n                               <li>Condició física: {{ activitat.condicio_fisica_req }}</li>\n                               <li>Sexe: {{ activitat.sexe_req }}</li>\n                           </ul>\n                       </v-card-text>\n                   </v-card>\n               </v-flex>\n               <v-flex xs6 >\n                   <v-card class=\"ma-1\">\n                       <v-card-title>\n                           <h3>Voluntaris inscrits:</h3>\n                       </v-card-title>\n                       <v-card-text v-if=\"activity_volunteers.length === 0\">\n                           <span>No hi ha voluntaris registrats dins aquesta activitat</span>\n                       </v-card-text>\n                       <v-list v-else v-for=\"user in activity_volunteers\" :key=\"user.name\">\n                           <v-list-tile avatar @click=\"sendEmit('redirectToVolunteer', user.id)\">\n                               <v-list-tile-avatar>\n                                   <img :src=\"user.avatar\">\n                               </v-list-tile-avatar>\n                               <v-list-tile-content>\n                                   <v-list-tile-title v-text=\"user.name\"></v-list-tile-title>\n                               </v-list-tile-content>\n                               <v-list-tile-action>\n                                  <v-btn icon :loading=\"loading\" @click.stop=\"sendEmit('deleteUser', user)\">\n                                      <v-icon>clear</v-icon>\n                                  </v-btn>\n                               </v-list-tile-action>\n                           </v-list-tile>\n                       </v-list>\n                   </v-card>\n                   <v-card class=\"ma-1\">\n                       <v-card-title>\n                           <h3>Entitats organitzatives:</h3>\n                       </v-card-title>\n                       <v-card-text v-if=\"activity_entities.length === 0\">\n                           <span>No s'han trobat entitats organitzatives</span>\n                       </v-card-text>\n                       <v-list v-else v-for=\"entity in activity_entities\" :key=\"entity.name\">\n                           <v-list-tile avatar @click=\"sendEmit('redirectToEntity', entity.id)\">\n                               <v-list-tile-avatar>\n                                   <img :src=\"entity.avatar\">\n                               </v-list-tile-avatar>\n                               <v-list-tile-content>\n                                   <v-list-tile-title v-text=\"entity.name\"></v-list-tile-title>\n                               </v-list-tile-content>\n                               <v-list-tile-action>\n                                   <v-btn icon :loading=\"loading\" @click.stop=\"sendEmit('deleteEntity', entity)\">\n                                       <v-icon>clear</v-icon>\n                                   </v-btn>\n                               </v-list-tile-action>\n                           </v-list-tile>\n                       </v-list>\n                   </v-card>\n               </v-flex>\n           </v-layout>\n       </v-container>\n       <!--</transition>-->\n   </v-app>\n</template>\n\n<style>\n    .component-fade-enter-active, .component-fade-leave-active {\n        transition: opacity .3s ease;\n    }\n    .component-fade-enter, .component-fade-leave-to\n        /* .component-fade-leave-active below version 2.1.8 */ {\n        opacity: 0;\n    }\n    .ul-list {\n        list-style-type: none;\n    }\n</style>\n\n<script>\n    export default {\n        data () {\n            return {\n                show: false,\n                items: [\n                  { title: 'hey', avatar: 'http://via.placeholder.com/50x50'}\n                ]\n            }\n        },\n        props: [\n          'activitat',\n          'activity_volunteers',\n          'activity_entities',\n          'loading'\n        ],\n        methods: {\n          sendEmit(message, value) {\n            this.$emit(message, value)\n          }\n        }\n    }\n</script>"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 108:
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
      items: [{ title: 'hey', avatar: 'http://via.placeholder.com/50x50' }]
    };
  },

  props: ['activitat', 'activity_volunteers', 'activity_entities', 'loading'],
  methods: {
    sendEmit: function sendEmit(message, value) {
      this.$emit(message, value);
    }
  }
});

/***/ }),

/***/ 109:
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
            { attrs: { row: "" } },
            [
              _c(
                "v-flex",
                { attrs: { "d-flex": "", xs12: "" } },
                [
                  _c(
                    "v-card",
                    { staticClass: "ma-1" },
                    [
                      _c(
                        "v-card-title",
                        { staticClass: "display-1 green lighten-1" },
                        [
                          _c(
                            "v-layout",
                            { attrs: { row: "", "justify-space-between": "" } },
                            [_c("span", [_vm._v(_vm._s(_vm.activitat.nom))])]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-layout",
                        { attrs: { row: "", wrap: "" } },
                        [
                          _c("v-card-text", [
                            _c("ul", { staticClass: "ul-list" }, [
                              _c("li", [
                                _vm._v("Àmbit: " + _vm._s(_vm.activitat.ambit))
                              ]),
                              _vm._v(" "),
                              _c("li", [
                                _vm._v(
                                  "Voluntaris necessaris: " +
                                    _vm._s(
                                      _vm.activitat.num_voluntaris_necessaris
                                    )
                                )
                              ]),
                              _vm._v(" "),
                              _c("li", [
                                _vm._v(
                                  "Horari: " +
                                    _vm._s(
                                      String(
                                        _vm.activitat.hora_inici
                                      ).substring(0, 5)
                                    ) +
                                    " - " +
                                    _vm._s(
                                      String(_vm.activitat.hora_fi).substring(
                                        0,
                                        5
                                      )
                                    )
                                )
                              ])
                            ])
                          ]),
                          _vm._v(" "),
                          _c("v-card-text", [
                            _vm._v(_vm._s(_vm.activitat.descripcio))
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
            { attrs: { row: "", wrap: "" } },
            [
              _c(
                "v-flex",
                { attrs: { xs6: "" } },
                [
                  _c(
                    "v-card",
                    { staticClass: "ma-1" },
                    [
                      _c("v-card-title", [_c("h3", [_vm._v("Requisits:")])]),
                      _vm._v(" "),
                      _c("v-card-text", [
                        _c("ul", { staticClass: "ul-list" }, [
                          _c("li", [
                            _vm._v(
                              "Horari: " + _vm._s(_vm.activitat.tipus_horari)
                            )
                          ]),
                          _vm._v(" "),
                          _c("li", [
                            _vm._v(
                              "Coneixements: " +
                                _vm._s(_vm.activitat.coneximents_req)
                            )
                          ]),
                          _vm._v(" "),
                          _c("li", [
                            _vm._v(
                              "Habilitats: " +
                                _vm._s(_vm.activitat.habilitats_req)
                            )
                          ]),
                          _vm._v(" "),
                          _c("li", [
                            _vm._v(
                              "Experiencia: " +
                                _vm._s(_vm.activitat.experiencia_req)
                            )
                          ]),
                          _vm._v(" "),
                          _c("li", [
                            _vm._v(
                              "Formació: " +
                                _vm._s(_vm.activitat.titols_formacio_req)
                            )
                          ]),
                          _vm._v(" "),
                          _c("li", [
                            _vm._v(
                              "Idiomes: " + _vm._s(_vm.activitat.idiomes_req)
                            )
                          ]),
                          _vm._v(" "),
                          _c("li", [
                            _vm._v(
                              "Vehicle: " +
                                _vm._s(_vm.activitat.disponibilitat_vehicle_req)
                            )
                          ]),
                          _vm._v(" "),
                          _c("li", [
                            _vm._v(
                              "Condició física: " +
                                _vm._s(_vm.activitat.condicio_fisica_req)
                            )
                          ]),
                          _vm._v(" "),
                          _c("li", [
                            _vm._v("Sexe: " + _vm._s(_vm.activitat.sexe_req))
                          ])
                        ])
                      ])
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-flex",
                { attrs: { xs6: "" } },
                [
                  _c(
                    "v-card",
                    { staticClass: "ma-1" },
                    [
                      _c("v-card-title", [
                        _c("h3", [_vm._v("Voluntaris inscrits:")])
                      ]),
                      _vm._v(" "),
                      _vm.activity_volunteers.length === 0
                        ? _c("v-card-text", [
                            _c("span", [
                              _vm._v(
                                "No hi ha voluntaris registrats dins aquesta activitat"
                              )
                            ])
                          ])
                        : _vm._l(_vm.activity_volunteers, function(user) {
                            return _c(
                              "v-list",
                              { key: user.name },
                              [
                                _c(
                                  "v-list-tile",
                                  {
                                    attrs: { avatar: "" },
                                    on: {
                                      click: function($event) {
                                        _vm.sendEmit(
                                          "redirectToVolunteer",
                                          user.id
                                        )
                                      }
                                    }
                                  },
                                  [
                                    _c("v-list-tile-avatar", [
                                      _c("img", { attrs: { src: user.avatar } })
                                    ]),
                                    _vm._v(" "),
                                    _c(
                                      "v-list-tile-content",
                                      [
                                        _c("v-list-tile-title", {
                                          domProps: {
                                            textContent: _vm._s(user.name)
                                          }
                                        })
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "v-list-tile-action",
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
                                                _vm.sendEmit("deleteUser", user)
                                              }
                                            }
                                          },
                                          [_c("v-icon", [_vm._v("clear")])],
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
                          })
                    ],
                    2
                  ),
                  _vm._v(" "),
                  _c(
                    "v-card",
                    { staticClass: "ma-1" },
                    [
                      _c("v-card-title", [
                        _c("h3", [_vm._v("Entitats organitzatives:")])
                      ]),
                      _vm._v(" "),
                      _vm.activity_entities.length === 0
                        ? _c("v-card-text", [
                            _c("span", [
                              _vm._v("No s'han trobat entitats organitzatives")
                            ])
                          ])
                        : _vm._l(_vm.activity_entities, function(entity) {
                            return _c(
                              "v-list",
                              { key: entity.name },
                              [
                                _c(
                                  "v-list-tile",
                                  {
                                    attrs: { avatar: "" },
                                    on: {
                                      click: function($event) {
                                        _vm.sendEmit(
                                          "redirectToEntity",
                                          entity.id
                                        )
                                      }
                                    }
                                  },
                                  [
                                    _c("v-list-tile-avatar", [
                                      _c("img", {
                                        attrs: { src: entity.avatar }
                                      })
                                    ]),
                                    _vm._v(" "),
                                    _c(
                                      "v-list-tile-content",
                                      [
                                        _c("v-list-tile-title", {
                                          domProps: {
                                            textContent: _vm._s(entity.name)
                                          }
                                        })
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "v-list-tile-action",
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
                                                  "deleteEntity",
                                                  entity
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
                                  ],
                                  1
                                )
                              ],
                              1
                            )
                          })
                    ],
                    2
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
    require("vue-hot-reload-api")      .rerender("data-v-fc4ce5fc", module.exports)
  }
}

/***/ }),

/***/ 69:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(106)
}
var normalizeComponent = __webpack_require__(6)
/* script */
var __vue_script__ = __webpack_require__(108)
/* template */
var __vue_template__ = __webpack_require__(109)
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
Component.options.__file = "resources/assets/js/voluntariat/components/Activitat.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-fc4ce5fc", Component.options)
  } else {
    hotAPI.reload("data-v-fc4ce5fc", Component.options)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3ZvbHVudGFyaWF0L2NvbXBvbmVudHMvQWN0aXZpdGF0LnZ1ZT85NDY1Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvdm9sdW50YXJpYXQvY29tcG9uZW50cy9BY3Rpdml0YXQudnVlPzZkZWUiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9hc3NldHMvanMvdm9sdW50YXJpYXQvY29tcG9uZW50cy9BY3Rpdml0YXQudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvdm9sdW50YXJpYXQvY29tcG9uZW50cy9BY3Rpdml0YXQudnVlPzAyNmQiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy92b2x1bnRhcmlhdC9jb21wb25lbnRzL0FjdGl2aXRhdC52dWUiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvbGlzdFRvU3R5bGVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBRUE7QUFDQSxxQ0FBeU87QUFDek87QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNKQUFzSixrRkFBa0Y7QUFDeE8sK0pBQStKLGtGQUFrRjtBQUNqUDtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxnQ0FBZ0MsVUFBVSxFQUFFO0FBQzVDLEM7Ozs7Ozs7QUNwQkE7QUFDQTs7O0FBR0E7QUFDQSx1RkFBd0YsMkNBQTJDLG1DQUFtQyxHQUFHLCtHQUErRyxpQkFBaUIsR0FBRyxZQUFZLDRCQUE0QixHQUFHLFVBQVUsbU1BQW1NLE1BQU0sV0FBVyxXQUFXLEtBQUssTUFBTSxVQUFVLEtBQUssS0FBSyxXQUFXLHdiQUF3YixpQkFBaUIsb0ZBQW9GLEtBQUssMGNB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OiI4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LWZjNGNlNWZjXFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0FjdGl2aXRhdC52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKShcIjYxODY3NWQ1XCIsIGNvbnRlbnQsIGZhbHNlKTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LWZjNGNlNWZjXFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0FjdGl2aXRhdC52dWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtZmM0Y2U1ZmNcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vQWN0aXZpdGF0LnZ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlciEuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi1mYzRjZTVmY1wiLFwic2NvcGVkXCI6ZmFsc2UsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy92b2x1bnRhcmlhdC9jb21wb25lbnRzL0FjdGl2aXRhdC52dWVcbi8vIG1vZHVsZSBpZCA9IDEwNlxuLy8gbW9kdWxlIGNodW5rcyA9IDgiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLmNvbXBvbmVudC1mYWRlLWVudGVyLWFjdGl2ZSwgLmNvbXBvbmVudC1mYWRlLWxlYXZlLWFjdGl2ZSB7XFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAuM3MgZWFzZTtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAuM3MgZWFzZTtcXG59XFxuLmNvbXBvbmVudC1mYWRlLWVudGVyLCAuY29tcG9uZW50LWZhZGUtbGVhdmUtdG9cXG4gICAgLyogLmNvbXBvbmVudC1mYWRlLWxlYXZlLWFjdGl2ZSBiZWxvdyB2ZXJzaW9uIDIuMS44ICovIHtcXG4gICAgb3BhY2l0eTogMDtcXG59XFxuLnVsLWxpc3Qge1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvaG9tZS9ncmV5L0NPREUvZ3JleWdvbnovdm9sdW50YXJpYXQtdG9ydG9zYS9yZXNvdXJjZXMvYXNzZXRzL2pzL3ZvbHVudGFyaWF0L2NvbXBvbmVudHMvcmVzb3VyY2VzL2Fzc2V0cy9qcy92b2x1bnRhcmlhdC9jb21wb25lbnRzL0FjdGl2aXRhdC52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQXdHQTtJQUNBLHFDQUFBO0lBQUEsNkJBQUE7Q0FDQTtBQUNBOztJQUVBLFdBQUE7Q0FDQTtBQUNBO0lBQ0Esc0JBQUE7Q0FDQVwiLFwiZmlsZVwiOlwiQWN0aXZpdGF0LnZ1ZVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxuICAgPHYtYXBwPlxcbiAgICAgICA8IS0tPHRyYW5zaXRpb24gbmFtZT1cXFwiY29tcG9uZW50LWZhZGVcXFwiIGFwcGVhcj4tLT5cXG4gICAgICAgPHYtY29udGFpbmVyPlxcbiAgICAgICAgICAgPHYtbGF5b3V0IHJvdz5cXG4gICAgICAgICAgICAgICA8di1mbGV4IGQtZmxleCB4czEyPlxcbiAgICAgICAgICAgICAgICAgICA8di1jYXJkIGNsYXNzPVxcXCJtYS0xXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgIDx2LWNhcmQtdGl0bGUgY2xhc3M9XFxcImRpc3BsYXktMSBncmVlbiBsaWdodGVuLTFcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWxheW91dCByb3cganVzdGlmeS1zcGFjZS1iZXR3ZWVuPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57eyBhY3Rpdml0YXQubm9tIH19PC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tPHYtYnRuIGNvbG9yPVxcXCJibHVlXFxcIiBjbGFzcz1cXFwid2hpdGUmIzQ1OyYjNDU7dGV4dFxcXCI+LS0+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tPHYtaWNvbiBsZWZ0PmFkZF9jaXJjbGU8L3YtaWNvbj4tLT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS1pbnNjcml1bWUtLT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLTwvdi1idG4+LS0+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LWxheW91dD5cXG4gICAgICAgICAgICAgICAgICAgICAgIDwvdi1jYXJkLXRpdGxlPlxcbiAgICAgICAgICAgICAgICAgICAgICAgPHYtbGF5b3V0IHJvdyB3cmFwPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWNhcmQtdGV4dD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVxcXCJ1bC1saXN0XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT7DgG1iaXQ6IHt7IGFjdGl2aXRhdC5hbWJpdH19PC9saT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5Wb2x1bnRhcmlzIG5lY2Vzc2FyaXM6IHt7IGFjdGl2aXRhdC5udW1fdm9sdW50YXJpc19uZWNlc3NhcmlzIH19PC9saT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5Ib3Jhcmk6IHt7IFN0cmluZyhhY3Rpdml0YXQuaG9yYV9pbmljaSkuc3Vic3RyaW5nKDAsIDUpIH19IC0ge3sgU3RyaW5nKGFjdGl2aXRhdC5ob3JhX2ZpKS5zdWJzdHJpbmcoMCwgNSkgfX08L2xpPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1jYXJkLXRleHQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtY2FyZC10ZXh0Pnt7IGFjdGl2aXRhdC5kZXNjcmlwY2lvIH19PC92LWNhcmQtdGV4dD5cXG4gICAgICAgICAgICAgICAgICAgICAgIDwvdi1sYXlvdXQ+XFxuICAgICAgICAgICAgICAgICAgIDwvdi1jYXJkPlxcbiAgICAgICAgICAgICAgIDwvdi1mbGV4PlxcbiAgICAgICAgICAgPC92LWxheW91dD5cXG4gICAgICAgICAgIDx2LWxheW91dCByb3cgd3JhcD5cXG4gICAgICAgICAgICAgICA8di1mbGV4IHhzNj5cXG4gICAgICAgICAgICAgICAgICAgPHYtY2FyZCBjbGFzcz1cXFwibWEtMVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICA8di1jYXJkLXRpdGxlPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5SZXF1aXNpdHM6PC9oMz5cXG4gICAgICAgICAgICAgICAgICAgICAgIDwvdi1jYXJkLXRpdGxlPlxcbiAgICAgICAgICAgICAgICAgICAgICAgPHYtY2FyZC10ZXh0PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cXFwidWwtbGlzdFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5Ib3Jhcmk6IHt7IGFjdGl2aXRhdC50aXB1c19ob3JhcmkgfX08L2xpPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+Q29uZWl4ZW1lbnRzOiB7eyBhY3Rpdml0YXQuY29uZXhpbWVudHNfcmVxIH19PC9saT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkhhYmlsaXRhdHM6IHt7IGFjdGl2aXRhdC5oYWJpbGl0YXRzX3JlcSB9fTwvbGk+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5FeHBlcmllbmNpYToge3sgYWN0aXZpdGF0LmV4cGVyaWVuY2lhX3JlcSB9fTwvbGk+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5Gb3JtYWNpw7M6IHt7IGFjdGl2aXRhdC50aXRvbHNfZm9ybWFjaW9fcmVxIH19PC9saT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPklkaW9tZXM6IHt7IGFjdGl2aXRhdC5pZGlvbWVzX3JlcSB9fTwvbGk+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5WZWhpY2xlOiB7eyBhY3Rpdml0YXQuZGlzcG9uaWJpbGl0YXRfdmVoaWNsZV9yZXEgfX08L2xpPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+Q29uZGljacOzIGbDrXNpY2E6IHt7IGFjdGl2aXRhdC5jb25kaWNpb19maXNpY2FfcmVxIH19PC9saT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlNleGU6IHt7IGFjdGl2aXRhdC5zZXhlX3JlcSB9fTwvbGk+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cXG4gICAgICAgICAgICAgICAgICAgICAgIDwvdi1jYXJkLXRleHQ+XFxuICAgICAgICAgICAgICAgICAgIDwvdi1jYXJkPlxcbiAgICAgICAgICAgICAgIDwvdi1mbGV4PlxcbiAgICAgICAgICAgICAgIDx2LWZsZXggeHM2ID5cXG4gICAgICAgICAgICAgICAgICAgPHYtY2FyZCBjbGFzcz1cXFwibWEtMVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICA8di1jYXJkLXRpdGxlPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5Wb2x1bnRhcmlzIGluc2NyaXRzOjwvaDM+XFxuICAgICAgICAgICAgICAgICAgICAgICA8L3YtY2FyZC10aXRsZT5cXG4gICAgICAgICAgICAgICAgICAgICAgIDx2LWNhcmQtdGV4dCB2LWlmPVxcXCJhY3Rpdml0eV92b2x1bnRlZXJzLmxlbmd0aCA9PT0gMFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+Tm8gaGkgaGEgdm9sdW50YXJpcyByZWdpc3RyYXRzIGRpbnMgYXF1ZXN0YSBhY3Rpdml0YXQ8L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICAgICA8L3YtY2FyZC10ZXh0PlxcbiAgICAgICAgICAgICAgICAgICAgICAgPHYtbGlzdCB2LWVsc2Ugdi1mb3I9XFxcInVzZXIgaW4gYWN0aXZpdHlfdm9sdW50ZWVyc1xcXCIgOmtleT1cXFwidXNlci5uYW1lXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8di1saXN0LXRpbGUgYXZhdGFyIEBjbGljaz1cXFwic2VuZEVtaXQoJ3JlZGlyZWN0VG9Wb2x1bnRlZXInLCB1c2VyLmlkKVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWxpc3QtdGlsZS1hdmF0YXI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIDpzcmM9XFxcInVzZXIuYXZhdGFyXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LWxpc3QtdGlsZS1hdmF0YXI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWxpc3QtdGlsZS1jb250ZW50PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtbGlzdC10aWxlLXRpdGxlIHYtdGV4dD1cXFwidXNlci5uYW1lXFxcIj48L3YtbGlzdC10aWxlLXRpdGxlPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtbGlzdC10aWxlLWNvbnRlbnQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWxpc3QtdGlsZS1hY3Rpb24+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWJ0biBpY29uIDpsb2FkaW5nPVxcXCJsb2FkaW5nXFxcIiBAY2xpY2suc3RvcD1cXFwic2VuZEVtaXQoJ2RlbGV0ZVVzZXInLCB1c2VyKVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1pY29uPmNsZWFyPC92LWljb24+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1idG4+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1saXN0LXRpbGUtYWN0aW9uPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1saXN0LXRpbGU+XFxuICAgICAgICAgICAgICAgICAgICAgICA8L3YtbGlzdD5cXG4gICAgICAgICAgICAgICAgICAgPC92LWNhcmQ+XFxuICAgICAgICAgICAgICAgICAgIDx2LWNhcmQgY2xhc3M9XFxcIm1hLTFcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgPHYtY2FyZC10aXRsZT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+RW50aXRhdHMgb3JnYW5pdHphdGl2ZXM6PC9oMz5cXG4gICAgICAgICAgICAgICAgICAgICAgIDwvdi1jYXJkLXRpdGxlPlxcbiAgICAgICAgICAgICAgICAgICAgICAgPHYtY2FyZC10ZXh0IHYtaWY9XFxcImFjdGl2aXR5X2VudGl0aWVzLmxlbmd0aCA9PT0gMFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+Tm8gcydoYW4gdHJvYmF0IGVudGl0YXRzIG9yZ2FuaXR6YXRpdmVzPC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgICAgPC92LWNhcmQtdGV4dD5cXG4gICAgICAgICAgICAgICAgICAgICAgIDx2LWxpc3Qgdi1lbHNlIHYtZm9yPVxcXCJlbnRpdHkgaW4gYWN0aXZpdHlfZW50aXRpZXNcXFwiIDprZXk9XFxcImVudGl0eS5uYW1lXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8di1saXN0LXRpbGUgYXZhdGFyIEBjbGljaz1cXFwic2VuZEVtaXQoJ3JlZGlyZWN0VG9FbnRpdHknLCBlbnRpdHkuaWQpXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtbGlzdC10aWxlLWF2YXRhcj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgOnNyYz1cXFwiZW50aXR5LmF2YXRhclxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1saXN0LXRpbGUtYXZhdGFyPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1saXN0LXRpbGUtY29udGVudD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWxpc3QtdGlsZS10aXRsZSB2LXRleHQ9XFxcImVudGl0eS5uYW1lXFxcIj48L3YtbGlzdC10aWxlLXRpdGxlPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtbGlzdC10aWxlLWNvbnRlbnQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWxpc3QtdGlsZS1hY3Rpb24+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1idG4gaWNvbiA6bG9hZGluZz1cXFwibG9hZGluZ1xcXCIgQGNsaWNrLnN0b3A9XFxcInNlbmRFbWl0KCdkZWxldGVFbnRpdHknLCBlbnRpdHkpXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1pY29uPmNsZWFyPC92LWljb24+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtYnRuPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtbGlzdC10aWxlLWFjdGlvbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtbGlzdC10aWxlPlxcbiAgICAgICAgICAgICAgICAgICAgICAgPC92LWxpc3Q+XFxuICAgICAgICAgICAgICAgICAgIDwvdi1jYXJkPlxcbiAgICAgICAgICAgICAgIDwvdi1mbGV4PlxcbiAgICAgICAgICAgPC92LWxheW91dD5cXG4gICAgICAgPC92LWNvbnRhaW5lcj5cXG4gICAgICAgPCEtLTwvdHJhbnNpdGlvbj4tLT5cXG4gICA8L3YtYXBwPlxcbjwvdGVtcGxhdGU+XFxuXFxuPHN0eWxlPlxcbiAgICAuY29tcG9uZW50LWZhZGUtZW50ZXItYWN0aXZlLCAuY29tcG9uZW50LWZhZGUtbGVhdmUtYWN0aXZlIHtcXG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgLjNzIGVhc2U7XFxuICAgIH1cXG4gICAgLmNvbXBvbmVudC1mYWRlLWVudGVyLCAuY29tcG9uZW50LWZhZGUtbGVhdmUtdG9cXG4gICAgICAgIC8qIC5jb21wb25lbnQtZmFkZS1sZWF2ZS1hY3RpdmUgYmVsb3cgdmVyc2lvbiAyLjEuOCAqLyB7XFxuICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICB9XFxuICAgIC51bC1saXN0IHtcXG4gICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gICAgfVxcbjwvc3R5bGU+XFxuXFxuPHNjcmlwdD5cXG4gICAgZXhwb3J0IGRlZmF1bHQge1xcbiAgICAgICAgZGF0YSAoKSB7XFxuICAgICAgICAgICAgcmV0dXJuIHtcXG4gICAgICAgICAgICAgICAgc2hvdzogZmFsc2UsXFxuICAgICAgICAgICAgICAgIGl0ZW1zOiBbXFxuICAgICAgICAgICAgICAgICAgeyB0aXRsZTogJ2hleScsIGF2YXRhcjogJ2h0dHA6Ly92aWEucGxhY2Vob2xkZXIuY29tLzUweDUwJ31cXG4gICAgICAgICAgICAgICAgXVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH0sXFxuICAgICAgICBwcm9wczogW1xcbiAgICAgICAgICAnYWN0aXZpdGF0JyxcXG4gICAgICAgICAgJ2FjdGl2aXR5X3ZvbHVudGVlcnMnLFxcbiAgICAgICAgICAnYWN0aXZpdHlfZW50aXRpZXMnLFxcbiAgICAgICAgICAnbG9hZGluZydcXG4gICAgICAgIF0sXFxuICAgICAgICBtZXRob2RzOiB7XFxuICAgICAgICAgIHNlbmRFbWl0KG1lc3NhZ2UsIHZhbHVlKSB7XFxuICAgICAgICAgICAgdGhpcy4kZW1pdChtZXNzYWdlLCB2YWx1ZSlcXG4gICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9XFxuPC9zY3JpcHQ+XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LWZjNGNlNWZjXCIsXCJzY29wZWRcIjpmYWxzZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3ZvbHVudGFyaWF0L2NvbXBvbmVudHMvQWN0aXZpdGF0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTA3XG4vLyBtb2R1bGUgY2h1bmtzID0gOCIsIjx0ZW1wbGF0ZT5cbiAgIDx2LWFwcD5cbiAgICAgICA8IS0tPHRyYW5zaXRpb24gbmFtZT1cImNvbXBvbmVudC1mYWRlXCIgYXBwZWFyPi0tPlxuICAgICAgIDx2LWNvbnRhaW5lcj5cbiAgICAgICAgICAgPHYtbGF5b3V0IHJvdz5cbiAgICAgICAgICAgICAgIDx2LWZsZXggZC1mbGV4IHhzMTI+XG4gICAgICAgICAgICAgICAgICAgPHYtY2FyZCBjbGFzcz1cIm1hLTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgPHYtY2FyZC10aXRsZSBjbGFzcz1cImRpc3BsYXktMSBncmVlbiBsaWdodGVuLTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWxheW91dCByb3cganVzdGlmeS1zcGFjZS1iZXR3ZWVuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnt7IGFjdGl2aXRhdC5ub20gfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLTx2LWJ0biBjb2xvcj1cImJsdWVcIiBjbGFzcz1cIndoaXRlJiM0NTsmIzQ1O3RleHRcIj4tLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLTx2LWljb24gbGVmdD5hZGRfY2lyY2xlPC92LWljb24+LS0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS1pbnNjcml1bWUtLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tPC92LWJ0bj4tLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1sYXlvdXQ+XG4gICAgICAgICAgICAgICAgICAgICAgIDwvdi1jYXJkLXRpdGxlPlxuICAgICAgICAgICAgICAgICAgICAgICA8di1sYXlvdXQgcm93IHdyYXA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8di1jYXJkLXRleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwidWwtbGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+w4BtYml0OiB7eyBhY3Rpdml0YXQuYW1iaXR9fTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5Wb2x1bnRhcmlzIG5lY2Vzc2FyaXM6IHt7IGFjdGl2aXRhdC5udW1fdm9sdW50YXJpc19uZWNlc3NhcmlzIH19PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkhvcmFyaToge3sgU3RyaW5nKGFjdGl2aXRhdC5ob3JhX2luaWNpKS5zdWJzdHJpbmcoMCwgNSkgfX0gLSB7eyBTdHJpbmcoYWN0aXZpdGF0LmhvcmFfZmkpLnN1YnN0cmluZygwLCA1KSB9fTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1jYXJkLXRleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8di1jYXJkLXRleHQ+e3sgYWN0aXZpdGF0LmRlc2NyaXBjaW8gfX08L3YtY2FyZC10ZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICA8L3YtbGF5b3V0PlxuICAgICAgICAgICAgICAgICAgIDwvdi1jYXJkPlxuICAgICAgICAgICAgICAgPC92LWZsZXg+XG4gICAgICAgICAgIDwvdi1sYXlvdXQ+XG4gICAgICAgICAgIDx2LWxheW91dCByb3cgd3JhcD5cbiAgICAgICAgICAgICAgIDx2LWZsZXggeHM2PlxuICAgICAgICAgICAgICAgICAgIDx2LWNhcmQgY2xhc3M9XCJtYS0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgIDx2LWNhcmQtdGl0bGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+UmVxdWlzaXRzOjwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgIDwvdi1jYXJkLXRpdGxlPlxuICAgICAgICAgICAgICAgICAgICAgICA8di1jYXJkLXRleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJ1bC1saXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkhvcmFyaToge3sgYWN0aXZpdGF0LnRpcHVzX2hvcmFyaSB9fTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkNvbmVpeGVtZW50czoge3sgYWN0aXZpdGF0LmNvbmV4aW1lbnRzX3JlcSB9fTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkhhYmlsaXRhdHM6IHt7IGFjdGl2aXRhdC5oYWJpbGl0YXRzX3JlcSB9fTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkV4cGVyaWVuY2lhOiB7eyBhY3Rpdml0YXQuZXhwZXJpZW5jaWFfcmVxIH19PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+Rm9ybWFjacOzOiB7eyBhY3Rpdml0YXQudGl0b2xzX2Zvcm1hY2lvX3JlcSB9fTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPklkaW9tZXM6IHt7IGFjdGl2aXRhdC5pZGlvbWVzX3JlcSB9fTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlZlaGljbGU6IHt7IGFjdGl2aXRhdC5kaXNwb25pYmlsaXRhdF92ZWhpY2xlX3JlcSB9fTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkNvbmRpY2nDsyBmw61zaWNhOiB7eyBhY3Rpdml0YXQuY29uZGljaW9fZmlzaWNhX3JlcSB9fTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlNleGU6IHt7IGFjdGl2aXRhdC5zZXhlX3JlcSB9fTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICA8L3YtY2FyZC10ZXh0PlxuICAgICAgICAgICAgICAgICAgIDwvdi1jYXJkPlxuICAgICAgICAgICAgICAgPC92LWZsZXg+XG4gICAgICAgICAgICAgICA8di1mbGV4IHhzNiA+XG4gICAgICAgICAgICAgICAgICAgPHYtY2FyZCBjbGFzcz1cIm1hLTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgPHYtY2FyZC10aXRsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5Wb2x1bnRhcmlzIGluc2NyaXRzOjwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgIDwvdi1jYXJkLXRpdGxlPlxuICAgICAgICAgICAgICAgICAgICAgICA8di1jYXJkLXRleHQgdi1pZj1cImFjdGl2aXR5X3ZvbHVudGVlcnMubGVuZ3RoID09PSAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5ObyBoaSBoYSB2b2x1bnRhcmlzIHJlZ2lzdHJhdHMgZGlucyBhcXVlc3RhIGFjdGl2aXRhdDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgPC92LWNhcmQtdGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgPHYtbGlzdCB2LWVsc2Ugdi1mb3I9XCJ1c2VyIGluIGFjdGl2aXR5X3ZvbHVudGVlcnNcIiA6a2V5PVwidXNlci5uYW1lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8di1saXN0LXRpbGUgYXZhdGFyIEBjbGljaz1cInNlbmRFbWl0KCdyZWRpcmVjdFRvVm9sdW50ZWVyJywgdXNlci5pZClcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1saXN0LXRpbGUtYXZhdGFyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIDpzcmM9XCJ1c2VyLmF2YXRhclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1saXN0LXRpbGUtYXZhdGFyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWxpc3QtdGlsZS1jb250ZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1saXN0LXRpbGUtdGl0bGUgdi10ZXh0PVwidXNlci5uYW1lXCI+PC92LWxpc3QtdGlsZS10aXRsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtbGlzdC10aWxlLWNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtbGlzdC10aWxlLWFjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1idG4gaWNvbiA6bG9hZGluZz1cImxvYWRpbmdcIiBAY2xpY2suc3RvcD1cInNlbmRFbWl0KCdkZWxldGVVc2VyJywgdXNlcilcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtaWNvbj5jbGVhcjwvdi1pY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1idG4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LWxpc3QtdGlsZS1hY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtbGlzdC10aWxlPlxuICAgICAgICAgICAgICAgICAgICAgICA8L3YtbGlzdD5cbiAgICAgICAgICAgICAgICAgICA8L3YtY2FyZD5cbiAgICAgICAgICAgICAgICAgICA8di1jYXJkIGNsYXNzPVwibWEtMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICA8di1jYXJkLXRpdGxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPkVudGl0YXRzIG9yZ2FuaXR6YXRpdmVzOjwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgIDwvdi1jYXJkLXRpdGxlPlxuICAgICAgICAgICAgICAgICAgICAgICA8di1jYXJkLXRleHQgdi1pZj1cImFjdGl2aXR5X2VudGl0aWVzLmxlbmd0aCA9PT0gMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+Tm8gcydoYW4gdHJvYmF0IGVudGl0YXRzIG9yZ2FuaXR6YXRpdmVzPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICA8L3YtY2FyZC10ZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICA8di1saXN0IHYtZWxzZSB2LWZvcj1cImVudGl0eSBpbiBhY3Rpdml0eV9lbnRpdGllc1wiIDprZXk9XCJlbnRpdHkubmFtZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtbGlzdC10aWxlIGF2YXRhciBAY2xpY2s9XCJzZW5kRW1pdCgncmVkaXJlY3RUb0VudGl0eScsIGVudGl0eS5pZClcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1saXN0LXRpbGUtYXZhdGFyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIDpzcmM9XCJlbnRpdHkuYXZhdGFyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LWxpc3QtdGlsZS1hdmF0YXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtbGlzdC10aWxlLWNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWxpc3QtdGlsZS10aXRsZSB2LXRleHQ9XCJlbnRpdHkubmFtZVwiPjwvdi1saXN0LXRpbGUtdGl0bGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LWxpc3QtdGlsZS1jb250ZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWxpc3QtdGlsZS1hY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWJ0biBpY29uIDpsb2FkaW5nPVwibG9hZGluZ1wiIEBjbGljay5zdG9wPVwic2VuZEVtaXQoJ2RlbGV0ZUVudGl0eScsIGVudGl0eSlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWljb24+Y2xlYXI8L3YtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LWJ0bj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtbGlzdC10aWxlLWFjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1saXN0LXRpbGU+XG4gICAgICAgICAgICAgICAgICAgICAgIDwvdi1saXN0PlxuICAgICAgICAgICAgICAgICAgIDwvdi1jYXJkPlxuICAgICAgICAgICAgICAgPC92LWZsZXg+XG4gICAgICAgICAgIDwvdi1sYXlvdXQ+XG4gICAgICAgPC92LWNvbnRhaW5lcj5cbiAgICAgICA8IS0tPC90cmFuc2l0aW9uPi0tPlxuICAgPC92LWFwcD5cbjwvdGVtcGxhdGU+XG5cbjxzdHlsZT5cbiAgICAuY29tcG9uZW50LWZhZGUtZW50ZXItYWN0aXZlLCAuY29tcG9uZW50LWZhZGUtbGVhdmUtYWN0aXZlIHtcbiAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAuM3MgZWFzZTtcbiAgICB9XG4gICAgLmNvbXBvbmVudC1mYWRlLWVudGVyLCAuY29tcG9uZW50LWZhZGUtbGVhdmUtdG9cbiAgICAgICAgLyogLmNvbXBvbmVudC1mYWRlLWxlYXZlLWFjdGl2ZSBiZWxvdyB2ZXJzaW9uIDIuMS44ICovIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gICAgLnVsLWxpc3Qge1xuICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgfVxuPC9zdHlsZT5cblxuPHNjcmlwdD5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIGRhdGEgKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBzaG93OiBmYWxzZSxcbiAgICAgICAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgICAgICAgeyB0aXRsZTogJ2hleScsIGF2YXRhcjogJ2h0dHA6Ly92aWEucGxhY2Vob2xkZXIuY29tLzUweDUwJ31cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHByb3BzOiBbXG4gICAgICAgICAgJ2FjdGl2aXRhdCcsXG4gICAgICAgICAgJ2FjdGl2aXR5X3ZvbHVudGVlcnMnLFxuICAgICAgICAgICdhY3Rpdml0eV9lbnRpdGllcycsXG4gICAgICAgICAgJ2xvYWRpbmcnXG4gICAgICAgIF0sXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICBzZW5kRW1pdChtZXNzYWdlLCB2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy4kZW1pdChtZXNzYWdlLCB2YWx1ZSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy92b2x1bnRhcmlhdC9jb21wb25lbnRzL0FjdGl2aXRhdC52dWUiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwidi1hcHBcIixcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJ2LWNvbnRhaW5lclwiLFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInYtbGF5b3V0XCIsXG4gICAgICAgICAgICB7IGF0dHJzOiB7IHJvdzogXCJcIiB9IH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi1mbGV4XCIsXG4gICAgICAgICAgICAgICAgeyBhdHRyczogeyBcImQtZmxleFwiOiBcIlwiLCB4czEyOiBcIlwiIH0gfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2LWNhcmRcIixcbiAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtYS0xXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWNhcmQtdGl0bGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZGlzcGxheS0xIGdyZWVuIGxpZ2h0ZW4tMVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1sYXlvdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHJvdzogXCJcIiwgXCJqdXN0aWZ5LXNwYWNlLWJldHdlZW5cIjogXCJcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW19jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhfdm0uYWN0aXZpdGF0Lm5vbSkpXSldXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWxheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyByb3c6IFwiXCIsIHdyYXA6IFwiXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtY2FyZC10ZXh0XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInVsXCIsIHsgc3RhdGljQ2xhc3M6IFwidWwtbGlzdFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGlcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCLDgG1iaXQ6IFwiICsgX3ZtLl9zKF92bS5hY3Rpdml0YXQuYW1iaXQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJsaVwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlZvbHVudGFyaXMgbmVjZXNzYXJpczogXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uYWN0aXZpdGF0Lm51bV92b2x1bnRhcmlzX25lY2Vzc2FyaXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJsaVwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkhvcmFyaTogXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdHJpbmcoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmFjdGl2aXRhdC5ob3JhX2luaWNpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkuc3Vic3RyaW5nKDAsIDUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIC0gXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdHJpbmcoX3ZtLmFjdGl2aXRhdC5ob3JhX2ZpKS5zdWJzdHJpbmcoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA1XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LWNhcmQtdGV4dFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uYWN0aXZpdGF0LmRlc2NyaXBjaW8pKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInYtbGF5b3V0XCIsXG4gICAgICAgICAgICB7IGF0dHJzOiB7IHJvdzogXCJcIiwgd3JhcDogXCJcIiB9IH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi1mbGV4XCIsXG4gICAgICAgICAgICAgICAgeyBhdHRyczogeyB4czY6IFwiXCIgfSB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInYtY2FyZFwiLFxuICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm1hLTFcIiB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LWNhcmQtdGl0bGVcIiwgW19jKFwiaDNcIiwgW192bS5fdihcIlJlcXVpc2l0czpcIildKV0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LWNhcmQtdGV4dFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInVsXCIsIHsgc3RhdGljQ2xhc3M6IFwidWwtbGlzdFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJsaVwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJIb3Jhcmk6IFwiICsgX3ZtLl9zKF92bS5hY3Rpdml0YXQudGlwdXNfaG9yYXJpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGlcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiQ29uZWl4ZW1lbnRzOiBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uYWN0aXZpdGF0LmNvbmV4aW1lbnRzX3JlcSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImxpXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkhhYmlsaXRhdHM6IFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5hY3Rpdml0YXQuaGFiaWxpdGF0c19yZXEpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJsaVwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJFeHBlcmllbmNpYTogXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLmFjdGl2aXRhdC5leHBlcmllbmNpYV9yZXEpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJsaVwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJGb3JtYWNpw7M6IFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5hY3Rpdml0YXQudGl0b2xzX2Zvcm1hY2lvX3JlcSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImxpXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIklkaW9tZXM6IFwiICsgX3ZtLl9zKF92bS5hY3Rpdml0YXQuaWRpb21lc19yZXEpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJsaVwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJWZWhpY2xlOiBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uYWN0aXZpdGF0LmRpc3BvbmliaWxpdGF0X3ZlaGljbGVfcmVxKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGlcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiQ29uZGljacOzIGbDrXNpY2E6IFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5hY3Rpdml0YXQuY29uZGljaW9fZmlzaWNhX3JlcSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImxpXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJTZXhlOiBcIiArIF92bS5fcyhfdm0uYWN0aXZpdGF0LnNleGVfcmVxKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInYtZmxleFwiLFxuICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgeHM2OiBcIlwiIH0gfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2LWNhcmRcIixcbiAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtYS0xXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi1jYXJkLXRpdGxlXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaDNcIiwgW192bS5fdihcIlZvbHVudGFyaXMgaW5zY3JpdHM6XCIpXSlcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5hY3Rpdml0eV92b2x1bnRlZXJzLmxlbmd0aCA9PT0gMFxuICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInYtY2FyZC10ZXh0XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIk5vIGhpIGhhIHZvbHVudGFyaXMgcmVnaXN0cmF0cyBkaW5zIGFxdWVzdGEgYWN0aXZpdGF0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2woX3ZtLmFjdGl2aXR5X3ZvbHVudGVlcnMsIGZ1bmN0aW9uKHVzZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtbGlzdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBrZXk6IHVzZXIubmFtZSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtbGlzdC10aWxlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgYXZhdGFyOiBcIlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNlbmRFbWl0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyZWRpcmVjdFRvVm9sdW50ZWVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VyLmlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtbGlzdC10aWxlLWF2YXRhclwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHsgYXR0cnM6IHsgc3JjOiB1c2VyLmF2YXRhciB9IH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWxpc3QtdGlsZS1jb250ZW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtbGlzdC10aWxlLXRpdGxlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRDb250ZW50OiBfdm0uX3ModXNlci5uYW1lKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1saXN0LXRpbGUtYWN0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IF92bS5sb2FkaW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uc2VuZEVtaXQoXCJkZWxldGVVc2VyXCIsIHVzZXIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW19jKFwidi1pY29uXCIsIFtfdm0uX3YoXCJjbGVhclwiKV0pXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidi1jYXJkXCIsXG4gICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibWEtMVwiIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtY2FyZC10aXRsZVwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImgzXCIsIFtfdm0uX3YoXCJFbnRpdGF0cyBvcmdhbml0emF0aXZlczpcIildKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLmFjdGl2aXR5X2VudGl0aWVzLmxlbmd0aCA9PT0gMFxuICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInYtY2FyZC10ZXh0XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiTm8gcydoYW4gdHJvYmF0IGVudGl0YXRzIG9yZ2FuaXR6YXRpdmVzXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9sKF92bS5hY3Rpdml0eV9lbnRpdGllcywgZnVuY3Rpb24oZW50aXR5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWxpc3RcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsga2V5OiBlbnRpdHkubmFtZSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtbGlzdC10aWxlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgYXZhdGFyOiBcIlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNlbmRFbWl0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyZWRpcmVjdFRvRW50aXR5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHkuaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi1saXN0LXRpbGUtYXZhdGFyXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogZW50aXR5LmF2YXRhciB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWxpc3QtdGlsZS1jb250ZW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtbGlzdC10aWxlLXRpdGxlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRDb250ZW50OiBfdm0uX3MoZW50aXR5Lm5hbWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWxpc3QtdGlsZS1hY3Rpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb246IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogX3ZtLmxvYWRpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zZW5kRW1pdChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkZWxldGVFbnRpdHlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50aXR5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW19jKFwidi1pY29uXCIsIFtfdm0uX3YoXCJjbGVhclwiKV0pXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbm1vZHVsZS5leHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi1mYzRjZTVmY1wiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtZmM0Y2U1ZmNcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3ZvbHVudGFyaWF0L2NvbXBvbmVudHMvQWN0aXZpdGF0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTA5XG4vLyBtb2R1bGUgY2h1bmtzID0gOCIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG5mdW5jdGlvbiBpbmplY3RTdHlsZSAoc3NyQ29udGV4dCkge1xuICBpZiAoZGlzcG9zZWQpIHJldHVyblxuICByZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleD97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtZmM0Y2U1ZmNcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vQWN0aXZpdGF0LnZ1ZVwiKVxufVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbnZhciBfX3Z1ZV9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV1dLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFtcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLHtcXFwicG9seWZpbGxcXFwiOmZhbHNlLFxcXCJoZWxwZXJzXFxcIjpmYWxzZX1dXX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9BY3Rpdml0YXQudnVlXCIpXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi1mYzRjZTVmY1xcXCIsXFxcImhhc1Njb3BlZFxcXCI6ZmFsc2UsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL0FjdGl2aXRhdC52dWVcIilcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBpbmplY3RTdHlsZVxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9hc3NldHMvanMvdm9sdW50YXJpYXQvY29tcG9uZW50cy9BY3Rpdml0YXQudnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LWZjNGNlNWZjXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtZmM0Y2U1ZmNcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvdm9sdW50YXJpYXQvY29tcG9uZW50cy9BY3Rpdml0YXQudnVlXG4vLyBtb2R1bGUgaWQgPSA2OVxuLy8gbW9kdWxlIGNodW5rcyA9IDgiLCIvKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4gIE1vZGlmaWVkIGJ5IEV2YW4gWW91IEB5eXg5OTA4MDNcbiovXG5cbnZhciBoYXNEb2N1bWVudCA9IHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCdcblxuaWYgKHR5cGVvZiBERUJVRyAhPT0gJ3VuZGVmaW5lZCcgJiYgREVCVUcpIHtcbiAgaWYgKCFoYXNEb2N1bWVudCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAndnVlLXN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50LiAnICtcbiAgICBcIlVzZSB7IHRhcmdldDogJ25vZGUnIH0gaW4geW91ciBXZWJwYWNrIGNvbmZpZyB0byBpbmRpY2F0ZSBhIHNlcnZlci1yZW5kZXJpbmcgZW52aXJvbm1lbnQuXCJcbiAgKSB9XG59XG5cbnZhciBsaXN0VG9TdHlsZXMgPSByZXF1aXJlKCcuL2xpc3RUb1N0eWxlcycpXG5cbi8qXG50eXBlIFN0eWxlT2JqZWN0ID0ge1xuICBpZDogbnVtYmVyO1xuICBwYXJ0czogQXJyYXk8U3R5bGVPYmplY3RQYXJ0PlxufVxuXG50eXBlIFN0eWxlT2JqZWN0UGFydCA9IHtcbiAgY3NzOiBzdHJpbmc7XG4gIG1lZGlhOiBzdHJpbmc7XG4gIHNvdXJjZU1hcDogP3N0cmluZ1xufVxuKi9cblxudmFyIHN0eWxlc0luRG9tID0gey8qXG4gIFtpZDogbnVtYmVyXToge1xuICAgIGlkOiBudW1iZXIsXG4gICAgcmVmczogbnVtYmVyLFxuICAgIHBhcnRzOiBBcnJheTwob2JqPzogU3R5bGVPYmplY3RQYXJ0KSA9PiB2b2lkPlxuICB9XG4qL31cblxudmFyIGhlYWQgPSBoYXNEb2N1bWVudCAmJiAoZG9jdW1lbnQuaGVhZCB8fCBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdKVxudmFyIHNpbmdsZXRvbkVsZW1lbnQgPSBudWxsXG52YXIgc2luZ2xldG9uQ291bnRlciA9IDBcbnZhciBpc1Byb2R1Y3Rpb24gPSBmYWxzZVxudmFyIG5vb3AgPSBmdW5jdGlvbiAoKSB7fVxuXG4vLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbi8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcbnZhciBpc09sZElFID0gdHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgL21zaWUgWzYtOV1cXGIvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChwYXJlbnRJZCwgbGlzdCwgX2lzUHJvZHVjdGlvbikge1xuICBpc1Byb2R1Y3Rpb24gPSBfaXNQcm9kdWN0aW9uXG5cbiAgdmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhwYXJlbnRJZCwgbGlzdClcbiAgYWRkU3R5bGVzVG9Eb20oc3R5bGVzKVxuXG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUgKG5ld0xpc3QpIHtcbiAgICB2YXIgbWF5UmVtb3ZlID0gW11cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGl0ZW0gPSBzdHlsZXNbaV1cbiAgICAgIHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdXG4gICAgICBkb21TdHlsZS5yZWZzLS1cbiAgICAgIG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKVxuICAgIH1cbiAgICBpZiAobmV3TGlzdCkge1xuICAgICAgc3R5bGVzID0gbGlzdFRvU3R5bGVzKHBhcmVudElkLCBuZXdMaXN0KVxuICAgICAgYWRkU3R5bGVzVG9Eb20oc3R5bGVzKVxuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXMgPSBbXVxuICAgIH1cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldXG4gICAgICBpZiAoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgZG9tU3R5bGUucGFydHNbal0oKVxuICAgICAgICB9XG4gICAgICAgIGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20gKHN0eWxlcyAvKiBBcnJheTxTdHlsZU9iamVjdD4gKi8pIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IHN0eWxlc1tpXVxuICAgIHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdXG4gICAgaWYgKGRvbVN0eWxlKSB7XG4gICAgICBkb21TdHlsZS5yZWZzKytcbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSlcbiAgICAgIH1cbiAgICAgIGZvciAoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0pKVxuICAgICAgfVxuICAgICAgaWYgKGRvbVN0eWxlLnBhcnRzLmxlbmd0aCA+IGl0ZW0ucGFydHMubGVuZ3RoKSB7XG4gICAgICAgIGRvbVN0eWxlLnBhcnRzLmxlbmd0aCA9IGl0ZW0ucGFydHMubGVuZ3RoXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBwYXJ0cyA9IFtdXG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgcGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdKSlcbiAgICAgIH1cbiAgICAgIHN0eWxlc0luRG9tW2l0ZW0uaWRdID0geyBpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50ICgpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJylcbiAgc3R5bGVFbGVtZW50LnR5cGUgPSAndGV4dC9jc3MnXG4gIGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVFbGVtZW50KVxuICByZXR1cm4gc3R5bGVFbGVtZW50XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlIChvYmogLyogU3R5bGVPYmplY3RQYXJ0ICovKSB7XG4gIHZhciB1cGRhdGUsIHJlbW92ZVxuICB2YXIgc3R5bGVFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc3R5bGVbZGF0YS12dWUtc3NyLWlkfj1cIicgKyBvYmouaWQgKyAnXCJdJylcblxuICBpZiAoc3R5bGVFbGVtZW50KSB7XG4gICAgaWYgKGlzUHJvZHVjdGlvbikge1xuICAgICAgLy8gaGFzIFNTUiBzdHlsZXMgYW5kIGluIHByb2R1Y3Rpb24gbW9kZS5cbiAgICAgIC8vIHNpbXBseSBkbyBub3RoaW5nLlxuICAgICAgcmV0dXJuIG5vb3BcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gaGFzIFNTUiBzdHlsZXMgYnV0IGluIGRldiBtb2RlLlxuICAgICAgLy8gZm9yIHNvbWUgcmVhc29uIENocm9tZSBjYW4ndCBoYW5kbGUgc291cmNlIG1hcCBpbiBzZXJ2ZXItcmVuZGVyZWRcbiAgICAgIC8vIHN0eWxlIHRhZ3MgLSBzb3VyY2UgbWFwcyBpbiA8c3R5bGU+IG9ubHkgd29ya3MgaWYgdGhlIHN0eWxlIHRhZyBpc1xuICAgICAgLy8gY3JlYXRlZCBhbmQgaW5zZXJ0ZWQgZHluYW1pY2FsbHkuIFNvIHdlIHJlbW92ZSB0aGUgc2VydmVyIHJlbmRlcmVkXG4gICAgICAvLyBzdHlsZXMgYW5kIGluamVjdCBuZXcgb25lcy5cbiAgICAgIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudClcbiAgICB9XG4gIH1cblxuICBpZiAoaXNPbGRJRSkge1xuICAgIC8vIHVzZSBzaW5nbGV0b24gbW9kZSBmb3IgSUU5LlxuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrXG4gICAgc3R5bGVFbGVtZW50ID0gc2luZ2xldG9uRWxlbWVudCB8fCAoc2luZ2xldG9uRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudCgpKVxuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIGZhbHNlKVxuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIHRydWUpXG4gIH0gZWxzZSB7XG4gICAgLy8gdXNlIG11bHRpLXN0eWxlLXRhZyBtb2RlIGluIGFsbCBvdGhlciBjYXNlc1xuICAgIHN0eWxlRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudCgpXG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudClcbiAgICByZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpXG4gICAgfVxuICB9XG5cbiAgdXBkYXRlKG9iailcblxuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUgKG5ld09iaiAvKiBTdHlsZU9iamVjdFBhcnQgKi8pIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJlxuICAgICAgICAgIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmXG4gICAgICAgICAgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpXG4gICAgfVxuICB9XG59XG5cbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXVxuXG4gIHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJylcbiAgfVxufSkoKVxuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnIChzdHlsZUVsZW1lbnQsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmouY3NzXG5cbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpXG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpXG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZUVsZW1lbnQuY2hpbGROb2Rlc1xuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKVxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGVFbGVtZW50Lmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSlcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGNzc05vZGUpXG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcgKHN0eWxlRWxlbWVudCwgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzXG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcFxuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpXG4gIH1cblxuICBpZiAoc291cmNlTWFwKSB7XG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIuY2hyb21lLmNvbS9kZXZ0b29scy9kb2NzL2phdmFzY3JpcHQtZGVidWdnaW5nXG4gICAgLy8gdGhpcyBtYWtlcyBzb3VyY2UgbWFwcyBpbnNpZGUgc3R5bGUgdGFncyB3b3JrIHByb3Blcmx5IGluIENocm9tZVxuICAgIGNzcyArPSAnXFxuLyojIHNvdXJjZVVSTD0nICsgc291cmNlTWFwLnNvdXJjZXNbMF0gKyAnICovJ1xuICAgIC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG4gICAgY3NzICs9ICdcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LCcgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgJyAqLydcbiAgfVxuXG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3NcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZClcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpXG4gIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1xuLy8gbW9kdWxlIGlkID0gOTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCIsIi8qKlxuICogVHJhbnNsYXRlcyB0aGUgbGlzdCBmb3JtYXQgcHJvZHVjZWQgYnkgY3NzLWxvYWRlciBpbnRvIHNvbWV0aGluZ1xuICogZWFzaWVyIHRvIG1hbmlwdWxhdGUuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbGlzdFRvU3R5bGVzIChwYXJlbnRJZCwgbGlzdCkge1xuICB2YXIgc3R5bGVzID0gW11cbiAgdmFyIG5ld1N0eWxlcyA9IHt9XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXVxuICAgIHZhciBpZCA9IGl0ZW1bMF1cbiAgICB2YXIgY3NzID0gaXRlbVsxXVxuICAgIHZhciBtZWRpYSA9IGl0ZW1bMl1cbiAgICB2YXIgc291cmNlTWFwID0gaXRlbVszXVxuICAgIHZhciBwYXJ0ID0ge1xuICAgICAgaWQ6IHBhcmVudElkICsgJzonICsgaSxcbiAgICAgIGNzczogY3NzLFxuICAgICAgbWVkaWE6IG1lZGlhLFxuICAgICAgc291cmNlTWFwOiBzb3VyY2VNYXBcbiAgICB9XG4gICAgaWYgKCFuZXdTdHlsZXNbaWRdKSB7XG4gICAgICBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0geyBpZDogaWQsIHBhcnRzOiBbcGFydF0gfSlcbiAgICB9IGVsc2Uge1xuICAgICAgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpXG4gICAgfVxuICB9XG4gIHJldHVybiBzdHlsZXNcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2xpc3RUb1N0eWxlcy5qc1xuLy8gbW9kdWxlIGlkID0gOTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCJdLCJzb3VyY2VSb290IjoiIn0=