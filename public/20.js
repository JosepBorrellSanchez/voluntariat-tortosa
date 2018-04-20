webpackJsonp([20],{

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store_action_types__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_api_crud_activitats__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store_mutation_types__ = __webpack_require__(2);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





var crud = Object(__WEBPACK_IMPORTED_MODULE_1__api_api_crud_activitats__["a" /* default */])('/api/activitats');

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      dialog: false,
      activitat: null
    };
  },

  computed: {
    activitats: {
      get: function get() {
        return this.$store.state.activitats;
      },
      set: function set(value) {
        this.$store.commit(__WEBPACK_IMPORTED_MODULE_2__store_mutation_types__["d" /* SET_ACTIVITATS */], value);
      }
    },
    loading: {
      get: function get() {
        return this.$store.state.loading;
      },
      set: function set(value) {
        this.$store.commit(__WEBPACK_IMPORTED_MODULE_2__store_mutation_types__["m" /* SET_LOADING */], value);
      }
    }
  },
  methods: {
    deleteActivitat: function deleteActivitat(activitat) {
      this.activitat = activitat;
      this.dialog = true;
    },
    destroy: function destroy(activitat) {
      this.$store.dispatch(__WEBPACK_IMPORTED_MODULE_0__store_action_types__["b" /* DELETE_ACTIVITY */], activitat);
    },
    redirect: function redirect(id) {
      var path = '/activitats/' + id;
      this.$router.push({ path: path });
    }
  },
  mounted: function mounted() {
    this.$store.dispatch(__WEBPACK_IMPORTED_MODULE_0__store_action_types__["j" /* FETCH_ACTIVITATS */]);
  }
});

/***/ }),

/***/ 119:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-app",
    [
      _c(
        "transition",
        { attrs: { name: "fade" } },
        [
          _c("router-view", {
            attrs: { activitats: _vm.activitats, loading: _vm.loading },
            on: { redirect: _vm.redirect, delete: _vm.deleteActivitat }
          })
        ],
        1
      ),
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
    require("vue-hot-reload-api")      .rerender("data-v-231c155e", module.exports)
  }
}

/***/ }),

/***/ 74:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(6)
/* script */
var __vue_script__ = __webpack_require__(118)
/* template */
var __vue_template__ = __webpack_require__(119)
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
Component.options.__file = "resources/assets/js/voluntariat/components/AllActivitiesContainer.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-231c155e", Component.options)
  } else {
    hotAPI.reload("data-v-231c155e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy92b2x1bnRhcmlhdC9jb21wb25lbnRzL0FsbEFjdGl2aXRpZXNDb250YWluZXIudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvdm9sdW50YXJpYXQvY29tcG9uZW50cy9BbGxBY3Rpdml0aWVzQ29udGFpbmVyLnZ1ZT81YzBlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvdm9sdW50YXJpYXQvY29tcG9uZW50cy9BbGxBY3Rpdml0aWVzQ29udGFpbmVyLnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFzQkE7QUFDQTtBQUNBOztBQUVBOzsrREFFQTt3QkFFQTs7Y0FFQTtpQkFFQTtBQUhBO0FBSUE7Ozs7MEJBR0E7aUNBQ0E7QUFDQTsrQkFDQTswR0FDQTtBQUVBO0FBUEE7OzBCQVNBO2lDQUNBO0FBQ0E7K0JBQ0E7dUdBQ0E7QUFHQTtBQVJBO0FBVEE7O3lEQW1CQTt1QkFDQTtvQkFDQTtBQUNBO3lDQUNBO3lHQUNBO0FBQ0E7b0NBQ0E7a0NBQ0E7Z0NBQ0E7QUFFQTtBQVpBOzhCQWFBO3NHQUNBO0FBQ0E7QUF4Q0EsRzs7Ozs7OztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLFNBQVMsZUFBZSxFQUFFO0FBQ25DO0FBQ0E7QUFDQSxvQkFBb0IsbURBQW1EO0FBQ3ZFLGlCQUFpQjtBQUNqQixXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IscUNBQXFDO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsMEJBQTBCO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixvQ0FBb0M7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsb0NBQW9DO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7OztBQzdGQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBc1I7QUFDdFI7QUFDQSw4Q0FBbUw7QUFDbkw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVEIiwiZmlsZSI6IjIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8di1hcHA+XG4gICAgPHRyYW5zaXRpb24gbmFtZT1cImZhZGVcIj5cbiAgICAgIDxyb3V0ZXItdmlld1xuICAgICAgICA6YWN0aXZpdGF0cz1cImFjdGl2aXRhdHNcIlxuICAgICAgICA6bG9hZGluZz1cImxvYWRpbmdcIlxuICAgICAgICBAcmVkaXJlY3Q9XCJyZWRpcmVjdFwiXG4gICAgICAgIEBkZWxldGU9XCJkZWxldGVBY3Rpdml0YXRcIj5cbiAgICAgIDwvcm91dGVyLXZpZXc+XG4gICAgPC90cmFuc2l0aW9uPlxuICAgIDx2LWRpYWxvZyB2LW1vZGVsPVwiZGlhbG9nXCIgcGVyc2lzdGVudCBtYXgtd2lkdGg9XCIyOTBcIj5cbiAgICAgIDx2LWNhcmQ+XG4gICAgICAgIDx2LWNhcmQtdGl0bGUgY2xhc3M9XCJoZWFkbGluZVwiPlNlZ3VyIHF1ZSB2b2xzIGVsaW1pbmFyIGFxdWVzdGEgYWN0aXZpdGF0Pzwvdi1jYXJkLXRpdGxlPlxuICAgICAgICA8di1jYXJkLWFjdGlvbnM+XG4gICAgICAgICAgPHYtYnRuIGNvbG9yPVwiZ3JlZW4gZGFya2VuLTFcIiBmbGF0IEBjbGljay5uYXRpdmU9XCJkaWFsb2cgPSBmYWxzZVwiPkNhbmNlbMK3bGE8L3YtYnRuPlxuICAgICAgICAgIDx2LWJ0biBjb2xvcj1cImdyZWVuIGRhcmtlbi0xXCIgQGNsaWNrPVwiZGVzdHJveShhY3Rpdml0YXQpXCIgZmxhdCBAY2xpY2submF0aXZlPVwiZGlhbG9nID0gZmFsc2VcIj5FbGltaW5hPC92LWJ0bj5cbiAgICAgICAgPC92LWNhcmQtYWN0aW9ucz5cbiAgICAgIDwvdi1jYXJkPlxuICAgIDwvdi1kaWFsb2c+XG4gIDwvdi1hcHA+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICBpbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gJy4uL3N0b3JlL2FjdGlvbi10eXBlcydcbiAgaW1wb3J0IGNyZWF0ZUFwaSBmcm9tICcuLi9hcGkvYXBpX2NydWRfYWN0aXZpdGF0cydcbiAgaW1wb3J0ICogYXMgbXV0YXRpb25zIGZyb20gJy4uL3N0b3JlL211dGF0aW9uLXR5cGVzJ1xuXG4gIGNvbnN0IGNydWQgPSBjcmVhdGVBcGkoJy9hcGkvYWN0aXZpdGF0cycpXG5cbiAgZXhwb3J0IGRlZmF1bHQge1xuICAgIGRhdGEgKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZGlhbG9nOiBmYWxzZSxcbiAgICAgICAgYWN0aXZpdGF0OiBudWxsXG4gICAgICB9XG4gICAgfSxcbiAgICBjb21wdXRlZDoge1xuICAgICAgYWN0aXZpdGF0czoge1xuICAgICAgICBnZXQgKCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLiRzdG9yZS5zdGF0ZS5hY3Rpdml0YXRzXG4gICAgICAgIH0sXG4gICAgICAgIHNldCAodmFsdWUpIHtcbiAgICAgICAgICB0aGlzLiRzdG9yZS5jb21taXQobXV0YXRpb25zLlNFVF9BQ1RJVklUQVRTLCB2YWx1ZSlcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGxvYWRpbmc6IHtcbiAgICAgICAgZ2V0KCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLiRzdG9yZS5zdGF0ZS5sb2FkaW5nXG4gICAgICAgIH0sXG4gICAgICAgIHNldCh2YWx1ZSkge1xuICAgICAgICAgIHRoaXMuJHN0b3JlLmNvbW1pdChtdXRhdGlvbnMuU0VUX0xPQURJTkcsIHZhbHVlKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICBkZWxldGVBY3Rpdml0YXQ6IGZ1bmN0aW9uIChhY3Rpdml0YXQpIHtcbiAgICAgICAgdGhpcy5hY3Rpdml0YXQgPSBhY3Rpdml0YXRcbiAgICAgICAgdGhpcy5kaWFsb2cgPSB0cnVlXG4gICAgICB9LFxuICAgICAgZGVzdHJveTogZnVuY3Rpb24gKGFjdGl2aXRhdCkge1xuICAgICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaChhY3Rpb25zLkRFTEVURV9BQ1RJVklUWSwgYWN0aXZpdGF0KVxuICAgICAgfSxcbiAgICAgIHJlZGlyZWN0KGlkKSB7XG4gICAgICAgIGxldCBwYXRoID0gJy9hY3Rpdml0YXRzLycgKyBpZFxuICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCh7IHBhdGg6IHBhdGggfSlcbiAgICAgIH1cbiAgICB9LFxuICAgIG1vdW50ZWQgKCkge1xuICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goYWN0aW9ucy5GRVRDSF9BQ1RJVklUQVRTKVxuICAgIH1cbiAgfVxuPC9zY3JpcHQ+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvdm9sdW50YXJpYXQvY29tcG9uZW50cy9BbGxBY3Rpdml0aWVzQ29udGFpbmVyLnZ1ZSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJ2LWFwcFwiLFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcInRyYW5zaXRpb25cIixcbiAgICAgICAgeyBhdHRyczogeyBuYW1lOiBcImZhZGVcIiB9IH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcInJvdXRlci12aWV3XCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7IGFjdGl2aXRhdHM6IF92bS5hY3Rpdml0YXRzLCBsb2FkaW5nOiBfdm0ubG9hZGluZyB9LFxuICAgICAgICAgICAgb246IHsgcmVkaXJlY3Q6IF92bS5yZWRpcmVjdCwgZGVsZXRlOiBfdm0uZGVsZXRlQWN0aXZpdGF0IH1cbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcInYtZGlhbG9nXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBhdHRyczogeyBwZXJzaXN0ZW50OiBcIlwiLCBcIm1heC13aWR0aFwiOiBcIjI5MFwiIH0sXG4gICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgIHZhbHVlOiBfdm0uZGlhbG9nLFxuICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICBfdm0uZGlhbG9nID0gJCR2XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJkaWFsb2dcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ2LWNhcmRcIixcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJ2LWNhcmQtdGl0bGVcIiwgeyBzdGF0aWNDbGFzczogXCJoZWFkbGluZVwiIH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCJTZWd1ciBxdWUgdm9scyBlbGltaW5hciBhcXVlc3RhIGFjdGl2aXRhdD9cIilcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi1jYXJkLWFjdGlvbnNcIixcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgY29sb3I6IFwiZ3JlZW4gZGFya2VuLTFcIiwgZmxhdDogXCJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIG5hdGl2ZU9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5kaWFsb2cgPSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIkNhbmNlbMK3bGFcIildXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBjb2xvcjogXCJncmVlbiBkYXJrZW4tMVwiLCBmbGF0OiBcIlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmRlc3Ryb3koX3ZtLmFjdGl2aXRhdClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIG5hdGl2ZU9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5kaWFsb2cgPSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIkVsaW1pbmFcIildXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5tb2R1bGUuZXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtMjMxYzE1NWVcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTIzMWMxNTVlXCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy92b2x1bnRhcmlhdC9jb21wb25lbnRzL0FsbEFjdGl2aXRpZXNDb250YWluZXIudnVlXG4vLyBtb2R1bGUgaWQgPSAxMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAyMCIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XV0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV1dfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL0FsbEFjdGl2aXRpZXNDb250YWluZXIudnVlXCIpXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi0yMzFjMTU1ZVxcXCIsXFxcImhhc1Njb3BlZFxcXCI6ZmFsc2UsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL0FsbEFjdGl2aXRpZXNDb250YWluZXIudnVlXCIpXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gbnVsbFxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9hc3NldHMvanMvdm9sdW50YXJpYXQvY29tcG9uZW50cy9BbGxBY3Rpdml0aWVzQ29udGFpbmVyLnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0yMzFjMTU1ZVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTIzMWMxNTVlXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3ZvbHVudGFyaWF0L2NvbXBvbmVudHMvQWxsQWN0aXZpdGllc0NvbnRhaW5lci52dWVcbi8vIG1vZHVsZSBpZCA9IDc0XG4vLyBtb2R1bGUgY2h1bmtzID0gMjAiXSwic291cmNlUm9vdCI6IiJ9