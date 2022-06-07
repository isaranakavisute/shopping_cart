(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[137],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/uppack/input.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/uppack/input.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @components/input */ "./resources/js/components/input.vue");
/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/button */ "./resources/js/components/button.vue");
/* harmony import */ var _components_loading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/loading */ "./resources/js/components/loading.vue");
/* harmony import */ var _content_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./content.json */ "./resources/js/pages/uppack/content.json");
var _content_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./content.json */ "./resources/js/pages/uppack/content.json", 1);
/* harmony import */ var _components_clm_vas_tnc_verify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/clm-vas-tnc-verify */ "./resources/js/components/clm-vas-tnc-verify.vue");
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @utils/common */ "./resources/js/utils/common.js");
/* harmony import */ var _store_actions_type__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @store/actions.type */ "./resources/js/store/actions.type.js");
/* harmony import */ var _utils_addon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @utils/addon */ "./resources/js/utils/addon.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: {
    'input-element': _components_input__WEBPACK_IMPORTED_MODULE_0__["default"],
    'button-element': _components_button__WEBPACK_IMPORTED_MODULE_1__["default"],
    'loading-element': _components_loading__WEBPACK_IMPORTED_MODULE_2__["default"],
    'clm-vas-tnc-verify': _components_clm_vas_tnc_verify__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  data: function data() {
    return {
      instantLoading: true,
      loading: true,
      Content: _content_json__WEBPACK_IMPORTED_MODULE_3__,
      inputCustomCSS: {
        fontFamily: 'TrueMedium',
        borderColor: '#c1c1c1',
        lineHeight: '31px',
        fontSize: '26px'
      },
      citizenID: '',
      mobileNo: '',
      isValidMobileNo: true,
      mobileNoErrMsg: 'ขออภัย ท่านใส่หมายเลขเบอร์โทรศัพท์ไม่ถูกต้อง (ใส่ 9 - 10 หลัก)',
      citizenIDErrMsg: 'ขออภัย ท่านใส่หมายเลขบัตรประชาชนไม่ถูกต้อง',
      otp: {
        otpLoading: false,
        otpReceived: false,
        otpError: {},
        value: ''
      },
      errorMessage: '',
      error: false,
      isVerifying: false,
      instantBenefit: {
        banner: {},
        headline: {},
        message: {},
        term: {}
      }
    };
  },
  computed: {
    campId: function campId() {
      var queries = Object.keys(this.$route.query);
      var parameter = Object(_utils_common__WEBPACK_IMPORTED_MODULE_5__["getCLMQueries"])(queries);
      if (!parameter) return '';
      return this.$route.query[parameter];
    },
    completedInput: function completedInput() {
      return this.isValidMobileNo && (this.mobileNo.length === 9 || this.mobileNo.length === 10);
    },
    bannerUrl: function bannerUrl() {
      if (this.instantBenefit && this.instantBenefit.banner) {
        return this.instantBenefit.banner.image;
      } else {
        return '/images/store/banner-true-id-best-deal-best-choice.png';
      }
    }
  },
  watch: {
    mobileNo: function mobileNo(value) {
      this.isValidMobileNo = /^[0-9]{9,10}$/.test(value.toString());
    },
    citizenID: function citizenID(value) {
      this.isValidCitizenID = this.validateCitizenId(value);
    }
  },
  mounted: function mounted() {
    var _this = this;

    this.$store.dispatch(_store_actions_type__WEBPACK_IMPORTED_MODULE_6__["UPDATE_CLM_CAMP_ID"], null);
    this.$store.dispatch(_store_actions_type__WEBPACK_IMPORTED_MODULE_6__["UPDATE_CLM_MOBILE_NO"], null);
    localStorage.removeItem('clm-camp-id');
    localStorage.removeItem('clm-mobile-number');
    localStorage.removeItem('is-clmbundle-campain');
    var campCode = {
      campCode: this.$route.query.campId || this.$route.query.campId
    };
    this.$store.dispatch(_store_actions_type__WEBPACK_IMPORTED_MODULE_6__["GET_INSTANT_BENEFIT"], campCode).then(function (data) {
      var instantBenefitList = data.knowledgeList;
      _this.instantBenefit.banner = instantBenefitList.find(function (item) {
        return item.topic === 'Instant Benefit Banner';
      });
      _this.instantBenefit.headline = instantBenefitList.find(function (item) {
        return item.topic === 'Instant Benefit Headline';
      });
      _this.instantBenefit.message = instantBenefitList.find(function (item) {
        return item.topic === 'Instant Benefit Message';
      });
      _this.instantBenefit.term = instantBenefitList.find(function (item) {
        return item.topic === 'Instant Benefit Term and Conditions';
      });
      _this.instantLoading = false;
    });
  },
  methods: {
    validateNumber: _utils_common__WEBPACK_IMPORTED_MODULE_5__["validateNumber"],
    validateCitizenId: function validateCitizenId(id) {
      if (id.length !== 13) {
        return false;
      }

      var sum = 0;

      for (var i = 0; i < 12; i++) {
        sum += parseFloat(id.charAt(i)) * (13 - i);
      }

      if ((11 - sum % 11) % 10 !== parseFloat(id.charAt(12))) {
        return false;
      }

      return true;
    },
    fetchOtp: function fetchOtp() {
      var _this2 = this;

      this.otp = {
        otpError: {},
        otpReceived: false,
        otpLoading: true
      };
      this.$store.dispatch(_store_actions_type__WEBPACK_IMPORTED_MODULE_6__["FETCH_OTP"], this.mobileNo).then(function (data) {
        if (data.status_code !== 200) throw data.message;
        _this2.otp.otpLoading = false;
        _this2.otp.otpReceived = true;
        _this2.error = false;
        _this2.errorMessage = '';
      })["catch"](function (error) {
        _this2.otp = {
          otpError: error,
          otpReceived: false,
          otpLoading: false
        };
      });
    },
    postVerify: function postVerify() {
      var _this3 = this;

      if (!this.completedInput || !this.campId || !this.otp.value) {
        this.error = true;
        this.errorMessage = _content_json__WEBPACK_IMPORTED_MODULE_3__.error_message.no_campaign_id[this.$i18n.locale];
        return;
      }

      var body = {
        mobile_number: this.mobileNo,
        otp: this.otp.value,
        camp_id: this.campId
      };
      var logData = {
        event: 'Verify CLM uppack',
        status: 'verify',
        type: 'UPPACK',
        selectedCampId: this.campId,
        mobileNumber: this.mobileNo
      };
      Object(_utils_addon__WEBPACK_IMPORTED_MODULE_7__["loggerAddon"])(logData);
      this.isVerifying = true;
      this.$store.dispatch(_store_actions_type__WEBPACK_IMPORTED_MODULE_6__["VERIFY_OTP"], body).then(function (data) {
        _this3.isVerifying = false;

        if (!data.is_pass) {
          _this3.error = true;
          _this3.errorMessage = data.message[_this3.$i18n.locale];
          logData.status = 'fail';
          Object(_utils_addon__WEBPACK_IMPORTED_MODULE_7__["loggerAddon"])(logData);
          throw data.message;
        } else if (data.is_pass) {
          _this3.error = false;
          logData.status = 'success';
          Object(_utils_addon__WEBPACK_IMPORTED_MODULE_7__["loggerAddon"])(logData);
          localStorage.setItem('clm-identity', data.identity);
          localStorage.setItem('clm-camp-id', _this3.campId);
          localStorage.setItem('clm-mobile-number', _this3.mobileNo);

          _this3.$store.dispatch(_store_actions_type__WEBPACK_IMPORTED_MODULE_6__["UPDATE_CLM_CAMP_ID"], _this3.campId);

          _this3.$store.dispatch(_store_actions_type__WEBPACK_IMPORTED_MODULE_6__["UPDATE_CLM_MOBILE_NO"], _this3.mobileNo);

          _this3.$router.push({
            name: 'uppack-step1',
            query: {
              campId: _this3.campId
            }
          });
        }
      })["catch"](function (error) {
        logData.status = 'fail';
        Object(_utils_addon__WEBPACK_IMPORTED_MODULE_7__["loggerAddon"])(logData);
        _this3.isVerifying = false;
        _this3.error = true;
        _this3.errorMessage = error.message[_this3.$i18n.locale];
      });
    },
    showTnC: function showTnC(tnc) {
      this.$refs.tnc.verifytnc = tnc.content;
      this.$refs.tnc.showTermsDialog();
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/uppack/input.vue?vue&type=style&index=0&id=17eac798&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/uppack/input.vue?vue&type=style&index=0&id=17eac798&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".page-container[data-v-17eac798] {\n  position: relative;\n  background-color: #fff;\n  padding-bottom: 36px;\n  max-width: 500px !important;\n  padding-left: 16px;\n  padding-right: 16px;\n}\n.text-center[data-v-17eac798] {\n  text-align: center;\n}\n.title[data-v-17eac798] {\n  font-size: 36px;\n  font-weight: 600;\n  margin-top: 0.8rem;\n}\n.input-title[data-v-17eac798] {\n  font-size: 1.75rem;\n}\n.instant-text[data-v-17eac798] {\n  margin-top: 0.8rem;\n  font-size: 1.75rem;\n}\n.term-text[data-v-17eac798] {\n  font-size: 23px;\n  color: #48baf8;\n  margin-top: 8px;\n  text-decoration: underline;\n  cursor: pointer;\n}\nbutton.disabled[data-v-17eac798] {\n  color: white;\n  background-color: #f2f2f2;\n  cursor: unset;\n}\n.otp-input[data-v-17eac798] {\n  position: relative;\n}\n.otp-input .button[data-v-17eac798] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  transform: translate(-6px, 6px);\n  min-width: -webkit-max-content;\n  min-width: -moz-max-content;\n  min-width: max-content;\n  height: calc(100% - 12px);\n  line-height: 6px;\n  font-size: 18px;\n}\n.banner_container[data-v-17eac798] {\n  margin-bottom: 4rem;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/pages/uppack/style.scss?vue&type=style&index=1&id=17eac798&scoped=true&lang=scss&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./resources/js/pages/uppack/style.scss?vue&type=style&index=1&id=17eac798&scoped=true&lang=scss& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".banner_container[data-v-17eac798] {\n  border-bottom: 6px solid #666;\n}\n.banner_container img[data-v-17eac798] {\n  width: 100%;\n  display: block;\n}\n.page-container[data-v-17eac798] {\n  position: relative;\n  background-color: #fff;\n  padding-bottom: 36px;\n  max-width: 750px;\n  margin: auto;\n}\n.text-center[data-v-17eac798] {\n  text-align: center;\n}\n.my-1[data-v-17eac798] {\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n}\n.my-2[data-v-17eac798] {\n  margin-top: 2rem;\n  margin-bottom: 2rem;\n}\n.mt-1[data-v-17eac798] {\n  margin-top: 1rem;\n}\n.mt-4[data-v-17eac798] {\n  margin-top: 4rem;\n}\n.mt-5[data-v-17eac798] {\n  margin-top: 5rem;\n}\n.ml-1[data-v-17eac798] {\n  margin-left: 1rem;\n}\n.step-container[data-v-17eac798] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-gap: 2rem;\n  justify-content: center;\n  max-width: 450px;\n  margin: 2rem auto;\n}\n.step-container .step[data-v-17eac798] {\n  min-width: unset;\n  max-width: 130px;\n  cursor: unset;\n  line-height: 26px;\n  font-size: 22px;\n  font-weight: bold;\n  justify-self: center;\n  width: 100%;\n}\n.step-container .step.not-reached[data-v-17eac798] {\n  filter: opacity(0.2);\n}\n.step-container .step img[data-v-17eac798] {\n  min-width: 24px;\n  min-height: 32px;\n}\n.font-bold[data-v-17eac798] {\n  font-weight: bold;\n  font-family: TrueBold;\n}\n.personal-info[data-v-17eac798] {\n  font-size: 1.5rem;\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  justify-content: center;\n  text-align: left;\n  max-width: 560px;\n  line-height: 30px;\n  margin: auto;\n}\n.table-header[data-v-17eac798] {\n  width: 100%;\n  padding: 0.5rem 2rem;\n  font-size: 29px;\n  font-weight: bold;\n  line-height: 37px;\n  background-color: rgb(177, 29, 29);\n  color: #fff;\n  text-align: center;\n}\n.table[data-v-17eac798] {\n  width: 100%;\n  font-size: 1.5rem;\n  overflow-x: auto;\n}\n.table table[data-v-17eac798] {\n  border-collapse: collapse;\n  width: 100%;\n}\n.table thead tr[data-v-17eac798] {\n  border: 1px solid #b4b4b4;\n  border-bottom: none;\n  background-color: rgba(180, 180, 180, 0.45);\n}\n.table thead tr th[data-v-17eac798] {\n  padding: 1rem 0.5rem;\n  border-left: 1px solid #b4b4b4;\n  border-right: 1px solid #b4b4b4;\n}\n.table tbody tr[data-v-17eac798] {\n  border: 1px solid #b4b4b4;\n  border-top: none;\n}\n.table tbody tr td[data-v-17eac798] {\n  padding: 1rem;\n  border-left: 1px solid #b4b4b4;\n  border-right: 1px solid #b4b4b4;\n}\n.table .col-header-container[data-v-17eac798] {\n  display: grid;\n  background-color: rgba(180, 180, 180, 0.45);\n  border-left: 1px solid #b4b4b4;\n  border-right: 1px solid #b4b4b4;\n}\n.table .col-header-container .col-header[data-v-17eac798] {\n  padding: 1rem 0.5rem;\n}\n.table .col-header-container .col-header[data-v-17eac798]:not(:last-child) {\n  align-self: center;\n  border-right: 1px solid #b4b4b4;\n}\n.table .row[data-v-17eac798] {\n  display: grid;\n  border-bottom: 1px solid #b4b4b4;\n  border-left: 1px solid #b4b4b4;\n  border-right: 1px solid #b4b4b4;\n}\n.table .row .col[data-v-17eac798] {\n  align-self: center;\n  padding: 1rem;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.table .row .col.flex-col[data-v-17eac798] {\n  flex-direction: column;\n}\n.table .row .col[data-v-17eac798]:not(:last-child) {\n  align-self: center;\n  border-right: 1px solid #b4b4b4;\n}\n.table .highlight[data-v-17eac798] {\n  color: #e02020;\n  font-size: 29px;\n  line-height: 28px;\n  font-weight: 600;\n}\n.table .content[data-v-17eac798] {\n  color: #808080;\n  font-size: 23px;\n  line-height: 23px;\n}\n.grid-row-2[data-v-17eac798] {\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n}\n.grid-row-4[data-v-17eac798] {\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n}\n.grid-row-5[data-v-17eac798] {\n  grid-template-columns: 4fr 2fr 2fr 2fr 3fr;\n}\n.color-red[data-v-17eac798] {\n  color: #e02020;\n}\n.color-lightblue[data-v-17eac798] {\n  color: #0091ff;\n}\n.text-underline[data-v-17eac798] {\n  text-decoration: underline;\n}\n.text-left[data-v-17eac798] {\n  text-align: left;\n}\n.cursor-pointer[data-v-17eac798] {\n  cursor: pointer;\n}\n.min-width-unset[data-v-17eac798] {\n  min-width: unset;\n}\n.min-width-max[data-v-17eac798] {\n  min-width: -webkit-max-content;\n  min-width: -moz-max-content;\n  min-width: max-content;\n}\n.term-cond[data-v-17eac798] {\n  padding: 0.75rem 1rem 1rem 1rem;\n  border: 1px solid rgba(112, 112, 112, 0.3);\n  border-radius: 8px;\n  text-align: left;\n  font-size: 1.5rem;\n  color: #6c6c6c;\n}\n.term-cond .title[data-v-17eac798] {\n  font-weight: 700;\n}\n.term-cond .content[data-v-17eac798] {\n  line-height: 26px;\n  margin-top: 0.75rem;\n}\n.footer-container[data-v-17eac798] {\n  display: none;\n  box-shadow: 0 -4pt 6pt 0 rgba(0, 0, 0, 0.09);\n  background-color: #fff;\n  position: fixed;\n  z-index: 100;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  padding: 1.5rem 1rem;\n}\n.footer-container .footer-actions[data-v-17eac798] {\n  display: grid;\n  grid-gap: 1rem;\n  max-width: 1100px;\n  margin: auto;\n}\n.bottom-actions-container .footer-actions[data-v-17eac798] {\n  display: grid;\n  grid-gap: 1rem;\n  max-width: -webkit-fit-content;\n  max-width: -moz-fit-content;\n  max-width: fit-content;\n  margin: auto;\n}\n.bg-secondary[data-v-17eac798] {\n  background-color: #666666 !important;\n}\n.font-size-2[data-v-17eac798] {\n  font-size: 2rem;\n}\n.success-container[data-v-17eac798] {\n  font-size: 1.5rem;\n}\n.success-icon[data-v-17eac798] {\n  width: 95px;\n  height: 95px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: auto;\n  background: #ffb800;\n  border-radius: 50%;\n  box-shadow: 2px 3px 0px #e7a700;\n  margin-top: 24px;\n}\n.success-icon svg[data-v-17eac798] {\n  fill: #fff;\n  width: 40px;\n  height: 40px;\n}\n.align-items-start[data-v-17eac798] {\n  align-items: flex-start !important;\n}\n.step1-grid-row-2[data-v-17eac798] {\n  grid-template-columns: 1fr 2fr;\n}\n.more-detail[data-v-17eac798] {\n  position: relative;\n  color: #0091ff;\n  text-decoration: underline;\n}\n.more-detail .detail-container[data-v-17eac798] {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  background-color: #ffffff;\n  color: #6c6c6c;\n  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);\n  display: none;\n  line-height: 1.25rem;\n  padding: 1rem;\n  text-align: left;\n  transform: translate(-5%, 100%);\n  width: 380px;\n  max-width: 100vw;\n  word-break: break-word;\n  font-size: 1.25rem;\n  z-index: 20;\n}\n.more-detail .detail-container .topic[data-v-17eac798] {\n  font-weight: bold;\n}\n.more-detail .detail-container[data-v-17eac798]:hover {\n  cursor: auto;\n}\n.more-detail[data-v-17eac798]:hover {\n  cursor: pointer;\n}\n.err-msg[data-v-17eac798] {\n  font-size: 16px;\n  color: #ff0000;\n}\n@media screen and (max-width: 860px) {\n.next-btn[data-v-17eac798] {\n    width: 100%;\n}\n.table-header[data-v-17eac798] {\n    font-size: 24px;\n}\n.table .highlight[data-v-17eac798] {\n    font-size: 24px;\n    line-height: 23px;\n}\n.table .content[data-v-17eac798] {\n    font-size: 20px;\n    line-height: 20px;\n}\n.personal-info[data-v-17eac798] {\n    padding: 0 1rem;\n}\n.footer-container[data-v-17eac798] {\n    display: block;\n}\n.bottom-actions-container[data-v-17eac798] {\n    display: none;\n}\n.step1-grid-row-2[data-v-17eac798] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n}\n.footer-container .footer-actions[data-v-17eac798] {\n    grid-gap: 0.5rem;\n}\n}\n@media screen and (max-width: 480px) {\n.step-container[data-v-17eac798] {\n    grid-gap: 0.5rem;\n}\n}\n@media screen and (max-width: 400px) {\n.personal-info[data-v-17eac798] {\n    display: revert;\n}\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/uppack/input.vue?vue&type=style&index=0&id=17eac798&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/uppack/input.vue?vue&type=style&index=0&id=17eac798&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./input.vue?vue&type=style&index=0&id=17eac798&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/uppack/input.vue?vue&type=style&index=0&id=17eac798&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/pages/uppack/style.scss?vue&type=style&index=1&id=17eac798&scoped=true&lang=scss&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./resources/js/pages/uppack/style.scss?vue&type=style&index=1&id=17eac798&scoped=true&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!./style.scss?vue&type=style&index=1&id=17eac798&scoped=true&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/pages/uppack/style.scss?vue&type=style&index=1&id=17eac798&scoped=true&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/uppack/input.vue?vue&type=template&id=17eac798&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/uppack/input.vue?vue&type=template&id=17eac798&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
    [
      _vm.instantLoading
        ? _c("loading-element")
        : _c(
            "div",
            [
              _c("clm-vas-tnc-verify", { ref: "tnc" }),
              _vm._v(" "),
              _c(
                "a",
                {
                  staticClass: "banner_container",
                  attrs: {
                    href: "https://store.truecorp.co.th/online-store/item/L91693116?utm_source=truestore&utm_medium=web_banner&utm_campaign=trueidtv50thb&utm_content=leveld",
                  },
                },
                [
                  _c("picture", [
                    _c("source", {
                      attrs: {
                        srcset: _vm.bannerUrl,
                        media: "(min-width: 640px)",
                      },
                    }),
                    _vm._v(" "),
                    _c("img", { attrs: { srcset: _vm.bannerUrl } }),
                  ]),
                ]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "page-container text-center" }, [
                _vm.instantBenefit.headline
                  ? _c("div", { staticClass: "instant-text" }, [
                      _vm._v(" " + _vm._s(_vm.instantBenefit.headline.content)),
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _c(
                  "div",
                  [
                    _c("div", { staticClass: "title" }, [
                      _vm._v("กรุณายืนยันตัวตนเพื่อรับสิทธิ์"),
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "my-1" },
                      [
                        _c("div", { staticClass: "input-title" }, [
                          _vm._v("หมายเลขทรูมูฟ เอช ของคุณ"),
                        ]),
                        _vm._v(" "),
                        _c("input-element", {
                          staticClass: "input",
                          attrs: {
                            type: "number",
                            placeholder:
                              _vm.Content.mobile_no.placeholder[
                                _vm.$i18n.locale
                              ],
                            maxlength: "10",
                            inputmode: "numeric",
                            customCSS: _vm.inputCustomCSS,
                          },
                          model: {
                            value: _vm.mobileNo,
                            callback: function ($$v) {
                              _vm.mobileNo = $$v
                            },
                            expression: "mobileNo",
                          },
                        }),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: !_vm.isValidMobileNo,
                                expression: "!isValidMobileNo",
                              },
                            ],
                            staticClass: "err-msg text-left",
                          },
                          [_vm._v(_vm._s(_vm.mobileNoErrMsg))]
                        ),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "button-element",
                      {
                        class:
                          "button " +
                          (!_vm.completedInput ||
                          _vm.otp.otpLoading ||
                          _vm.isVerifying
                            ? "disabled"
                            : ""),
                        attrs: {
                          disabled:
                            !_vm.completedInput ||
                            _vm.otp.otpLoading ||
                            _vm.isVerifying,
                        },
                        on: { click: _vm.fetchOtp },
                      },
                      [
                        _vm._v(
                          "\n          " +
                            _vm._s(_vm.Content.otp.request[_vm.$i18n.locale]) +
                            "\n      "
                        ),
                      ]
                    ),
                    _vm._v(" "),
                    _vm.otp.otpLoading || _vm.isVerifying
                      ? _c("loading-element", { attrs: { fitHeight: "" } })
                      : !_vm.otp.otpLoading && _vm.otp.otpReceived
                      ? _c(
                          "div",
                          { staticClass: "my-2" },
                          [
                            _c("div", { staticClass: "input-title" }, [
                              _vm._v("กรอกรหัส OTP"),
                            ]),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "otp-input" },
                              [
                                _c("input-element", {
                                  staticClass: "input",
                                  attrs: {
                                    type: "number",
                                    inputmode: "numeric",
                                    customCSS: _vm.inputCustomCSS,
                                  },
                                  on: { keydown: _vm.validateNumber },
                                  model: {
                                    value: _vm.otp.value,
                                    callback: function ($$v) {
                                      _vm.$set(_vm.otp, "value", $$v)
                                    },
                                    expression: "otp.value",
                                  },
                                }),
                                _vm._v(" "),
                                _c(
                                  "button-element",
                                  {
                                    class:
                                      "button " +
                                      (!_vm.completedInput ||
                                      _vm.otp.otpLoading ||
                                      _vm.isVerifying
                                        ? "disabled"
                                        : ""),
                                    attrs: {
                                      disabled:
                                        !_vm.completedInput ||
                                        _vm.otp.otpLoading ||
                                        _vm.isVerifying,
                                    },
                                    on: { click: _vm.fetchOtp },
                                  },
                                  [
                                    _vm._v(
                                      "\n            " +
                                        _vm._s(
                                          _vm.Content.otp.resend[
                                            _vm.$i18n.locale
                                          ]
                                        ) +
                                        "\n          "
                                    ),
                                  ]
                                ),
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass: "input-title",
                                staticStyle: { display: "none" },
                              },
                              [_vm._v("REF : CXOLD654")]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                directives: [
                                  {
                                    name: "show",
                                    rawName: "v-show",
                                    value: _vm.error,
                                    expression: "error",
                                  },
                                ],
                                staticClass: "err-msg text-center mt-1",
                              },
                              [_vm._v(_vm._s(_vm.errorMessage))]
                            ),
                            _vm._v(" "),
                            _c(
                              "button-element",
                              {
                                staticClass: "my-1",
                                on: { click: _vm.postVerify },
                              },
                              [
                                _vm._v(
                                  _vm._s(
                                    _vm.Content.otp.confirm[_vm.$i18n.locale]
                                  )
                                ),
                              ]
                            ),
                          ],
                          1
                        )
                      : Object.keys(_vm.otp.otpError).length > 0 &&
                        Object.keys(_vm.otp.otpError.message).length > 0
                      ? _c("div", { staticClass: "err-msg my-1" }, [
                          _vm._v(
                            "\n        " +
                              _vm._s(
                                _vm.otp.otpError.message[_vm.$i18n.locale]
                              ) +
                              "\n      "
                          ),
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _c("router-view"),
                  ],
                  1
                ),
                _vm._v(" "),
                _vm.instantBenefit.message
                  ? _c("div", { staticClass: "instant-text" }, [
                      _vm._v(
                        " " + _vm._s(_vm.instantBenefit.message.content) + " "
                      ),
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm.instantBenefit.term
                  ? _c(
                      "div",
                      {
                        staticClass: "term-text",
                        on: {
                          click: function ($event) {
                            return _vm.showTnC(_vm.instantBenefit.term)
                          },
                        },
                      },
                      [_vm._v(" Term and Conditions ")]
                    )
                  : _vm._e(),
              ]),
            ],
            1
          ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/uppack/content.json":
/*!************************************************!*\
  !*** ./resources/js/pages/uppack/content.json ***!
  \************************************************/
/*! exports provided: thai_id, mobile_no, otp, error_message, packages, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"thai_id\":{\"placeholder\":{\"th\":\"กรอกหมายเลขบัตรประชาชนที่ได้ลงทะเบียนไว้\",\"en\":\"Enter your Thai ID (13 Digits)\"}},\"mobile_no\":{\"placeholder\":{\"th\":\"กรอกเบอร์ติดต่อที่ได้ลงทะเบียนไว้\",\"en\":\"Enter your existing Truemove H mobile number\"}},\"otp\":{\"request\":{\"th\":\"ขอรหัส OTP\",\"en\":\"Request OTP\"},\"resend\":{\"th\":\"ขอรหัสอีกครั้ง\",\"en\":\"Resend OTP\"},\"confirm\":{\"th\":\"ยืนยันรหัส\",\"en\":\"Confirm\"}},\"error_message\":{\"no_campaign_id\":{\"th\":\"ขออภัย คุณไม่สามารถเปลี่ยนแปลงแพ็กเกจ\",\"en\":\"Sorry, This phone number is unable to change promotional package\"}},\"packages\":{\"fix_speed\":{\"th\":\"อินเตอร์เน็ตไม่อั้น|ความเร็วคงที่ \",\"en\":\"Unlimited Fix Speed|\"},\"term_not_found\":{\"th\":\"ขออภัย ไม่พบข้อมูลที่ท่านเลือก\",\"en\":\"Sorry, this price plan detail is not available\"}}}");

/***/ }),

/***/ "./resources/js/pages/uppack/input.vue":
/*!*********************************************!*\
  !*** ./resources/js/pages/uppack/input.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _input_vue_vue_type_template_id_17eac798_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./input.vue?vue&type=template&id=17eac798&scoped=true& */ "./resources/js/pages/uppack/input.vue?vue&type=template&id=17eac798&scoped=true&");
/* harmony import */ var _input_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./input.vue?vue&type=script&lang=js& */ "./resources/js/pages/uppack/input.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _input_vue_vue_type_style_index_0_id_17eac798_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./input.vue?vue&type=style&index=0&id=17eac798&lang=scss&scoped=true& */ "./resources/js/pages/uppack/input.vue?vue&type=style&index=0&id=17eac798&lang=scss&scoped=true&");
/* harmony import */ var _style_scss_vue_type_style_index_1_id_17eac798_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.scss?vue&type=style&index=1&id=17eac798&scoped=true&lang=scss& */ "./resources/js/pages/uppack/style.scss?vue&type=style&index=1&id=17eac798&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");







/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _input_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _input_vue_vue_type_template_id_17eac798_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _input_vue_vue_type_template_id_17eac798_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "17eac798",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/uppack/input.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/uppack/input.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/pages/uppack/input.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_input_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./input.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/uppack/input.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_input_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/uppack/input.vue?vue&type=style&index=0&id=17eac798&lang=scss&scoped=true&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/pages/uppack/input.vue?vue&type=style&index=0&id=17eac798&lang=scss&scoped=true& ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_input_vue_vue_type_style_index_0_id_17eac798_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./input.vue?vue&type=style&index=0&id=17eac798&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/uppack/input.vue?vue&type=style&index=0&id=17eac798&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_input_vue_vue_type_style_index_0_id_17eac798_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_input_vue_vue_type_style_index_0_id_17eac798_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_input_vue_vue_type_style_index_0_id_17eac798_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_input_vue_vue_type_style_index_0_id_17eac798_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/pages/uppack/input.vue?vue&type=template&id=17eac798&scoped=true&":
/*!****************************************************************************************!*\
  !*** ./resources/js/pages/uppack/input.vue?vue&type=template&id=17eac798&scoped=true& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_input_vue_vue_type_template_id_17eac798_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./input.vue?vue&type=template&id=17eac798&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/uppack/input.vue?vue&type=template&id=17eac798&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_input_vue_vue_type_template_id_17eac798_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_input_vue_vue_type_template_id_17eac798_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/uppack/style.scss?vue&type=style&index=1&id=17eac798&scoped=true&lang=scss&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/pages/uppack/style.scss?vue&type=style&index=1&id=17eac798&scoped=true&lang=scss& ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_style_scss_vue_type_style_index_1_id_17eac798_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!./style.scss?vue&type=style&index=1&id=17eac798&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/pages/uppack/style.scss?vue&type=style&index=1&id=17eac798&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_style_scss_vue_type_style_index_1_id_17eac798_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_style_scss_vue_type_style_index_1_id_17eac798_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_style_scss_vue_type_style_index_1_id_17eac798_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_style_scss_vue_type_style_index_1_id_17eac798_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/utils/addon.js":
/*!*************************************!*\
  !*** ./resources/js/utils/addon.js ***!
  \*************************************/
/*! exports provided: updateEntPack, computeAddons, computeAddon, loggerAddon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateEntPack", function() { return updateEntPack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeAddons", function() { return computeAddons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeAddon", function() { return computeAddon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loggerAddon", function() { return loggerAddon; });
/* harmony import */ var _Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var _Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.url-search-params.js */ "./node_modules/core-js/modules/web.url-search-params.js");
/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @store */ "./resources/js/store/index.js");
/* harmony import */ var _store_actions_type__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @store/actions.type */ "./resources/js/store/actions.type.js");








function updateEntPack(_x, _x2, _x3, _x4) {
  return _updateEntPack.apply(this, arguments);
}

function _updateEntPack() {
  _updateEntPack = Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee(matcode, query, product, hash) {
    var inventory,
        data,
        packages,
        _args = arguments;
    return Object(_Users_isaranakavisute_TRUEMOVEH_DEPLOY2_src_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            inventory = _args.length > 4 && _args[4] !== undefined ? _args[4] : {};

            if (query.token) {
              _context.next = 3;
              break;
            }

            return _context.abrupt("return");

          case 3:
            data = {
              cart_hash: hash,
              product_id: product.id,
              inventory_id: inventory.id
            };
            if (inventory.nas) data.nas_code = inventory.nas;

            if (matcode) {
              packages = product.entertainment_packages;

              if (packages.find(function (e) {
                return e.matcode === matcode;
              })) {
                data.matcode = matcode;
              }
            }

            _context.prev = 6;
            _context.next = 9;
            return _store__WEBPACK_IMPORTED_MODULE_6__["default"].dispatch(_store_actions_type__WEBPACK_IMPORTED_MODULE_7__["UPDATE_ENT_PACK"], {
              tmvhAuth: query.token,
              data: data
            });

          case 9:
            _context.next = 14;
            break;

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](6);
            throw new Error('err-ent-pack');

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[6, 11]]);
  }));
  return _updateEntPack.apply(this, arguments);
}

function computeAddons(query, product) {
  var products = [];

  if (query.accs) {
    var accessories = query.accs.split(',');
    if (product.only_one_accessory && accessories.length > 1) return products;
    accessories.forEach(function (accessory) {
      var accs = computeAddon(accessory, 'accessories', product);
      if (accs) products.push(accs);
    });
  }

  return products;
}
function computeAddon(matcode, key, product) {
  var addon = product[key].find(function (e) {
    return e.matcode === matcode;
  });
  return addon ? {
    product_id: addon.product_id,
    inventory_id: addon.inventory_id,
    quantity: 1,
    store_id: addon.store_id,
    section: addon.section || 'wemall',
    channel: 'tmh-website'
  } : false;
}
function loggerAddon(data) {
  try {
    var type = data.type,
        event = data.event,
        _data$status = data.status,
        status = _data$status === void 0 ? '' : _data$status,
        _data$productId = data.productId,
        productId = _data$productId === void 0 ? '' : _data$productId,
        _data$matcode = data.matcode,
        matcode = _data$matcode === void 0 ? '' : _data$matcode,
        _data$quantity = data.quantity,
        quantity = _data$quantity === void 0 ? '' : _data$quantity,
        _data$amount = data.amount,
        amount = _data$amount === void 0 ? '' : _data$amount,
        _data$discount = data.discount,
        discount = _data$discount === void 0 ? '' : _data$discount,
        _data$thaiId = data.thaiId,
        thaiId = _data$thaiId === void 0 ? '' : _data$thaiId,
        _data$circuitId = data.circuitId,
        circuitId = _data$circuitId === void 0 ? '' : _data$circuitId,
        _data$mobileNumber = data.mobileNumber,
        mobileNumber = _data$mobileNumber === void 0 ? '' : _data$mobileNumber,
        _data$tolProductData = data.tolProductData,
        tolProductData = _data$tolProductData === void 0 ? [] : _data$tolProductData,
        _data$tolPrice = data.tolPrice,
        tolPrice = _data$tolPrice === void 0 ? '' : _data$tolPrice,
        _data$tolInvoice = data.tolInvoice,
        tolInvoice = _data$tolInvoice === void 0 ? '' : _data$tolInvoice,
        _data$tolEntryFee = data.tolEntryFee,
        tolEntryFee = _data$tolEntryFee === void 0 ? '' : _data$tolEntryFee,
        _data$tolAddress = data.tolAddress,
        tolAddress = _data$tolAddress === void 0 ? [] : _data$tolAddress,
        _data$tolUserAddress = data.tolUserAddress,
        tolUserAddress = _data$tolUserAddress === void 0 ? [] : _data$tolUserAddress,
        _data$clmPackageData = data.clmPackageData,
        clmPackageData = _data$clmPackageData === void 0 ? [] : _data$clmPackageData,
        _data$addressData = data.addressData,
        addressData = _data$addressData === void 0 ? [] : _data$addressData,
        _data$clmPrice = data.clmPrice,
        clmPrice = _data$clmPrice === void 0 ? '' : _data$clmPrice,
        _data$selectedCampId = data.selectedCampId,
        selectedCampId = _data$selectedCampId === void 0 ? '' : _data$selectedCampId,
        _data$advancePayment = data.advancePayment,
        advancePayment = _data$advancePayment === void 0 ? '' : _data$advancePayment,
        _data$rcDiff = data.rcDiff,
        rcDiff = _data$rcDiff === void 0 ? '' : _data$rcDiff,
        _data$campName = data.campName,
        campName = _data$campName === void 0 ? '' : _data$campName,
        _data$clmName = data.clmName,
        clmName = _data$clmName === void 0 ? '' : _data$clmName,
        _data$vasCode = data.vasCode,
        vasCode = _data$vasCode === void 0 ? '' : _data$vasCode;
    var typhoonGroupType = localStorage.getItem('typhoon-group') || '';
    var campId = localStorage.getItem('clm-camp-id') || '';
    var log = '';
    var queryString = window.location.search;
    var urlParams = new URLSearchParams(queryString);
    var UTM = queryString.includes('utm') ? ['utm_source', 'utm_medium', 'utm_campaign', 'utm_id', 'utm_term', 'utm_content'].map(function (key) {
      return "".concat(key, "=").concat(urlParams.get(key));
    }).join('&') : '';

    switch (type) {
      case 'TOL':
        log = [event, status, tolProductData.join(','), tolPrice, tolInvoice, tolEntryFee, tolAddress.join(','), tolUserAddress.join(','), campId, UTM].join('|');
        break;

      case 'TOLVAS':
        log = [event, status, selectedCampId, vasCode, thaiId, circuitId, clmName, encodeURIComponent(clmPackageData.join(',')), UTM].join('|');
        break;

      case 'TMVHVAS':
        log = [event, status, selectedCampId, clmPrice, mobileNumber, clmName, encodeURIComponent(clmPackageData.join(',')), UTM].join('|');
        break;

      case 'UPPACK':
        log = [event, status, selectedCampId, thaiId, mobileNumber, encodeURIComponent(clmPackageData.join(',')), clmPrice, UTM].join('|');
        break;

      default:
        log = [event, status, productId, matcode, quantity, amount, discount, advancePayment, rcDiff, campId, campName, typhoonGroupType, addressData.join(',') || mobileNumber, UTM].join('|');
        break;
    }

    return _store__WEBPACK_IMPORTED_MODULE_6__["default"].dispatch(_store_actions_type__WEBPACK_IMPORTED_MODULE_7__["UPDATE_LOG"], {
      data: log
    });
  } catch (e) {}
}

/***/ })

}]);