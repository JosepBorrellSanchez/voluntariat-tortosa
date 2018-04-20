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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy92b2x1bnRhcmlhdC9jb21wb25lbnRzL2xheW91dHMvQWRtaW5NYWluTGF5b3V0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3ZvbHVudGFyaWF0L2NvbXBvbmVudHMvbGF5b3V0cy9BZG1pbk1haW5MYXlvdXQudnVlP2JjNTciLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy92b2x1bnRhcmlhdC9jb21wb25lbnRzL2xheW91dHMvQWRtaW5NYWluTGF5b3V0LnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFzRkE7O0FBQ0E7QUFDQTs7O0FBRUE7UUFFQTt3QkFDQTs7ZUFFQTttQkFDQTtjQUNBO2FBQ0E7d0JBQ0E7YUFDQSx5Q0FDQSxpREFDQSw2REFDQSwwREFDQSwwREFDQSxnRUFDQSwyQ0FFQTttQkFDQTthQUNBO21CQUNBO2FBQ0E7O1dBRUE7V0FFQTtBQUhBO1lBSUE7QUFFQTtBQXpCQTtBQTBCQTs7OzswQkFHQTtpQ0FDQTtBQUNBOytCQUNBO29HQUNBO0FBRUE7QUFQQTs7MEJBU0E7aUNBQ0E7QUFDQTsrQkFDQTtlQUNBO0FBR0E7QUFSQTtBQVRBOztrQ0FtQkE7MERBQ0E7QUFDQTs4QkFDQTtBQUNBO0FBQ0E7QUFDQTs4RkFFQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFuQkE7OEJBb0JBO1NBQ0E7QUFDQTtBQUNBO0FBdkVBLEc7Ozs7Ozs7QUMzRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QixxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2QywyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2QywyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLFNBQVMscURBQXFELEVBQUU7QUFDekU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLDhCQUE4QjtBQUM1RDtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLFNBQVMsYUFBYSxFQUFFO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLHNCQUFzQjtBQUNwRSwyQ0FBMkM7QUFDM0MscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixTQUFTLDRCQUE0QixFQUFFO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7QUM3T0E7QUFDQTtBQUNBO0FBQ0EsNENBQXNSO0FBQ3RSO0FBQ0EsOENBQXNMO0FBQ3RMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRCIsImZpbGUiOiIxMS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPHYtYXBwIHYtcmVzaXplPVwib25SZXNpemVcIj5cbiAgICA8di1uYXZpZ2F0aW9uLWRyYXdlclxuICAgICAgcGVyc2lzdGVudFxuICAgICAgOm1pbmktdmFyaWFudD1cIm1pbmlWYXJpYW50XCJcbiAgICAgIHYtbW9kZWw9XCJkcmF3ZXJcIlxuICAgICAgOm1vYmlsZS1icmVhay1wb2ludD1cIm1vYmlsZUJyZWFrUG9pbnRcIlxuICAgICAgZW5hYmxlLXJlc2l6ZS13YXRjaGVyXG4gICAgICA6Y2xpcHBlZD1cImNsaXBwZWRcIlxuICAgICAgaGlkZS1vdmVybGF5XG4gICAgICBhYnNvbHV0ZVxuICAgICAgYXBwXG4gICAgPlxuICAgICAgPHYtbGlzdD5cbiAgICAgICAgPHYtbGlzdC10aWxlXG4gICAgICAgICAgdmFsdWU9XCJ0cnVlXCJcbiAgICAgICAgICB2LWZvcj1cIihpdGVtLCBpKSBpbiBpdGVtc1wiXG4gICAgICAgICAgOmtleT1cImlcIlxuICAgICAgICAgIHJvdXRlciA6dG89XCJpdGVtLmhyZWZcIlxuICAgICAgICAgIHYtaWY9XCIoaXRlbS50aXRsZSA9PT0gJ0FkbWluaXN0cmFkb3JzJyAmJiByb2xlcyA9PT0gJ3N1cGVyQWRtaW4nKSB8fCBpdGVtLnRpdGxlICE9PSAnQWRtaW5pc3RyYWRvcnMnXCJcbiAgICAgICAgPlxuICAgICAgICAgIDx2LWxpc3QtdGlsZS1hY3Rpb24+XG4gICAgICAgICAgICA8di1pY29uIHYtaHRtbD1cIml0ZW0uaWNvblwiPjwvdi1pY29uPlxuICAgICAgICAgIDwvdi1saXN0LXRpbGUtYWN0aW9uPlxuICAgICAgICAgIDx2LWxpc3QtdGlsZS1jb250ZW50PlxuICAgICAgICAgICAgPHYtbGlzdC10aWxlLXRpdGxlIHYtdGV4dD1cIml0ZW0udGl0bGVcIj48L3YtbGlzdC10aWxlLXRpdGxlPlxuICAgICAgICAgIDwvdi1saXN0LXRpbGUtY29udGVudD5cbiAgICAgICAgPC92LWxpc3QtdGlsZT5cbiAgICAgIDwvdi1saXN0PlxuICAgIDwvdi1uYXZpZ2F0aW9uLWRyYXdlcj4gXG4gICAgPHYtdG9vbGJhclxuICAgICAgYXBwXG4gICAgICA6Y2xpcHBlZC1sZWZ0PVwiY2xpcHBlZFwiXG4gICAgICBhYnNvbHV0ZVxuICAgID5cbiAgICAgIDx2LXRvb2xiYXItc2lkZS1pY29uIEBjbGljay5zdG9wPVwiZHJhd2VyID0gIWRyYXdlclwiPjwvdi10b29sYmFyLXNpZGUtaWNvbj5cbiAgICAgIDx2LXRvb2xiYXItdGl0bGUgdi10ZXh0PVwidGl0bGVcIj48L3YtdG9vbGJhci10aXRsZT5cbiAgICAgIDx2LXNwYWNlcj48L3Ytc3BhY2VyPlxuICAgICAgPHYtdG9vbGJhci1pdGVtcz5cbiAgICAgICAgPHYtbWVudVxuICAgICAgICAgIG9mZnNldC14XG4gICAgICAgICAgOmNsb3NlLW9uLWNvbnRlbnQtY2xpY2s9XCJmYWxzZVwiXG4gICAgICAgICAgOm51ZGdlLXdpZHRoPVwiMjAwXCJcbiAgICAgICAgICB2LW1vZGVsPVwibWVudVwiXG4gICAgICAgID5cbiAgICAgICAgICA8di1idG4gZmxhdCBzbG90PVwiYWN0aXZhdG9yXCI+XG4gICAgICAgICAgICA8di1pY29uPmFjY291bnRfY2lyY2xlPC92LWljb24+XG4gICAgICAgICAgICB7eyB1c2VyLm5hbWUgfX1cbiAgICAgICAgICA8L3YtYnRuPlxuICAgICAgICAgIDx2LWNhcmQ+XG4gICAgICAgICAgICA8di1saXN0PlxuICAgICAgICAgICAgICA8di1saXN0LXRpbGUgYXZhdGFyPlxuICAgICAgICAgICAgICAgIDx2LWxpc3QtdGlsZS1hdmF0YXI+XG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vdnVldGlmeWpzLmNvbS9zdGF0aWMvZG9jLWltYWdlcy9qb2huLmpwZ1wiIGFsdD1cIkpvaG5cIj5cbiAgICAgICAgICAgICAgICA8L3YtbGlzdC10aWxlLWF2YXRhcj5cbiAgICAgICAgICAgICAgICA8di1saXN0LXRpbGUtY29udGVudD5cbiAgICAgICAgICAgICAgICAgIDx2LWxpc3QtdGlsZS10aXRsZT57eyB1c2VyLm5hbWUgfX08L3YtbGlzdC10aWxlLXRpdGxlPlxuICAgICAgICAgICAgICAgICAgPHYtbGlzdC10aWxlLXN1Yi10aXRsZT57eyB1c2VyLmVtYWlsIH19PC92LWxpc3QtdGlsZS1zdWItdGl0bGU+XG4gICAgICAgICAgICAgICAgPC92LWxpc3QtdGlsZS1jb250ZW50PlxuICAgICAgICAgICAgICA8L3YtbGlzdC10aWxlPlxuICAgICAgICAgICAgPC92LWxpc3Q+XG4gICAgICAgICAgICA8di1kaXZpZGVyPjwvdi1kaXZpZGVyPlxuICAgICAgICAgICAgPHYtbGlzdD5cbiAgICAgICAgICAgICAgPHYtbGlzdC10aWxlPlxuICAgICAgICAgICAgICAgIDx2LWxpc3QtdGlsZS1hY3Rpb24+XG4gICAgICAgICAgICAgICAgICA8di1idG4gZmxhdCBocmVmPVwiL1wiIEBjbGljaz1cImxvZ291dFwiPlxuICAgICAgICAgICAgICAgICAgICBMb2dvdXRcbiAgICAgICAgICAgICAgICAgIDwvdi1idG4+XG4gICAgICAgICAgICAgICAgPC92LWxpc3QtdGlsZS1hY3Rpb24+XG4gICAgICAgICAgICAgIDwvdi1saXN0LXRpbGU+XG4gICAgICAgICAgICA8L3YtbGlzdD5cbiAgICAgICAgICA8L3YtY2FyZD5cbiAgICAgICAgPC92LW1lbnU+XG4gICAgICA8L3YtdG9vbGJhci1pdGVtcz5cbiAgICA8L3YtdG9vbGJhcj5cbiAgICA8di1jb250ZW50PlxuICAgICAgPHYtc2xpZGUteC10cmFuc2l0aW9uPlxuICAgICAgICA8cm91dGVyLXZpZXcvPlxuICAgICAgPC92LXNsaWRlLXgtdHJhbnNpdGlvbj5cbiAgICA8L3YtY29udGVudD5cbiAgICA8di1mb290ZXIgOmZpeGVkPVwiZml4ZWRcIiBhcHA+XG4gICAgICA8c3Bhbj4mY29weTsgMjAxNzwvc3Bhbj5cbiAgICA8L3YtZm9vdGVyPlxuICA8L3YtYXBwPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuICBpbXBvcnQgKiBhcyBtdXRhdGlvblR5cGVzIGZyb20gJy4uLy4uL3N0b3JlL211dGF0aW9uLXR5cGVzJ1xuICBpbXBvcnQgKiBhcyBhY3Rpb25UeXBlcyBmcm9tICcuLi8uLi9zdG9yZS9hY3Rpb24tdHlwZXMnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ2FwcCcsXG4gIGRhdGEgKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjbGlwcGVkOiB0cnVlLFxuICAgICAgY2xpcHBlZExlZnQ6IGZhbHNlLFxuICAgICAgZHJhd2VyOiB0cnVlLFxuICAgICAgZml4ZWQ6IGZhbHNlLFxuICAgICAgbW9iaWxlQnJlYWtQb2ludDogOTAwLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAgeyBpY29uOiAnaG9tZScsIHRpdGxlOiAnTGFuZGluZycsIGhyZWY6ICcvJyB9LFxuICAgICAgICB7IGljb246ICdob21lJywgdGl0bGU6ICdEYXNoYm9hcmQnLCBocmVmOiAnL2FkbWluJyB9LFxuICAgICAgICB7IGljb246ICdhc3NpZ25tZW50JywgdGl0bGU6ICdBY3Rpdml0YXRzJywgaHJlZjogJy9hY3Rpdml0YXRzJyB9LFxuICAgICAgICB7IGljb246ICdob21lJywgdGl0bGU6ICdFbnRpdGF0cycsIGhyZWY6ICcvZW50aXRhdHMnIH0sXG4gICAgICAgIHsgaWNvbjogJ2hvbWUnLCB0aXRsZTogJ1ZvbHVudGFyaXMnLCBocmVmOiAnL3ZvbHVudGFyaXMnfSxcbiAgICAgICAgeyBpY29uOiAnaG9tZScsIHRpdGxlOiAnQWRtaW5pc3RyYWRvcnMnLCBocmVmOiAnL2FkbWlucyd9LFxuICAgICAgICB7IGljb246ICdhY2NvdW50X2JveCcsIHRpdGxlOiAnRWwgbWV1IGNvbXB0ZScgfVxuICAgICAgXSxcbiAgICAgIG1pbmlWYXJpYW50OiBmYWxzZSxcbiAgICAgIHJpZ2h0OiB0cnVlLFxuICAgICAgcmlnaHREcmF3ZXI6IGZhbHNlLFxuICAgICAgdGl0bGU6ICdWb2x1bnRhcmlhdCBUb3J0b3NhJyxcbiAgICAgIHdpbmRvd1NpemU6IHtcbiAgICAgICAgeDogMCxcbiAgICAgICAgeTogMFxuICAgICAgfSxcbiAgICAgIG1lbnU6IGZhbHNlLFxuICAgICAgLy8gdXNlcjogdGhpcy4kc3RvcmUuc3RhdGUudXNlclxuICAgIH1cbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICB1c2VyOiB7XG4gICAgICBnZXQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiRzdG9yZS5zdGF0ZS51c2VyXG4gICAgICB9LFxuICAgICAgc2V0KHZhbHVlKSB7XG4gICAgICAgIHRoaXMuJHN0b3JlLmNvbW1pdChtdXRhdGlvblR5cGVzLlNFVF9VU0VSLCB2YWx1ZSlcbiAgICAgIH1cbiAgICB9LFxuICAgIHJvbGVzOiB7XG4gICAgICBnZXQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiRzdG9yZS5zdGF0ZS5yb2xlc1xuICAgICAgfSxcbiAgICAgIHNldCh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdmFsdWVcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBvblJlc2l6ZSAoKSB7XG4gICAgICB0aGlzLndpbmRvd1NpemUgPSB7IHg6IHdpbmRvdy5pbm5lcldpZHRoLCB5OiB3aW5kb3cuaW5uZXJIZWlnaHQgfVxuICAgIH0sXG4gICAgbG9nb3V0ICgpIHtcbiAgICAgIC8vIGxldCBjb25maWcgPSB7XG4gICAgICAvLyAgIGhlYWRlcnM6IHsgJ1gtQ1NSRi1UT0tFTic6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21ldGFbbmFtZT1cImNzcmYtdG9rZW5cIl0nKS5nZXRBdHRyaWJ1dGUoJ2NvbnRlbnQnKSB9XG4gICAgICAvLyB9XG4gICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaChhY3Rpb25UeXBlcy5MT0dPVVQpXG5cbiAgICAgIC8vIGxldCBjb25maWcgPSB7XG4gICAgICAvLyAgIGhlYWRlcnM6IHsgJ1gtQ1NSRi1UT0tFTic6ICQoJ21ldGFbbmFtZT1cImNzcmYtdG9rZW5cIl0nKS5hdHRyKCdjb250ZW50JykgfVxuICAgICAgLy8gfVxuICAgICAgLy8gYXhpb3MucG9zdCgnbG9nb3V0JykudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgIC8vICAgY29uc29sZS5sb2coJ0xvZ291dCEnKVxuICAgICAgLy8gfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAvLyAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgIC8vIH0pO1xuICAgIH1cbiAgfSxcbiAgbW91bnRlZCAoKSB7XG4gICAgdGhpcy5vblJlc2l6ZSgpXG4gICAgLy8gdGhpcy4kc3RvcmUuZGlzcGF0Y2goYWN0aW9uVHlwZXMuRkVUQ0hfVVNFUiwgMSk7XG4gIH1cbn1cbjwvc2NyaXB0PlxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy92b2x1bnRhcmlhdC9jb21wb25lbnRzL2xheW91dHMvQWRtaW5NYWluTGF5b3V0LnZ1ZSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJ2LWFwcFwiLFxuICAgIHtcbiAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6IFwicmVzaXplXCIsXG4gICAgICAgICAgcmF3TmFtZTogXCJ2LXJlc2l6ZVwiLFxuICAgICAgICAgIHZhbHVlOiBfdm0ub25SZXNpemUsXG4gICAgICAgICAgZXhwcmVzc2lvbjogXCJvblJlc2l6ZVwiXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcInYtbmF2aWdhdGlvbi1kcmF3ZXJcIixcbiAgICAgICAge1xuICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICBwZXJzaXN0ZW50OiBcIlwiLFxuICAgICAgICAgICAgXCJtaW5pLXZhcmlhbnRcIjogX3ZtLm1pbmlWYXJpYW50LFxuICAgICAgICAgICAgXCJtb2JpbGUtYnJlYWstcG9pbnRcIjogX3ZtLm1vYmlsZUJyZWFrUG9pbnQsXG4gICAgICAgICAgICBcImVuYWJsZS1yZXNpemUtd2F0Y2hlclwiOiBcIlwiLFxuICAgICAgICAgICAgY2xpcHBlZDogX3ZtLmNsaXBwZWQsXG4gICAgICAgICAgICBcImhpZGUtb3ZlcmxheVwiOiBcIlwiLFxuICAgICAgICAgICAgYWJzb2x1dGU6IFwiXCIsXG4gICAgICAgICAgICBhcHA6IFwiXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICB2YWx1ZTogX3ZtLmRyYXdlcixcbiAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgX3ZtLmRyYXdlciA9ICQkdlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZHJhd2VyXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidi1saXN0XCIsXG4gICAgICAgICAgICBfdm0uX2woX3ZtLml0ZW1zLCBmdW5jdGlvbihpdGVtLCBpKSB7XG4gICAgICAgICAgICAgIHJldHVybiAoaXRlbS50aXRsZSA9PT0gXCJBZG1pbmlzdHJhZG9yc1wiICYmXG4gICAgICAgICAgICAgICAgX3ZtLnJvbGVzID09PSBcInN1cGVyQWRtaW5cIikgfHxcbiAgICAgICAgICAgICAgICBpdGVtLnRpdGxlICE9PSBcIkFkbWluaXN0cmFkb3JzXCJcbiAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICBcInYtbGlzdC10aWxlXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBrZXk6IGksXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdmFsdWU6IFwidHJ1ZVwiLCByb3V0ZXI6IFwiXCIsIHRvOiBpdGVtLmhyZWYgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInYtbGlzdC10aWxlLWFjdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtaWNvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgaW5uZXJIVE1MOiBfdm0uX3MoaXRlbS5pY29uKSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidi1saXN0LXRpbGUtY29udGVudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtbGlzdC10aWxlLXRpdGxlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB0ZXh0Q29udGVudDogX3ZtLl9zKGl0ZW0udGl0bGUpIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwidi10b29sYmFyXCIsXG4gICAgICAgIHsgYXR0cnM6IHsgYXBwOiBcIlwiLCBcImNsaXBwZWQtbGVmdFwiOiBfdm0uY2xpcHBlZCwgYWJzb2x1dGU6IFwiXCIgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJ2LXRvb2xiYXItc2lkZS1pY29uXCIsIHtcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgICAgICAgICBfdm0uZHJhd2VyID0gIV92bS5kcmF3ZXJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJ2LXRvb2xiYXItdGl0bGVcIiwge1xuICAgICAgICAgICAgZG9tUHJvcHM6IHsgdGV4dENvbnRlbnQ6IF92bS5fcyhfdm0udGl0bGUpIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwidi1zcGFjZXJcIiksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidi10b29sYmFyLWl0ZW1zXCIsXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi1tZW51XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJvZmZzZXQteFwiOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBcImNsb3NlLW9uLWNvbnRlbnQtY2xpY2tcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIFwibnVkZ2Utd2lkdGhcIjogMjAwXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5tZW51LFxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLm1lbnUgPSAkJHZcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJtZW51XCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBzbG90OiBcImFjdGl2YXRvclwiLCBmbGF0OiBcIlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgc2xvdDogXCJhY3RpdmF0b3JcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LWljb25cIiwgW192bS5fdihcImFjY291bnRfY2lyY2xlXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLnVzZXIubmFtZSkgKyBcIlxcbiAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidi1jYXJkXCIsXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidi1saXN0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1saXN0LXRpbGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGF2YXRhcjogXCJcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LWxpc3QtdGlsZS1hdmF0YXJcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJodHRwczovL3Z1ZXRpZnlqcy5jb20vc3RhdGljL2RvYy1pbWFnZXMvam9obi5qcGdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdDogXCJKb2huXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWxpc3QtdGlsZS1jb250ZW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtbGlzdC10aWxlLXRpdGxlXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLnVzZXIubmFtZSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtbGlzdC10aWxlLXN1Yi10aXRsZVwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS51c2VyLmVtYWlsKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi1kaXZpZGVyXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInYtbGlzdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtbGlzdC10aWxlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1saXN0LXRpbGUtYWN0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZmxhdDogXCJcIiwgaHJlZjogXCIvXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5sb2dvdXQgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgTG9nb3V0XFxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJ2LWNvbnRlbnRcIiwgW19jKFwidi1zbGlkZS14LXRyYW5zaXRpb25cIiwgW19jKFwicm91dGVyLXZpZXdcIildLCAxKV0sIDEpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwidi1mb290ZXJcIiwgeyBhdHRyczogeyBmaXhlZDogX3ZtLmZpeGVkLCBhcHA6IFwiXCIgfSB9LCBbXG4gICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwiwqkgMjAxN1wiKV0pXG4gICAgICBdKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxubW9kdWxlLmV4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTMyMmFiYzVlXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi0zMjJhYmM1ZVwiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvdm9sdW50YXJpYXQvY29tcG9uZW50cy9sYXlvdXRzL0FkbWluTWFpbkxheW91dC52dWVcbi8vIG1vZHVsZSBpZCA9IDExNVxuLy8gbW9kdWxlIGNodW5rcyA9IDExIiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG52YXIgX192dWVfc2NyaXB0X18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIix7XFxcInBvbHlmaWxsXFxcIjpmYWxzZSxcXFwiaGVscGVyc1xcXCI6ZmFsc2V9XV19IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vQWRtaW5NYWluTGF5b3V0LnZ1ZVwiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMzIyYWJjNWVcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9BZG1pbk1haW5MYXlvdXQudnVlXCIpXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gbnVsbFxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9hc3NldHMvanMvdm9sdW50YXJpYXQvY29tcG9uZW50cy9sYXlvdXRzL0FkbWluTWFpbkxheW91dC52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtMzIyYWJjNWVcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi0zMjJhYmM1ZVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy92b2x1bnRhcmlhdC9jb21wb25lbnRzL2xheW91dHMvQWRtaW5NYWluTGF5b3V0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gNzJcbi8vIG1vZHVsZSBjaHVua3MgPSAxMSJdLCJzb3VyY2VSb290IjoiIn0=