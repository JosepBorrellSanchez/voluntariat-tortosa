webpackJsonp([17],{

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store_action_types__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__store_mutation_types__ = __webpack_require__(2);
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      activitat: null,
      dialog: false
    };
  },

  computed: {
    entity: {
      get: function get() {
        return this.$store.state.entity;
      },
      set: function set(value) {
        this.$store.commit(__WEBPACK_IMPORTED_MODULE_1__store_mutation_types__["k" /* SET_ENTITY */], value);
      }
    },
    info: {
      get: function get() {
        return this.$store.state.info;
      },
      set: function set(value) {
        this.$store.commit(__WEBPACK_IMPORTED_MODULE_1__store_mutation_types__["l" /* SET_INFO */], value);
      }
    },
    loading: {
      get: function get() {
        return this.$store.state.loading;
      },
      set: function set(value) {
        this.$store.commit(__WEBPACK_IMPORTED_MODULE_1__store_mutation_types__["m" /* SET_LOADING */], value);
      }
    },
    user_activities: {
      get: function get() {
        return this.$store.state.activitats_user;
      },
      set: function set(value) {
        this.$store.commit(__WEBPACK_IMPORTED_MODULE_1__store_mutation_types__["e" /* SET_ACTIVITATS_USER */], value);
      }
    }
  },
  methods: {
    deleteActivity: function deleteActivity(activitat) {
      this.dialog = true;
      this.activitat = activitat;
    },
    destroy: function destroy(activitat) {
      this.$store.dispatch(__WEBPACK_IMPORTED_MODULE_0__store_action_types__["a" /* DELETE_ACTIVITAT */], { activitat: activitat, user_id: this.id });
    },
    redirect: function redirect(id) {
      var path = '/activitats/' + id;
      this.$router.push({ path: path });
    }
  },
  props: ['id'],
  mounted: function mounted() {
    this.$store.dispatch(__WEBPACK_IMPORTED_MODULE_0__store_action_types__["u" /* GET_ENTITY */], this.id);
    this.$store.dispatch(__WEBPACK_IMPORTED_MODULE_0__store_action_types__["v" /* GET_INFO */], this.id);
    this.$store.dispatch(__WEBPACK_IMPORTED_MODULE_0__store_action_types__["p" /* FETCH_ENTITY_ACTIVITIES */], this.id);
  }
});

/***/ }),

/***/ 132:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-app",
    [
      _c("router-view", {
        attrs: {
          entity: _vm.entity,
          info: _vm.info,
          user_activities: _vm.user_activities,
          loading: _vm.loading
        },
        on: { redirect: _vm.redirect, delete: _vm.deleteActivity }
      }),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: { persistent: "", "max-width": "290" },
          model: {
            value: _vm.dialog,
            callback: function($$v) {
              _vm.dialog = $$v
            },
            expression: "dialog"
          }
        },
        [
          _c(
            "v-card",
            [
              _c("v-card-title", { staticClass: "headline" }, [
                _vm._v("Segur que vols eliminar aquesta activitat?")
              ]),
              _vm._v(" "),
              _c(
                "v-card-actions",
                [
                  _c(
                    "v-btn",
                    {
                      attrs: { color: "green darken-1", flat: "" },
                      nativeOn: {
                        click: function($event) {
                          _vm.dialog = false
                        }
                      }
                    },
                    [_vm._v("Cancel·la")]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { color: "green darken-1", flat: "" },
                      on: {
                        click: function($event) {
                          _vm.destroy(_vm.activitat)
                        }
                      },
                      nativeOn: {
                        click: function($event) {
                          _vm.dialog = false
                        }
                      }
                    },
                    [_vm._v("Elimina")]
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
    require("vue-hot-reload-api")      .rerender("data-v-3ec95b7a", module.exports)
  }
}

/***/ }),

/***/ 78:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(6)
/* script */
var __vue_script__ = __webpack_require__(131)
/* template */
var __vue_template__ = __webpack_require__(132)
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
Component.options.__file = "resources/assets/js/voluntariat/components/EntityContainer.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3ec95b7a", Component.options)
  } else {
    hotAPI.reload("data-v-3ec95b7a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy92b2x1bnRhcmlhdC9jb21wb25lbnRzL0VudGl0eUNvbnRhaW5lci52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy92b2x1bnRhcmlhdC9jb21wb25lbnRzL0VudGl0eUNvbnRhaW5lci52dWU/ZTgxMCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3ZvbHVudGFyaWF0L2NvbXBvbmVudHMvRW50aXR5Q29udGFpbmVyLnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXNCQTtBQUNBOztBQUVBO3dCQUVBOztpQkFFQTtjQUVBO0FBSEE7QUFJQTs7OzswQkFHQTtpQ0FDQTtBQUNBOytCQUNBO3NHQUNBO0FBRUE7QUFQQTs7MEJBU0E7aUNBQ0E7QUFDQTsrQkFDQTtvR0FDQTtBQUVBO0FBUEE7OzBCQVNBO2lDQUNBO0FBQ0E7K0JBQ0E7dUdBQ0E7QUFFQTtBQVBBOzswQkFTQTtpQ0FDQTtBQUNBOytCQUNBOytHQUNBO0FBR0E7QUFSQTtBQXpCQTs7dURBbUNBO29CQUNBO3VCQUNBO0FBQ0E7eUNBQ0E7Z0pBQ0E7QUFDQTtvQ0FDQTtrQ0FDQTtnQ0FDQTtBQUVBO0FBWkE7VUFhQTs4QkFDQTt1R0FDQTtxR0FDQTtvSEFDQTtBQUNBO0FBM0RBLEc7Ozs7Ozs7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsYUFBYTtBQUNiLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixxQ0FBcUM7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQywwQkFBMEI7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLG9DQUFvQztBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixvQ0FBb0M7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7O0FDM0ZBO0FBQ0E7QUFDQTtBQUNBLDRDQUFzUjtBQUN0UjtBQUNBLDhDQUFtTDtBQUNuTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQiLCJmaWxlIjoiMTcuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDx2LWFwcD5cbiAgICA8cm91dGVyLXZpZXdcbiAgICAgIDplbnRpdHk9XCJlbnRpdHlcIlxuICAgICAgOmluZm89XCJpbmZvXCJcbiAgICAgIDp1c2VyX2FjdGl2aXRpZXM9XCJ1c2VyX2FjdGl2aXRpZXNcIlxuICAgICAgOmxvYWRpbmc9XCJsb2FkaW5nXCJcbiAgICAgIEByZWRpcmVjdD1cInJlZGlyZWN0XCJcbiAgICAgIEBkZWxldGU9XCJkZWxldGVBY3Rpdml0eVwiPlxuICAgIDwvcm91dGVyLXZpZXc+XG4gICAgPHYtZGlhbG9nIHYtbW9kZWw9XCJkaWFsb2dcIiBwZXJzaXN0ZW50IG1heC13aWR0aD1cIjI5MFwiPlxuICAgICAgPHYtY2FyZD5cbiAgICAgICAgPHYtY2FyZC10aXRsZSBjbGFzcz1cImhlYWRsaW5lXCI+U2VndXIgcXVlIHZvbHMgZWxpbWluYXIgYXF1ZXN0YSBhY3Rpdml0YXQ/PC92LWNhcmQtdGl0bGU+XG4gICAgICAgIDx2LWNhcmQtYWN0aW9ucz5cbiAgICAgICAgICA8di1idG4gY29sb3I9XCJncmVlbiBkYXJrZW4tMVwiIGZsYXQgQGNsaWNrLm5hdGl2ZT1cImRpYWxvZyA9IGZhbHNlXCI+Q2FuY2VswrdsYTwvdi1idG4+XG4gICAgICAgICAgPHYtYnRuIGNvbG9yPVwiZ3JlZW4gZGFya2VuLTFcIiBAY2xpY2s9XCJkZXN0cm95KGFjdGl2aXRhdClcIiBmbGF0IEBjbGljay5uYXRpdmU9XCJkaWFsb2cgPSBmYWxzZVwiPkVsaW1pbmE8L3YtYnRuPlxuICAgICAgICA8L3YtY2FyZC1hY3Rpb25zPlxuICAgICAgPC92LWNhcmQ+XG4gICAgPC92LWRpYWxvZz5cbiAgPC92LWFwcD5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gIGltcG9ydCAqIGFzIGFjdGlvbnMgZnJvbSAnLi4vc3RvcmUvYWN0aW9uLXR5cGVzJ1xuICBpbXBvcnQgKiBhcyBtdXRhdGlvbnMgZnJvbSAnLi4vc3RvcmUvbXV0YXRpb24tdHlwZXMnXG5cbiAgZXhwb3J0IGRlZmF1bHQge1xuICAgIGRhdGEoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBhY3Rpdml0YXQ6IG51bGwsXG4gICAgICAgIGRpYWxvZzogZmFsc2VcbiAgICAgIH1cbiAgICB9LFxuICAgIGNvbXB1dGVkOiB7XG4gICAgICBlbnRpdHk6IHtcbiAgICAgICAgZ2V0KCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLiRzdG9yZS5zdGF0ZS5lbnRpdHlcbiAgICAgICAgfSxcbiAgICAgICAgc2V0KHZhbHVlKSB7XG4gICAgICAgICAgdGhpcy4kc3RvcmUuY29tbWl0KG11dGF0aW9ucy5TRVRfRU5USVRZLCB2YWx1ZSlcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGluZm86IHtcbiAgICAgICAgZ2V0KCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLiRzdG9yZS5zdGF0ZS5pbmZvXG4gICAgICAgIH0sXG4gICAgICAgIHNldCh2YWx1ZSkge1xuICAgICAgICAgIHRoaXMuJHN0b3JlLmNvbW1pdChtdXRhdGlvbnMuU0VUX0lORk8sIHZhbHVlKVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgbG9hZGluZzoge1xuICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuJHN0b3JlLnN0YXRlLmxvYWRpbmdcbiAgICAgICAgfSxcbiAgICAgICAgc2V0KHZhbHVlKSB7XG4gICAgICAgICAgdGhpcy4kc3RvcmUuY29tbWl0KG11dGF0aW9ucy5TRVRfTE9BRElORywgdmFsdWUpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB1c2VyX2FjdGl2aXRpZXM6IHtcbiAgICAgICAgZ2V0KCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLiRzdG9yZS5zdGF0ZS5hY3Rpdml0YXRzX3VzZXJcbiAgICAgICAgfSxcbiAgICAgICAgc2V0KHZhbHVlKSB7XG4gICAgICAgICAgdGhpcy4kc3RvcmUuY29tbWl0KG11dGF0aW9ucy5TRVRfQUNUSVZJVEFUU19VU0VSLCB2YWx1ZSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgZGVsZXRlQWN0aXZpdHkoYWN0aXZpdGF0KSB7XG4gICAgICAgIHRoaXMuZGlhbG9nID0gdHJ1ZVxuICAgICAgICB0aGlzLmFjdGl2aXRhdCA9IGFjdGl2aXRhdFxuICAgICAgfSxcbiAgICAgIGRlc3Ryb3koYWN0aXZpdGF0KSB7XG4gICAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKGFjdGlvbnMuREVMRVRFX0FDVElWSVRBVCwgeyBhY3Rpdml0YXQ6IGFjdGl2aXRhdCwgdXNlcl9pZDogdGhpcy5pZCB9KVxuICAgICAgfSxcbiAgICAgIHJlZGlyZWN0KGlkKSB7XG4gICAgICAgIGxldCBwYXRoID0gJy9hY3Rpdml0YXRzLycgKyBpZFxuICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCh7IHBhdGg6IHBhdGggfSlcbiAgICAgIH1cbiAgICB9LFxuICAgIHByb3BzOiBbJ2lkJ10sXG4gICAgbW91bnRlZCAoKSB7XG4gICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaChhY3Rpb25zLkdFVF9FTlRJVFksIHRoaXMuaWQpXG4gICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaChhY3Rpb25zLkdFVF9JTkZPLCB0aGlzLmlkKVxuICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goYWN0aW9ucy5GRVRDSF9FTlRJVFlfQUNUSVZJVElFUywgdGhpcy5pZClcbiAgICB9XG4gIH1cbjwvc2NyaXB0PlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByZXNvdXJjZXMvYXNzZXRzL2pzL3ZvbHVudGFyaWF0L2NvbXBvbmVudHMvRW50aXR5Q29udGFpbmVyLnZ1ZSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJ2LWFwcFwiLFxuICAgIFtcbiAgICAgIF9jKFwicm91dGVyLXZpZXdcIiwge1xuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIGVudGl0eTogX3ZtLmVudGl0eSxcbiAgICAgICAgICBpbmZvOiBfdm0uaW5mbyxcbiAgICAgICAgICB1c2VyX2FjdGl2aXRpZXM6IF92bS51c2VyX2FjdGl2aXRpZXMsXG4gICAgICAgICAgbG9hZGluZzogX3ZtLmxvYWRpbmdcbiAgICAgICAgfSxcbiAgICAgICAgb246IHsgcmVkaXJlY3Q6IF92bS5yZWRpcmVjdCwgZGVsZXRlOiBfdm0uZGVsZXRlQWN0aXZpdHkgfVxuICAgICAgfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwidi1kaWFsb2dcIixcbiAgICAgICAge1xuICAgICAgICAgIGF0dHJzOiB7IHBlcnNpc3RlbnQ6IFwiXCIsIFwibWF4LXdpZHRoXCI6IFwiMjkwXCIgfSxcbiAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgdmFsdWU6IF92bS5kaWFsb2csXG4gICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgIF92bS5kaWFsb2cgPSAkJHZcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBleHByZXNzaW9uOiBcImRpYWxvZ1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInYtY2FyZFwiLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcInYtY2FyZC10aXRsZVwiLCB7IHN0YXRpY0NsYXNzOiBcImhlYWRsaW5lXCIgfSwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihcIlNlZ3VyIHF1ZSB2b2xzIGVsaW1pbmFyIGFxdWVzdGEgYWN0aXZpdGF0P1wiKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2LWNhcmQtYWN0aW9uc1wiLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBjb2xvcjogXCJncmVlbiBkYXJrZW4tMVwiLCBmbGF0OiBcIlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgbmF0aXZlT246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmRpYWxvZyA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiQ2FuY2VswrdsYVwiKV1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGNvbG9yOiBcImdyZWVuIGRhcmtlbi0xXCIsIGZsYXQ6IFwiXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZGVzdHJveShfdm0uYWN0aXZpdGF0KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgbmF0aXZlT246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmRpYWxvZyA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiRWxpbWluYVwiKV1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbm1vZHVsZS5leHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi0zZWM5NWI3YVwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtM2VjOTViN2FcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3ZvbHVudGFyaWF0L2NvbXBvbmVudHMvRW50aXR5Q29udGFpbmVyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTMyXG4vLyBtb2R1bGUgY2h1bmtzID0gMTciLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbnZhciBfX3Z1ZV9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV1dLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFtcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLHtcXFwicG9seWZpbGxcXFwiOmZhbHNlLFxcXCJoZWxwZXJzXFxcIjpmYWxzZX1dXX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9FbnRpdHlDb250YWluZXIudnVlXCIpXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi0zZWM5NWI3YVxcXCIsXFxcImhhc1Njb3BlZFxcXCI6ZmFsc2UsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL0VudGl0eUNvbnRhaW5lci52dWVcIilcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBudWxsXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2Fzc2V0cy9qcy92b2x1bnRhcmlhdC9jb21wb25lbnRzL0VudGl0eUNvbnRhaW5lci52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtM2VjOTViN2FcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi0zZWM5NWI3YVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy92b2x1bnRhcmlhdC9jb21wb25lbnRzL0VudGl0eUNvbnRhaW5lci52dWVcbi8vIG1vZHVsZSBpZCA9IDc4XG4vLyBtb2R1bGUgY2h1bmtzID0gMTciXSwic291cmNlUm9vdCI6IiJ9