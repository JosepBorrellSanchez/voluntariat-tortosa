webpackJsonp([10],{

/***/ 65:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(6)
/* script */
var __vue_script__ = __webpack_require__(96)
/* template */
var __vue_template__ = __webpack_require__(97)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
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
Component.options.__file = "resources/assets/js/voluntariat/components/layouts/EntityMainLayout.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-259735b7", Component.options)
  } else {
    hotAPI.reload("data-v-259735b7", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__store_mutation_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store_action_types__ = __webpack_require__(7);
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
  name: 'app',
  data: function data() {
    return {
      clipped: true,
      clippedLeft: false,
      drawer: true,
      fixed: false,
      mobileBreakPoint: 900,
      items: [{ icon: 'home', title: 'Landing', href: '/' }, { icon: 'home', title: 'Dashboard', href: '/entity' }, { icon: 'inbox', title: 'inbox', href: '/inbox' }, { icon: 'assignment', title: 'Les meves activitats', href: '/activitats_user' }, { icon: 'account_box', title: 'El meu compte' }],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Voluntariat Tortosa',
      windowSize: {
        x: 0,
        y: 0
      },
      menu: false
      // user: this.$store.state.user
    };
  },

  computed: {
    user: {
      get: function get() {
        return this.$store.state.user;
      },
      set: function set(value) {
        this.$store.commit(__WEBPACK_IMPORTED_MODULE_1__store_mutation_types__["n" /* SET_USER */], value);
      }
    }
  },
  methods: {
    onResize: function onResize() {
      this.windowSize = { x: window.innerWidth, y: window.innerHeight };
    },
    logout: function logout() {
      // let config = {
      //   headers: { 'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content') }
      // }
      this.$store.dispatch(__WEBPACK_IMPORTED_MODULE_2__store_action_types__["y" /* LOGOUT */]);

      // let config = {
      //   headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') }
      // }
      // axios.post('logout').then((response) => {
      //   console.log('Logout!')
      // }).catch((error) => {
      //   console.log(error);
      // });
    }
  },
  mounted: function mounted() {
    this.onResize();
    // this.$store.dispatch(actionTypes.FETCH_USER, 1);
  }
});

/***/ }),

/***/ 97:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-app",
    {
      directives: [
        {
          name: "resize",
          rawName: "v-resize",
          value: _vm.onResize,
          expression: "onResize"
        }
      ]
    },
    [
      _c(
        "v-navigation-drawer",
        {
          attrs: {
            persistent: "",
            "mini-variant": _vm.miniVariant,
            "mobile-break-point": _vm.mobileBreakPoint,
            "enable-resize-watcher": "",
            clipped: _vm.clipped,
            "hide-overlay": "",
            absolute: "",
            app: ""
          },
          model: {
            value: _vm.drawer,
            callback: function($$v) {
              _vm.drawer = $$v
            },
            expression: "drawer"
          }
        },
        [
          _c(
            "v-list",
            _vm._l(_vm.items, function(item, i) {
              return _c(
                "v-list-tile",
                { key: i, attrs: { value: "true", router: "", to: item.href } },
                [
                  _c(
                    "v-list-tile-action",
                    [
                      _c("v-icon", {
                        domProps: { innerHTML: _vm._s(item.icon) }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-list-tile-content",
                    [
                      _c("v-list-tile-title", {
                        domProps: { textContent: _vm._s(item.title) }
                      })
                    ],
                    1
                  )
                ],
                1
              )
            })
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-toolbar",
        { attrs: { app: "", "clipped-left": _vm.clipped, absolute: "" } },
        [
          _c("v-toolbar-side-icon", {
            on: {
              click: function($event) {
                $event.stopPropagation()
                _vm.drawer = !_vm.drawer
              }
            }
          }),
          _vm._v(" "),
          _c("v-toolbar-title", {
            domProps: { textContent: _vm._s(_vm.title) }
          }),
          _vm._v(" "),
          _c("v-spacer"),
          _vm._v(" "),
          _c(
            "v-toolbar-items",
            [
              _c(
                "v-menu",
                {
                  attrs: {
                    "offset-x": "",
                    "close-on-content-click": false,
                    "nudge-width": 200
                  },
                  model: {
                    value: _vm.menu,
                    callback: function($$v) {
                      _vm.menu = $$v
                    },
                    expression: "menu"
                  }
                },
                [
                  _c(
                    "v-btn",
                    {
                      attrs: { slot: "activator", flat: "" },
                      slot: "activator"
                    },
                    [
                      _c("v-icon", [_vm._v("account_circle")]),
                      _vm._v(
                        "\n          " + _vm._s(_vm.user.name) + "\n        "
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-card",
                    [
                      _c(
                        "v-list",
                        [
                          _c(
                            "v-list-tile",
                            { attrs: { avatar: "" } },
                            [
                              _c("v-list-tile-avatar", [
                                _c("img", {
                                  attrs: {
                                    src:
                                      "https://vuetifyjs.com/static/doc-images/john.jpg",
                                    alt: "John"
                                  }
                                })
                              ]),
                              _vm._v(" "),
                              _c(
                                "v-list-tile-content",
                                [
                                  _c("v-list-tile-title", [
                                    _vm._v(_vm._s(_vm.user.name))
                                  ]),
                                  _vm._v(" "),
                                  _c("v-list-tile-sub-title", [
                                    _vm._v(_vm._s(_vm.user.email))
                                  ])
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
                      _c("v-divider"),
                      _vm._v(" "),
                      _c(
                        "v-list",
                        [
                          _c(
                            "v-list-tile",
                            [
                              _c(
                                "v-list-tile-action",
                                [
                                  _c(
                                    "v-btn",
                                    {
                                      attrs: { flat: "", href: "/" },
                                      on: { click: _vm.logout }
                                    },
                                    [
                                      _vm._v(
                                        "\n                  Logout\n                "
                                      )
                                    ]
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
      _c("v-content", [_c("v-slide-x-transition", [_c("router-view")], 1)], 1),
      _vm._v(" "),
      _c("v-footer", { attrs: { fixed: _vm.fixed, app: "" } }, [
        _c("span", [_vm._v("© 2017")])
      ])
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
    require("vue-hot-reload-api")      .rerender("data-v-259735b7", module.exports)
  }
}

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3ZvbHVudGFyaWF0L2NvbXBvbmVudHMvbGF5b3V0cy9FbnRpdHlNYWluTGF5b3V0LnZ1ZSIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy92b2x1bnRhcmlhdC9jb21wb25lbnRzL2xheW91dHMvRW50aXR5TWFpbkxheW91dC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy92b2x1bnRhcmlhdC9jb21wb25lbnRzL2xheW91dHMvRW50aXR5TWFpbkxheW91dC52dWU/YWIzOSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBLDJDQUFzUjtBQUN0UjtBQUNBLDZDQUFzTDtBQUN0TDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNkNBOztBQUNBO0FBQ0E7OztBQUVBO1FBRUE7d0JBQ0E7O2VBRUE7bUJBQ0E7Y0FDQTthQUNBO3dCQUNBO2FBQ0EseUNBQ0EsaURBQ0Esb0RBQ0EsdUVBQ0Esb0RBRUE7bUJBQ0E7YUFDQTttQkFDQTthQUNBOztXQUVBO1dBRUE7QUFIQTtZQUlBO0FBRUE7QUF2QkE7QUF3QkE7Ozs7MEJBR0E7aUNBQ0E7QUFDQTsrQkFDQTtvR0FDQTtBQUdBO0FBUkE7QUFEQTs7a0NBV0E7MERBQ0E7QUFDQTs4QkFDQTtBQUNBO0FBQ0E7QUFDQTs4RkFFQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFuQkE7OEJBb0JBO1NBQ0E7QUFDQTtBQUNBO0FBN0RBLEc7Ozs7Ozs7QUMxRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLGlCQUFpQiwyQ0FBMkMsRUFBRTtBQUMvRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLFNBQVMscURBQXFELEVBQUU7QUFDekU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLDhCQUE4QjtBQUM1RDtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLFNBQVMsYUFBYSxFQUFFO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLHNCQUFzQjtBQUNwRSwyQ0FBMkM7QUFDM0MscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixTQUFTLDRCQUE0QixFQUFFO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEMiLCJmaWxlIjoiMTAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbnZhciBfX3Z1ZV9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV1dLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFtcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLHtcXFwicG9seWZpbGxcXFwiOmZhbHNlLFxcXCJoZWxwZXJzXFxcIjpmYWxzZX1dXX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9FbnRpdHlNYWluTGF5b3V0LnZ1ZVwiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMjU5NzM1YjdcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9FbnRpdHlNYWluTGF5b3V0LnZ1ZVwiKVxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IG51bGxcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBudWxsXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvYXNzZXRzL2pzL3ZvbHVudGFyaWF0L2NvbXBvbmVudHMvbGF5b3V0cy9FbnRpdHlNYWluTGF5b3V0LnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0yNTk3MzViN1wiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTI1OTczNWI3XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3ZvbHVudGFyaWF0L2NvbXBvbmVudHMvbGF5b3V0cy9FbnRpdHlNYWluTGF5b3V0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gNjVcbi8vIG1vZHVsZSBjaHVua3MgPSAxMCIsIjx0ZW1wbGF0ZT5cbiAgPHYtYXBwIHYtcmVzaXplPVwib25SZXNpemVcIj5cbiAgICA8di1uYXZpZ2F0aW9uLWRyYXdlclxuICAgICAgcGVyc2lzdGVudFxuICAgICAgOm1pbmktdmFyaWFudD1cIm1pbmlWYXJpYW50XCJcbiAgICAgIHYtbW9kZWw9XCJkcmF3ZXJcIlxuICAgICAgOm1vYmlsZS1icmVhay1wb2ludD1cIm1vYmlsZUJyZWFrUG9pbnRcIlxuICAgICAgZW5hYmxlLXJlc2l6ZS13YXRjaGVyXG4gICAgICA6Y2xpcHBlZD1cImNsaXBwZWRcIlxuICAgICAgaGlkZS1vdmVybGF5XG4gICAgICBhYnNvbHV0ZVxuICAgICAgYXBwXG4gICAgPlxuICAgICAgPHYtbGlzdD5cbiAgICAgICAgPHYtbGlzdC10aWxlXG4gICAgICAgICAgdmFsdWU9XCJ0cnVlXCJcbiAgICAgICAgICB2LWZvcj1cIihpdGVtLCBpKSBpbiBpdGVtc1wiXG4gICAgICAgICAgOmtleT1cImlcIlxuICAgICAgICAgIHJvdXRlciA6dG89XCJpdGVtLmhyZWZcIlxuICAgICAgICA+XG4gICAgICAgICAgPHYtbGlzdC10aWxlLWFjdGlvbj5cbiAgICAgICAgICAgIDx2LWljb24gdi1odG1sPVwiaXRlbS5pY29uXCI+PC92LWljb24+XG4gICAgICAgICAgPC92LWxpc3QtdGlsZS1hY3Rpb24+XG4gICAgICAgICAgPHYtbGlzdC10aWxlLWNvbnRlbnQ+XG4gICAgICAgICAgICA8di1saXN0LXRpbGUtdGl0bGUgdi10ZXh0PVwiaXRlbS50aXRsZVwiPjwvdi1saXN0LXRpbGUtdGl0bGU+XG4gICAgICAgICAgPC92LWxpc3QtdGlsZS1jb250ZW50PlxuICAgICAgICA8L3YtbGlzdC10aWxlPlxuICAgICAgPC92LWxpc3Q+XG4gICAgPC92LW5hdmlnYXRpb24tZHJhd2VyPiBcbiAgICA8di10b29sYmFyXG4gICAgICBhcHBcbiAgICAgIDpjbGlwcGVkLWxlZnQ9XCJjbGlwcGVkXCJcbiAgICAgIGFic29sdXRlXG4gICAgPlxuICAgICAgPHYtdG9vbGJhci1zaWRlLWljb24gQGNsaWNrLnN0b3A9XCJkcmF3ZXIgPSAhZHJhd2VyXCI+PC92LXRvb2xiYXItc2lkZS1pY29uPlxuICAgICAgPHYtdG9vbGJhci10aXRsZSB2LXRleHQ9XCJ0aXRsZVwiPjwvdi10b29sYmFyLXRpdGxlPlxuICAgICAgPHYtc3BhY2VyPjwvdi1zcGFjZXI+XG4gICAgICA8di10b29sYmFyLWl0ZW1zPlxuICAgICAgICA8di1tZW51XG4gICAgICAgICAgb2Zmc2V0LXhcbiAgICAgICAgICA6Y2xvc2Utb24tY29udGVudC1jbGljaz1cImZhbHNlXCJcbiAgICAgICAgICA6bnVkZ2Utd2lkdGg9XCIyMDBcIlxuICAgICAgICAgIHYtbW9kZWw9XCJtZW51XCJcbiAgICAgICAgPlxuICAgICAgICAgIDx2LWJ0biBmbGF0IHNsb3Q9XCJhY3RpdmF0b3JcIj5cbiAgICAgICAgICAgIDx2LWljb24+YWNjb3VudF9jaXJjbGU8L3YtaWNvbj5cbiAgICAgICAgICAgIHt7IHVzZXIubmFtZSB9fVxuICAgICAgICAgIDwvdi1idG4+XG4gICAgICAgICAgPHYtY2FyZD5cbiAgICAgICAgICAgIDx2LWxpc3Q+XG4gICAgICAgICAgICAgIDx2LWxpc3QtdGlsZSBhdmF0YXI+XG4gICAgICAgICAgICAgICAgPHYtbGlzdC10aWxlLWF2YXRhcj5cbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly92dWV0aWZ5anMuY29tL3N0YXRpYy9kb2MtaW1hZ2VzL2pvaG4uanBnXCIgYWx0PVwiSm9oblwiPlxuICAgICAgICAgICAgICAgIDwvdi1saXN0LXRpbGUtYXZhdGFyPlxuICAgICAgICAgICAgICAgIDx2LWxpc3QtdGlsZS1jb250ZW50PlxuICAgICAgICAgICAgICAgICAgPHYtbGlzdC10aWxlLXRpdGxlPnt7IHVzZXIubmFtZSB9fTwvdi1saXN0LXRpbGUtdGl0bGU+XG4gICAgICAgICAgICAgICAgICA8di1saXN0LXRpbGUtc3ViLXRpdGxlPnt7IHVzZXIuZW1haWwgfX08L3YtbGlzdC10aWxlLXN1Yi10aXRsZT5cbiAgICAgICAgICAgICAgICA8L3YtbGlzdC10aWxlLWNvbnRlbnQ+XG4gICAgICAgICAgICAgIDwvdi1saXN0LXRpbGU+XG4gICAgICAgICAgICA8L3YtbGlzdD5cbiAgICAgICAgICAgIDx2LWRpdmlkZXI+PC92LWRpdmlkZXI+XG4gICAgICAgICAgICA8di1saXN0PlxuICAgICAgICAgICAgICA8di1saXN0LXRpbGU+XG4gICAgICAgICAgICAgICAgPHYtbGlzdC10aWxlLWFjdGlvbj5cbiAgICAgICAgICAgICAgICAgIDx2LWJ0biBmbGF0IGhyZWY9XCIvXCIgQGNsaWNrPVwibG9nb3V0XCI+XG4gICAgICAgICAgICAgICAgICAgIExvZ291dFxuICAgICAgICAgICAgICAgICAgPC92LWJ0bj5cbiAgICAgICAgICAgICAgICA8L3YtbGlzdC10aWxlLWFjdGlvbj5cbiAgICAgICAgICAgICAgPC92LWxpc3QtdGlsZT5cbiAgICAgICAgICAgIDwvdi1saXN0PlxuICAgICAgICAgIDwvdi1jYXJkPlxuICAgICAgICA8L3YtbWVudT5cbiAgICAgIDwvdi10b29sYmFyLWl0ZW1zPlxuICAgIDwvdi10b29sYmFyPlxuICAgIDx2LWNvbnRlbnQ+XG4gICAgICA8di1zbGlkZS14LXRyYW5zaXRpb24+XG4gICAgICAgIDxyb3V0ZXItdmlldy8+XG4gICAgICA8L3Ytc2xpZGUteC10cmFuc2l0aW9uPlxuICAgIDwvdi1jb250ZW50PlxuICAgIDx2LWZvb3RlciA6Zml4ZWQ9XCJmaXhlZFwiIGFwcD5cbiAgICAgIDxzcGFuPiZjb3B5OyAyMDE3PC9zcGFuPlxuICAgIDwvdi1mb290ZXI+XG4gIDwvdi1hcHA+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICBpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG4gIGltcG9ydCAqIGFzIG11dGF0aW9uVHlwZXMgZnJvbSAnLi4vLi4vc3RvcmUvbXV0YXRpb24tdHlwZXMnXG4gIGltcG9ydCAqIGFzIGFjdGlvblR5cGVzIGZyb20gJy4uLy4uL3N0b3JlL2FjdGlvbi10eXBlcydcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnYXBwJyxcbiAgZGF0YSAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNsaXBwZWQ6IHRydWUsXG4gICAgICBjbGlwcGVkTGVmdDogZmFsc2UsXG4gICAgICBkcmF3ZXI6IHRydWUsXG4gICAgICBmaXhlZDogZmFsc2UsXG4gICAgICBtb2JpbGVCcmVha1BvaW50OiA5MDAsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7IGljb246ICdob21lJywgdGl0bGU6ICdMYW5kaW5nJywgaHJlZjogJy8nIH0sXG4gICAgICAgIHsgaWNvbjogJ2hvbWUnLCB0aXRsZTogJ0Rhc2hib2FyZCcsIGhyZWY6ICcvZW50aXR5JyB9LFxuICAgICAgICB7IGljb246ICdpbmJveCcsIHRpdGxlOiAnaW5ib3gnLCBocmVmOiAnL2luYm94JyB9LFxuICAgICAgICB7IGljb246ICdhc3NpZ25tZW50JywgdGl0bGU6ICdMZXMgbWV2ZXMgYWN0aXZpdGF0cycsIGhyZWY6ICcvYWN0aXZpdGF0c191c2VyJyB9LFxuICAgICAgICB7IGljb246ICdhY2NvdW50X2JveCcsIHRpdGxlOiAnRWwgbWV1IGNvbXB0ZScgfVxuICAgICAgXSxcbiAgICAgIG1pbmlWYXJpYW50OiBmYWxzZSxcbiAgICAgIHJpZ2h0OiB0cnVlLFxuICAgICAgcmlnaHREcmF3ZXI6IGZhbHNlLFxuICAgICAgdGl0bGU6ICdWb2x1bnRhcmlhdCBUb3J0b3NhJyxcbiAgICAgIHdpbmRvd1NpemU6IHtcbiAgICAgICAgeDogMCxcbiAgICAgICAgeTogMFxuICAgICAgfSxcbiAgICAgIG1lbnU6IGZhbHNlLFxuICAgICAgLy8gdXNlcjogdGhpcy4kc3RvcmUuc3RhdGUudXNlclxuICAgIH1cbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICB1c2VyOiB7XG4gICAgICBnZXQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiRzdG9yZS5zdGF0ZS51c2VyXG4gICAgICB9LFxuICAgICAgc2V0KHZhbHVlKSB7XG4gICAgICAgIHRoaXMuJHN0b3JlLmNvbW1pdChtdXRhdGlvblR5cGVzLlNFVF9VU0VSLCB2YWx1ZSlcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBvblJlc2l6ZSAoKSB7XG4gICAgICB0aGlzLndpbmRvd1NpemUgPSB7IHg6IHdpbmRvdy5pbm5lcldpZHRoLCB5OiB3aW5kb3cuaW5uZXJIZWlnaHQgfVxuICAgIH0sXG4gICAgbG9nb3V0ICgpIHtcbiAgICAgIC8vIGxldCBjb25maWcgPSB7XG4gICAgICAvLyAgIGhlYWRlcnM6IHsgJ1gtQ1NSRi1UT0tFTic6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21ldGFbbmFtZT1cImNzcmYtdG9rZW5cIl0nKS5nZXRBdHRyaWJ1dGUoJ2NvbnRlbnQnKSB9XG4gICAgICAvLyB9XG4gICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaChhY3Rpb25UeXBlcy5MT0dPVVQpXG5cbiAgICAgIC8vIGxldCBjb25maWcgPSB7XG4gICAgICAvLyAgIGhlYWRlcnM6IHsgJ1gtQ1NSRi1UT0tFTic6ICQoJ21ldGFbbmFtZT1cImNzcmYtdG9rZW5cIl0nKS5hdHRyKCdjb250ZW50JykgfVxuICAgICAgLy8gfVxuICAgICAgLy8gYXhpb3MucG9zdCgnbG9nb3V0JykudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgIC8vICAgY29uc29sZS5sb2coJ0xvZ291dCEnKVxuICAgICAgLy8gfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAvLyAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgIC8vIH0pO1xuICAgIH1cbiAgfSxcbiAgbW91bnRlZCAoKSB7XG4gICAgdGhpcy5vblJlc2l6ZSgpXG4gICAgLy8gdGhpcy4kc3RvcmUuZGlzcGF0Y2goYWN0aW9uVHlwZXMuRkVUQ0hfVVNFUiwgMSk7XG4gIH1cbn1cbjwvc2NyaXB0PlxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy92b2x1bnRhcmlhdC9jb21wb25lbnRzL2xheW91dHMvRW50aXR5TWFpbkxheW91dC52dWUiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwidi1hcHBcIixcbiAgICB7XG4gICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiBcInJlc2l6ZVwiLFxuICAgICAgICAgIHJhd05hbWU6IFwidi1yZXNpemVcIixcbiAgICAgICAgICB2YWx1ZTogX3ZtLm9uUmVzaXplLFxuICAgICAgICAgIGV4cHJlc3Npb246IFwib25SZXNpemVcIlxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJ2LW5hdmlnYXRpb24tZHJhd2VyXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgcGVyc2lzdGVudDogXCJcIixcbiAgICAgICAgICAgIFwibWluaS12YXJpYW50XCI6IF92bS5taW5pVmFyaWFudCxcbiAgICAgICAgICAgIFwibW9iaWxlLWJyZWFrLXBvaW50XCI6IF92bS5tb2JpbGVCcmVha1BvaW50LFxuICAgICAgICAgICAgXCJlbmFibGUtcmVzaXplLXdhdGNoZXJcIjogXCJcIixcbiAgICAgICAgICAgIGNsaXBwZWQ6IF92bS5jbGlwcGVkLFxuICAgICAgICAgICAgXCJoaWRlLW92ZXJsYXlcIjogXCJcIixcbiAgICAgICAgICAgIGFic29sdXRlOiBcIlwiLFxuICAgICAgICAgICAgYXBwOiBcIlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgdmFsdWU6IF92bS5kcmF3ZXIsXG4gICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgIF92bS5kcmF3ZXIgPSAkJHZcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBleHByZXNzaW9uOiBcImRyYXdlclwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInYtbGlzdFwiLFxuICAgICAgICAgICAgX3ZtLl9sKF92bS5pdGVtcywgZnVuY3Rpb24oaXRlbSwgaSkge1xuICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgXCJ2LWxpc3QtdGlsZVwiLFxuICAgICAgICAgICAgICAgIHsga2V5OiBpLCBhdHRyczogeyB2YWx1ZTogXCJ0cnVlXCIsIHJvdXRlcjogXCJcIiwgdG86IGl0ZW0uaHJlZiB9IH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidi1saXN0LXRpbGUtYWN0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtaWNvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyBpbm5lckhUTUw6IF92bS5fcyhpdGVtLmljb24pIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInYtbGlzdC10aWxlLWNvbnRlbnRcIixcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi1saXN0LXRpbGUtdGl0bGVcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdGV4dENvbnRlbnQ6IF92bS5fcyhpdGVtLnRpdGxlKSB9XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJ2LXRvb2xiYXJcIixcbiAgICAgICAgeyBhdHRyczogeyBhcHA6IFwiXCIsIFwiY2xpcHBlZC1sZWZ0XCI6IF92bS5jbGlwcGVkLCBhYnNvbHV0ZTogXCJcIiB9IH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcInYtdG9vbGJhci1zaWRlLWljb25cIiwge1xuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICAgICAgICAgIF92bS5kcmF3ZXIgPSAhX3ZtLmRyYXdlclxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInYtdG9vbGJhci10aXRsZVwiLCB7XG4gICAgICAgICAgICBkb21Qcm9wczogeyB0ZXh0Q29udGVudDogX3ZtLl9zKF92bS50aXRsZSkgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJ2LXNwYWNlclwiKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ2LXRvb2xiYXItaXRlbXNcIixcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2LW1lbnVcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICBcIm9mZnNldC14XCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiY2xvc2Utb24tY29udGVudC1jbGlja1wiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgXCJudWRnZS13aWR0aFwiOiAyMDBcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLm1lbnUsXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0ubWVudSA9ICQkdlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIm1lbnVcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNsb3Q6IFwiYWN0aXZhdG9yXCIsIGZsYXQ6IFwiXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBzbG90OiBcImFjdGl2YXRvclwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtaWNvblwiLCBbX3ZtLl92KFwiYWNjb3VudF9jaXJjbGVcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICBcIiArIF92bS5fcyhfdm0udXNlci5uYW1lKSArIFwiXFxuICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2LWNhcmRcIixcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWxpc3RcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWxpc3QtdGlsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgYXZhdGFyOiBcIlwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtbGlzdC10aWxlLWF2YXRhclwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImh0dHBzOi8vdnVldGlmeWpzLmNvbS9zdGF0aWMvZG9jLWltYWdlcy9qb2huLmpwZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0OiBcIkpvaG5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtbGlzdC10aWxlLWNvbnRlbnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi1saXN0LXRpbGUtdGl0bGVcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0udXNlci5uYW1lKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi1saXN0LXRpbGUtc3ViLXRpdGxlXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLnVzZXIuZW1haWwpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LWRpdmlkZXJcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidi1saXN0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1saXN0LXRpbGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWxpc3QtdGlsZS1hY3Rpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBmbGF0OiBcIlwiLCBocmVmOiBcIi9cIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLmxvZ291dCB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICBMb2dvdXRcXG4gICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcInYtY29udGVudFwiLCBbX2MoXCJ2LXNsaWRlLXgtdHJhbnNpdGlvblwiLCBbX2MoXCJyb3V0ZXItdmlld1wiKV0sIDEpXSwgMSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJ2LWZvb3RlclwiLCB7IGF0dHJzOiB7IGZpeGVkOiBfdm0uZml4ZWQsIGFwcDogXCJcIiB9IH0sIFtcbiAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLCqSAyMDE3XCIpXSlcbiAgICAgIF0pXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5tb2R1bGUuZXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtMjU5NzM1YjdcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTI1OTczNWI3XCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy92b2x1bnRhcmlhdC9jb21wb25lbnRzL2xheW91dHMvRW50aXR5TWFpbkxheW91dC52dWVcbi8vIG1vZHVsZSBpZCA9IDk3XG4vLyBtb2R1bGUgY2h1bmtzID0gMTAiXSwic291cmNlUm9vdCI6IiJ9