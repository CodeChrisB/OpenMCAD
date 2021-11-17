"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _Warehouse = _interopRequireDefault(require("../components/pages/warehouse/Warehouse.vue"));

var _WarehouseAdd = _interopRequireDefault(require("../components/pages/warehouse/WarehouseAdd.vue"));

var _WarehouseView = _interopRequireDefault(require("../components/pages/warehouse/WarehouseView.vue"));

var _Product = _interopRequireDefault(require("../components/pages/product/Product.vue"));

var _ProductView = _interopRequireDefault(require("../components/pages/product/ProductView.vue"));

var _ProductAdd = _interopRequireDefault(require("../components/pages/product/ProductAdd.vue"));

var _User = _interopRequireDefault(require("../components/pages/user/User.vue"));

var _Inventory = _interopRequireDefault(require("../components/pages/inventory/Inventory.vue"));

var _Settings = _interopRequireDefault(require("../components/pages/settings/Settings.vue"));

var _Profile = _interopRequireDefault(require("../components/pages/profile/Profile.vue"));

var _Login = _interopRequireDefault(require("../components/pages/Login/Login.vue"));

var _Reservation = _interopRequireDefault(require("../components/pages/reservation/Reservation.vue"));

var _ViewGroup = _interopRequireDefault(require("../components/pages/reservation/pages/ViewGroup.vue"));

var _Statistics = _interopRequireDefault(require("../components/pages/statistics/Statistics.vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].use(_vueRouter["default"]);

var routes = [{
  path: '/Warehouse',
  name: 'warehouse',
  component: _Warehouse["default"],
  meta: {
    layout: 'app'
  }
}, {
  path: '/Warehouse/Add',
  name: 'warehouse-add',
  component: _WarehouseAdd["default"],
  meta: {
    layout: 'app'
  }
}, {
  path: '/Warehouse/:id',
  name: 'warehouse-view',
  component: _WarehouseView["default"],
  meta: {
    layout: 'app'
  }
}, {
  path: '/Profile',
  name: 'profile',
  component: _Profile["default"]
}, {
  path: '/Product',
  name: 'product',
  component: _Product["default"]
}, {
  path: '/Product/:id',
  name: 'product-view',
  component: _ProductView["default"]
}, {
  path: '/Product/Add',
  name: 'product-add',
  component: _ProductAdd["default"]
}, {
  path: '/Inventory',
  name: 'inventory',
  component: _Inventory["default"]
}, {
  path: '/User',
  name: 'user',
  component: _User["default"]
}, {
  path: '/Settings',
  name: 'settings',
  component: _Settings["default"]
}, {
  path: '/Login',
  name: 'login',
  component: _Login["default"],
  meta: {
    layout: 'fullscreen'
  }
}, {
  path: '/reservation',
  name: 'reservation',
  component: _Reservation["default"]
}, {
  path: '/reservation/Group/:id',
  name: 'viewgroup',
  component: _ViewGroup["default"]
}, {
  path: '/statistics',
  name: 'statistics',
  component: _Statistics["default"]
}, {
  path: '',
  redirect: '/Warehouse'
} //redirect to Warehouse whenever the url is not recognised
];
var router = new _vueRouter["default"]({
  mode: "history",
  routes: routes
});
var _default = router;
exports["default"] = _default;