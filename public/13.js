webpackJsonp([13],{

/***/ 143:
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
      dialog: false,
      activity: { name: null }
    };
  },

  computed: {
    volunteer: {
      get: function get() {
        return this.$store.state.volunteer;
      },
      set: function set(value) {
        this.$store.commit(__WEBPACK_IMPORTED_MODULE_1__store_mutation_types__["o" /* SET_VOLUNTEER */], value);
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
    user_activities: {
      get: function get() {
        return this.$store.state.activitats_user;
      },
      set: function set(value) {
        this.$store.commit(__WEBPACK_IMPORTED_MODULE_1__store_mutation_types__["e" /* SET_ACTIVITATS_USER */], value);
      }
    },
    loading: {
      get: function get() {
        return this.$store.state.loading;
      },
      set: function set(value) {
        this.$store.commit(__WEBPACK_IMPORTED_MODULE_1__store_mutation_types__["m" /* SET_LOADING */], value);
      }
    }
  },
  methods: {
    deleteActivity: function deleteActivity(activity) {
      this.dialog = true;
      this.activity = activity;
    },
    detachActivity: function detachActivity() {
      this.$store.dispatch(__WEBPACK_IMPORTED_MODULE_0__store_action_types__["f" /* DETACH_ACTIVITY */], { activity: this.activity, user_id: this.id });
    },
    redirect: function redirect(id) {
      var path = '/activitats/' + id;
      this.$router.push({ path: path });
    }
  },
  props: ['id'],
  mounted: function mounted() {
    this.$store.dispatch(__WEBPACK_IMPORTED_MODULE_0__store_action_types__["w" /* GET_VOLUNTEER */], this.id);
    this.$store.dispatch(__WEBPACK_IMPORTED_MODULE_0__store_action_types__["v" /* GET_INFO */], this.id);
    this.$store.dispatch(__WEBPACK_IMPORTED_MODULE_0__store_action_types__["k" /* FETCH_ACTIVITATS_USER */], this.id);
  }
});

/***/ }),

/***/ 144:
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
          volunteer: _vm.volunteer,
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
                _vm._v(
                  "Segur que vols desinscriure a " +
                    _vm._s(_vm.volunteer.name) +
                    " de l'activitat " +
                    _vm._s(_vm.activity.nom) +
                    "?"
                )
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
                      on: { click: _vm.detachActivity },
                      nativeOn: {
                        click: function($event) {
                          _vm.dialog = false
                        }
                      }
                    },
                    [_vm._v("Desinscriure")]
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
    require("vue-hot-reload-api")      .rerender("data-v-73fb8542", module.exports)
  }
}

/***/ }),

/***/ 82:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(6)
/* script */
var __vue_script__ = __webpack_require__(143)
/* template */
var __vue_template__ = __webpack_require__(144)
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
Component.options.__file = "resources/assets/js/voluntariat/components/VolunteerContainer.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-73fb8542", Component.options)
  } else {
    hotAPI.reload("data-v-73fb8542", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy92b2x1bnRhcmlhdC9jb21wb25lbnRzL1ZvbHVudGVlckNvbnRhaW5lci52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy92b2x1bnRhcmlhdC9jb21wb25lbnRzL1ZvbHVudGVlckNvbnRhaW5lci52dWU/NGMxNCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3ZvbHVudGFyaWF0L2NvbXBvbmVudHMvVm9sdW50ZWVyQ29udGFpbmVyLnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXNCQTtBQUNBOztBQUVBO3dCQUVBOztjQUVBO3dCQUVBO0FBSEE7QUFJQTs7OzswQkFHQTtpQ0FDQTtBQUNBOytCQUNBO3lHQUNBO0FBRUE7QUFQQTs7MEJBU0E7aUNBQ0E7QUFDQTsrQkFDQTtvR0FDQTtBQUVBO0FBUEE7OzBCQVNBO2lDQUNBO0FBQ0E7K0JBQ0E7K0dBQ0E7QUFFQTtBQVBBOzswQkFTQTtpQ0FDQTtBQUNBOytCQUNBO3VHQUNBO0FBR0E7QUFSQTtBQXpCQTs7c0RBbUNBO29CQUNBO3NCQUNBO0FBQ0E7OENBQ0E7a0pBQ0E7QUFDQTtvQ0FDQTtrQ0FDQTtnQ0FDQTtBQUVBO0FBWkE7VUFhQTs4QkFDQTswR0FDQTtxR0FDQTtrSEFDQTtBQUNBO0FBM0RBLEc7Ozs7Ozs7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsYUFBYTtBQUNiLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixxQ0FBcUM7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQywwQkFBMEI7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLG9DQUFvQztBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixvQ0FBb0M7QUFDbEUsMkJBQTJCLDRCQUE0QjtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7QUM3RkE7QUFDQTtBQUNBO0FBQ0EsNENBQXNSO0FBQ3RSO0FBQ0EsOENBQW1MO0FBQ25MO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRCIsImZpbGUiOiIxMy5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPHYtYXBwPlxuICAgIDxyb3V0ZXItdmlld1xuICAgICAgOnZvbHVudGVlcj1cInZvbHVudGVlclwiXG4gICAgICA6aW5mbz1cImluZm9cIlxuICAgICAgOnVzZXJfYWN0aXZpdGllcz1cInVzZXJfYWN0aXZpdGllc1wiXG4gICAgICA6bG9hZGluZz1cImxvYWRpbmdcIlxuICAgICAgQHJlZGlyZWN0PVwicmVkaXJlY3RcIlxuICAgICAgQGRlbGV0ZT1cImRlbGV0ZUFjdGl2aXR5XCI+XG4gICAgPC9yb3V0ZXItdmlldz5cbiAgICA8di1kaWFsb2cgdi1tb2RlbD1cImRpYWxvZ1wiIHBlcnNpc3RlbnQgbWF4LXdpZHRoPVwiMjkwXCI+XG4gICAgICA8di1jYXJkPlxuICAgICAgICA8di1jYXJkLXRpdGxlIGNsYXNzPVwiaGVhZGxpbmVcIj5TZWd1ciBxdWUgdm9scyBkZXNpbnNjcml1cmUgYSB7eyB2b2x1bnRlZXIubmFtZSB9fSBkZSBsJ2FjdGl2aXRhdCB7eyBhY3Rpdml0eS5ub20gfX0/PC92LWNhcmQtdGl0bGU+XG4gICAgICAgIDx2LWNhcmQtYWN0aW9ucz5cbiAgICAgICAgICA8di1idG4gY29sb3I9XCJncmVlbiBkYXJrZW4tMVwiIGZsYXQgQGNsaWNrLm5hdGl2ZT1cImRpYWxvZyA9IGZhbHNlXCI+Q2FuY2VswrdsYTwvdi1idG4+XG4gICAgICAgICAgPHYtYnRuIGNvbG9yPVwiZ3JlZW4gZGFya2VuLTFcIiBAY2xpY2s9XCJkZXRhY2hBY3Rpdml0eVwiIGZsYXQgQGNsaWNrLm5hdGl2ZT1cImRpYWxvZyA9IGZhbHNlXCI+RGVzaW5zY3JpdXJlPC92LWJ0bj5cbiAgICAgICAgPC92LWNhcmQtYWN0aW9ucz5cbiAgICAgIDwvdi1jYXJkPlxuICAgIDwvdi1kaWFsb2c+XG4gIDwvdi1hcHA+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICBpbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gJy4uL3N0b3JlL2FjdGlvbi10eXBlcydcbiAgaW1wb3J0ICogYXMgbXV0YXRpb25zIGZyb20gJy4uL3N0b3JlL211dGF0aW9uLXR5cGVzJ1xuXG4gIGV4cG9ydCBkZWZhdWx0IHtcbiAgICBkYXRhKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZGlhbG9nOiBmYWxzZSxcbiAgICAgICAgYWN0aXZpdHk6IHsgbmFtZTogbnVsbCB9XG4gICAgICB9XG4gICAgfSxcbiAgICBjb21wdXRlZDoge1xuICAgICAgdm9sdW50ZWVyOiB7XG4gICAgICAgIGdldCgpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy4kc3RvcmUuc3RhdGUudm9sdW50ZWVyXG4gICAgICAgIH0sXG4gICAgICAgIHNldCh2YWx1ZSkge1xuICAgICAgICAgIHRoaXMuJHN0b3JlLmNvbW1pdChtdXRhdGlvbnMuU0VUX1ZPTFVOVEVFUiwgdmFsdWUpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBpbmZvOiB7XG4gICAgICAgIGdldCgpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy4kc3RvcmUuc3RhdGUuaW5mb1xuICAgICAgICB9LFxuICAgICAgICBzZXQodmFsdWUpIHtcbiAgICAgICAgICB0aGlzLiRzdG9yZS5jb21taXQobXV0YXRpb25zLlNFVF9JTkZPLCB2YWx1ZSlcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHVzZXJfYWN0aXZpdGllczoge1xuICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuJHN0b3JlLnN0YXRlLmFjdGl2aXRhdHNfdXNlclxuICAgICAgICB9LFxuICAgICAgICBzZXQodmFsdWUpIHtcbiAgICAgICAgICB0aGlzLiRzdG9yZS5jb21taXQobXV0YXRpb25zLlNFVF9BQ1RJVklUQVRTX1VTRVIsIHZhbHVlKVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgbG9hZGluZzoge1xuICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuJHN0b3JlLnN0YXRlLmxvYWRpbmdcbiAgICAgICAgfSxcbiAgICAgICAgc2V0KHZhbHVlKSB7XG4gICAgICAgICAgdGhpcy4kc3RvcmUuY29tbWl0KG11dGF0aW9ucy5TRVRfTE9BRElORywgdmFsdWUpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgIGRlbGV0ZUFjdGl2aXR5KGFjdGl2aXR5KSB7XG4gICAgICAgIHRoaXMuZGlhbG9nID0gdHJ1ZVxuICAgICAgICB0aGlzLmFjdGl2aXR5ID0gYWN0aXZpdHlcbiAgICAgIH0sXG4gICAgICBkZXRhY2hBY3Rpdml0eSgpIHtcbiAgICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaChhY3Rpb25zLkRFVEFDSF9BQ1RJVklUWSwgeyBhY3Rpdml0eTogdGhpcy5hY3Rpdml0eSwgdXNlcl9pZDogdGhpcy5pZCB9KVxuICAgICAgfSxcbiAgICAgIHJlZGlyZWN0KGlkKSB7XG4gICAgICAgIGxldCBwYXRoID0gJy9hY3Rpdml0YXRzLycgKyBpZFxuICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCh7IHBhdGg6IHBhdGggfSlcbiAgICAgIH1cbiAgICB9LFxuICAgIHByb3BzOiBbJ2lkJ10sXG4gICAgbW91bnRlZCAoKSB7XG4gICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaChhY3Rpb25zLkdFVF9WT0xVTlRFRVIsIHRoaXMuaWQpXG4gICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaChhY3Rpb25zLkdFVF9JTkZPLCB0aGlzLmlkKVxuICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goYWN0aW9ucy5GRVRDSF9BQ1RJVklUQVRTX1VTRVIsIHRoaXMuaWQpXG4gICAgfVxuICB9XG48L3NjcmlwdD5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy92b2x1bnRhcmlhdC9jb21wb25lbnRzL1ZvbHVudGVlckNvbnRhaW5lci52dWUiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwidi1hcHBcIixcbiAgICBbXG4gICAgICBfYyhcInJvdXRlci12aWV3XCIsIHtcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICB2b2x1bnRlZXI6IF92bS52b2x1bnRlZXIsXG4gICAgICAgICAgaW5mbzogX3ZtLmluZm8sXG4gICAgICAgICAgdXNlcl9hY3Rpdml0aWVzOiBfdm0udXNlcl9hY3Rpdml0aWVzLFxuICAgICAgICAgIGxvYWRpbmc6IF92bS5sb2FkaW5nXG4gICAgICAgIH0sXG4gICAgICAgIG9uOiB7IHJlZGlyZWN0OiBfdm0ucmVkaXJlY3QsIGRlbGV0ZTogX3ZtLmRlbGV0ZUFjdGl2aXR5IH1cbiAgICAgIH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcInYtZGlhbG9nXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBhdHRyczogeyBwZXJzaXN0ZW50OiBcIlwiLCBcIm1heC13aWR0aFwiOiBcIjI5MFwiIH0sXG4gICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgIHZhbHVlOiBfdm0uZGlhbG9nLFxuICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICBfdm0uZGlhbG9nID0gJCR2XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJkaWFsb2dcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ2LWNhcmRcIixcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJ2LWNhcmQtdGl0bGVcIiwgeyBzdGF0aWNDbGFzczogXCJoZWFkbGluZVwiIH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICBcIlNlZ3VyIHF1ZSB2b2xzIGRlc2luc2NyaXVyZSBhIFwiICtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS52b2x1bnRlZXIubmFtZSkgK1xuICAgICAgICAgICAgICAgICAgICBcIiBkZSBsJ2FjdGl2aXRhdCBcIiArXG4gICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uYWN0aXZpdHkubm9tKSArXG4gICAgICAgICAgICAgICAgICAgIFwiP1wiXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2LWNhcmQtYWN0aW9uc1wiLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBjb2xvcjogXCJncmVlbiBkYXJrZW4tMVwiLCBmbGF0OiBcIlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgbmF0aXZlT246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmRpYWxvZyA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiQ2FuY2VswrdsYVwiKV1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGNvbG9yOiBcImdyZWVuIGRhcmtlbi0xXCIsIGZsYXQ6IFwiXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLmRldGFjaEFjdGl2aXR5IH0sXG4gICAgICAgICAgICAgICAgICAgICAgbmF0aXZlT246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmRpYWxvZyA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiRGVzaW5zY3JpdXJlXCIpXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxubW9kdWxlLmV4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTczZmI4NTQyXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi03M2ZiODU0MlwiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvdm9sdW50YXJpYXQvY29tcG9uZW50cy9Wb2x1bnRlZXJDb250YWluZXIudnVlXG4vLyBtb2R1bGUgaWQgPSAxNDRcbi8vIG1vZHVsZSBjaHVua3MgPSAxMyIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XV0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV1dfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL1ZvbHVudGVlckNvbnRhaW5lci52dWVcIilcbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTczZmI4NTQyXFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vVm9sdW50ZWVyQ29udGFpbmVyLnZ1ZVwiKVxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IG51bGxcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBudWxsXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvYXNzZXRzL2pzL3ZvbHVudGFyaWF0L2NvbXBvbmVudHMvVm9sdW50ZWVyQ29udGFpbmVyLnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi03M2ZiODU0MlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTczZmI4NTQyXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3ZvbHVudGFyaWF0L2NvbXBvbmVudHMvVm9sdW50ZWVyQ29udGFpbmVyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gODJcbi8vIG1vZHVsZSBjaHVua3MgPSAxMyJdLCJzb3VyY2VSb290IjoiIn0=