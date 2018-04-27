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
    logout: function logout() {
      this.$store.dispatch(__WEBPACK_IMPORTED_MODULE_2__store_action_types__["y" /* LOGOUT */]);
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy92b2x1bnRhcmlhdC9jb21wb25lbnRzL2xheW91dHMvQWRtaW5NYWluTGF5b3V0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3ZvbHVudGFyaWF0L2NvbXBvbmVudHMvbGF5b3V0cy9BZG1pbk1haW5MYXlvdXQudnVlP2JjNTciLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy92b2x1bnRhcmlhdC9jb21wb25lbnRzL2xheW91dHMvQWRtaW5NYWluTGF5b3V0LnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFzRkE7O0FBQ0E7QUFDQTs7O0FBRUE7UUFFQTt3QkFDQTs7ZUFFQTttQkFDQTtjQUNBO2FBQ0E7d0JBQ0E7YUFDQSx5Q0FDQSxpREFDQSw2REFDQSwwREFDQSwwREFDQSxnRUFDQSwyQ0FFQTttQkFDQTthQUNBO1lBRUE7QUFsQkE7QUFtQkE7Ozs7MEJBR0E7aUNBQ0E7QUFDQTsrQkFDQTtvR0FDQTtBQUVBO0FBUEE7OzBCQVNBO2lDQUNBO0FBQ0E7K0JBQ0E7ZUFDQTtBQUdBO0FBUkE7QUFUQTs7OEJBbUJBOzhGQUNBO0FBRUE7QUFKQTtBQXpDQSxHOzs7Ozs7O0FDM0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QixxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2QywyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2QywyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLFNBQVMscURBQXFELEVBQUU7QUFDekU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLDhCQUE4QjtBQUM1RDtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLFNBQVMsYUFBYSxFQUFFO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLHNCQUFzQjtBQUNwRSwyQ0FBMkM7QUFDM0MscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixTQUFTLDRCQUE0QixFQUFFO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7QUNuT0E7QUFDQTtBQUNBO0FBQ0EsNENBQXNSO0FBQ3RSO0FBQ0EsOENBQXNMO0FBQ3RMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRCIsImZpbGUiOiIxMS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPHYtYXBwPlxuICAgIDx2LW5hdmlnYXRpb24tZHJhd2VyXG4gICAgICBwZXJzaXN0ZW50XG4gICAgICA6bWluaS12YXJpYW50PVwibWluaVZhcmlhbnRcIlxuICAgICAgdi1tb2RlbD1cImRyYXdlclwiXG4gICAgICA6bW9iaWxlLWJyZWFrLXBvaW50PVwibW9iaWxlQnJlYWtQb2ludFwiXG4gICAgICBlbmFibGUtcmVzaXplLXdhdGNoZXJcbiAgICAgIDpjbGlwcGVkPVwiY2xpcHBlZFwiXG4gICAgICBoaWRlLW92ZXJsYXlcbiAgICAgIGFic29sdXRlXG4gICAgICBhcHBcbiAgICA+XG4gICAgICA8di1saXN0PlxuICAgICAgICA8di1saXN0LXRpbGVcbiAgICAgICAgICB2YWx1ZT1cInRydWVcIlxuICAgICAgICAgIHYtZm9yPVwiKGl0ZW0sIGkpIGluIGl0ZW1zXCJcbiAgICAgICAgICA6a2V5PVwiaVwiXG4gICAgICAgICAgcm91dGVyIDp0bz1cIml0ZW0uaHJlZlwiXG4gICAgICAgICAgdi1pZj1cIihpdGVtLnRpdGxlID09PSAnQWRtaW5pc3RyYWRvcnMnICYmIHJvbGVzID09PSAnc3VwZXJBZG1pbicpIHx8IGl0ZW0udGl0bGUgIT09ICdBZG1pbmlzdHJhZG9ycydcIlxuICAgICAgICA+XG4gICAgICAgICAgPHYtbGlzdC10aWxlLWFjdGlvbj5cbiAgICAgICAgICAgIDx2LWljb24gdi1odG1sPVwiaXRlbS5pY29uXCI+PC92LWljb24+XG4gICAgICAgICAgPC92LWxpc3QtdGlsZS1hY3Rpb24+XG4gICAgICAgICAgPHYtbGlzdC10aWxlLWNvbnRlbnQ+XG4gICAgICAgICAgICA8di1saXN0LXRpbGUtdGl0bGUgdi10ZXh0PVwiaXRlbS50aXRsZVwiPjwvdi1saXN0LXRpbGUtdGl0bGU+XG4gICAgICAgICAgPC92LWxpc3QtdGlsZS1jb250ZW50PlxuICAgICAgICA8L3YtbGlzdC10aWxlPlxuICAgICAgPC92LWxpc3Q+XG4gICAgPC92LW5hdmlnYXRpb24tZHJhd2VyPiBcbiAgICA8di10b29sYmFyXG4gICAgICBhcHBcbiAgICAgIDpjbGlwcGVkLWxlZnQ9XCJjbGlwcGVkXCJcbiAgICAgIGFic29sdXRlXG4gICAgPlxuICAgICAgPHYtdG9vbGJhci1zaWRlLWljb24gQGNsaWNrLnN0b3A9XCJkcmF3ZXIgPSAhZHJhd2VyXCI+PC92LXRvb2xiYXItc2lkZS1pY29uPlxuICAgICAgPHYtdG9vbGJhci10aXRsZSB2LXRleHQ9XCJ0aXRsZVwiPjwvdi10b29sYmFyLXRpdGxlPlxuICAgICAgPHYtc3BhY2VyPjwvdi1zcGFjZXI+XG4gICAgICA8di10b29sYmFyLWl0ZW1zPlxuICAgICAgICA8di1tZW51XG4gICAgICAgICAgb2Zmc2V0LXhcbiAgICAgICAgICA6Y2xvc2Utb24tY29udGVudC1jbGljaz1cImZhbHNlXCJcbiAgICAgICAgICA6bnVkZ2Utd2lkdGg9XCIyMDBcIlxuICAgICAgICAgIHYtbW9kZWw9XCJtZW51XCJcbiAgICAgICAgPlxuICAgICAgICAgIDx2LWJ0biBmbGF0IHNsb3Q9XCJhY3RpdmF0b3JcIj5cbiAgICAgICAgICAgIDx2LWljb24+YWNjb3VudF9jaXJjbGU8L3YtaWNvbj5cbiAgICAgICAgICAgIHt7IHVzZXIubmFtZSB9fVxuICAgICAgICAgIDwvdi1idG4+XG4gICAgICAgICAgPHYtY2FyZD5cbiAgICAgICAgICAgIDx2LWxpc3Q+XG4gICAgICAgICAgICAgIDx2LWxpc3QtdGlsZSBhdmF0YXI+XG4gICAgICAgICAgICAgICAgPHYtbGlzdC10aWxlLWF2YXRhcj5cbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly92dWV0aWZ5anMuY29tL3N0YXRpYy9kb2MtaW1hZ2VzL2pvaG4uanBnXCIgYWx0PVwiSm9oblwiPlxuICAgICAgICAgICAgICAgIDwvdi1saXN0LXRpbGUtYXZhdGFyPlxuICAgICAgICAgICAgICAgIDx2LWxpc3QtdGlsZS1jb250ZW50PlxuICAgICAgICAgICAgICAgICAgPHYtbGlzdC10aWxlLXRpdGxlPnt7IHVzZXIubmFtZSB9fTwvdi1saXN0LXRpbGUtdGl0bGU+XG4gICAgICAgICAgICAgICAgICA8di1saXN0LXRpbGUtc3ViLXRpdGxlPnt7IHVzZXIuZW1haWwgfX08L3YtbGlzdC10aWxlLXN1Yi10aXRsZT5cbiAgICAgICAgICAgICAgICA8L3YtbGlzdC10aWxlLWNvbnRlbnQ+XG4gICAgICAgICAgICAgIDwvdi1saXN0LXRpbGU+XG4gICAgICAgICAgICA8L3YtbGlzdD5cbiAgICAgICAgICAgIDx2LWRpdmlkZXI+PC92LWRpdmlkZXI+XG4gICAgICAgICAgICA8di1saXN0PlxuICAgICAgICAgICAgICA8di1saXN0LXRpbGU+XG4gICAgICAgICAgICAgICAgPHYtbGlzdC10aWxlLWFjdGlvbj5cbiAgICAgICAgICAgICAgICAgIDx2LWJ0biBmbGF0IGhyZWY9XCIvXCIgQGNsaWNrPVwibG9nb3V0XCI+XG4gICAgICAgICAgICAgICAgICAgIExvZ291dFxuICAgICAgICAgICAgICAgICAgPC92LWJ0bj5cbiAgICAgICAgICAgICAgICA8L3YtbGlzdC10aWxlLWFjdGlvbj5cbiAgICAgICAgICAgICAgPC92LWxpc3QtdGlsZT5cbiAgICAgICAgICAgIDwvdi1saXN0PlxuICAgICAgICAgIDwvdi1jYXJkPlxuICAgICAgICA8L3YtbWVudT5cbiAgICAgIDwvdi10b29sYmFyLWl0ZW1zPlxuICAgIDwvdi10b29sYmFyPlxuICAgIDx2LWNvbnRlbnQ+XG4gICAgICA8di1zbGlkZS14LXRyYW5zaXRpb24+XG4gICAgICAgIDxyb3V0ZXItdmlldy8+XG4gICAgICA8L3Ytc2xpZGUteC10cmFuc2l0aW9uPlxuICAgIDwvdi1jb250ZW50PlxuICAgIDx2LWZvb3RlciA6Zml4ZWQ9XCJmaXhlZFwiIGFwcD5cbiAgICAgIDxzcGFuPiZjb3B5OyAyMDE3PC9zcGFuPlxuICAgIDwvdi1mb290ZXI+XG4gIDwvdi1hcHA+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICBpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG4gIGltcG9ydCAqIGFzIG11dGF0aW9uVHlwZXMgZnJvbSAnLi4vLi4vc3RvcmUvbXV0YXRpb24tdHlwZXMnXG4gIGltcG9ydCAqIGFzIGFjdGlvblR5cGVzIGZyb20gJy4uLy4uL3N0b3JlL2FjdGlvbi10eXBlcydcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnYXBwJyxcbiAgZGF0YSAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNsaXBwZWQ6IHRydWUsXG4gICAgICBjbGlwcGVkTGVmdDogZmFsc2UsXG4gICAgICBkcmF3ZXI6IHRydWUsXG4gICAgICBmaXhlZDogZmFsc2UsXG4gICAgICBtb2JpbGVCcmVha1BvaW50OiA5MDAsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7IGljb246ICdob21lJywgdGl0bGU6ICdMYW5kaW5nJywgaHJlZjogJy8nIH0sXG4gICAgICAgIHsgaWNvbjogJ2hvbWUnLCB0aXRsZTogJ0Rhc2hib2FyZCcsIGhyZWY6ICcvYWRtaW4nIH0sXG4gICAgICAgIHsgaWNvbjogJ2Fzc2lnbm1lbnQnLCB0aXRsZTogJ0FjdGl2aXRhdHMnLCBocmVmOiAnL2FjdGl2aXRhdHMnIH0sXG4gICAgICAgIHsgaWNvbjogJ2hvbWUnLCB0aXRsZTogJ0VudGl0YXRzJywgaHJlZjogJy9lbnRpdGF0cycgfSxcbiAgICAgICAgeyBpY29uOiAnaG9tZScsIHRpdGxlOiAnVm9sdW50YXJpcycsIGhyZWY6ICcvdm9sdW50YXJpcyd9LFxuICAgICAgICB7IGljb246ICdob21lJywgdGl0bGU6ICdBZG1pbmlzdHJhZG9ycycsIGhyZWY6ICcvYWRtaW5zJ30sXG4gICAgICAgIHsgaWNvbjogJ2FjY291bnRfYm94JywgdGl0bGU6ICdFbCBtZXUgY29tcHRlJyB9XG4gICAgICBdLFxuICAgICAgbWluaVZhcmlhbnQ6IGZhbHNlLFxuICAgICAgdGl0bGU6ICdWb2x1bnRhcmlhdCBUb3J0b3NhJyxcbiAgICAgIG1lbnU6IGZhbHNlLFxuICAgIH1cbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICB1c2VyOiB7XG4gICAgICBnZXQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiRzdG9yZS5zdGF0ZS51c2VyXG4gICAgICB9LFxuICAgICAgc2V0KHZhbHVlKSB7XG4gICAgICAgIHRoaXMuJHN0b3JlLmNvbW1pdChtdXRhdGlvblR5cGVzLlNFVF9VU0VSLCB2YWx1ZSlcbiAgICAgIH1cbiAgICB9LFxuICAgIHJvbGVzOiB7XG4gICAgICBnZXQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiRzdG9yZS5zdGF0ZS5yb2xlc1xuICAgICAgfSxcbiAgICAgIHNldCh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdmFsdWVcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBsb2dvdXQgKCkge1xuICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goYWN0aW9uVHlwZXMuTE9HT1VUKVxuICAgIH1cbiAgfVxufVxuPC9zY3JpcHQ+XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByZXNvdXJjZXMvYXNzZXRzL2pzL3ZvbHVudGFyaWF0L2NvbXBvbmVudHMvbGF5b3V0cy9BZG1pbk1haW5MYXlvdXQudnVlIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcInYtYXBwXCIsXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwidi1uYXZpZ2F0aW9uLWRyYXdlclwiLFxuICAgICAgICB7XG4gICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgIHBlcnNpc3RlbnQ6IFwiXCIsXG4gICAgICAgICAgICBcIm1pbmktdmFyaWFudFwiOiBfdm0ubWluaVZhcmlhbnQsXG4gICAgICAgICAgICBcIm1vYmlsZS1icmVhay1wb2ludFwiOiBfdm0ubW9iaWxlQnJlYWtQb2ludCxcbiAgICAgICAgICAgIFwiZW5hYmxlLXJlc2l6ZS13YXRjaGVyXCI6IFwiXCIsXG4gICAgICAgICAgICBjbGlwcGVkOiBfdm0uY2xpcHBlZCxcbiAgICAgICAgICAgIFwiaGlkZS1vdmVybGF5XCI6IFwiXCIsXG4gICAgICAgICAgICBhYnNvbHV0ZTogXCJcIixcbiAgICAgICAgICAgIGFwcDogXCJcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgIHZhbHVlOiBfdm0uZHJhd2VyLFxuICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICBfdm0uZHJhd2VyID0gJCR2XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJkcmF3ZXJcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ2LWxpc3RcIixcbiAgICAgICAgICAgIF92bS5fbChfdm0uaXRlbXMsIGZ1bmN0aW9uKGl0ZW0sIGkpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIChpdGVtLnRpdGxlID09PSBcIkFkbWluaXN0cmFkb3JzXCIgJiZcbiAgICAgICAgICAgICAgICBfdm0ucm9sZXMgPT09IFwic3VwZXJBZG1pblwiKSB8fFxuICAgICAgICAgICAgICAgIGl0ZW0udGl0bGUgIT09IFwiQWRtaW5pc3RyYWRvcnNcIlxuICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidi1saXN0LXRpbGVcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGtleTogaSxcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB2YWx1ZTogXCJ0cnVlXCIsIHJvdXRlcjogXCJcIiwgdG86IGl0ZW0uaHJlZiB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidi1saXN0LXRpbGUtYWN0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi1pY29uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyBpbm5lckhUTUw6IF92bS5fcyhpdGVtLmljb24pIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWxpc3QtdGlsZS1jb250ZW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi1saXN0LXRpbGUtdGl0bGVcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHRleHRDb250ZW50OiBfdm0uX3MoaXRlbS50aXRsZSkgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJ2LXRvb2xiYXJcIixcbiAgICAgICAgeyBhdHRyczogeyBhcHA6IFwiXCIsIFwiY2xpcHBlZC1sZWZ0XCI6IF92bS5jbGlwcGVkLCBhYnNvbHV0ZTogXCJcIiB9IH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcInYtdG9vbGJhci1zaWRlLWljb25cIiwge1xuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICAgICAgICAgIF92bS5kcmF3ZXIgPSAhX3ZtLmRyYXdlclxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInYtdG9vbGJhci10aXRsZVwiLCB7XG4gICAgICAgICAgICBkb21Qcm9wczogeyB0ZXh0Q29udGVudDogX3ZtLl9zKF92bS50aXRsZSkgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJ2LXNwYWNlclwiKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ2LXRvb2xiYXItaXRlbXNcIixcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2LW1lbnVcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICBcIm9mZnNldC14XCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiY2xvc2Utb24tY29udGVudC1jbGlja1wiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgXCJudWRnZS13aWR0aFwiOiAyMDBcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLm1lbnUsXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0ubWVudSA9ICQkdlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIm1lbnVcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNsb3Q6IFwiYWN0aXZhdG9yXCIsIGZsYXQ6IFwiXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBzbG90OiBcImFjdGl2YXRvclwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtaWNvblwiLCBbX3ZtLl92KFwiYWNjb3VudF9jaXJjbGVcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICBcIiArIF92bS5fcyhfdm0udXNlci5uYW1lKSArIFwiXFxuICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2LWNhcmRcIixcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWxpc3RcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWxpc3QtdGlsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgYXZhdGFyOiBcIlwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtbGlzdC10aWxlLWF2YXRhclwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImh0dHBzOi8vdnVldGlmeWpzLmNvbS9zdGF0aWMvZG9jLWltYWdlcy9qb2huLmpwZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0OiBcIkpvaG5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtbGlzdC10aWxlLWNvbnRlbnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi1saXN0LXRpbGUtdGl0bGVcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0udXNlci5uYW1lKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi1saXN0LXRpbGUtc3ViLXRpdGxlXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLnVzZXIuZW1haWwpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LWRpdmlkZXJcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidi1saXN0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1saXN0LXRpbGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWxpc3QtdGlsZS1hY3Rpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBmbGF0OiBcIlwiLCBocmVmOiBcIi9cIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLmxvZ291dCB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICBMb2dvdXRcXG4gICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcInYtY29udGVudFwiLCBbX2MoXCJ2LXNsaWRlLXgtdHJhbnNpdGlvblwiLCBbX2MoXCJyb3V0ZXItdmlld1wiKV0sIDEpXSwgMSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJ2LWZvb3RlclwiLCB7IGF0dHJzOiB7IGZpeGVkOiBfdm0uZml4ZWQsIGFwcDogXCJcIiB9IH0sIFtcbiAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLCqSAyMDE3XCIpXSlcbiAgICAgIF0pXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5tb2R1bGUuZXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtMzIyYWJjNWVcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTMyMmFiYzVlXCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy92b2x1bnRhcmlhdC9jb21wb25lbnRzL2xheW91dHMvQWRtaW5NYWluTGF5b3V0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMTEiLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbnZhciBfX3Z1ZV9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV1dLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFtcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLHtcXFwicG9seWZpbGxcXFwiOmZhbHNlLFxcXCJoZWxwZXJzXFxcIjpmYWxzZX1dXX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9BZG1pbk1haW5MYXlvdXQudnVlXCIpXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi0zMjJhYmM1ZVxcXCIsXFxcImhhc1Njb3BlZFxcXCI6ZmFsc2UsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL0FkbWluTWFpbkxheW91dC52dWVcIilcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBudWxsXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2Fzc2V0cy9qcy92b2x1bnRhcmlhdC9jb21wb25lbnRzL2xheW91dHMvQWRtaW5NYWluTGF5b3V0LnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0zMjJhYmM1ZVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTMyMmFiYzVlXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3ZvbHVudGFyaWF0L2NvbXBvbmVudHMvbGF5b3V0cy9BZG1pbk1haW5MYXlvdXQudnVlXG4vLyBtb2R1bGUgaWQgPSA3MlxuLy8gbW9kdWxlIGNodW5rcyA9IDExIl0sInNvdXJjZVJvb3QiOiIifQ==