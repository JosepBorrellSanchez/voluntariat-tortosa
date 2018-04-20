webpackJsonp([9],{

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store_action_types__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_api_crud_entities__ = __webpack_require__(125);
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





var crud = Object(__WEBPACK_IMPORTED_MODULE_1__api_api_crud_entities__["a" /* default */])('/api/entitats');

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      dialog: false,
      entity: null
    };
  },

  computed: {
    entities: {
      get: function get() {
        return this.$store.state.entities;
      },
      set: function set(value) {
        this.$store.commit(__WEBPACK_IMPORTED_MODULE_2__store_mutation_types__["k" /* SET_ENTITY */], value);
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
    deleteActivitat: function deleteActivitat(entity) {
      this.dialog = true;
      this.entity = entity;
    },
    destroy: function destroy(entity) {
      this.$store.dispatch(__WEBPACK_IMPORTED_MODULE_0__store_action_types__["d" /* DELETE_ENTITY */], entity.id);
    },
    redirect: function redirect(id) {
      var path = '/entitats/' + id;
      this.$router.push({ path: path });
    }
  },
  mounted: function mounted() {
    this.$store.dispatch(__WEBPACK_IMPORTED_MODULE_0__store_action_types__["o" /* FETCH_ENTITIES */]);
  }
});

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createApi;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Crud = function () {
  function Crud(endPoint) {
    _classCallCheck(this, Crud);

    this.endPoint = endPoint;
  }

  _createClass(Crud, [{
    key: 'getAll',
    value: function getAll() {
      return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get(this.endPoint);
    }
  }, {
    key: 'getAllFromUser',
    value: function getAllFromUser(id) {
      return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get(this.endPoint + /user/ + id);
    }
  }, {
    key: 'get',
    value: function get(id) {
      return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get(this.endPoint + '/' + id);
    }
  }, {
    key: 'update',
    value: function update(object) {
      return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.put(this.endPoint + '/' + object.id, object);
    }
  }, {
    key: 'delete',
    value: function _delete(object) {
      return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.delete(this.endPoint + '/' + object.id);
    }
  }]);

  return Crud;
}();

function createApi(endPoint) {
  return new Crud(endPoint);
}

/***/ }),

/***/ 126:
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
            attrs: { entities: _vm.entities, loading: _vm.loading },
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
                          _vm.destroy(_vm.entity)
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
    require("vue-hot-reload-api")      .rerender("data-v-0267b036", module.exports)
  }
}

/***/ }),

/***/ 76:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(6)
/* script */
var __vue_script__ = __webpack_require__(124)
/* template */
var __vue_template__ = __webpack_require__(126)
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
Component.options.__file = "resources/assets/js/voluntariat/components/EntitiesContainer.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0267b036", Component.options)
  } else {
    hotAPI.reload("data-v-0267b036", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy92b2x1bnRhcmlhdC9jb21wb25lbnRzL0VudGl0aWVzQ29udGFpbmVyLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3ZvbHVudGFyaWF0L2FwaS9hcGlfY3J1ZF9lbnRpdGllcy5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3ZvbHVudGFyaWF0L2NvbXBvbmVudHMvRW50aXRpZXNDb250YWluZXIudnVlP2ZmYWQiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy92b2x1bnRhcmlhdC9jb21wb25lbnRzL0VudGl0aWVzQ29udGFpbmVyLnZ1ZSJdLCJuYW1lcyI6WyJDcnVkIiwiZW5kUG9pbnQiLCJheGlvcyIsImdldCIsImlkIiwib2JqZWN0IiwicHV0IiwiZGVsZXRlIiwiY3JlYXRlQXBpIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFzQkE7QUFDQTtBQUNBOztBQUVBOzsrREFFQTt3QkFFQTs7Y0FFQTtjQUVBO0FBSEE7QUFJQTs7OzswQkFHQTtpQ0FDQTtBQUNBOytCQUNBO3NHQUNBO0FBRUE7QUFQQTs7MEJBU0E7aUNBQ0E7QUFDQTsrQkFDQTt1R0FDQTtBQUdBO0FBUkE7QUFUQTs7c0RBbUJBO29CQUNBO29CQUNBO0FBQ0E7c0NBQ0E7OEdBQ0E7QUFDQTtvQ0FDQTtnQ0FDQTtnQ0FDQTtBQUVBO0FBWkE7OEJBYUE7b0dBQ0E7QUFDQTtBQXhDQSxHOzs7Ozs7Ozs7Ozs7Ozs7QUM3QkE7O0lBRU1BLEk7QUFDSixnQkFBWUMsUUFBWixFQUFzQjtBQUFBOztBQUNwQixTQUFLQSxRQUFMLEdBQWdCQSxRQUFoQjtBQUNEOzs7OzZCQUNRO0FBQ1AsYUFBTyw2Q0FBQUMsQ0FBTUMsR0FBTixDQUFVLEtBQUtGLFFBQWYsQ0FBUDtBQUNEOzs7bUNBQ2NHLEUsRUFBSTtBQUNqQixhQUFPLDZDQUFBRixDQUFNQyxHQUFOLENBQVUsS0FBS0YsUUFBTCxHQUFnQixNQUFoQixHQUF5QkcsRUFBbkMsQ0FBUDtBQUNEOzs7d0JBQ0dBLEUsRUFBSTtBQUNOLGFBQU8sNkNBQUFGLENBQU1DLEdBQU4sQ0FBVSxLQUFLRixRQUFMLEdBQWdCLEdBQWhCLEdBQXNCRyxFQUFoQyxDQUFQO0FBQ0Q7OzsyQkFDTUMsTSxFQUFRO0FBQ2IsYUFBTyw2Q0FBQUgsQ0FBTUksR0FBTixDQUFVLEtBQUtMLFFBQUwsR0FBZ0IsR0FBaEIsR0FBc0JJLE9BQU9ELEVBQXZDLEVBQTJDQyxNQUEzQyxDQUFQO0FBQ0Q7Ozs0QkFDTUEsTSxFQUFRO0FBQ2IsYUFBTyw2Q0FBQUgsQ0FBTUssTUFBTixDQUFhLEtBQUtOLFFBQUwsR0FBZ0IsR0FBaEIsR0FBc0JJLE9BQU9ELEVBQTFDLENBQVA7QUFDRDs7Ozs7O0FBR1ksU0FBU0ksU0FBVCxDQUFtQlAsUUFBbkIsRUFBNkI7QUFDMUMsU0FBTyxJQUFJRCxJQUFKLENBQVNDLFFBQVQsQ0FBUDtBQUNELEM7Ozs7Ozs7QUN6QkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxTQUFTLGVBQWUsRUFBRTtBQUNuQztBQUNBO0FBQ0Esb0JBQW9CLCtDQUErQztBQUNuRSxpQkFBaUI7QUFDakIsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHFDQUFxQztBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLDBCQUEwQjtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsb0NBQW9DO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLG9DQUFvQztBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7QUM3RkE7QUFDQTtBQUNBO0FBQ0EsNENBQXNSO0FBQ3RSO0FBQ0EsOENBQW1MO0FBQ25MO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRCIsImZpbGUiOiI5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8di1hcHA+XG4gICAgPHRyYW5zaXRpb24gbmFtZT1cImZhZGVcIj5cbiAgICAgIDxyb3V0ZXItdmlld1xuICAgICAgICA6ZW50aXRpZXM9XCJlbnRpdGllc1wiXG4gICAgICAgIDpsb2FkaW5nPVwibG9hZGluZ1wiXG4gICAgICAgIEByZWRpcmVjdD1cInJlZGlyZWN0XCJcbiAgICAgICAgQGRlbGV0ZT1cImRlbGV0ZUFjdGl2aXRhdFwiPlxuICAgICAgPC9yb3V0ZXItdmlldz5cbiAgICA8L3RyYW5zaXRpb24+XG4gICAgPHYtZGlhbG9nIHYtbW9kZWw9XCJkaWFsb2dcIiBwZXJzaXN0ZW50IG1heC13aWR0aD1cIjI5MFwiPlxuICAgICAgPHYtY2FyZD5cbiAgICAgICAgPHYtY2FyZC10aXRsZSBjbGFzcz1cImhlYWRsaW5lXCI+U2VndXIgcXVlIHZvbHMgZWxpbWluYXIgYXF1ZXN0YSBhY3Rpdml0YXQ/PC92LWNhcmQtdGl0bGU+XG4gICAgICAgIDx2LWNhcmQtYWN0aW9ucz5cbiAgICAgICAgICA8di1idG4gY29sb3I9XCJncmVlbiBkYXJrZW4tMVwiIGZsYXQgQGNsaWNrLm5hdGl2ZT1cImRpYWxvZyA9IGZhbHNlXCI+Q2FuY2VswrdsYTwvdi1idG4+XG4gICAgICAgICAgPHYtYnRuIGNvbG9yPVwiZ3JlZW4gZGFya2VuLTFcIiBAY2xpY2s9XCJkZXN0cm95KGVudGl0eSlcIiBmbGF0IEBjbGljay5uYXRpdmU9XCJkaWFsb2cgPSBmYWxzZVwiPkVsaW1pbmE8L3YtYnRuPlxuICAgICAgICA8L3YtY2FyZC1hY3Rpb25zPlxuICAgICAgPC92LWNhcmQ+XG4gICAgPC92LWRpYWxvZz5cbiAgPC92LWFwcD5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gIGltcG9ydCAqIGFzIGFjdGlvbnMgZnJvbSAnLi4vc3RvcmUvYWN0aW9uLXR5cGVzJ1xuICBpbXBvcnQgY3JlYXRlQXBpIGZyb20gJy4uL2FwaS9hcGlfY3J1ZF9lbnRpdGllcydcbiAgaW1wb3J0ICogYXMgbXV0YXRpb25zIGZyb20gJy4uL3N0b3JlL211dGF0aW9uLXR5cGVzJ1xuXG4gIGNvbnN0IGNydWQgPSBjcmVhdGVBcGkoJy9hcGkvZW50aXRhdHMnKVxuXG4gIGV4cG9ydCBkZWZhdWx0IHtcbiAgICBkYXRhICgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGRpYWxvZzogZmFsc2UsXG4gICAgICAgIGVudGl0eTogbnVsbFxuICAgICAgfVxuICAgIH0sXG4gICAgY29tcHV0ZWQ6IHtcbiAgICAgIGVudGl0aWVzOiB7XG4gICAgICAgIGdldCAoKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuJHN0b3JlLnN0YXRlLmVudGl0aWVzXG4gICAgICAgIH0sXG4gICAgICAgIHNldCAodmFsdWUpIHtcbiAgICAgICAgICB0aGlzLiRzdG9yZS5jb21taXQobXV0YXRpb25zLlNFVF9FTlRJVFksIHZhbHVlKVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgbG9hZGluZzoge1xuICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuJHN0b3JlLnN0YXRlLmxvYWRpbmdcbiAgICAgICAgfSxcbiAgICAgICAgc2V0KHZhbHVlKSB7XG4gICAgICAgICAgdGhpcy4kc3RvcmUuY29tbWl0KG11dGF0aW9ucy5TRVRfTE9BRElORywgdmFsdWUpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgIGRlbGV0ZUFjdGl2aXRhdDogZnVuY3Rpb24gKGVudGl0eSkge1xuICAgICAgICB0aGlzLmRpYWxvZyA9IHRydWVcbiAgICAgICAgdGhpcy5lbnRpdHkgPSBlbnRpdHlcbiAgICAgIH0sXG4gICAgICBkZXN0cm95OiBmdW5jdGlvbiAoZW50aXR5KSB7XG4gICAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKGFjdGlvbnMuREVMRVRFX0VOVElUWSwgZW50aXR5LmlkKVxuICAgICAgfSxcbiAgICAgIHJlZGlyZWN0KGlkKSB7XG4gICAgICAgIGxldCBwYXRoID0gJy9lbnRpdGF0cy8nICsgaWRcbiAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goeyBwYXRoOiBwYXRoIH0pXG4gICAgICB9XG4gICAgfSxcbiAgICBtb3VudGVkICgpIHtcbiAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKGFjdGlvbnMuRkVUQ0hfRU5USVRJRVMpXG4gICAgfVxuICB9XG48L3NjcmlwdD5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy92b2x1bnRhcmlhdC9jb21wb25lbnRzL0VudGl0aWVzQ29udGFpbmVyLnZ1ZSIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcydcblxuY2xhc3MgQ3J1ZCB7XG4gIGNvbnN0cnVjdG9yKGVuZFBvaW50KSB7XG4gICAgdGhpcy5lbmRQb2ludCA9IGVuZFBvaW50XG4gIH1cbiAgZ2V0QWxsKCkge1xuICAgIHJldHVybiBheGlvcy5nZXQodGhpcy5lbmRQb2ludClcbiAgfVxuICBnZXRBbGxGcm9tVXNlcihpZCkge1xuICAgIHJldHVybiBheGlvcy5nZXQodGhpcy5lbmRQb2ludCArIC91c2VyLyArIGlkKVxuICB9XG4gIGdldChpZCkge1xuICAgIHJldHVybiBheGlvcy5nZXQodGhpcy5lbmRQb2ludCArICcvJyArIGlkKVxuICB9XG4gIHVwZGF0ZShvYmplY3QpIHtcbiAgICByZXR1cm4gYXhpb3MucHV0KHRoaXMuZW5kUG9pbnQgKyAnLycgKyBvYmplY3QuaWQsIG9iamVjdClcbiAgfVxuICBkZWxldGUob2JqZWN0KSB7XG4gICAgcmV0dXJuIGF4aW9zLmRlbGV0ZSh0aGlzLmVuZFBvaW50ICsgJy8nICsgb2JqZWN0LmlkKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUFwaShlbmRQb2ludCkge1xuICByZXR1cm4gbmV3IENydWQoZW5kUG9pbnQpO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy92b2x1bnRhcmlhdC9hcGkvYXBpX2NydWRfZW50aXRpZXMuanMiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwidi1hcHBcIixcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJ0cmFuc2l0aW9uXCIsXG4gICAgICAgIHsgYXR0cnM6IHsgbmFtZTogXCJmYWRlXCIgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJyb3V0ZXItdmlld1wiLCB7XG4gICAgICAgICAgICBhdHRyczogeyBlbnRpdGllczogX3ZtLmVudGl0aWVzLCBsb2FkaW5nOiBfdm0ubG9hZGluZyB9LFxuICAgICAgICAgICAgb246IHsgcmVkaXJlY3Q6IF92bS5yZWRpcmVjdCwgZGVsZXRlOiBfdm0uZGVsZXRlQWN0aXZpdGF0IH1cbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcInYtZGlhbG9nXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBhdHRyczogeyBwZXJzaXN0ZW50OiBcIlwiLCBcIm1heC13aWR0aFwiOiBcIjI5MFwiIH0sXG4gICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgIHZhbHVlOiBfdm0uZGlhbG9nLFxuICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICBfdm0uZGlhbG9nID0gJCR2XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJkaWFsb2dcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ2LWNhcmRcIixcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJ2LWNhcmQtdGl0bGVcIiwgeyBzdGF0aWNDbGFzczogXCJoZWFkbGluZVwiIH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCJTZWd1ciBxdWUgdm9scyBlbGltaW5hciBhcXVlc3RhIGFjdGl2aXRhdD9cIilcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi1jYXJkLWFjdGlvbnNcIixcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgY29sb3I6IFwiZ3JlZW4gZGFya2VuLTFcIiwgZmxhdDogXCJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIG5hdGl2ZU9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5kaWFsb2cgPSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIkNhbmNlbMK3bGFcIildXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBjb2xvcjogXCJncmVlbiBkYXJrZW4tMVwiLCBmbGF0OiBcIlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmRlc3Ryb3koX3ZtLmVudGl0eSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIG5hdGl2ZU9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5kaWFsb2cgPSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIkVsaW1pbmFcIildXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5tb2R1bGUuZXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtMDI2N2IwMzZcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTAyNjdiMDM2XCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy92b2x1bnRhcmlhdC9jb21wb25lbnRzL0VudGl0aWVzQ29udGFpbmVyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTI2XG4vLyBtb2R1bGUgY2h1bmtzID0gOSIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XV0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV1dfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL0VudGl0aWVzQ29udGFpbmVyLnZ1ZVwiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMDI2N2IwMzZcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9FbnRpdGllc0NvbnRhaW5lci52dWVcIilcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBudWxsXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2Fzc2V0cy9qcy92b2x1bnRhcmlhdC9jb21wb25lbnRzL0VudGl0aWVzQ29udGFpbmVyLnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0wMjY3YjAzNlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTAyNjdiMDM2XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3ZvbHVudGFyaWF0L2NvbXBvbmVudHMvRW50aXRpZXNDb250YWluZXIudnVlXG4vLyBtb2R1bGUgaWQgPSA3NlxuLy8gbW9kdWxlIGNodW5rcyA9IDkiXSwic291cmNlUm9vdCI6IiJ9