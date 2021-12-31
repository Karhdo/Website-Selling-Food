(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Store.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Store.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    activeClass: function activeClass() {
      return this.$data.isActive ? "active" : "";
    },
    filteredItems: function filteredItems() {}
  },
  methods: {
    isActive: function isActive(categorySlug) {
      return this.activeItem === categorySlug;
    },
    setActive: function setActive(slug, categoryId) {
      this.activeItem = slug; // no need for Vue.set()
    },
    getListCategory: function getListCategory() {
      var _this = this;

      axios.get('api/frontend/store/listcategory').then(function (response) {
        _this.categories = response.data; // this.categories.forEach(element => {
        //     element.link = "/store/" + element.slug
        // });
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

      var str = 'api/frontend/store/listproduct/' + this.activeItemId + '?page=' + page;
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
          name_sort: myarg,
          category_id: this.activeItemId,
          slug: this.activeItem
        }
      });
    }
  },
  created: function created() {
    this.getListCategory();
    this.getResults();
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Store.vue?vue&type=style&index=1&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Store.vue?vue&type=style&index=1&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.store {\n    margin-top: 141px;\n    padding-top: 30px;\n}\n.price-order {\n    display: flex;\n    justify-content: flex-end;\n}\n.arr-form {\n    padding: 4px 8px;\n    border-radius: 2px;\n    width: 250px;\n\n    /* Replace default styling (arrow) */\n    appearance: none;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    background-image: url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='50'><polygon points='0,0 100,0 50,50' style='fill:%23666666;'/></svg>\");\n    background-position: right 10px top 50%;\n    background-repeat: no-repeat;\n    background-size: 10px;\n}\n.category-mobile {\n    display: none;\n}\n.category-mobile__list {\n    padding: 0;\n    display: flex;\n    list-style: none;\n}\n.category-mobile__item-link {\n    display: block;\n    text-align: center;\n    line-height: 40px;\n    text-decoration: none;\n    color: var(--text-color);\n    border-radius: 8px;\n    border: 1px solid var(--border-color);\n    margin-right: 12px;\n    height: 40px;\n    width: 80px;\n}\n.category-mobile__item-link:hover,\n.category-mobile__item-link .active {\n    color: var(--white-color);\n    background-color: var(--primary-color);\n}\n.category {\n    border-bottom: 1px solid var(--border-color);\n    width: 300px;\n}\n.category__header,\n.filter-price__header,\n.selling-products__header {\n    width: 250px;\n    height: 50px;\n    margin: 0px auto;\n    margin-top: 16px;\n    background-color: var(--primary-color);\n    color: var(--white-color);\n    font-weight: 500;\n    font-size: 16px;\n    text-align: center;\n    line-height: 50px;\n    border-bottom: 1px solid var(--border-color);\n    border-top-right-radius: 8px;\n    border-top-left-radius: 8px;\n}\n.category__list {\n    padding: 0;\n    list-style: none;\n    margin-bottom: 0;\n}\n.category__list:last-child{\n    padding-bottom: 15px;\n}\n.category__item-link {\n    display: block;\n    margin: 0px auto;\n    width: 250px;\n    height: 45px;\n    border-bottom: 1px solid var(--border-color);\n    border-left: 1px solid var(--border-color);\n    border-right: 1px solid var(--border-color);\n    text-decoration: none;\n    color: black;\n    font-size: 16px;\n    line-height: 45px;\n    text-align: center;\n}\n.category__item:last-child .category__item-link {\n    border-bottom-left-radius: 4px;\n    border-bottom-right-radius: 4px;\n}\n.category__item-link:hover,\n.category__item-link.active {\n    color: white;\n    background-color: var(--primary-color);\n}\n.filter-price {\n    height: 180px;\n    width: 300px;\n    border-bottom: 1px solid var(--border-color);\n}\n.filter-price__header {\n    border-bottom: none;\n}\n.filter-price__slider {\n    width: 250px;\n    margin: 0px auto;\n    border: 1px solid #ccc;\n    border-bottom-left-radius: 4px;\n    border-bottom-right-radius: 4px;\n}\n.slider-input {\n    width: 160px;\n    margin: 16px auto;\n}\n.slider-output {\n    text-align: center;\n    font-size: 16px;\n}\n.btn-filter {\n    text-align: center;\n}\n.btn-filter button {\n    background-color: var(--primary-color);\n    padding: 0;\n    margin: 12px 0;\n    width: 40px;\n    height: 25px;\n    line-height: 25px;\n    border-radius: 8px;\n}\n.selling-products {\n    width: 300px;\n    height: 350px;\n}\n.selling-products__list {\n    padding: 0;\n    list-style: none;\n}\n.selling-products__item:last-child .selling-products__item-link {\n    border-bottom-left-radius: 4px;\n    border-bottom-right-radius: 4px;\n}\n.selling-products__item-link {\n    height: 75px;\n    width: 250px;\n    padding: 4px 0;\n    margin: 0 auto;\n    border-left: 1px solid var(--border-color);\n    border-right: 1px solid var(--border-color);\n    border-bottom: 1px solid var(--border-color);\n    text-decoration: none;\n    display: flex;\n}\n.selling-products__item-img {\n    width: 40%;\n}\n.selling-products__item-img img {\n    width: 65px;\n    height: 55px;\n    margin-left: 24px;\n}\n.selling-products__item-info {\n    width: 60%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n}\n.selling-products__item-info .name {\n    text-align: center;\n    color: var(--text-color);\n    font-weight: 500;\n    font-size: 16px;\n}\n.selling-products__item-info .money {\n    text-align: center;\n    color: var(--primary-color);\n    font-size: 16px;\n}\n.home-products-list {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-between;\n}\n.home-products-item {\n    height: 215px;\n    width: 25%;\n    padding: 4px;\n    margin: 12px 16px;\n    display: flex;\n    flex-direction: column;\n    text-align: center;\n}\n.home-products-item:hover {\n    transform: translateY(-4px);\n}\n.home-products-item a{\n    text-decoration: none;\n}\n.home-products-item__img {\n    height: 120px;\n    width: 160px;\n    margin: 0 auto;\n}\n.home-products-item__name {\n    color: var(--text-color);\n    margin: 0;\n}\n.home-products-item__price {\n    color: var(--primary-color);\n}\n.home-products-item__btn {\n    width: 140px;\n    margin: 4px auto;\n    background-color: var(--primary-color);\n    color: var(--white-color);\n    border: 1px solid var(--border-color);\n}\n.home-products-item__btn:hover {\n    background-color: #037c38;\n}\n.pagination-nav {\n    display: flex;\n    justify-content: center;\n    margin-top: 8px;\n}\n.pagination .page-item a{\n    color: var(--primary-color);\n}\n.pagination .page-item.active a{\n    background-color: var(--primary-color);\n}\n\n/* Mobile */\n@media only screen and (max-width: 1200px) {\n.category,\n    .filter-price,\n    .selling-products {\n        display: none;\n}\n.category-mobile {\n        display: flex;\n        justify-content: center;\n}\n.price-order {\n        display: none;\n}\n}\n@media only screen and (max-width: 375px) {\n.category,\n    .filter-price,\n    .selling-products {\n        display: none;\n}\n.home-products-item {\n        width: 40%;\n}\n.home-products-item__img {\n        width: 100px;\n        height: 110px;\n}\n.home-products-item__name {\n        font-size: 14px;\n}\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Store.vue?vue&type=style&index=1&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Store.vue?vue&type=style&index=1&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Store.vue?vue&type=style&index=1&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Store.vue?vue&type=style&index=1&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Store.vue?vue&type=template&id=37301906&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Store.vue?vue&type=template&id=37301906& ***!
  \********************************************************************************************************************************************************************************************************/
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
                            staticClass: "category__item-link",
                            class: { active: _vm.isActive(category.slug) },
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
                                  class: {
                                    active: _vm.isActive(category.slug),
                                  },
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
                          _c("b-button", { attrs: { variant: "success" } }, [
                            _vm._v("Lọc"),
                          ]),
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
                    _c("li", { staticClass: "selling-products__item" }, [
                      _c(
                        "a",
                        {
                          staticClass: "selling-products__item-link",
                          attrs: { href: "#" },
                        },
                        [
                          _c(
                            "div",
                            { staticClass: "selling-products__item-img" },
                            [
                              _c("img", {
                                staticClass: "selling-products__item-img",
                                attrs: {
                                  src: "http://localhost:8000/storage/product/3/iTHUoFmEhcs15y4kexr4.jpg",
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
                                _vm._v("Dâu tây Đà Lạt"),
                              ]),
                              _vm._v(" "),
                              _c("span", { staticClass: "money" }, [
                                _vm._v("250.000 đ"),
                              ]),
                            ]
                          ),
                        ]
                      ),
                    ]),
                    _vm._v(" "),
                    _c("li", { staticClass: "selling-products__item" }, [
                      _c(
                        "a",
                        {
                          staticClass: "selling-products__item-link",
                          attrs: { href: "#" },
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
                    ]),
                    _vm._v(" "),
                    _c("li", { staticClass: "selling-products__item" }, [
                      _c(
                        "a",
                        {
                          staticClass: "selling-products__item-link",
                          attrs: { href: "#" },
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
                    ]),
                    _vm._v(" "),
                    _c("li", { staticClass: "selling-products__item" }, [
                      _c(
                        "a",
                        {
                          staticClass: "selling-products__item-link",
                          attrs: { href: "#" },
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
                    ]),
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
                                { staticClass: "home-products-item__btn" },
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

/***/ "./resources/js/components/Store.vue":
/*!*******************************************!*\
  !*** ./resources/js/components/Store.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Store_vue_vue_type_template_id_37301906___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Store.vue?vue&type=template&id=37301906& */ "./resources/js/components/Store.vue?vue&type=template&id=37301906&");
/* harmony import */ var _Store_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Store.vue?vue&type=script&lang=js& */ "./resources/js/components/Store.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _vueform_slider_themes_default_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vueform/slider/themes/default.css?vue&type=style&index=0&lang=css& */ "./node_modules/@vueform/slider/themes/default.css?vue&type=style&index=0&lang=css&");
/* harmony import */ var _Store_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Store.vue?vue&type=style&index=1&lang=css& */ "./resources/js/components/Store.vue?vue&type=style&index=1&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");







/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _Store_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Store_vue_vue_type_template_id_37301906___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Store_vue_vue_type_template_id_37301906___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Store.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Store.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/components/Store.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Store_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Store.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Store.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Store_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Store.vue?vue&type=style&index=1&lang=css&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/Store.vue?vue&type=style&index=1&lang=css& ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Store_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Store.vue?vue&type=style&index=1&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Store.vue?vue&type=style&index=1&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Store_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Store_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Store_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Store_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/Store.vue?vue&type=template&id=37301906&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/Store.vue?vue&type=template&id=37301906& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Store_vue_vue_type_template_id_37301906___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Store.vue?vue&type=template&id=37301906& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Store.vue?vue&type=template&id=37301906&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Store_vue_vue_type_template_id_37301906___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Store_vue_vue_type_template_id_37301906___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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