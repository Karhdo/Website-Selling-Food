(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/StoreListItem.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/StoreListItem.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vueform_slider_dist_slider_vue2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vueform/slider/dist/slider.vue2.js */ "./node_modules/@vueform/slider/dist/slider.vue2.js");
/* harmony import */ var _Header_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header.vue */ "./resources/js/components/Header.vue");
/* harmony import */ var _Footer_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Footer.vue */ "./resources/js/components/Footer.vue");
/* harmony import */ var vuejs_paginate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuejs-paginate */ "./node_modules/vuejs-paginate/dist/index.js");
/* harmony import */ var vuejs_paginate__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vuejs_paginate__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var laravel_vue_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! laravel-vue-pagination */ "./node_modules/laravel-vue-pagination/dist/laravel-vue-pagination.common.js");
/* harmony import */ var laravel_vue_pagination__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(laravel_vue_pagination__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app.js */ "./resources/js/app.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







var axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

__webpack_require__(/*! vue-resource */ "./node_modules/vue-resource/dist/vue-resource.esm.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Header: _Header_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    Slider: _vueform_slider_dist_slider_vue2_js__WEBPACK_IMPORTED_MODULE_0__["default"],
    Footer: _Footer_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    Paginate: vuejs_paginate__WEBPACK_IMPORTED_MODULE_3___default.a,
    Pagination: laravel_vue_pagination__WEBPACK_IMPORTED_MODULE_4___default.a
  },
  name: "Store",
  data: function data() {
    return {
      base_url: 'http://localhost:8000',
      value: [20000, 500000],
      format: {
        thousand: ",",
        suffix: "đ",
        decimals: 0
      },
      selected: null,
      productMoney: 0,
      activeItem: 'trai-cay',
      activeItemId: 17,
      options: [{
        value: null,
        text: "Thứ tự mặc định"
      }, {
        value: "increase",
        text: "Sắp xếp theo giá tăng dần"
      }, {
        value: "decrease",
        text: "Sắp xếp theo giá giảm dần"
      }],
      products: {},
      categories: []
    };
  },
  props: {
    msg: String
  },
  computed: {
    filteredItems: function filteredItems() {}
  },
  methods: {
    getListCategory: function getListCategory() {
      var _this = this;

      axios.get('http://localhost:8060/api/frontend/store/listcategory').then(function (response) {
        _this.categories = response.data;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    clickCallback: function clickCallback(pageNum) {},
    getResults: function getResults(page) {
      var _this2 = this;

      if (typeof page === 'undefined') {
        page = 1;
      }

      var str = 'http://localhost:8060/api/frontend/store/listproduct/' + this.activeItemId + '?page=' + page;
      axios.get(str).then(function (response) {
        _this2.products = response.data;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    SortItem: function SortItem(myarg) {
      this.$router.push({
        name: 'StoreSort',
        params: {
          slug: this.activeItem,
          name_sort: myarg,
          category_id: this.activeItemId
        }
      });
    },
    getRoute: function getRoute(slug, id) {
      this.$router.push({
        name: 'StoreListItem',
        params: {
          slug: slug,
          id: id
        }
      })["catch"](function () {});
    },
    filterProducts: function filterProducts(activeItem, activeItemId, value) {
      this.$router.push({
        name: 'StoreFilter',
        params: {
          slug: activeItem,
          id: activeItemId,
          min: value[0],
          max: value[1]
        }
      })["catch"](function () {});
    },
    addToCart: function addToCart(id, quantity, price) {
      var _this3 = this;

      var token = localStorage.getItem('user-token');

      if (token == '') {
        alert('Bạn cần phải đăng nhập để thêm vào giỏ hàng!');
        this.$router.push({
          name: 'Login'
        });
      } else {
        var userId = localStorage.getItem("user-id");
        var urlCart = "http://localhost:8060/Product/frontend/product/add-to-cart/" + id + "/" + quantity + "/" + userId;
        axios.get(urlCart).then(function (response) {
          if (response.data.code == 200) {
            _this3.productMoney = price;
            _app_js__WEBPACK_IMPORTED_MODULE_5__["eventBus"].$emit('productMoney', _this3.productMoney);
          }
        })["catch"](function (error) {
          console.log(error);
        });
      }
    }
  },
  mounted: function mounted() {
    this.activeItem = this.$route.params.slug;
    this.activeItemId = this.$route.params.id;
    this.getListCategory();
    this.getResults();
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/StoreListItem.vue?vue&type=style&index=1&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/StoreListItem.vue?vue&type=style&index=1&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.store {\r\n    margin-top: 141px;\r\n    padding-top: 30px;\n}\n.price-order {\r\n    display: flex;\r\n    justify-content: flex-end;\n}\n.arr-form {\r\n    padding: 4px 8px;\r\n    border-radius: 2px;\r\n    width: 250px;\r\n\r\n    /* Replace default styling (arrow) */\r\n    appearance: none;\r\n    -webkit-appearance: none;\r\n    -moz-appearance: none;\r\n    background-image: url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='50'><polygon points='0,0 100,0 50,50' style='fill:%23666666;'/></svg>\");\r\n    background-position: right 10px top 50%;\r\n    background-repeat: no-repeat;\r\n    background-size: 10px;\n}\n.category-mobile {\r\n    display: none;\n}\n.category-mobile__list {\r\n    padding: 0;\r\n    display: flex;\r\n    list-style: none;\n}\n.category-mobile__item-link {\r\n    display: block;\r\n    text-align: center;\r\n    line-height: 40px;\r\n    text-decoration: none;\r\n    color: var(--text-color);\r\n    border-radius: 8px;\r\n    border: 1px solid var(--border-color);\r\n    margin-right: 12px;\r\n    height: 40px;\r\n    width: 80px;\n}\n.category-mobile__item-link:hover,\r\n.category-mobile__item-link.router-link-active {\r\n    color: var(--white-color);\r\n    background-color: var(--primary-color);\n}\n.category {\r\n    border-bottom: 1px solid var(--border-color);\r\n    width: 300px;\n}\n.category__header,\r\n.filter-price__header,\r\n.selling-products__header {\r\n    width: 250px;\r\n    height: 50px;\r\n    margin: 0px auto;\r\n    margin-top: 16px;\r\n    background-color: var(--primary-color);\r\n    color: var(--white-color);\r\n    font-weight: 500;\r\n    font-size: 16px;\r\n    text-align: center;\r\n    line-height: 50px;\r\n    border-bottom: 1px solid var(--border-color);\r\n    border-top-right-radius: 8px;\r\n    border-top-left-radius: 8px;\n}\n.category__list {\r\n    padding: 0;\r\n    list-style: none;\r\n    margin-bottom: 0;\n}\n.category__list:last-child{\r\n    padding-bottom: 15px;\n}\n.category__item-link {\r\n    display: block;\r\n    margin: 0px auto;\r\n    width: 250px;\r\n    height: 45px;\r\n    border-bottom: 1px solid var(--border-color);\r\n    border-left: 1px solid var(--border-color);\r\n    border-right: 1px solid var(--border-color);\r\n    text-decoration: none;\r\n    color: black;\r\n    font-size: 16px;\r\n    line-height: 45px;\r\n    text-align: center;\n}\n.category__item:last-child .category__item-link {\r\n    border-bottom-left-radius: 4px;\r\n    border-bottom-right-radius: 4px;\n}\n.category__item-link:hover,\r\n.category__item-link.router-link-active {\r\n    color: white;\r\n    background-color: var(--primary-color);\n}\n.filter-price {\r\n    height: 180px;\r\n    width: 300px;\r\n    border-bottom: 1px solid var(--border-color);\n}\n.filter-price__header {\r\n    border-bottom: none;\n}\n.filter-price__slider {\r\n    width: 250px;\r\n    margin: 0px auto;\r\n    border: 1px solid #ccc;\r\n    border-bottom-left-radius: 4px;\r\n    border-bottom-right-radius: 4px;\n}\n.slider-input {\r\n    width: 160px;\r\n    margin: 16px auto;\n}\n.slider-output {\r\n    text-align: center;\r\n    font-size: 16px;\n}\n.btn-filter {\r\n    text-align: center;\n}\n.btn-filter button {\r\n    background-color: var(--primary-color);\r\n    padding: 0;\r\n    margin: 12px 0;\r\n    width: 40px;\r\n    height: 25px;\r\n    line-height: 25px;\r\n    border-radius: 8px;\n}\n.selling-products {\r\n    width: 300px;\r\n    height: 350px;\n}\n.selling-products__list {\r\n    padding: 0;\r\n    list-style: none;\n}\n.selling-products__item:last-child .selling-products__item-link {\r\n    border-bottom-left-radius: 4px;\r\n    border-bottom-right-radius: 4px;\n}\n.selling-products__item-link {\r\n    height: 75px;\r\n    width: 250px;\r\n    padding: 4px 0;\r\n    margin: 0 auto;\r\n    border-left: 1px solid var(--border-color);\r\n    border-right: 1px solid var(--border-color);\r\n    border-bottom: 1px solid var(--border-color);\r\n    text-decoration: none;\r\n    display: flex;\n}\n.selling-products__item-img {\r\n    width: 40%;\n}\n.selling-products__item-img img {\r\n    width: 65px;\r\n    height: 55px;\r\n    margin-left: 24px;\n}\n.selling-products__item-info {\r\n    width: 60%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\n}\n.selling-products__item-info .name {\r\n    text-align: center;\r\n    color: var(--text-color);\r\n    font-weight: 500;\r\n    font-size: 16px;\n}\n.selling-products__item-info .money {\r\n    text-align: center;\r\n    color: var(--primary-color);\r\n    font-size: 16px;\n}\n.home-products-list {\r\n    display: flex;\r\n    flex-wrap: wrap;\n}\n.home-products-item {\r\n    height: 215px;\r\n    width: 24%;\r\n    padding: 4px;\r\n    margin: 12px 32px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    text-align: center;\n}\n.home-products-item:hover {\r\n    transform: translateY(-4px);\n}\n.home-products-item a{\r\n    text-decoration: none;\n}\n.home-products-item__img {\r\n    height: 120px;\r\n    width: 160px;\r\n    margin: 0 auto;\n}\n.home-products-item__name {\r\n    color: var(--text-color);\r\n    margin: 0;\r\n    overflow: hidden;\r\n    display: -webkit-box;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-line-clamp: 1;\n}\n.home-products-item__price {\r\n    color: var(--primary-color);\n}\n.home-products-item__btn {\r\n    width: 140px;\r\n    margin: 4px auto;\r\n    background-color: var(--primary-color);\r\n    color: var(--white-color);\r\n    border: 1px solid var(--border-color);\n}\n.home-products-item__btn:hover {\r\n    background-color: #037c38;\n}\n.pagination-nav {\r\n    display: flex;\r\n    justify-content: center;\r\n    margin-top: 8px;\n}\n.pagination .page-item a{\r\n    color: var(--primary-color);\n}\n.pagination .page-item.active a{\r\n    background-color: var(--primary-color);\n}\r\n\r\n/* Mobile */\n@media only screen and (max-width: 1200px) {\n.category,\r\n    .filter-price,\r\n    .selling-products {\r\n        display: none;\n}\n.category-mobile {\r\n        display: flex;\r\n        justify-content: center;\n}\n.price-order {\r\n        justify-content: center;\n}\n}\n@media (min-width: 374px) and (max-width: 767px) {\n.store {\r\n        padding-top: 0px;\n}\n.category,\r\n    .filter-price,\r\n    .selling-products {\r\n        display: none;\n}\n.category-mobile {\r\n        display: flex;\r\n        justify-content: center;\n}\n.home-products-item {\r\n        width: 40%;\r\n        margin: 12px 16px;\n}\n.home-products-item__img {\r\n        width: 100px;\r\n        height: 110px;\n}\n.home-products-item__name {\r\n        font-size: 14px;\n}\n}\r\n\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/StoreListItem.vue?vue&type=style&index=1&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/StoreListItem.vue?vue&type=style&index=1&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./StoreListItem.vue?vue&type=style&index=1&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/StoreListItem.vue?vue&type=style&index=1&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/StoreListItem.vue?vue&type=template&id=cf832112&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/StoreListItem.vue?vue&type=template&id=cf832112& ***!
  \****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "store" },
    [
      _c("Header"),
      _vm._v(" "),
      _c(
        "b-container",
        { staticClass: "bv-example-row" },
        [
          _c("b-row", [
            _c(
              "div",
              { staticClass: "category-mobile" },
              _vm._l(_vm.categories, function (category) {
                return _c(
                  "ul",
                  { key: category.id, staticClass: "category-mobile__list" },
                  [
                    _c(
                      "li",
                      { staticClass: "category__item" },
                      [
                        _c(
                          "router-link",
                          {
                            staticClass: "category-mobile__item-link",
                            attrs: {
                              to: {
                                name: "StoreListItem",
                                params: {
                                  slug: category.slug,
                                  id: category.id,
                                },
                              },
                            },
                          },
                          [_vm._v(_vm._s(category.name))]
                        ),
                      ],
                      1
                    ),
                  ]
                )
              }),
              0
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "price-order" },
              [
                _c("b-form-select", {
                  staticClass: "arr-form",
                  attrs: { options: _vm.options },
                  on: { change: _vm.SortItem },
                  model: {
                    value: _vm.selected,
                    callback: function ($$v) {
                      _vm.selected = $$v
                    },
                    expression: "selected",
                  },
                }),
              ],
              1
            ),
          ]),
          _vm._v(" "),
          _c(
            "b-row",
            { staticClass: "content" },
            [
              _c("b-col", { attrs: { xl: "4" } }, [
                _c(
                  "div",
                  { staticClass: "category" },
                  [
                    _c("header", { staticClass: "category__header" }, [
                      _vm._v("DANH MỤC SẢN PHẨM"),
                    ]),
                    _vm._v(" "),
                    _vm._l(_vm.categories, function (category) {
                      return _c(
                        "ul",
                        { key: category.id, staticClass: "category__list" },
                        [
                          _c(
                            "li",
                            { staticClass: "category__item" },
                            [
                              _c(
                                "router-link",
                                {
                                  staticClass: "category__item-link",
                                  attrs: {
                                    to: {
                                      name: "StoreListItem",
                                      params: {
                                        slug: category.slug,
                                        id: category.id,
                                      },
                                    },
                                  },
                                },
                                [_vm._v(_vm._s(category.name))]
                              ),
                            ],
                            1
                          ),
                        ]
                      )
                    }),
                  ],
                  2
                ),
                _vm._v(" "),
                _c("div", { staticClass: "filter-price" }, [
                  _c("header", { staticClass: "filter-price__header" }, [
                    _vm._v("LỌC THEO GIÁ"),
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "filter-price__slider" },
                    [
                      _c("Slider", {
                        staticClass: "slider-input",
                        attrs: {
                          min: 20000,
                          max: 500000,
                          format: _vm.format,
                          step: 10000,
                          tooltips: false,
                        },
                        model: {
                          value: _vm.value,
                          callback: function ($$v) {
                            _vm.value = $$v
                          },
                          expression: "value",
                        },
                      }),
                      _vm._v(" "),
                      _c("div", { staticClass: "slider-output" }, [
                        _vm._v(
                          _vm._s(_vm.value[0].toLocaleString("vi-VN")) +
                            " đ - " +
                            _vm._s(_vm.value[1].toLocaleString("vi-VN")) +
                            " đ"
                        ),
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "btn-filter" },
                        [
                          _c(
                            "b-button",
                            {
                              attrs: { variant: "success" },
                              on: {
                                click: function ($event) {
                                  return _vm.filterProducts(
                                    _vm.activeItem,
                                    _vm.activeItemId,
                                    _vm.value
                                  )
                                },
                              },
                            },
                            [_vm._v("Lọc")]
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "selling-products" }, [
                  _c("div", { staticClass: "selling-products__header" }, [
                    _vm._v("SẢN PHẨM"),
                  ]),
                  _vm._v(" "),
                  _c("ul", { staticClass: "selling-products__list" }, [
                    _c(
                      "li",
                      { staticClass: "selling-products__item" },
                      [
                        _c(
                          "router-link",
                          {
                            staticClass: "selling-products__item-link",
                            attrs: {
                              to: { name: "Product", params: { id: 12 } },
                            },
                          },
                          [
                            _c(
                              "div",
                              { staticClass: "selling-products__item-img" },
                              [
                                _c("img", {
                                  staticClass: "selling-products__item-img",
                                  attrs: {
                                    src: "http://localhost:8000/storage/product/3/WS8Sq2LITGLgsdS9Wt0M.jpg",
                                    alt: "",
                                  },
                                }),
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "selling-products__item-info" },
                              [
                                _c("span", { staticClass: "name" }, [
                                  _vm._v("Bắp cải tím"),
                                ]),
                                _vm._v(" "),
                                _c("span", { staticClass: "money" }, [
                                  _vm._v("38.000 đ"),
                                ]),
                              ]
                            ),
                          ]
                        ),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "li",
                      { staticClass: "selling-products__item" },
                      [
                        _c(
                          "router-link",
                          {
                            staticClass: "selling-products__item-link",
                            attrs: {
                              to: { name: "Product", params: { id: 49 } },
                            },
                          },
                          [
                            _c(
                              "div",
                              { staticClass: "selling-products__item-img" },
                              [
                                _c("img", {
                                  staticClass: "selling-products__item-img",
                                  attrs: {
                                    src: "http://localhost:8000/storage/product/3/UZBKftPHkX4rvw6YwUWB.jpg",
                                    alt: "",
                                  },
                                }),
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "selling-products__item-info" },
                              [
                                _c("span", { staticClass: "name" }, [
                                  _vm._v("Dưa hấu"),
                                ]),
                                _vm._v(" "),
                                _c("span", { staticClass: "money" }, [
                                  _vm._v("25.000 đ"),
                                ]),
                              ]
                            ),
                          ]
                        ),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "li",
                      { staticClass: "selling-products__item" },
                      [
                        _c(
                          "router-link",
                          {
                            staticClass: "selling-products__item-link",
                            attrs: {
                              to: { name: "Product", params: { id: 37 } },
                            },
                          },
                          [
                            _c(
                              "div",
                              { staticClass: "selling-products__item-img" },
                              [
                                _c("img", {
                                  staticClass: "selling-products__item-img",
                                  attrs: {
                                    src: "http://localhost:8000/storage/product/3/VaoM5VJZVuGS8R9a7TZh.jpg",
                                    alt: "",
                                  },
                                }),
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "selling-products__item-info" },
                              [
                                _c("span", { staticClass: "name" }, [
                                  _vm._v("Xoài cát Hoà Lộc"),
                                ]),
                                _vm._v(" "),
                                _c("span", { staticClass: "money" }, [
                                  _vm._v("65.000 đ"),
                                ]),
                              ]
                            ),
                          ]
                        ),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "li",
                      { staticClass: "selling-products__item" },
                      [
                        _c(
                          "router-link",
                          {
                            staticClass: "selling-products__item-link",
                            attrs: {
                              to: { name: "Product", params: { id: 36 } },
                            },
                          },
                          [
                            _c(
                              "div",
                              { staticClass: "selling-products__item-img" },
                              [
                                _c("img", {
                                  staticClass: "selling-products__item-img",
                                  attrs: {
                                    src: "http://localhost:8000/storage/product/3/NIcN0JVQMLIe7Js9XTLs.jpg",
                                    alt: "",
                                  },
                                }),
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "selling-products__item-info" },
                              [
                                _c("span", { staticClass: "name" }, [
                                  _vm._v("Thanh long"),
                                ]),
                                _vm._v(" "),
                                _c("span", { staticClass: "money" }, [
                                  _vm._v("35.000 đ"),
                                ]),
                              ]
                            ),
                          ]
                        ),
                      ],
                      1
                    ),
                  ]),
                ]),
              ]),
              _vm._v(" "),
              _c(
                "b-col",
                { staticClass: "home-products", attrs: { xl: "8" } },
                [
                  _c(
                    "b-row",
                    [
                      _c(
                        "b-col",
                        { staticClass: "home-products-list" },
                        _vm._l(_vm.products.data, function (product) {
                          return _c(
                            "div",
                            {
                              key: product.id,
                              staticClass: "home-products-item",
                            },
                            [
                              _c(
                                "router-link",
                                {
                                  attrs: {
                                    to: {
                                      name: "Product",
                                      params: { id: product.id },
                                    },
                                  },
                                },
                                [
                                  _c("img", {
                                    staticClass: "home-products-item__img",
                                    attrs: {
                                      src:
                                        _vm.base_url + product.feature_img_path,
                                      alt: "",
                                    },
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "h5",
                                    { staticClass: "home-products-item__name" },
                                    [_vm._v(_vm._s(product.name))]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass: "home-products-item__price",
                                    },
                                    [
                                      _c("span", [
                                        _vm._v(
                                          _vm._s(
                                            parseInt(
                                              product.price
                                            ).toLocaleString("vi-VN")
                                          ) + " đ"
                                        ),
                                      ]),
                                    ]
                                  ),
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "button",
                                {
                                  staticClass: "home-products-item__btn",
                                  on: {
                                    click: function ($event) {
                                      return _vm.addToCart(
                                        product.id,
                                        1,
                                        product.price
                                      )
                                    },
                                  },
                                },
                                [_vm._v("Thêm vào giỏ")]
                              ),
                            ],
                            1
                          )
                        }),
                        0
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("b-row", [
                    _c(
                      "div",
                      { staticClass: "pagination-nav" },
                      [
                        _c("pagination", {
                          attrs: { data: _vm.products },
                          on: { "pagination-change-page": _vm.getResults },
                        }),
                      ],
                      1
                    ),
                  ]),
                ],
                1
              ),
            ],
            1
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c("Footer"),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/StoreListItem.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/StoreListItem.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _StoreListItem_vue_vue_type_template_id_cf832112___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StoreListItem.vue?vue&type=template&id=cf832112& */ "./resources/js/components/StoreListItem.vue?vue&type=template&id=cf832112&");
/* harmony import */ var _StoreListItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StoreListItem.vue?vue&type=script&lang=js& */ "./resources/js/components/StoreListItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _vueform_slider_themes_default_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vueform/slider/themes/default.css?vue&type=style&index=0&lang=css& */ "./node_modules/@vueform/slider/themes/default.css?vue&type=style&index=0&lang=css&");
/* harmony import */ var _StoreListItem_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./StoreListItem.vue?vue&type=style&index=1&lang=css& */ "./resources/js/components/StoreListItem.vue?vue&type=style&index=1&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");







/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _StoreListItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _StoreListItem_vue_vue_type_template_id_cf832112___WEBPACK_IMPORTED_MODULE_0__["render"],
  _StoreListItem_vue_vue_type_template_id_cf832112___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/StoreListItem.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/StoreListItem.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/StoreListItem.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StoreListItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./StoreListItem.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/StoreListItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StoreListItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/StoreListItem.vue?vue&type=style&index=1&lang=css&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/StoreListItem.vue?vue&type=style&index=1&lang=css& ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_StoreListItem_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./StoreListItem.vue?vue&type=style&index=1&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/StoreListItem.vue?vue&type=style&index=1&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_StoreListItem_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_StoreListItem_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_StoreListItem_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_StoreListItem_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/StoreListItem.vue?vue&type=template&id=cf832112&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/StoreListItem.vue?vue&type=template&id=cf832112& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StoreListItem_vue_vue_type_template_id_cf832112___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./StoreListItem.vue?vue&type=template&id=cf832112& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/StoreListItem.vue?vue&type=template&id=cf832112&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StoreListItem_vue_vue_type_template_id_cf832112___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StoreListItem_vue_vue_type_template_id_cf832112___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ 1:
/*!*********************!*\
  !*** got (ignored) ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

}]);