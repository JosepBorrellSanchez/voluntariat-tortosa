webpackJsonp([25],{

/***/ 104:
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
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      dialog: false,
      user: null,
      activityId: null,
      role: null
    };
  },

  computed: {
    loading: {
      get: function get() {
        return this.$store.state.loading;
      },
      set: function set(value) {
        this.$store.commit(__WEBPACK_IMPORTED_MODULE_1__store_mutation_types__["m" /* SET_LOADING */], value);
      }
    },
    activitat: {
      get: function get() {
        return this.$store.state.activitat;
      },
      set: function set(value) {
        this.$store.commit(__WEBPACK_IMPORTED_MODULE_1__store_mutation_types__["c" /* SET_ACTIVITAT */], value);
      }
    },
    activity_volunteers: {
      get: function get() {
        return this.$store.state.activity_volunteers;
      },
      set: function set(value) {
        this.$store.commit(__WEBPACK_IMPORTED_MODULE_1__store_mutation_types__["g" /* SET_ACTIVITY_USERS */], value);
      }
    },
    activity_entities: {
      get: function get() {
        return this.$store.state.activity_entities;
      },
      set: function set(value) {
        this.$store.commit(__WEBPACK_IMPORTED_MODULE_1__store_mutation_types__["f" /* SET_ACTIVITY_ENTITIES */], value);
      }
    }
  },
  methods: {
    redirectToVolunteer: function redirectToVolunteer(id) {
      var path = '/voluntaris/' + id;
      this.$router.push({ path: path });
    },
    redirectToEntity: function redirectToEntity(id) {
      var path = '/entitats/' + id;
      this.$router.push({ path: path });
    },
    deleteUser: function deleteUser(volunteer) {
      this.dialog = true;
      this.user = volunteer;
      this.role = 'volunteer';
    },
    deleteEntity: function deleteEntity(entity) {
      this.dialog = true;
      this.user = entity;
      this.role = 'entity';
    },
    destroy: function destroy(user, activityId) {
      if (this.role === 'entity') {
        this.$store.dispatch(__WEBPACK_IMPORTED_MODULE_0__store_action_types__["g" /* DETACH_ENTITY */], { user: user, activityId: activityId });
      } else if (this.role === 'volunteer') {
        this.$store.dispatch(__WEBPACK_IMPORTED_MODULE_0__store_action_types__["h" /* DETACH_VOLUNTEER */], { user: user, activityId: activityId });
      }
    }
  },
  props: ['id'],
  mounted: function mounted() {
    this.activityId = this.id;
    this.$store.dispatch(__WEBPACK_IMPORTED_MODULE_0__store_action_types__["s" /* GET_ACTIVITAT */], this.id);
    this.$store.dispatch(__WEBPACK_IMPORTED_MODULE_0__store_action_types__["m" /* FETCH_ACTIVITY_USERS */], this.id);
    this.$store.dispatch(__WEBPACK_IMPORTED_MODULE_0__store_action_types__["l" /* FETCH_ACTIVITY_ENTITIES */], this.id);
  }
});

/***/ }),

/***/ 105:
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
          activitat: _vm.activitat,
          activity_volunteers: _vm.activity_volunteers,
          activity_entities: _vm.activity_entities,
          loading: _vm.loading
        },
        on: {
          redirectToVolunteer: _vm.redirectToVolunteer,
          redirectToEntity: _vm.redirectToEntity,
          deleteUser: _vm.deleteUser,
          deleteEntity: _vm.deleteEntity
        }
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
          _vm.user !== null
            ? _c(
                "v-card",
                [
                  _c("v-card-title", { staticClass: "headline" }, [
                    _vm._v(
                      "Segur que vols eliminar l'usuari \"" +
                        _vm._s(_vm.user.name) +
                        "\" d'aquesta activitat?"
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
                          on: {
                            click: function($event) {
                              _vm.destroy(_vm.user, _vm.activityId)
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
            : _vm._e()
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
    require("vue-hot-reload-api")      .rerender("data-v-a3f37962", module.exports)
  }
}

/***/ }),

/***/ 68:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(6)
/* script */
var __vue_script__ = __webpack_require__(104)
/* template */
var __vue_template__ = __webpack_require__(105)
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
Component.options.__file = "resources/assets/js/voluntariat/components/ActivitatContainer.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-a3f37962", Component.options)
  } else {
    hotAPI.reload("data-v-a3f37962", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy92b2x1bnRhcmlhdC9jb21wb25lbnRzL0FjdGl2aXRhdENvbnRhaW5lci52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy92b2x1bnRhcmlhdC9jb21wb25lbnRzL0FjdGl2aXRhdENvbnRhaW5lci52dWU/OGI1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3ZvbHVudGFyaWF0L2NvbXBvbmVudHMvQWN0aXZpdGF0Q29udGFpbmVyLnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBd0JBO0FBQ0E7O0FBRUE7d0JBRUE7O2NBRUE7WUFDQTtrQkFDQTtZQUVBO0FBTEE7QUFNQTs7OzswQkFHQTtpQ0FDQTtBQUNBOytCQUNBO3VHQUNBO0FBRUE7QUFQQTs7MEJBU0E7aUNBQ0E7QUFDQTsrQkFDQTt5R0FDQTtBQUVBO0FBUEE7OzBCQVNBO2lDQUNBO0FBQ0E7K0JBQ0E7OEdBQ0E7QUFFQTtBQVBBOzswQkFTQTtpQ0FDQTtBQUNBOytCQUNBO2lIQUNBO0FBR0E7QUFSQTtBQXpCQTs7MERBbUNBO2tDQUNBO2dDQUNBO0FBQ0E7b0RBQ0E7Z0NBQ0E7Z0NBQ0E7QUFDQTsrQ0FDQTtvQkFDQTtrQkFDQTtrQkFDQTtBQUNBO2dEQUNBO29CQUNBO2tCQUNBO2tCQUNBO0FBQ0E7Z0RBQ0E7a0NBQ0E7bUlBQ0E7NENBQ0E7c0lBQ0E7QUFDQTtBQUVBO0FBMUJBO1VBMkJBOzhCQUNBOzJCQUNBOzBHQUNBO2lIQUNBO29IQUNBO0FBQ0E7QUE1RUEsRzs7Ozs7OztBQzVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IscUNBQXFDO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQywwQkFBMEI7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0Msb0NBQW9DO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLG9DQUFvQztBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7OztBQ3RHQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBc1I7QUFDdFI7QUFDQSw4Q0FBbUw7QUFDbkw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVEIiwiZmlsZSI6IjI1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8di1hcHA+XG4gICAgPHJvdXRlci12aWV3XG4gICAgICA6YWN0aXZpdGF0PVwiYWN0aXZpdGF0XCJcbiAgICAgIDphY3Rpdml0eV92b2x1bnRlZXJzPVwiYWN0aXZpdHlfdm9sdW50ZWVyc1wiXG4gICAgICA6YWN0aXZpdHlfZW50aXRpZXM9XCJhY3Rpdml0eV9lbnRpdGllc1wiXG4gICAgICA6bG9hZGluZz1cImxvYWRpbmdcIlxuICAgICAgQHJlZGlyZWN0VG9Wb2x1bnRlZXI9XCJyZWRpcmVjdFRvVm9sdW50ZWVyXCJcbiAgICAgIEByZWRpcmVjdFRvRW50aXR5PVwicmVkaXJlY3RUb0VudGl0eVwiXG4gICAgICBAZGVsZXRlVXNlcj1cImRlbGV0ZVVzZXJcIlxuICAgICAgQGRlbGV0ZUVudGl0eT1cImRlbGV0ZUVudGl0eVwiPlxuICAgIDwvcm91dGVyLXZpZXc+XG4gICAgPHYtZGlhbG9nIHYtbW9kZWw9XCJkaWFsb2dcIiBwZXJzaXN0ZW50IG1heC13aWR0aD1cIjI5MFwiPlxuICAgICAgPHYtY2FyZCB2LWlmPVwidXNlciAhPT0gbnVsbFwiPlxuICAgICAgICA8di1jYXJkLXRpdGxlIGNsYXNzPVwiaGVhZGxpbmVcIj5TZWd1ciBxdWUgdm9scyBlbGltaW5hciBsJ3VzdWFyaSBcInt7IHVzZXIubmFtZSB9fVwiIGQnYXF1ZXN0YSBhY3Rpdml0YXQ/PC92LWNhcmQtdGl0bGU+XG4gICAgICAgIDx2LWNhcmQtYWN0aW9ucz5cbiAgICAgICAgICA8di1idG4gY29sb3I9XCJncmVlbiBkYXJrZW4tMVwiIGZsYXQgQGNsaWNrLm5hdGl2ZT1cImRpYWxvZyA9IGZhbHNlXCI+Q2FuY2VswrdsYTwvdi1idG4+XG4gICAgICAgICAgPHYtYnRuIGNvbG9yPVwiZ3JlZW4gZGFya2VuLTFcIiBAY2xpY2s9XCJkZXN0cm95KCB1c2VyLCBhY3Rpdml0eUlkKVwiIGZsYXQgQGNsaWNrLm5hdGl2ZT1cImRpYWxvZyA9IGZhbHNlXCI+RWxpbWluYTwvdi1idG4+XG4gICAgICAgIDwvdi1jYXJkLWFjdGlvbnM+XG4gICAgICA8L3YtY2FyZD5cbiAgICA8L3YtZGlhbG9nPlxuICA8L3YtYXBwPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tICcuLi9zdG9yZS9hY3Rpb24tdHlwZXMnXG4gIGltcG9ydCAqIGFzIG11dGF0aW9ucyBmcm9tICcuLi9zdG9yZS9tdXRhdGlvbi10eXBlcydcblxuICBleHBvcnQgZGVmYXVsdCB7XG4gICAgZGF0YSgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGRpYWxvZzogZmFsc2UsXG4gICAgICAgIHVzZXI6IG51bGwsXG4gICAgICAgIGFjdGl2aXR5SWQ6IG51bGwsXG4gICAgICAgIHJvbGU6IG51bGxcbiAgICAgIH1cbiAgICB9LFxuICAgIGNvbXB1dGVkOiB7XG4gICAgICBsb2FkaW5nOiB7XG4gICAgICAgIGdldCgpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy4kc3RvcmUuc3RhdGUubG9hZGluZ1xuICAgICAgICB9LFxuICAgICAgICBzZXQodmFsdWUpIHtcbiAgICAgICAgICB0aGlzLiRzdG9yZS5jb21taXQobXV0YXRpb25zLlNFVF9MT0FESU5HLCB2YWx1ZSlcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGFjdGl2aXRhdDoge1xuICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuJHN0b3JlLnN0YXRlLmFjdGl2aXRhdFxuICAgICAgICB9LFxuICAgICAgICBzZXQodmFsdWUpIHtcbiAgICAgICAgICB0aGlzLiRzdG9yZS5jb21taXQobXV0YXRpb25zLlNFVF9BQ1RJVklUQVQsIHZhbHVlKVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgYWN0aXZpdHlfdm9sdW50ZWVyczoge1xuICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuJHN0b3JlLnN0YXRlLmFjdGl2aXR5X3ZvbHVudGVlcnNcbiAgICAgICAgfSxcbiAgICAgICAgc2V0KHZhbHVlKSB7XG4gICAgICAgICAgdGhpcy4kc3RvcmUuY29tbWl0KG11dGF0aW9ucy5TRVRfQUNUSVZJVFlfVVNFUlMsIHZhbHVlKVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgYWN0aXZpdHlfZW50aXRpZXM6IHtcbiAgICAgICAgZ2V0KCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLiRzdG9yZS5zdGF0ZS5hY3Rpdml0eV9lbnRpdGllc1xuICAgICAgICB9LFxuICAgICAgICBzZXQodmFsdWUpIHtcbiAgICAgICAgICB0aGlzLiRzdG9yZS5jb21taXQobXV0YXRpb25zLlNFVF9BQ1RJVklUWV9FTlRJVElFUywgdmFsdWUpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgIHJlZGlyZWN0VG9Wb2x1bnRlZXIoaWQpIHtcbiAgICAgICAgbGV0IHBhdGggPSAnL3ZvbHVudGFyaXMvJyArIGlkXG4gICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHsgcGF0aDogcGF0aCB9KVxuICAgICAgfSxcbiAgICAgIHJlZGlyZWN0VG9FbnRpdHkoaWQpIHtcbiAgICAgICAgbGV0IHBhdGggPSAnL2VudGl0YXRzLycgKyBpZFxuICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCh7IHBhdGg6IHBhdGggfSlcbiAgICAgIH0sXG4gICAgICBkZWxldGVVc2VyKHZvbHVudGVlcikge1xuICAgICAgICB0aGlzLmRpYWxvZyA9IHRydWVcbiAgICAgICAgdGhpcy51c2VyID0gdm9sdW50ZWVyXG4gICAgICAgIHRoaXMucm9sZSA9ICd2b2x1bnRlZXInXG4gICAgICB9LFxuICAgICAgZGVsZXRlRW50aXR5KGVudGl0eSkge1xuICAgICAgICB0aGlzLmRpYWxvZyA9IHRydWVcbiAgICAgICAgdGhpcy51c2VyID0gZW50aXR5XG4gICAgICAgIHRoaXMucm9sZSA9ICdlbnRpdHknXG4gICAgICB9LFxuICAgICAgZGVzdHJveSggdXNlciwgYWN0aXZpdHlJZCkge1xuICAgICAgICBpZih0aGlzLnJvbGUgPT09ICdlbnRpdHknKSB7XG4gICAgICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goYWN0aW9ucy5ERVRBQ0hfRU5USVRZLCB7IHVzZXI6IHVzZXIsIGFjdGl2aXR5SWQ6IGFjdGl2aXR5SWQgfSlcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnJvbGUgPT09ICd2b2x1bnRlZXInKSB7XG4gICAgICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goYWN0aW9ucy5ERVRBQ0hfVk9MVU5URUVSLCB7IHVzZXI6IHVzZXIsIGFjdGl2aXR5SWQ6IGFjdGl2aXR5SWQgfSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgcHJvcHM6IFsnaWQnXSxcbiAgICBtb3VudGVkICgpIHtcbiAgICAgIHRoaXMuYWN0aXZpdHlJZCA9IHRoaXMuaWRcbiAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKGFjdGlvbnMuR0VUX0FDVElWSVRBVCwgdGhpcy5pZClcbiAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKGFjdGlvbnMuRkVUQ0hfQUNUSVZJVFlfVVNFUlMsIHRoaXMuaWQpXG4gICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaChhY3Rpb25zLkZFVENIX0FDVElWSVRZX0VOVElUSUVTLCB0aGlzLmlkKVxuICAgIH1cbiAgfVxuPC9zY3JpcHQ+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvdm9sdW50YXJpYXQvY29tcG9uZW50cy9BY3Rpdml0YXRDb250YWluZXIudnVlIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcInYtYXBwXCIsXG4gICAgW1xuICAgICAgX2MoXCJyb3V0ZXItdmlld1wiLCB7XG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgYWN0aXZpdGF0OiBfdm0uYWN0aXZpdGF0LFxuICAgICAgICAgIGFjdGl2aXR5X3ZvbHVudGVlcnM6IF92bS5hY3Rpdml0eV92b2x1bnRlZXJzLFxuICAgICAgICAgIGFjdGl2aXR5X2VudGl0aWVzOiBfdm0uYWN0aXZpdHlfZW50aXRpZXMsXG4gICAgICAgICAgbG9hZGluZzogX3ZtLmxvYWRpbmdcbiAgICAgICAgfSxcbiAgICAgICAgb246IHtcbiAgICAgICAgICByZWRpcmVjdFRvVm9sdW50ZWVyOiBfdm0ucmVkaXJlY3RUb1ZvbHVudGVlcixcbiAgICAgICAgICByZWRpcmVjdFRvRW50aXR5OiBfdm0ucmVkaXJlY3RUb0VudGl0eSxcbiAgICAgICAgICBkZWxldGVVc2VyOiBfdm0uZGVsZXRlVXNlcixcbiAgICAgICAgICBkZWxldGVFbnRpdHk6IF92bS5kZWxldGVFbnRpdHlcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwidi1kaWFsb2dcIixcbiAgICAgICAge1xuICAgICAgICAgIGF0dHJzOiB7IHBlcnNpc3RlbnQ6IFwiXCIsIFwibWF4LXdpZHRoXCI6IFwiMjkwXCIgfSxcbiAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgdmFsdWU6IF92bS5kaWFsb2csXG4gICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgIF92bS5kaWFsb2cgPSAkJHZcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBleHByZXNzaW9uOiBcImRpYWxvZ1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX3ZtLnVzZXIgIT09IG51bGxcbiAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgXCJ2LWNhcmRcIixcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcInYtY2FyZC10aXRsZVwiLCB7IHN0YXRpY0NsYXNzOiBcImhlYWRsaW5lXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgXCJTZWd1ciBxdWUgdm9scyBlbGltaW5hciBsJ3VzdWFyaSBcXFwiXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS51c2VyLm5hbWUpICtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxcIiBkJ2FxdWVzdGEgYWN0aXZpdGF0P1wiXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInYtY2FyZC1hY3Rpb25zXCIsXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgY29sb3I6IFwiZ3JlZW4gZGFya2VuLTFcIiwgZmxhdDogXCJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBuYXRpdmVPbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5kaWFsb2cgPSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJDYW5jZWzCt2xhXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgY29sb3I6IFwiZ3JlZW4gZGFya2VuLTFcIiwgZmxhdDogXCJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5kZXN0cm95KF92bS51c2VyLCBfdm0uYWN0aXZpdHlJZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hdGl2ZU9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmRpYWxvZyA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIkVsaW1pbmFcIildXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxubW9kdWxlLmV4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LWEzZjM3OTYyXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi1hM2YzNzk2MlwiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvdm9sdW50YXJpYXQvY29tcG9uZW50cy9BY3Rpdml0YXRDb250YWluZXIudnVlXG4vLyBtb2R1bGUgaWQgPSAxMDVcbi8vIG1vZHVsZSBjaHVua3MgPSAyNSIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XV0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV1dfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL0FjdGl2aXRhdENvbnRhaW5lci52dWVcIilcbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LWEzZjM3OTYyXFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vQWN0aXZpdGF0Q29udGFpbmVyLnZ1ZVwiKVxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IG51bGxcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBudWxsXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvYXNzZXRzL2pzL3ZvbHVudGFyaWF0L2NvbXBvbmVudHMvQWN0aXZpdGF0Q29udGFpbmVyLnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi1hM2YzNzk2MlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LWEzZjM3OTYyXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3ZvbHVudGFyaWF0L2NvbXBvbmVudHMvQWN0aXZpdGF0Q29udGFpbmVyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNjhcbi8vIG1vZHVsZSBjaHVua3MgPSAyNSJdLCJzb3VyY2VSb290IjoiIn0=