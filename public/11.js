webpackJsonp([11],{

/***/ 114:
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
      items: [{ icon: 'home', title: 'Landing', href: '/' }, { icon: 'home', title: 'Dashboard', href: '/admin' }, { icon: 'assignment', title: 'Activitats', href: '/activitats' }, { icon: 'home', title: 'Entitats', href: '/entitats' }, { icon: 'home', title: 'Voluntaris', href: '/voluntaris' }, { icon: 'home', title: 'Administradors', href: '/admins' }, { icon: 'account_box', title: 'El meu compte' }],
      miniVariant: false,
      title: 'Voluntariat Tortosa',
      windowSize: {
        x: 0,
        y: 0
      },
      menu: false
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
    },
    roles: {
      get: function get() {
        return this.$store.state.roles;
      },
      set: function set(value) {
        return value;
      }
    }
  },
  methods: {
    onResize: function onResize() {
      this.windowSize = { x: window.innerWidth, y: window.innerHeight };
    },
    logout: function logout() {
      this.$store.dispatch(__WEBPACK_IMPORTED_MODULE_2__store_action_types__["y" /* LOGOUT */]);
    }
  },
  mounted: function mounted() {
    this.onResize();
  }
});

/***/ }),

/***/ 115:
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
              return (item.title === "Administradors" &&
                _vm.roles === "superAdmin") ||
                item.title !== "Administradors"
                ? _c(
                    "v-list-tile",
                    {
                      key: i,
                      attrs: { value: "true", router: "", to: item.href }
                    },
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
                : _vm._e()
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
    require("vue-hot-reload-api")      .rerender("data-v-322abc5e", module.exports)
  }
}

/***/ }),

/***/ 72:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(6)
/* script */
var __vue_script__ = __webpack_require__(114)
/* template */
var __vue_template__ = __webpack_require__(115)
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
Component.options.__file = "resources/assets/js/voluntariat/components/layouts/AdminMainLayout.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-322abc5e", Component.options)
  } else {
    hotAPI.reload("data-v-322abc5e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy92b2x1bnRhcmlhdC9jb21wb25lbnRzL2xheW91dHMvQWRtaW5NYWluTGF5b3V0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3ZvbHVudGFyaWF0L2NvbXBvbmVudHMvbGF5b3V0cy9BZG1pbk1haW5MYXlvdXQudnVlP2JjNTciLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy92b2x1bnRhcmlhdC9jb21wb25lbnRzL2xheW91dHMvQWRtaW5NYWluTGF5b3V0LnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFzRkE7O0FBQ0E7QUFDQTs7O0FBRUE7UUFFQTt3QkFDQTs7ZUFFQTttQkFDQTtjQUNBO2FBQ0E7d0JBQ0E7YUFDQSx5Q0FDQSxpREFDQSw2REFDQSwwREFDQSwwREFDQSxnRUFDQSwyQ0FFQTttQkFDQTthQUNBOztXQUVBO1dBRUE7QUFIQTtZQUtBO0FBdEJBO0FBdUJBOzs7OzBCQUdBO2lDQUNBO0FBQ0E7K0JBQ0E7b0dBQ0E7QUFFQTtBQVBBOzswQkFTQTtpQ0FDQTtBQUNBOytCQUNBO2VBQ0E7QUFHQTtBQVJBO0FBVEE7O2tDQW1CQTswREFDQTtBQUNBOzhCQUNBOzhGQUNBO0FBRUE7QUFQQTs4QkFRQTtTQUNBO0FBQ0E7QUF2REEsRzs7Ozs7OztBQzNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsU0FBUyxxREFBcUQsRUFBRTtBQUN6RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkIsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsOEJBQThCO0FBQzVEO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsU0FBUyxhQUFhLEVBQUU7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsc0JBQXNCO0FBQ3BFLDJDQUEyQztBQUMzQyxxQ0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLFNBQVMsNEJBQTRCLEVBQUU7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7OztBQzdPQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBc1I7QUFDdFI7QUFDQSw4Q0FBc0w7QUFDdEw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVEIiwiZmlsZSI6IjExLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8di1hcHAgdi1yZXNpemU9XCJvblJlc2l6ZVwiPlxuICAgIDx2LW5hdmlnYXRpb24tZHJhd2VyXG4gICAgICBwZXJzaXN0ZW50XG4gICAgICA6bWluaS12YXJpYW50PVwibWluaVZhcmlhbnRcIlxuICAgICAgdi1tb2RlbD1cImRyYXdlclwiXG4gICAgICA6bW9iaWxlLWJyZWFrLXBvaW50PVwibW9iaWxlQnJlYWtQb2ludFwiXG4gICAgICBlbmFibGUtcmVzaXplLXdhdGNoZXJcbiAgICAgIDpjbGlwcGVkPVwiY2xpcHBlZFwiXG4gICAgICBoaWRlLW92ZXJsYXlcbiAgICAgIGFic29sdXRlXG4gICAgICBhcHBcbiAgICA+XG4gICAgICA8di1saXN0PlxuICAgICAgICA8di1saXN0LXRpbGVcbiAgICAgICAgICB2YWx1ZT1cInRydWVcIlxuICAgICAgICAgIHYtZm9yPVwiKGl0ZW0sIGkpIGluIGl0ZW1zXCJcbiAgICAgICAgICA6a2V5PVwiaVwiXG4gICAgICAgICAgcm91dGVyIDp0bz1cIml0ZW0uaHJlZlwiXG4gICAgICAgICAgdi1pZj1cIihpdGVtLnRpdGxlID09PSAnQWRtaW5pc3RyYWRvcnMnICYmIHJvbGVzID09PSAnc3VwZXJBZG1pbicpIHx8IGl0ZW0udGl0bGUgIT09ICdBZG1pbmlzdHJhZG9ycydcIlxuICAgICAgICA+XG4gICAgICAgICAgPHYtbGlzdC10aWxlLWFjdGlvbj5cbiAgICAgICAgICAgIDx2LWljb24gdi1odG1sPVwiaXRlbS5pY29uXCI+PC92LWljb24+XG4gICAgICAgICAgPC92LWxpc3QtdGlsZS1hY3Rpb24+XG4gICAgICAgICAgPHYtbGlzdC10aWxlLWNvbnRlbnQ+XG4gICAgICAgICAgICA8di1saXN0LXRpbGUtdGl0bGUgdi10ZXh0PVwiaXRlbS50aXRsZVwiPjwvdi1saXN0LXRpbGUtdGl0bGU+XG4gICAgICAgICAgPC92LWxpc3QtdGlsZS1jb250ZW50PlxuICAgICAgICA8L3YtbGlzdC10aWxlPlxuICAgICAgPC92LWxpc3Q+XG4gICAgPC92LW5hdmlnYXRpb24tZHJhd2VyPiBcbiAgICA8di10b29sYmFyXG4gICAgICBhcHBcbiAgICAgIDpjbGlwcGVkLWxlZnQ9XCJjbGlwcGVkXCJcbiAgICAgIGFic29sdXRlXG4gICAgPlxuICAgICAgPHYtdG9vbGJhci1zaWRlLWljb24gQGNsaWNrLnN0b3A9XCJkcmF3ZXIgPSAhZHJhd2VyXCI+PC92LXRvb2xiYXItc2lkZS1pY29uPlxuICAgICAgPHYtdG9vbGJhci10aXRsZSB2LXRleHQ9XCJ0aXRsZVwiPjwvdi10b29sYmFyLXRpdGxlPlxuICAgICAgPHYtc3BhY2VyPjwvdi1zcGFjZXI+XG4gICAgICA8di10b29sYmFyLWl0ZW1zPlxuICAgICAgICA8di1tZW51XG4gICAgICAgICAgb2Zmc2V0LXhcbiAgICAgICAgICA6Y2xvc2Utb24tY29udGVudC1jbGljaz1cImZhbHNlXCJcbiAgICAgICAgICA6bnVkZ2Utd2lkdGg9XCIyMDBcIlxuICAgICAgICAgIHYtbW9kZWw9XCJtZW51XCJcbiAgICAgICAgPlxuICAgICAgICAgIDx2LWJ0biBmbGF0IHNsb3Q9XCJhY3RpdmF0b3JcIj5cbiAgICAgICAgICAgIDx2LWljb24+YWNjb3VudF9jaXJjbGU8L3YtaWNvbj5cbiAgICAgICAgICAgIHt7IHVzZXIubmFtZSB9fVxuICAgICAgICAgIDwvdi1idG4+XG4gICAgICAgICAgPHYtY2FyZD5cbiAgICAgICAgICAgIDx2LWxpc3Q+XG4gICAgICAgICAgICAgIDx2LWxpc3QtdGlsZSBhdmF0YXI+XG4gICAgICAgICAgICAgICAgPHYtbGlzdC10aWxlLWF2YXRhcj5cbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly92dWV0aWZ5anMuY29tL3N0YXRpYy9kb2MtaW1hZ2VzL2pvaG4uanBnXCIgYWx0PVwiSm9oblwiPlxuICAgICAgICAgICAgICAgIDwvdi1saXN0LXRpbGUtYXZhdGFyPlxuICAgICAgICAgICAgICAgIDx2LWxpc3QtdGlsZS1jb250ZW50PlxuICAgICAgICAgICAgICAgICAgPHYtbGlzdC10aWxlLXRpdGxlPnt7IHVzZXIubmFtZSB9fTwvdi1saXN0LXRpbGUtdGl0bGU+XG4gICAgICAgICAgICAgICAgICA8di1saXN0LXRpbGUtc3ViLXRpdGxlPnt7IHVzZXIuZW1haWwgfX08L3YtbGlzdC10aWxlLXN1Yi10aXRsZT5cbiAgICAgICAgICAgICAgICA8L3YtbGlzdC10aWxlLWNvbnRlbnQ+XG4gICAgICAgICAgICAgIDwvdi1saXN0LXRpbGU+XG4gICAgICAgICAgICA8L3YtbGlzdD5cbiAgICAgICAgICAgIDx2LWRpdmlkZXI+PC92LWRpdmlkZXI+XG4gICAgICAgICAgICA8di1saXN0PlxuICAgICAgICAgICAgICA8di1saXN0LXRpbGU+XG4gICAgICAgICAgICAgICAgPHYtbGlzdC10aWxlLWFjdGlvbj5cbiAgICAgICAgICAgICAgICAgIDx2LWJ0biBmbGF0IGhyZWY9XCIvXCIgQGNsaWNrPVwibG9nb3V0XCI+XG4gICAgICAgICAgICAgICAgICAgIExvZ291dFxuICAgICAgICAgICAgICAgICAgPC92LWJ0bj5cbiAgICAgICAgICAgICAgICA8L3YtbGlzdC10aWxlLWFjdGlvbj5cbiAgICAgICAgICAgICAgPC92LWxpc3QtdGlsZT5cbiAgICAgICAgICAgIDwvdi1saXN0PlxuICAgICAgICAgIDwvdi1jYXJkPlxuICAgICAgICA8L3YtbWVudT5cbiAgICAgIDwvdi10b29sYmFyLWl0ZW1zPlxuICAgIDwvdi10b29sYmFyPlxuICAgIDx2LWNvbnRlbnQ+XG4gICAgICA8di1zbGlkZS14LXRyYW5zaXRpb24+XG4gICAgICAgIDxyb3V0ZXItdmlldy8+XG4gICAgICA8L3Ytc2xpZGUteC10cmFuc2l0aW9uPlxuICAgIDwvdi1jb250ZW50PlxuICAgIDx2LWZvb3RlciA6Zml4ZWQ9XCJmaXhlZFwiIGFwcD5cbiAgICAgIDxzcGFuPiZjb3B5OyAyMDE3PC9zcGFuPlxuICAgIDwvdi1mb290ZXI+XG4gIDwvdi1hcHA+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICBpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG4gIGltcG9ydCAqIGFzIG11dGF0aW9uVHlwZXMgZnJvbSAnLi4vLi4vc3RvcmUvbXV0YXRpb24tdHlwZXMnXG4gIGltcG9ydCAqIGFzIGFjdGlvblR5cGVzIGZyb20gJy4uLy4uL3N0b3JlL2FjdGlvbi10eXBlcydcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnYXBwJyxcbiAgZGF0YSAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNsaXBwZWQ6IHRydWUsXG4gICAgICBjbGlwcGVkTGVmdDogZmFsc2UsXG4gICAgICBkcmF3ZXI6IHRydWUsXG4gICAgICBmaXhlZDogZmFsc2UsXG4gICAgICBtb2JpbGVCcmVha1BvaW50OiA5MDAsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7IGljb246ICdob21lJywgdGl0bGU6ICdMYW5kaW5nJywgaHJlZjogJy8nIH0sXG4gICAgICAgIHsgaWNvbjogJ2hvbWUnLCB0aXRsZTogJ0Rhc2hib2FyZCcsIGhyZWY6ICcvYWRtaW4nIH0sXG4gICAgICAgIHsgaWNvbjogJ2Fzc2lnbm1lbnQnLCB0aXRsZTogJ0FjdGl2aXRhdHMnLCBocmVmOiAnL2FjdGl2aXRhdHMnIH0sXG4gICAgICAgIHsgaWNvbjogJ2hvbWUnLCB0aXRsZTogJ0VudGl0YXRzJywgaHJlZjogJy9lbnRpdGF0cycgfSxcbiAgICAgICAgeyBpY29uOiAnaG9tZScsIHRpdGxlOiAnVm9sdW50YXJpcycsIGhyZWY6ICcvdm9sdW50YXJpcyd9LFxuICAgICAgICB7IGljb246ICdob21lJywgdGl0bGU6ICdBZG1pbmlzdHJhZG9ycycsIGhyZWY6ICcvYWRtaW5zJ30sXG4gICAgICAgIHsgaWNvbjogJ2FjY291bnRfYm94JywgdGl0bGU6ICdFbCBtZXUgY29tcHRlJyB9XG4gICAgICBdLFxuICAgICAgbWluaVZhcmlhbnQ6IGZhbHNlLFxuICAgICAgdGl0bGU6ICdWb2x1bnRhcmlhdCBUb3J0b3NhJyxcbiAgICAgIHdpbmRvd1NpemU6IHtcbiAgICAgICAgeDogMCxcbiAgICAgICAgeTogMFxuICAgICAgfSxcbiAgICAgIG1lbnU6IGZhbHNlLFxuICAgIH1cbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICB1c2VyOiB7XG4gICAgICBnZXQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiRzdG9yZS5zdGF0ZS51c2VyXG4gICAgICB9LFxuICAgICAgc2V0KHZhbHVlKSB7XG4gICAgICAgIHRoaXMuJHN0b3JlLmNvbW1pdChtdXRhdGlvblR5cGVzLlNFVF9VU0VSLCB2YWx1ZSlcbiAgICAgIH1cbiAgICB9LFxuICAgIHJvbGVzOiB7XG4gICAgICBnZXQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiRzdG9yZS5zdGF0ZS5yb2xlc1xuICAgICAgfSxcbiAgICAgIHNldCh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdmFsdWVcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBvblJlc2l6ZSAoKSB7XG4gICAgICB0aGlzLndpbmRvd1NpemUgPSB7IHg6IHdpbmRvdy5pbm5lcldpZHRoLCB5OiB3aW5kb3cuaW5uZXJIZWlnaHQgfVxuICAgIH0sXG4gICAgbG9nb3V0ICgpIHtcbiAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKGFjdGlvblR5cGVzLkxPR09VVClcbiAgICB9XG4gIH0sXG4gIG1vdW50ZWQgKCkge1xuICAgIHRoaXMub25SZXNpemUoKVxuICB9XG59XG48L3NjcmlwdD5cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvdm9sdW50YXJpYXQvY29tcG9uZW50cy9sYXlvdXRzL0FkbWluTWFpbkxheW91dC52dWUiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwidi1hcHBcIixcbiAgICB7XG4gICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiBcInJlc2l6ZVwiLFxuICAgICAgICAgIHJhd05hbWU6IFwidi1yZXNpemVcIixcbiAgICAgICAgICB2YWx1ZTogX3ZtLm9uUmVzaXplLFxuICAgICAgICAgIGV4cHJlc3Npb246IFwib25SZXNpemVcIlxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJ2LW5hdmlnYXRpb24tZHJhd2VyXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgcGVyc2lzdGVudDogXCJcIixcbiAgICAgICAgICAgIFwibWluaS12YXJpYW50XCI6IF92bS5taW5pVmFyaWFudCxcbiAgICAgICAgICAgIFwibW9iaWxlLWJyZWFrLXBvaW50XCI6IF92bS5tb2JpbGVCcmVha1BvaW50LFxuICAgICAgICAgICAgXCJlbmFibGUtcmVzaXplLXdhdGNoZXJcIjogXCJcIixcbiAgICAgICAgICAgIGNsaXBwZWQ6IF92bS5jbGlwcGVkLFxuICAgICAgICAgICAgXCJoaWRlLW92ZXJsYXlcIjogXCJcIixcbiAgICAgICAgICAgIGFic29sdXRlOiBcIlwiLFxuICAgICAgICAgICAgYXBwOiBcIlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgdmFsdWU6IF92bS5kcmF3ZXIsXG4gICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgIF92bS5kcmF3ZXIgPSAkJHZcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBleHByZXNzaW9uOiBcImRyYXdlclwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInYtbGlzdFwiLFxuICAgICAgICAgICAgX3ZtLl9sKF92bS5pdGVtcywgZnVuY3Rpb24oaXRlbSwgaSkge1xuICAgICAgICAgICAgICByZXR1cm4gKGl0ZW0udGl0bGUgPT09IFwiQWRtaW5pc3RyYWRvcnNcIiAmJlxuICAgICAgICAgICAgICAgIF92bS5yb2xlcyA9PT0gXCJzdXBlckFkbWluXCIpIHx8XG4gICAgICAgICAgICAgICAgaXRlbS50aXRsZSAhPT0gXCJBZG1pbmlzdHJhZG9yc1wiXG4gICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2LWxpc3QtdGlsZVwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAga2V5OiBpLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHZhbHVlOiBcInRydWVcIiwgcm91dGVyOiBcIlwiLCB0bzogaXRlbS5ocmVmIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWxpc3QtdGlsZS1hY3Rpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LWljb25cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IGlubmVySFRNTDogX3ZtLl9zKGl0ZW0uaWNvbikgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInYtbGlzdC10aWxlLWNvbnRlbnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LWxpc3QtdGlsZS10aXRsZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdGV4dENvbnRlbnQ6IF92bS5fcyhpdGVtLnRpdGxlKSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcInYtdG9vbGJhclwiLFxuICAgICAgICB7IGF0dHJzOiB7IGFwcDogXCJcIiwgXCJjbGlwcGVkLWxlZnRcIjogX3ZtLmNsaXBwZWQsIGFic29sdXRlOiBcIlwiIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwidi10b29sYmFyLXNpZGUtaWNvblwiLCB7XG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgICAgICAgX3ZtLmRyYXdlciA9ICFfdm0uZHJhd2VyXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwidi10b29sYmFyLXRpdGxlXCIsIHtcbiAgICAgICAgICAgIGRvbVByb3BzOiB7IHRleHRDb250ZW50OiBfdm0uX3MoX3ZtLnRpdGxlKSB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInYtc3BhY2VyXCIpLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInYtdG9vbGJhci1pdGVtc1wiLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInYtbWVudVwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIFwib2Zmc2V0LXhcIjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgXCJjbG9zZS1vbi1jb250ZW50LWNsaWNrXCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBcIm51ZGdlLXdpZHRoXCI6IDIwMFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ubWVudSxcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5tZW51ID0gJCR2XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwibWVudVwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgc2xvdDogXCJhY3RpdmF0b3JcIiwgZmxhdDogXCJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIHNsb3Q6IFwiYWN0aXZhdG9yXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi1pY29uXCIsIFtfdm0uX3YoXCJhY2NvdW50X2NpcmNsZVwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS51c2VyLm5hbWUpICsgXCJcXG4gICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInYtY2FyZFwiLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInYtbGlzdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtbGlzdC10aWxlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBhdmF0YXI6IFwiXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi1saXN0LXRpbGUtYXZhdGFyXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaHR0cHM6Ly92dWV0aWZ5anMuY29tL3N0YXRpYy9kb2MtaW1hZ2VzL2pvaG4uanBnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ6IFwiSm9oblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1saXN0LXRpbGUtY29udGVudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LWxpc3QtdGlsZS10aXRsZVwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS51c2VyLm5hbWUpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LWxpc3QtdGlsZS1zdWItdGl0bGVcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0udXNlci5lbWFpbCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtZGl2aWRlclwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWxpc3RcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWxpc3QtdGlsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtbGlzdC10aWxlLWFjdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGZsYXQ6IFwiXCIsIGhyZWY6IFwiL1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0ubG9nb3V0IH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgIExvZ291dFxcbiAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwidi1jb250ZW50XCIsIFtfYyhcInYtc2xpZGUteC10cmFuc2l0aW9uXCIsIFtfYyhcInJvdXRlci12aWV3XCIpXSwgMSldLCAxKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcInYtZm9vdGVyXCIsIHsgYXR0cnM6IHsgZml4ZWQ6IF92bS5maXhlZCwgYXBwOiBcIlwiIH0gfSwgW1xuICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIsKpIDIwMTdcIildKVxuICAgICAgXSlcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbm1vZHVsZS5leHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi0zMjJhYmM1ZVwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtMzIyYWJjNWVcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3ZvbHVudGFyaWF0L2NvbXBvbmVudHMvbGF5b3V0cy9BZG1pbk1haW5MYXlvdXQudnVlXG4vLyBtb2R1bGUgaWQgPSAxMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAxMSIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XV0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV1dfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL0FkbWluTWFpbkxheW91dC52dWVcIilcbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTMyMmFiYzVlXFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vQWRtaW5NYWluTGF5b3V0LnZ1ZVwiKVxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IG51bGxcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBudWxsXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvYXNzZXRzL2pzL3ZvbHVudGFyaWF0L2NvbXBvbmVudHMvbGF5b3V0cy9BZG1pbk1haW5MYXlvdXQudnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTMyMmFiYzVlXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtMzIyYWJjNWVcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvdm9sdW50YXJpYXQvY29tcG9uZW50cy9sYXlvdXRzL0FkbWluTWFpbkxheW91dC52dWVcbi8vIG1vZHVsZSBpZCA9IDcyXG4vLyBtb2R1bGUgY2h1bmtzID0gMTEiXSwic291cmNlUm9vdCI6IiJ9