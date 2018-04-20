webpackJsonp([19],{

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store_mutation_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__store_action_types__ = __webpack_require__(7);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'CreateActivity',
  data: function data() {
    return {
      valid: false,
      entity: {},
      nameRules: [function (v) {
        return !!v || 'Name is required';
      }, function (v) {
        return v && v.length <= 40 || 'Name must be less than 10 characters';
      }],
      descriptionRules: [function (v) {
        return v && v.length <= 255 || "La descripció no pot excedir els 255 caràcters";
      }],
      destinatarisRules: [function (v) {
        return v && v.length <= 40 || "Els destinataris no poden excedir els 40 caràcters";
      }],
      userSelected: { name: 'Entity' },
      ambitSelected: { ambit: 'Default' },
      ambits: [{ name: 'Cultura' }, { name: 'Escolar' }, { name: 'Artístic' }, { name: 'Esportiu' }, { name: 'Lleure' }, { name: 'Suport' }],
      tipus_horaris: [{ name: 'Puntual' }, { name: 'Periòdic' }],
      role: null,
      menu1: false,
      menu2: false
    };
  },

  computed: {
    entities: {
      get: function get() {
        return this.$store.state.entities;
      },
      set: function set(value) {
        this.$store.commit(__WEBPACK_IMPORTED_MODULE_0__store_mutation_types__["j" /* SET_ENTITIES */], value);
      }
    }
  },
  mounted: function mounted() {
    this.role = this.$store.state.roles;
    this.$store.dispatch(__WEBPACK_IMPORTED_MODULE_1__store_action_types__["o" /* FETCH_ENTITIES */]);
  }
});

/***/ }),

/***/ 162:
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
                  _c(
                    "v-card",
                    { staticClass: "ma-1" },
                    [
                      _c(
                        "v-card-title",
                        [
                          _c(
                            "v-layout",
                            { attrs: { column: "", "align-center": "" } },
                            [_c("h1", [_vm._v("Nova Activitat")])]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-card-text",
                        [
                          _c(
                            "v-form",
                            {
                              model: {
                                value: _vm.valid,
                                callback: function($$v) {
                                  _vm.valid = $$v
                                },
                                expression: "valid"
                              }
                            },
                            [
                              this.role === "superAdmin"
                                ? _c(
                                    "v-layout",
                                    { attrs: { row: "", wrap: "" } },
                                    [
                                      _c(
                                        "v-flex",
                                        { attrs: { xs6: "" } },
                                        [
                                          _c("v-subheader", [
                                            _vm._v("Entitat organitzadora")
                                          ])
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-flex",
                                        { attrs: { xs6: "" } },
                                        [
                                          _c("v-select", {
                                            attrs: {
                                              items: _vm.entities,
                                              label: "Select",
                                              "single-line": "",
                                              "item-text": "name",
                                              "return-object": "",
                                              hint: "" + _vm.userSelected.name,
                                              "persistent-hint": ""
                                            },
                                            model: {
                                              value: _vm.userSelected,
                                              callback: function($$v) {
                                                _vm.userSelected = $$v
                                              },
                                              expression: "userSelected"
                                            }
                                          })
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _c(
                                "v-layout",
                                { attrs: { row: "", wrap: "" } },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      label: "Name",
                                      rules: _vm.nameRules,
                                      counter: 40,
                                      required: ""
                                    },
                                    model: {
                                      value: _vm.entity.name,
                                      callback: function($$v) {
                                        _vm.$set(_vm.entity, "name", $$v)
                                      },
                                      expression: "entity.name"
                                    }
                                  })
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
                                    [_c("v-subheader", [_vm._v("Àmbit:")])],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-flex",
                                    { attrs: { xs6: "" } },
                                    [
                                      _c("v-select", {
                                        attrs: {
                                          items: _vm.ambits,
                                          label: "Select",
                                          "single-line": "",
                                          "item-text": "name",
                                          "return-object": "",
                                          "persistent-hint": ""
                                        },
                                        model: {
                                          value: _vm.entity.ambit,
                                          callback: function($$v) {
                                            _vm.$set(_vm.entity, "ambit", $$v)
                                          },
                                          expression: "entity.ambit"
                                        }
                                      })
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
                                  _c("v-text-field", {
                                    attrs: {
                                      label: "Descripció",
                                      rules: _vm.descriptionRules,
                                      counter: 255
                                    },
                                    model: {
                                      value: _vm.entity.description,
                                      callback: function($$v) {
                                        _vm.$set(_vm.entity, "description", $$v)
                                      },
                                      expression: "entity.description"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-layout",
                                { attrs: { row: "", wrap: "" } },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      label: "Destinataris",
                                      rules: _vm.destinatarisRules,
                                      counter: 40,
                                      required: ""
                                    },
                                    model: {
                                      value: _vm.entity.destinataris,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.entity,
                                          "destinataris",
                                          $$v
                                        )
                                      },
                                      expression: "entity.destinataris"
                                    }
                                  })
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
                                    { attrs: { xs12: "", md5: "" } },
                                    [
                                      _c(
                                        "v-menu",
                                        {
                                          ref: "menu",
                                          attrs: {
                                            lazy: "",
                                            "close-on-content-click": false,
                                            transition: "scale-transition",
                                            "offset-y": "",
                                            "full-width": "",
                                            "nudge-right": 40,
                                            "max-width": "290px",
                                            "min-width": "290px",
                                            "return-value":
                                              _vm.entity.hora_inici
                                          },
                                          on: {
                                            "update:returnValue": function(
                                              $event
                                            ) {
                                              _vm.$set(
                                                _vm.entity,
                                                "hora_inici",
                                                $event
                                              )
                                            }
                                          },
                                          model: {
                                            value: _vm.menu1,
                                            callback: function($$v) {
                                              _vm.menu1 = $$v
                                            },
                                            expression: "menu1"
                                          }
                                        },
                                        [
                                          _c("v-text-field", {
                                            attrs: {
                                              slot: "activator",
                                              label: "Hora inici",
                                              "prepend-icon": "access_time",
                                              readonly: ""
                                            },
                                            slot: "activator",
                                            model: {
                                              value: _vm.entity.hora_inici,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.entity,
                                                  "hora_inici",
                                                  $$v
                                                )
                                              },
                                              expression: "entity.hora_inici"
                                            }
                                          }),
                                          _vm._v(" "),
                                          _c("v-time-picker", {
                                            on: {
                                              change: function($event) {
                                                _vm.$refs.menu.save(
                                                  _vm.entity.hora_inici
                                                )
                                              }
                                            },
                                            model: {
                                              value: _vm.entity.hora_inici,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.entity,
                                                  "hora_inici",
                                                  $$v
                                                )
                                              },
                                              expression: "entity.hora_inici"
                                            }
                                          })
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c("v-spacer"),
                                  _vm._v(" "),
                                  _c(
                                    "v-flex",
                                    { attrs: { xs12: "", md5: "" } },
                                    [
                                      _c(
                                        "v-menu",
                                        {
                                          ref: "menu",
                                          attrs: {
                                            lazy: "",
                                            "close-on-content-click": false,
                                            transition: "scale-transition",
                                            "offset-y": "",
                                            "full-width": "",
                                            "nudge-right": 40,
                                            "max-width": "290px",
                                            "min-width": "290px",
                                            "return-value": _vm.entity.hora_fi
                                          },
                                          on: {
                                            "update:returnValue": function(
                                              $event
                                            ) {
                                              _vm.$set(
                                                _vm.entity,
                                                "hora_fi",
                                                $event
                                              )
                                            }
                                          },
                                          model: {
                                            value: _vm.menu2,
                                            callback: function($$v) {
                                              _vm.menu2 = $$v
                                            },
                                            expression: "menu2"
                                          }
                                        },
                                        [
                                          _c("v-text-field", {
                                            attrs: {
                                              slot: "activator",
                                              label: "Hora fi",
                                              "prepend-icon": "access_time",
                                              readonly: ""
                                            },
                                            slot: "activator",
                                            model: {
                                              value: _vm.entity.hora_fi,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.entity,
                                                  "hora_fi",
                                                  $$v
                                                )
                                              },
                                              expression: "entity.hora_fi"
                                            }
                                          }),
                                          _vm._v(" "),
                                          _c("v-time-picker", {
                                            on: {
                                              change: function($event) {
                                                _vm.$refs.menu.save(
                                                  _vm.entity.hora_fi
                                                )
                                              }
                                            },
                                            model: {
                                              value: _vm.entity.hora_fi,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.entity,
                                                  "hora_fi",
                                                  $$v
                                                )
                                              },
                                              expression: "entity.hora_fi"
                                            }
                                          })
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
                                      _c("v-subheader", [
                                        _vm._v("Tipus horari")
                                      ])
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-flex",
                                    { attrs: { xs6: "" } },
                                    [
                                      _c("v-select", {
                                        attrs: {
                                          items: _vm.tipus_horaris,
                                          label: "Select",
                                          "single-line": "",
                                          "item-text": "name",
                                          "return-object": "",
                                          "persistent-hint": ""
                                        },
                                        model: {
                                          value: _vm.entity.tipus_horari,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.entity,
                                              "tipus_horari",
                                              $$v
                                            )
                                          },
                                          expression: "entity.tipus_horari"
                                        }
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
    require("vue-hot-reload-api")      .rerender("data-v-e3bc6654", module.exports)
  }
}

/***/ }),

/***/ 88:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(6)
/* script */
var __vue_script__ = __webpack_require__(161)
/* template */
var __vue_template__ = __webpack_require__(162)
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
Component.options.__file = "resources/assets/js/voluntariat/components/CreateActivity.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-e3bc6654", Component.options)
  } else {
    hotAPI.reload("data-v-e3bc6654", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy92b2x1bnRhcmlhdC9jb21wb25lbnRzL0NyZWF0ZUFjdGl2aXR5LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3ZvbHVudGFyaWF0L2NvbXBvbmVudHMvQ3JlYXRlQWN0aXZpdHkudnVlPzI1MWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy92b2x1bnRhcmlhdC9jb21wb25lbnRzL0NyZWF0ZUFjdGl2aXR5LnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBd0tBO0FBQ0E7O0FBRUE7UUFFQTt3QkFDQTs7YUFFQTtjQUNBOztzQkFFQTtPQURBO3NDQUdBOzs7dUNBR0E7T0FGQTs7c0NBS0E7T0FGQTs0QkFHQTs4QkFDQTtjQUNBLFNBQ0EscUJBQ0EscUJBQ0Esc0JBQ0Esc0JBQ0Esb0JBRUE7cUJBQ0EsU0FDQSxxQkFFQTtZQUNBO2FBQ0E7YUFFQTtBQTlCQTtBQStCQTs7OzswQkFHQTtpQ0FDQTtBQUNBOytCQUNBO3dHQUNBO0FBR0E7QUFSQTtBQURBOzhCQVVBO2tDQUNBO29HQUNBO0FBQ0E7QUFoREEsRzs7Ozs7OztBQzVLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsU0FBUyxXQUFXLEVBQUU7QUFDdkM7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHNCQUFzQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFB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O0FBQ0EsdUNBQXVDO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7OztBQ2pkQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBc1I7QUFDdFI7QUFDQSw4Q0FBbUw7QUFDbkw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVEIiwiZmlsZSI6IjE5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuIDx2LWFwcD5cbiAgIDx2LWNvbnRhaW5lcj5cbiAgICAgPHYtbGF5b3V0PlxuICAgICAgIDx2LWZsZXggeHMxMj5cbiAgICAgICAgIDx2LWNhcmQgY2xhc3M9XCJtYS0xXCI+XG4gICAgICAgICAgPHYtY2FyZC10aXRsZT5cbiAgICAgICAgICAgIDx2LWxheW91dCBjb2x1bW4gYWxpZ24tY2VudGVyPlxuICAgICAgICAgICAgICA8aDE+Tm92YSBBY3Rpdml0YXQ8L2gxPlxuICAgICAgICAgICAgPC92LWxheW91dD5cbiAgICAgICAgICA8L3YtY2FyZC10aXRsZT5cbiAgICAgICAgICA8di1jYXJkLXRleHQ+XG4gICAgICAgICAgICA8di1mb3JtIHYtbW9kZWw9XCJ2YWxpZFwiPlxuICAgICAgICAgICAgICA8IS0tc2VsZWN0IHVzZXItLT5cbiAgICAgICAgICAgICAgPHYtbGF5b3V0IHJvdyB3cmFwIHYtaWY9XCJ0aGlzLnJvbGUgPT09ICdzdXBlckFkbWluJ1wiPlxuICAgICAgICAgICAgICAgIDx2LWZsZXggeHM2PlxuICAgICAgICAgICAgICAgICAgPHYtc3ViaGVhZGVyPkVudGl0YXQgb3JnYW5pdHphZG9yYTwvdi1zdWJoZWFkZXI+XG4gICAgICAgICAgICAgICAgPC92LWZsZXg+XG4gICAgICAgICAgICAgICAgPHYtZmxleCB4czY+XG4gICAgICAgICAgICAgICAgICA8di1zZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgOml0ZW1zPVwiZW50aXRpZXNcIlxuICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwidXNlclNlbGVjdGVkXCJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJTZWxlY3RcIlxuICAgICAgICAgICAgICAgICAgICBzaW5nbGUtbGluZVxuICAgICAgICAgICAgICAgICAgICBpdGVtLXRleHQ9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuLW9iamVjdFxuICAgICAgICAgICAgICAgICAgICA6aGludD1cImAke3VzZXJTZWxlY3RlZC5uYW1lfWBcIlxuICAgICAgICAgICAgICAgICAgICBwZXJzaXN0ZW50LWhpbnQ+XG4gICAgICAgICAgICAgICAgICA8L3Ytc2VsZWN0PlxuICAgICAgICAgICAgICAgIDwvdi1mbGV4PlxuICAgICAgICAgICAgICA8L3YtbGF5b3V0PlxuICAgICAgICAgICAgICA8IS0taW5wdXQgdGV4dCBub20gYWN0aXZpdGF0LS0+XG4gICAgICAgICAgICAgIDx2LWxheW91dCByb3cgd3JhcD5cbiAgICAgICAgICAgICAgICA8di10ZXh0LWZpZWxkXG4gICAgICAgICAgICAgICAgICBsYWJlbD1cIk5hbWVcIlxuICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cImVudGl0eS5uYW1lXCJcbiAgICAgICAgICAgICAgICAgIDpydWxlcz1cIm5hbWVSdWxlc1wiXG4gICAgICAgICAgICAgICAgICA6Y291bnRlcj1cIjQwXCJcbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkPlxuICAgICAgICAgICAgICAgIDwvdi10ZXh0LWZpZWxkPlxuICAgICAgICAgICAgICA8L3YtbGF5b3V0PlxuICAgICAgICAgICAgICA8IS0tc2VsZWN0IGFtYml0LS0+XG4gICAgICAgICAgICAgIDx2LWxheW91dCByb3cgd3JhcD5cbiAgICAgICAgICAgICAgICA8di1mbGV4IHhzNj5cbiAgICAgICAgICAgICAgICAgIDx2LXN1YmhlYWRlcj7DgG1iaXQ6PC92LXN1YmhlYWRlcj5cbiAgICAgICAgICAgICAgICA8L3YtZmxleD5cbiAgICAgICAgICAgICAgICA8di1mbGV4IHhzNj5cbiAgICAgICAgICAgICAgICAgIDx2LXNlbGVjdFxuICAgICAgICAgICAgICAgICAgICA6aXRlbXM9XCJhbWJpdHNcIlxuICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZW50aXR5LmFtYml0XCJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJTZWxlY3RcIlxuICAgICAgICAgICAgICAgICAgICBzaW5nbGUtbGluZVxuICAgICAgICAgICAgICAgICAgICBpdGVtLXRleHQ9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuLW9iamVjdFxuICAgICAgICAgICAgICAgICAgICBwZXJzaXN0ZW50LWhpbnQ+XG4gICAgICAgICAgICAgICAgICA8L3Ytc2VsZWN0PlxuICAgICAgICAgICAgICAgIDwvdi1mbGV4PlxuICAgICAgICAgICAgICA8L3YtbGF5b3V0PlxuICAgICAgICAgICAgICA8IS0taW5wdXQgdGV4dCBkZXNjcmlwY2lvLS0+XG4gICAgICAgICAgICAgIDx2LWxheW91dCByb3cgd3JhcD5cbiAgICAgICAgICAgICAgICA8di10ZXh0LWZpZWxkXG4gICAgICAgICAgICAgICAgICBsYWJlbD1cIkRlc2NyaXBjacOzXCJcbiAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJlbnRpdHkuZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgICAgICAgOnJ1bGVzPVwiZGVzY3JpcHRpb25SdWxlc1wiXG4gICAgICAgICAgICAgICAgICA6Y291bnRlcj1cIjI1NVwiPlxuICAgICAgICAgICAgICAgIDwvdi10ZXh0LWZpZWxkPlxuICAgICAgICAgICAgICA8L3YtbGF5b3V0PlxuICAgICAgICAgICAgICA8IS0taW5wdXQgdGV4dCBkZXN0aW5hdGFyaXMtLT5cbiAgICAgICAgICAgICAgPHYtbGF5b3V0IHJvdyB3cmFwPlxuICAgICAgICAgICAgICAgIDx2LXRleHQtZmllbGRcbiAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRGVzdGluYXRhcmlzXCJcbiAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJlbnRpdHkuZGVzdGluYXRhcmlzXCJcbiAgICAgICAgICAgICAgICAgIDpydWxlcz1cImRlc3RpbmF0YXJpc1J1bGVzXCJcbiAgICAgICAgICAgICAgICAgIDpjb3VudGVyPVwiNDBcIlxuICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ+XG4gICAgICAgICAgICAgICAgPC92LXRleHQtZmllbGQ+XG4gICAgICAgICAgICAgIDwvdi1sYXlvdXQ+XG4gICAgICAgICAgICAgIDwhLS10aW1lIGhvcmFfaW5pY2ktLT5cbiAgICAgICAgICAgICAgPHYtbGF5b3V0IHJvdyB3cmFwPlxuICAgICAgICAgICAgICAgIDx2LWZsZXggeHMxMiBtZDU+XG4gICAgICAgICAgICAgICAgICA8di1tZW51XG4gICAgICAgICAgICAgICAgICAgIHJlZj1cIm1lbnVcIlxuICAgICAgICAgICAgICAgICAgICBsYXp5XG4gICAgICAgICAgICAgICAgICAgIDpjbG9zZS1vbi1jb250ZW50LWNsaWNrPVwiZmFsc2VcIlxuICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwibWVudTFcIlxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uPVwic2NhbGUtdHJhbnNpdGlvblwiXG4gICAgICAgICAgICAgICAgICAgIG9mZnNldC15XG4gICAgICAgICAgICAgICAgICAgIGZ1bGwtd2lkdGhcbiAgICAgICAgICAgICAgICAgICAgOm51ZGdlLXJpZ2h0PVwiNDBcIlxuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg9XCIyOTBweFwiXG4gICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aD1cIjI5MHB4XCJcbiAgICAgICAgICAgICAgICAgICAgOnJldHVybi12YWx1ZS5zeW5jPVwiZW50aXR5LmhvcmFfaW5pY2lcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8di10ZXh0LWZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgc2xvdD1cImFjdGl2YXRvclwiXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJIb3JhIGluaWNpXCJcbiAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZW50aXR5LmhvcmFfaW5pY2lcIlxuICAgICAgICAgICAgICAgICAgICAgIHByZXBlbmQtaWNvbj1cImFjY2Vzc190aW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICByZWFkb25seT5cbiAgICAgICAgICAgICAgICAgICAgPC92LXRleHQtZmllbGQ+XG4gICAgICAgICAgICAgICAgICAgIDx2LXRpbWUtcGlja2VyIHYtbW9kZWw9XCJlbnRpdHkuaG9yYV9pbmljaVwiIEBjaGFuZ2U9XCIkcmVmcy5tZW51LnNhdmUoZW50aXR5LmhvcmFfaW5pY2kpXCI+XG4gICAgICAgICAgICAgICAgICAgIDwvdi10aW1lLXBpY2tlcj5cbiAgICAgICAgICAgICAgICAgIDwvdi1tZW51PlxuICAgICAgICAgICAgICAgIDwvdi1mbGV4PlxuICAgICAgICAgICAgICAgIDx2LXNwYWNlcj5cbiAgICAgICAgICAgICAgICA8L3Ytc3BhY2VyPlxuICAgICAgICAgICAgICAgIDwhLS10aW1lIGhvcmFfZmktLT5cbiAgICAgICAgICAgICAgICA8di1mbGV4IHhzMTIgbWQ1PlxuICAgICAgICAgICAgICAgICAgPHYtbWVudVxuICAgICAgICAgICAgICAgICAgICByZWY9XCJtZW51XCJcbiAgICAgICAgICAgICAgICAgICAgbGF6eVxuICAgICAgICAgICAgICAgICAgICA6Y2xvc2Utb24tY29udGVudC1jbGljaz1cImZhbHNlXCJcbiAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cIm1lbnUyXCJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbj1cInNjYWxlLXRyYW5zaXRpb25cIlxuICAgICAgICAgICAgICAgICAgICBvZmZzZXQteVxuICAgICAgICAgICAgICAgICAgICBmdWxsLXdpZHRoXG4gICAgICAgICAgICAgICAgICAgIDpudWRnZS1yaWdodD1cIjQwXCJcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoPVwiMjkwcHhcIlxuICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg9XCIyOTBweFwiXG4gICAgICAgICAgICAgICAgICAgIDpyZXR1cm4tdmFsdWUuc3luYz1cImVudGl0eS5ob3JhX2ZpXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHYtdGV4dC1maWVsZFxuICAgICAgICAgICAgICAgICAgICAgIHNsb3Q9XCJhY3RpdmF0b3JcIlxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiSG9yYSBmaVwiXG4gICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cImVudGl0eS5ob3JhX2ZpXCJcbiAgICAgICAgICAgICAgICAgICAgICBwcmVwZW5kLWljb249XCJhY2Nlc3NfdGltZVwiXG4gICAgICAgICAgICAgICAgICAgICAgcmVhZG9ubHk+XG4gICAgICAgICAgICAgICAgICAgIDwvdi10ZXh0LWZpZWxkPlxuICAgICAgICAgICAgICAgICAgICA8di10aW1lLXBpY2tlciB2LW1vZGVsPVwiZW50aXR5LmhvcmFfZmlcIiBAY2hhbmdlPVwiJHJlZnMubWVudS5zYXZlKGVudGl0eS5ob3JhX2ZpKVwiPlxuICAgICAgICAgICAgICAgICAgICA8L3YtdGltZS1waWNrZXI+XG4gICAgICAgICAgICAgICAgICA8L3YtbWVudT5cbiAgICAgICAgICAgICAgICA8L3YtZmxleD5cbiAgICAgICAgICAgICAgPC92LWxheW91dD5cbiAgICAgICAgICAgICAgPCEtLXNlbGVjdCB0aXB1c19ob3JhcmktLT5cbiAgICAgICAgICAgICAgPHYtbGF5b3V0IHJvdyB3cmFwPlxuICAgICAgICAgICAgICAgIDx2LWZsZXggeHM2PlxuICAgICAgICAgICAgICAgICAgPHYtc3ViaGVhZGVyPlRpcHVzIGhvcmFyaTwvdi1zdWJoZWFkZXI+XG4gICAgICAgICAgICAgICAgPC92LWZsZXg+XG4gICAgICAgICAgICAgICAgPHYtZmxleCB4czY+XG4gICAgICAgICAgICAgICAgICA8di1zZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgOml0ZW1zPVwidGlwdXNfaG9yYXJpc1wiXG4gICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJlbnRpdHkudGlwdXNfaG9yYXJpXCJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJTZWxlY3RcIlxuICAgICAgICAgICAgICAgICAgICBzaW5nbGUtbGluZVxuICAgICAgICAgICAgICAgICAgICBpdGVtLXRleHQ9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuLW9iamVjdFxuICAgICAgICAgICAgICAgICAgICBwZXJzaXN0ZW50LWhpbnQ+XG4gICAgICAgICAgICAgICAgICA8L3Ytc2VsZWN0PlxuICAgICAgICAgICAgICAgIDwvdi1mbGV4PlxuICAgICAgICAgICAgICA8L3YtbGF5b3V0PlxuICAgICAgICAgICAgICA8IS0taW5wdXQgaW50IG51bV92b2x1bnRhcmlzX25lY2Vzc2FyaXMtLT5cbiAgICAgICAgICAgICAgPCEtLWlucHV0IHRleHQgY29uZWl4ZW1lbnRzX3JlcS0tPlxuICAgICAgICAgICAgICA8IS0taW5wdXQgdGV4dCBoYWJpdGl0YXRzX3JlcS0tPlxuICAgICAgICAgICAgICA8IS0taW5wdXQgdGV4dCBleHBlcmllbmNpYV9yZXEtLT5cbiAgICAgICAgICAgICAgPCEtLWlucHV0IHRleHQgdGl0b2xzX2Zvcm1hY2lvX3JlcS0tPlxuICAgICAgICAgICAgICA8IS0taW5wdXQgdGV4dCBpZGlvbWVzX3JlcS0tPlxuICAgICAgICAgICAgICA8IS0tYm9vbGVhbiBkaXNwb25pYmlsaXRhdF92ZWhpY2xlX3JlcS0tPlxuICAgICAgICAgICAgICA8IS0tc2VsZWN0IGNvbmRpY2lvX2Zpc2ljYV9yZXEtLT5cbiAgICAgICAgICAgICAgPCEtLXNlbGVjdCBzZXhlX3JlcS0tPlxuICAgICAgICAgICAgPC92LWZvcm0+XG4gICAgICAgICAgPC92LWNhcmQtdGV4dD5cbiAgICAgICAgIDwvdi1jYXJkPlxuICAgICAgIDwvdi1mbGV4PlxuICAgICA8L3YtbGF5b3V0PlxuICAgPC92LWNvbnRhaW5lcj5cbiA8L3YtYXBwPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgaW1wb3J0ICogYXMgbXV0YXRpb25zIGZyb20gXCIuLi9zdG9yZS9tdXRhdGlvbi10eXBlc1wiO1xuICBpbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gXCIuLi9zdG9yZS9hY3Rpb24tdHlwZXNcIlxuXG4gIGV4cG9ydCBkZWZhdWx0IHtcbiAgICBuYW1lOiAnQ3JlYXRlQWN0aXZpdHknLFxuICAgIGRhdGEoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB2YWxpZDogZmFsc2UsXG4gICAgICAgIGVudGl0eToge30sXG4gICAgICAgIG5hbWVSdWxlczogW1xuICAgICAgICAgIHYgPT4gISF2IHx8ICdOYW1lIGlzIHJlcXVpcmVkJyxcbiAgICAgICAgICB2ID0+ICh2ICYmIHYubGVuZ3RoIDw9IDQwKSB8fCAnTmFtZSBtdXN0IGJlIGxlc3MgdGhhbiAxMCBjaGFyYWN0ZXJzJ1xuICAgICAgICBdLFxuICAgICAgICBkZXNjcmlwdGlvblJ1bGVzOiBbXG4gICAgICAgICAgdiA9PiAodiAmJiB2Lmxlbmd0aCA8PSAyNTUpIHx8IFwiTGEgZGVzY3JpcGNpw7Mgbm8gcG90IGV4Y2VkaXIgZWxzIDI1NSBjYXLDoGN0ZXJzXCJcbiAgICAgICAgXSxcbiAgICAgICAgZGVzdGluYXRhcmlzUnVsZXM6IFtcbiAgICAgICAgICB2ID0+ICh2ICYmIHYubGVuZ3RoIDw9IDQwKSB8fCBcIkVscyBkZXN0aW5hdGFyaXMgbm8gcG9kZW4gZXhjZWRpciBlbHMgNDAgY2Fyw6BjdGVyc1wiXG4gICAgICAgIF0sXG4gICAgICAgIHVzZXJTZWxlY3RlZDogeyBuYW1lOiAnRW50aXR5JyB9LFxuICAgICAgICBhbWJpdFNlbGVjdGVkOiB7IGFtYml0OiAnRGVmYXVsdCcgfSxcbiAgICAgICAgYW1iaXRzOiBbXG4gICAgICAgICAgeyBuYW1lOiAnQ3VsdHVyYSd9LFxuICAgICAgICAgIHsgbmFtZTogJ0VzY29sYXInfSxcbiAgICAgICAgICB7IG5hbWU6ICdBcnTDrXN0aWMnfSxcbiAgICAgICAgICB7IG5hbWU6ICdFc3BvcnRpdSd9LFxuICAgICAgICAgIHsgbmFtZTogJ0xsZXVyZScgfSxcbiAgICAgICAgICB7IG5hbWU6ICdTdXBvcnQnfVxuICAgICAgICBdLFxuICAgICAgICB0aXB1c19ob3JhcmlzOiBbXG4gICAgICAgICAgeyBuYW1lOiAnUHVudHVhbCcgfSxcbiAgICAgICAgICB7IG5hbWU6ICdQZXJpw7JkaWMnIH1cbiAgICAgICAgXSxcbiAgICAgICAgcm9sZTogbnVsbCxcbiAgICAgICAgbWVudTE6IGZhbHNlLFxuICAgICAgICBtZW51MjogZmFsc2UsXG4gICAgICB9XG4gICAgfSxcbiAgICBjb21wdXRlZDoge1xuICAgICAgZW50aXRpZXM6IHtcbiAgICAgICAgZ2V0KCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLiRzdG9yZS5zdGF0ZS5lbnRpdGllc1xuICAgICAgICB9LFxuICAgICAgICBzZXQodmFsdWUpIHtcbiAgICAgICAgICB0aGlzLiRzdG9yZS5jb21taXQobXV0YXRpb25zLlNFVF9FTlRJVElFUywgdmFsdWUpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIG1vdW50ZWQoKSB7XG4gICAgICB0aGlzLnJvbGUgPSB0aGlzLiRzdG9yZS5zdGF0ZS5yb2xlc1xuICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goYWN0aW9ucy5GRVRDSF9FTlRJVElFUylcbiAgICB9XG4gIH1cbjwvc2NyaXB0PlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByZXNvdXJjZXMvYXNzZXRzL2pzL3ZvbHVudGFyaWF0L2NvbXBvbmVudHMvQ3JlYXRlQWN0aXZpdHkudnVlIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcInYtYXBwXCIsXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwidi1jb250YWluZXJcIixcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ2LWxheW91dFwiLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInYtZmxleFwiLFxuICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgeHMxMjogXCJcIiB9IH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidi1jYXJkXCIsXG4gICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibWEtMVwiIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidi1jYXJkLXRpdGxlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1sYXlvdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGNvbHVtbjogXCJcIiwgXCJhbGlnbi1jZW50ZXJcIjogXCJcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW19jKFwiaDFcIiwgW192bS5fdihcIk5vdmEgQWN0aXZpdGF0XCIpXSldXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWNhcmQtdGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtZm9ybVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0udmFsaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udmFsaWQgPSAkJHZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJ2YWxpZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJvbGUgPT09IFwic3VwZXJBZG1pblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtbGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHJvdzogXCJcIiwgd3JhcDogXCJcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1mbGV4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyB4czY6IFwiXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi1zdWJoZWFkZXJcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJFbnRpdGF0IG9yZ2FuaXR6YWRvcmFcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1mbGV4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyB4czY6IFwiXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi1zZWxlY3RcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zOiBfdm0uZW50aXRpZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiU2VsZWN0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzaW5nbGUtbGluZVwiOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaXRlbS10ZXh0XCI6IFwibmFtZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicmV0dXJuLW9iamVjdFwiOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpbnQ6IFwiXCIgKyBfdm0udXNlclNlbGVjdGVkLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwZXJzaXN0ZW50LWhpbnRcIjogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0udXNlclNlbGVjdGVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS51c2VyU2VsZWN0ZWQgPSAkJHZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwidXNlclNlbGVjdGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1sYXlvdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyByb3c6IFwiXCIsIHdyYXA6IFwiXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LXRleHQtZmllbGRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiTmFtZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBydWxlczogX3ZtLm5hbWVSdWxlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnRlcjogNDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5lbnRpdHkubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5lbnRpdHksIFwibmFtZVwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZW50aXR5Lm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1sYXlvdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyByb3c6IFwiXCIsIHdyYXA6IFwiXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtZmxleFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyB4czY6IFwiXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW19jKFwidi1zdWJoZWFkZXJcIiwgW192bS5fdihcIsOAbWJpdDpcIildKV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWZsZXhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgeHM2OiBcIlwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LXNlbGVjdFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zOiBfdm0uYW1iaXRzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiU2VsZWN0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNpbmdsZS1saW5lXCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIml0ZW0tdGV4dFwiOiBcIm5hbWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicmV0dXJuLW9iamVjdFwiOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwZXJzaXN0ZW50LWhpbnRcIjogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZW50aXR5LmFtYml0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZW50aXR5LCBcImFtYml0XCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImVudGl0eS5hbWJpdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1sYXlvdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyByb3c6IFwiXCIsIHdyYXA6IFwiXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LXRleHQtZmllbGRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiRGVzY3JpcGNpw7NcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcnVsZXM6IF92bS5kZXNjcmlwdGlvblJ1bGVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudGVyOiAyNTVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmVudGl0eS5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5lbnRpdHksIFwiZGVzY3JpcHRpb25cIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImVudGl0eS5kZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWxheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHJvdzogXCJcIiwgd3JhcDogXCJcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtdGV4dC1maWVsZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJEZXN0aW5hdGFyaXNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcnVsZXM6IF92bS5kZXN0aW5hdGFyaXNSdWxlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnRlcjogNDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5lbnRpdHkuZGVzdGluYXRhcmlzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZW50aXR5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkZXN0aW5hdGFyaXNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQkdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJlbnRpdHkuZGVzdGluYXRhcmlzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtbGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgcm93OiBcIlwiLCB3cmFwOiBcIlwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWZsZXhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgeHMxMjogXCJcIiwgbWQ1OiBcIlwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LW1lbnVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY6IFwibWVudVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF6eTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbG9zZS1vbi1jb250ZW50LWNsaWNrXCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBcInNjYWxlLXRyYW5zaXRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJvZmZzZXQteVwiOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZ1bGwtd2lkdGhcIjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJudWRnZS1yaWdodFwiOiA0MCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtYXgtd2lkdGhcIjogXCIyOTBweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm1pbi13aWR0aFwiOiBcIjI5MHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicmV0dXJuLXZhbHVlXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmVudGl0eS5ob3JhX2luaWNpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ1cGRhdGU6cmV0dXJuVmFsdWVcIjogZnVuY3Rpb24oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmVudGl0eSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaG9yYV9pbmljaVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5tZW51MSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5tZW51MSA9ICQkdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIm1lbnUxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi10ZXh0LWZpZWxkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbG90OiBcImFjdGl2YXRvclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIkhvcmEgaW5pY2lcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInByZXBlbmQtaWNvblwiOiBcImFjY2Vzc190aW1lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZG9ubHk6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xvdDogXCJhY3RpdmF0b3JcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmVudGl0eS5ob3JhX2luaWNpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZW50aXR5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImhvcmFfaW5pY2lcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCR2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImVudGl0eS5ob3JhX2luaWNpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LXRpbWUtcGlja2VyXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2U6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRyZWZzLm1lbnUuc2F2ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmVudGl0eS5ob3JhX2luaWNpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZW50aXR5LmhvcmFfaW5pY2ksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5lbnRpdHksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaG9yYV9pbmljaVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkJHZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZW50aXR5LmhvcmFfaW5pY2lcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtc3BhY2VyXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtZmxleFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyB4czEyOiBcIlwiLCBtZDU6IFwiXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtbWVudVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZjogXCJtZW51XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXp5OiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNsb3NlLW9uLWNvbnRlbnQtY2xpY2tcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IFwic2NhbGUtdHJhbnNpdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm9mZnNldC15XCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZnVsbC13aWR0aFwiOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm51ZGdlLXJpZ2h0XCI6IDQwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm1heC13aWR0aFwiOiBcIjI5MHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibWluLXdpZHRoXCI6IFwiMjkwcHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyZXR1cm4tdmFsdWVcIjogX3ZtLmVudGl0eS5ob3JhX2ZpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ1cGRhdGU6cmV0dXJuVmFsdWVcIjogZnVuY3Rpb24oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmVudGl0eSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaG9yYV9maVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5tZW51MixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5tZW51MiA9ICQkdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIm1lbnUyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi10ZXh0LWZpZWxkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbG90OiBcImFjdGl2YXRvclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIkhvcmEgZmlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInByZXBlbmQtaWNvblwiOiBcImFjY2Vzc190aW1lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZG9ubHk6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xvdDogXCJhY3RpdmF0b3JcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmVudGl0eS5ob3JhX2ZpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZW50aXR5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImhvcmFfZmlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCR2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImVudGl0eS5ob3JhX2ZpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LXRpbWUtcGlja2VyXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2U6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRyZWZzLm1lbnUuc2F2ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmVudGl0eS5ob3JhX2ZpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZW50aXR5LmhvcmFfZmksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5lbnRpdHksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaG9yYV9maVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkJHZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZW50aXR5LmhvcmFfZmlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWxheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHJvdzogXCJcIiwgd3JhcDogXCJcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1mbGV4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHhzNjogXCJcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi1zdWJoZWFkZXJcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIlRpcHVzIGhvcmFyaVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtZmxleFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyB4czY6IFwiXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtc2VsZWN0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM6IF92bS50aXB1c19ob3JhcmlzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiU2VsZWN0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNpbmdsZS1saW5lXCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIml0ZW0tdGV4dFwiOiBcIm5hbWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicmV0dXJuLW9iamVjdFwiOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwZXJzaXN0ZW50LWhpbnRcIjogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZW50aXR5LnRpcHVzX2hvcmFyaSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmVudGl0eSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRpcHVzX2hvcmFyaVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQkdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJlbnRpdHkudGlwdXNfaG9yYXJpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxubW9kdWxlLmV4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LWUzYmM2NjU0XCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi1lM2JjNjY1NFwiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvdm9sdW50YXJpYXQvY29tcG9uZW50cy9DcmVhdGVBY3Rpdml0eS52dWVcbi8vIG1vZHVsZSBpZCA9IDE2MlxuLy8gbW9kdWxlIGNodW5rcyA9IDE5IiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG52YXIgX192dWVfc2NyaXB0X18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIix7XFxcInBvbHlmaWxsXFxcIjpmYWxzZSxcXFwiaGVscGVyc1xcXCI6ZmFsc2V9XV19IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vQ3JlYXRlQWN0aXZpdHkudnVlXCIpXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi1lM2JjNjY1NFxcXCIsXFxcImhhc1Njb3BlZFxcXCI6ZmFsc2UsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL0NyZWF0ZUFjdGl2aXR5LnZ1ZVwiKVxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IG51bGxcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBudWxsXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvYXNzZXRzL2pzL3ZvbHVudGFyaWF0L2NvbXBvbmVudHMvQ3JlYXRlQWN0aXZpdHkudnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LWUzYmM2NjU0XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtZTNiYzY2NTRcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvdm9sdW50YXJpYXQvY29tcG9uZW50cy9DcmVhdGVBY3Rpdml0eS52dWVcbi8vIG1vZHVsZSBpZCA9IDg4XG4vLyBtb2R1bGUgY2h1bmtzID0gMTkiXSwic291cmNlUm9vdCI6IiJ9