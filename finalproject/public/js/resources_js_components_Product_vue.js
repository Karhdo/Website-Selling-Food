"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Product_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Product.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Product.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Header_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header.vue */ "./resources/js/components/Header.vue");
/* harmony import */ var _Footer_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Footer.vue */ "./resources/js/components/Footer.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    Header: _Header_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    Footer: _Footer_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      base_url: 'http://localhost:8000',
      quantity: 1,
      product: []
    };
  },
  methods: {
    getProduct: function getProduct() {
      var _this = this;

      var str = "frontend/product/" + String(this.$route.params.id);
      axios.get(str).then(function (response) {
        _this.product = response.data;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    addToCart: function addToCart(id, quantity) {
      var urlCart = "http://localhost:8000/Product/frontend/product/add-to-cart/" + id + "/" + quantity;
      axios.get(urlCart).then(function (response) {
        if (response.status === 200) {
          alert("Thêm sản phẩm thành công");
        }
      })["catch"](function (error) {
        console.log(error);
      });
    }
  },
  created: function created() {
    this.getProduct();
  }
});

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Product.vue?vue&type=style&index=0&id=7e94e6d4&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Product.vue?vue&type=style&index=0&id=7e94e6d4&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.product[data-v-7e94e6d4] {\n    margin-top: 141px;\n    padding-top: 30px;\n}\n.product__img[data-v-7e94e6d4] {\n    display: flex;\n    justify-content: center;\n}\n.product__img img[data-v-7e94e6d4] {\n    width: 350px;\n    margin: 0 auto;\n}\n.product__info[data-v-7e94e6d4] {\n    font-size: 18px;\n    color: var(--text-color);\n}\n.product__info div[data-v-7e94e6d4] {\n    margin-bottom: 12px;\n}\n.product__info span[data-v-7e94e6d4] {\n    margin-left: 16px;\n}\n.product__name[data-v-7e94e6d4] {\n    margin-bottom: 0;\n}\n.product__name h2[data-v-7e94e6d4] {\n    margin-bottom: 0;\n    font-weight: 700;\n}\n.product__price span[data-v-7e94e6d4] {\n    margin-left: 0;\n    color: var(--primary-color);\n    font-size: 24px;\n    font-weight: 700;\n}\n.divide[data-v-7e94e6d4] {\n    height: 3px;\n    display: block;\n    background-color: rgba(0, 0, 0, 0.1);\n    margin: 1em 0 1em;\n    width: 100%;\n    max-width: 30px;\n}\n.product__qnt[data-v-7e94e6d4] {\n    font-size: 18px;\n    color: var(--text-color);\n}\n.product__qnt span[data-v-7e94e6d4] {\n    margin-right: 12px;\n}\n.product__qnt input[data-v-7e94e6d4] {\n    text-align: center;\n    width: 50px;\n    border: 1px solid var(--border-color);\n    outline: none;\n}\n.product__qnt button[data-v-7e94e6d4] {\n    border: 1px solid var(--border-color);\n}\n.product__btn-add[data-v-7e94e6d4] {\n    margin-top: 20px;\n}\n.product__btn-add button[data-v-7e94e6d4] {\n    height: 40px;\n    border: 1px solid var(--border-color);\n    border-radius: 4px;\n    color: var(--white-color);\n    background-color: var(--primary-color);\n}\n.product__btn-add button[data-v-7e94e6d4]:hover,\n.comment__form input[data-v-7e94e6d4]:hover {\n    background-color: #05803a;\n}\n.product__comment[data-v-7e94e6d4] {\n    margin-top: 50px;\n}\n.comment__header[data-v-7e94e6d4] {\n    font-size: 20px;\n    font-weight: 600;\n    color: var(--text-color);\n}\n.comment__form[data-v-7e94e6d4] {\n    margin-top: 12px;\n}\n.comment__form textarea[data-v-7e94e6d4] {\n    width: 100%;\n    height: 150px;\n}\n.comment__form input[data-v-7e94e6d4] {\n    height: 40px;\n    width: 100px;\n    border: 1px solid var(--border-color);\n    border-radius: 4px;\n    color: var(--white-color);\n    background-color: var(--primary-color);\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Product.vue?vue&type=style&index=0&id=7e94e6d4&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Product.vue?vue&type=style&index=0&id=7e94e6d4&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_style_index_0_id_7e94e6d4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Product.vue?vue&type=style&index=0&id=7e94e6d4&scoped=true&lang=css& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Product.vue?vue&type=style&index=0&id=7e94e6d4&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_style_index_0_id_7e94e6d4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_style_index_0_id_7e94e6d4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/Product.vue":
/*!*********************************************!*\
  !*** ./resources/js/components/Product.vue ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Product_vue_vue_type_template_id_7e94e6d4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Product.vue?vue&type=template&id=7e94e6d4&scoped=true& */ "./resources/js/components/Product.vue?vue&type=template&id=7e94e6d4&scoped=true&");
/* harmony import */ var _Product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Product.vue?vue&type=script&lang=js& */ "./resources/js/components/Product.vue?vue&type=script&lang=js&");
/* harmony import */ var _Product_vue_vue_type_style_index_0_id_7e94e6d4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Product.vue?vue&type=style&index=0&id=7e94e6d4&scoped=true&lang=css& */ "./resources/js/components/Product.vue?vue&type=style&index=0&id=7e94e6d4&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Product_vue_vue_type_template_id_7e94e6d4_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Product_vue_vue_type_template_id_7e94e6d4_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "7e94e6d4",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Product.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Product.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/components/Product.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Product.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Product.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Product.vue?vue&type=style&index=0&id=7e94e6d4&scoped=true&lang=css&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/Product.vue?vue&type=style&index=0&id=7e94e6d4&scoped=true&lang=css& ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_style_index_0_id_7e94e6d4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Product.vue?vue&type=style&index=0&id=7e94e6d4&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Product.vue?vue&type=style&index=0&id=7e94e6d4&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/components/Product.vue?vue&type=template&id=7e94e6d4&scoped=true&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/Product.vue?vue&type=template&id=7e94e6d4&scoped=true& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_template_id_7e94e6d4_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_template_id_7e94e6d4_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_template_id_7e94e6d4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Product.vue?vue&type=template&id=7e94e6d4&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Product.vue?vue&type=template&id=7e94e6d4&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Product.vue?vue&type=template&id=7e94e6d4&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Product.vue?vue&type=template&id=7e94e6d4&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "product" },
    [
      _c("Header"),
      _vm._v(" "),
      _c(
        "b-container",
        [
          _vm._l(_vm.product, function (item) {
            return _c(
              "b-row",
              { key: item.id },
              [
                _c("b-col", { attrs: { xl: "6" } }, [
                  _c("div", { staticClass: "product__img" }, [
                    _c("img", {
                      attrs: {
                        src: _vm.base_url + item.feature_img_path,
                        alt: "",
                      },
                    }),
                  ]),
                ]),
                _vm._v(" "),
                _c("b-col", { attrs: { xl: "6" } }, [
                  _c("div", { staticClass: "product__info" }, [
                    _c("div", { staticClass: "product__name" }, [
                      _c("h2", [_vm._v(_vm._s(item.name))]),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "divide" }),
                    _vm._v(" "),
                    _c("div", { staticClass: "product__price" }, [
                      _c("span", [
                        _vm._v(
                          _vm._s(parseInt(item.price).toLocaleString("vi-VN")) +
                            "\n                            đ"
                        ),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      [
                        _c("b-icon", {
                          attrs: { icon: "check", scale: "1.5" },
                        }),
                        _vm._v(" "),
                        _c("span", [_vm._v("Gọi mua hàng 090 1234567")]),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      [
                        _c("b-icon", {
                          attrs: { icon: "check", scale: "1.5" },
                        }),
                        _vm._v(" "),
                        _c("span", [_vm._v("Đổi trả trong 24h")]),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      [
                        _c("b-icon", {
                          attrs: { icon: "check", scale: "1.5" },
                        }),
                        _vm._v(" "),
                        _c("span", [_vm._v("Đảm bảo tươi ngon")]),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      [
                        _c("b-icon", {
                          attrs: { icon: "check", scale: "1.5" },
                        }),
                        _vm._v(" "),
                        _c("span", [_vm._v("Giao hàng trực tiếp")]),
                      ],
                      1
                    ),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "product__qnt" }, [
                    _c("span", [_vm._v("Số lượng")]),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        on: {
                          click: function ($event) {
                            _vm.quantity--
                          },
                        },
                      },
                      [_vm._v("-")]
                    ),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.quantity,
                          expression: "quantity",
                        },
                      ],
                      attrs: { type: "text", readonly: "" },
                      domProps: { value: _vm.quantity },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.quantity = $event.target.value
                        },
                      },
                    }),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        on: {
                          click: function ($event) {
                            _vm.quantity++
                          },
                        },
                      },
                      [_vm._v("+")]
                    ),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "product__btn-add" }, [
                    _c(
                      "button",
                      {
                        on: {
                          click: function ($event) {
                            return _vm.addToCart(item.id, _vm.quantity)
                          },
                        },
                      },
                      [
                        _vm._v(
                          "\n                        THÊM VÀO GIỎ HÀNG\n                    "
                        ),
                      ]
                    ),
                  ]),
                ]),
                _vm._v(" "),
                _c("b-col", { attrs: { xl: "6" } }),
              ],
              1
            )
          }),
          _vm._v(" "),
          _c("b-row", [
            _c("div", { staticClass: "product__comment" }, [
              _c("header", { staticClass: "comment__header" }, [
                _vm._v("Đánh giá"),
              ]),
              _vm._v(" "),
              _c(
                "form",
                { staticClass: "comment__form", attrs: { action: "#" } },
                [
                  _c("span", [_vm._v("Nhận xét của bạn")]),
                  _vm._v(" "),
                  _c("div", { staticClass: "comment__form-input" }, [
                    _c("textarea", {
                      attrs: {
                        placeholder: "Bạn hãy nhập lời nhắn..",
                        name: "msg",
                        required: "",
                      },
                    }),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "comment__form-submit" }, [
                    _c("input", { attrs: { type: "submit", value: "GỬI" } }),
                  ]),
                ]
              ),
            ]),
          ]),
        ],
        2
      ),
      _vm._v(" "),
      _c("Footer"),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);