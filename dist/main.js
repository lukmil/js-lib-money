!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("lodash"),require("bignumber.js")):"function"==typeof define&&define.amd?define(["lodash","bignumber"],e):"object"==typeof exports?exports.PayseraMoney=e(require("lodash"),require("bignumber.js")):t.PayseraMoney=e(t._,t.BigNumber)}("undefined"!=typeof self?self:this,function(t,e){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=2)}([function(e,n){e.exports=t},function(t,n){t.exports=e},function(t,e,n){"use strict";n.r(e);var r=n(0),o={AED:2,AFN:2,ALL:2,AMD:0,ANG:2,AOA:1,ARS:2,AUD:2,AWG:2,AZN:2,BAM:2,BBD:2,BDT:2,BGN:2,BHD:3,BIF:0,BMD:2,BND:2,BOB:2,BRL:2,BSD:2,BTN:2,BWP:2,BYR:0,BYN:2,BZD:2,CAD:2,CDF:2,CHF:2,CLP:0,CNY:2,COP:2,CRC:2,CUP:2,CVE:2,CZK:2,DJF:0,DKK:2,DOP:2,DZD:2,EEK:2,EGP:2,ERN:2,ETB:2,EUR:2,FJD:2,FKP:2,GBP:2,GEL:2,GHS:2,GIP:2,GMD:2,GNF:0,GTQ:2,GYD:2,HKD:2,HNL:2,HRK:2,HTG:2,HUF:2,IDR:0,ILS:2,INR:2,IQD:0,IRR:0,ISK:0,JMD:2,JOD:3,JPY:0,KES:2,KGS:2,KHR:0,KMF:0,KPW:0,KRW:0,KWD:3,KYD:2,KZT:2,LAK:0,LBP:2,LKR:2,LRD:2,LSL:2,LTL:2,LVL:2,LYD:3,MAD:2,MDL:2,MGA:1,MKD:2,MMK:0,MNT:2,MOP:1,MRO:1,MUR:2,MVR:2,MWK:2,MXN:2,MYR:2,MZN:2,NAD:2,NGN:2,NIO:2,NOK:2,NPR:2,NZD:2,OMR:3,PAB:2,PEN:2,PGK:2,PHP:2,PKR:2,PLN:2,PYG:0,QAR:2,RON:2,RSD:2,RUB:2,RUR:2,RWF:0,SAR:2,SBD:2,SCR:2,SDG:2,SEK:2,SGD:2,SHP:2,SLL:0,SOS:2,SRD:2,STD:0,SYP:2,SZL:2,THB:2,TJS:2,TMT:2,TND:3,TOP:2,TRY:2,TTD:2,TWD:1,TZS:2,UAH:2,UGX:0,USD:2,UYU:2,UZS:2,VEF:2,VND:0,VUV:0,WST:2,XAF:0,XCD:2,XOF:0,XPF:0,YER:0,ZAR:2,ZMW:0,ZWL:2};function i(t){function e(){var e=Reflect.construct(t,Array.from(arguments));return Object.setPrototypeOf(e,Object.getPrototypeOf(this)),e}return e.prototype=Object.create(t.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t,e}var u=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,i(Error)),e}();function a(t){function e(){var e=Reflect.construct(t,Array.from(arguments));return Object.setPrototypeOf(e,Object.getPrototypeOf(this)),e}return e.prototype=Object.create(t.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t,e}var c=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,a(Error)),e}();function s(t){function e(){var e=Reflect.construct(t,Array.from(arguments));return Object.setPrototypeOf(e,Object.getPrototypeOf(this)),e}return e.prototype=Object.create(t.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t,e}var l=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,s(Error)),e}();function f(t){function e(){var e=Reflect.construct(t,Array.from(arguments));return Object.setPrototypeOf(e,Object.getPrototypeOf(this)),e}return e.prototype=Object.create(t.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t,e}var h=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,f(Error)),e}(),y=n(1),p=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}();var g={DECIMAL_PLACES:20,FORMAT:{decimalSeparator:".",groupSeparator:",",groupSize:3,secondaryGroupSize:0,fractionGroupSeparator:" ",fractionGroupSize:0}},b=function(t,e,n){return Object.assign({},g,{DECIMAL_PLACES:t,FORMAT:Object.assign({},g.FORMAT,{decimalSeparator:e,groupSeparator:n})})},v=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g.DECIMAL_PLACES,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:g.FORMAT.decimalSeparator,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:g.FORMAT.groupSeparator;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.config=b(e,n,r)}return p(t,[{key:"createBigNumberInstance",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new(y.BigNumber.clone(Object.assign({},this.config,e||{})))(t)}},{key:"add",value:function(t,e){return this.createBigNumberInstance(t).plus(e).toString()}},{key:"sub",value:function(t,e){return this.createBigNumberInstance(t).minus(e).toString()}},{key:"div",value:function(t,e){return this.createBigNumberInstance(t).dividedBy(e).toString()}},{key:"mul",value:function(t,e){return this.createBigNumberInstance(t).multipliedBy(e).toString()}},{key:"abs",value:function(t){return this.createBigNumberInstance(t).absoluteValue().toString()}},{key:"isGt",value:function(t,e){return this.createBigNumberInstance(t).isGreaterThan(e)}},{key:"isGte",value:function(t,e){return this.createBigNumberInstance(t).isGreaterThanOrEqualTo(e)}},{key:"isLt",value:function(t,e){return this.createBigNumberInstance(t).isLessThan(e)}},{key:"isLte",value:function(t,e){return this.createBigNumberInstance(t).isLessThanOrEqualTo(e)}},{key:"isEqual",value:function(t,e){return this.createBigNumberInstance(t).isEqualTo(e)}},{key:"isNegative",value:function(t){return this.createBigNumberInstance(t).isNegative()}},{key:"isZero",value:function(t){return this.createBigNumberInstance(t).isZero()}},{key:"isPositive",value:function(t){return this.createBigNumberInstance(t).isPositive()}},{key:"round",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return this.createBigNumberInstance(t).toFixed(e).toString()}},{key:"ceil",value:function(t,e){return this.createBigNumberInstance(t).toFixed(e,y.BigNumber.ROUND_CEIL).toString()}},{key:"floor",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return this.createBigNumberInstance(t).toFixed(e,y.BigNumber.ROUND_FLOOR).toString()}},{key:"format",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:".",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:",";return this.createBigNumberInstance(t,b(e,n,r)).toFormat(e)}}]),t}(),m=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}();var d=6,O=null,w=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.amount=null,this.currency=null,this.decimalPlaces=null===r?d:r,null!==e&&this.setAmount(e),null!==n&&this.setCurrency(n)}return m(t,[{key:"setAmount",value:function(t){if(""===t||null===t)this.amount=null;else if(Object(r.isNumber)(t))this.amount=t;else{if(!Object(r.isString)(t))throw new l("Amount is neither string nor number: "+t);var e=t.replace(",",".");if(e.split(".").length>2)throw new l("Invalid amount: "+t);if(!e.match(/^[-+]?\d+(\.\d+)?$/))throw new l("Amount has invalid chars: "+t);e=e.replace(/^([-+]?)0+(\d)/,"$1$2"),this.amount=""!==e?e:null}return this}},{key:"getAmount",value:function(){return this.amount}},{key:"getAmountInCents",value:function(){if(null===this.amount)return null;var t=this.getMath().floor(this.getMath().mul(this.amount,Math.pow(10,this.getFraction(this.currency)))),e=parseInt(t,10);if(e.toString()!==t)throw new c("Amount is too large to be returned as integer");return e}},{key:"setCurrency",value:function(t){var e=t.toUpperCase();if(Object(r.isUndefined)(o[e]))throw new h("Unsupported currency: "+t);return this.currency=e,this}},{key:"getCurrency",value:function(){return this.currency}},{key:"add",value:function(e){return this.throwErrorIfNotSameCurrency(e),new t(this.getMath().add(this.getAmount(),e.getAmount()),this.getCurrency())}},{key:"sub",value:function(e){return this.throwErrorIfNotSameCurrency(e),new t(this.getMath().sub(this.getAmount(),e.getAmount()),this.getCurrency())}},{key:"mul",value:function(e){return new t(this.getMath().mul(this.getAmount(),e),this.getCurrency())}},{key:"div",value:function(e){if("0"===e||0===e)throw new c("Division by zero");return new t(this.getMath().div(this.getAmount(),e),this.getCurrency())}},{key:"negate",value:function(){return this.mul(-1)}},{key:"round",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return new t(this.getMath().round(this.getAmount(),this.getCurrencyFraction(this.getCurrency(),e)),this.getCurrency())}},{key:"ceil",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return new t(this.getMath().ceil(this.getAmount(),this.getCurrencyFraction(this.getCurrency(),e)),this.getCurrency())}},{key:"floor",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return new t(this.getMath().floor(this.getAmount(),this.getCurrencyFraction(this.getCurrency(),e)),this.getCurrency())}},{key:"abs",value:function(){return new t(this.getMath().abs(this.getAmount()),this.getCurrency())}},{key:"isGt",value:function(t){return this.throwErrorIfNotSameCurrency(t),this.getMath().isGt(this.getAmount(),t.getAmount())}},{key:"isGte",value:function(t){return this.throwErrorIfNotSameCurrency(t),this.getMath().isGte(this.getAmount(),t.getAmount())}},{key:"isLt",value:function(t){return this.throwErrorIfNotSameCurrency(t),this.getMath().isLt(this.getAmount(),t.getAmount())}},{key:"isLte",value:function(t){return this.throwErrorIfNotSameCurrency(t),this.getMath().isLte(this.getAmount(),t.getAmount())}},{key:"isEqual",value:function(t){return!(!this.isZero()||!t.isZero())||!!this.isSameCurrency(t)&&this.getMath().isEqual(this.getAmount(),t.getAmount())}},{key:"isNegative",value:function(){return this.getMath().isNegative()}},{key:"isZero",value:function(){return this.getMath().isZero(this.getAmount())}},{key:"isPositive",value:function(){return this.getMath().isPositive(this.getAmount())}},{key:"isSameCurrency",value:function(t){return this.getCurrency()===t.getCurrency()}},{key:"formatAmount",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:".",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=this.getCurrencyFraction(this.getCurrency(),t);return this.getMath().format(this.getAmount(),r,null===e?"":e,null===n?"":n)}},{key:"getAsString",value:function(){return this.formatAmount()+" "+this.getCurrency()}},{key:"throwErrorIfNotSameCurrency",value:function(t){if(!this.isSameCurrency(t))throw new u("Operand currency doesn't match (lop_currency="+this.getCurrency()+", rop_currency="+t.getCurrency()+")")}},{key:"getFraction",value:function(t){var e=t.toUpperCase();if(Object(r.isUndefined)(o[e]))throw new h("Given currency doesn't have fraction");return o[e]}},{key:"getCurrencyFraction",value:function(t,e){return null!==e?e:this.getFraction(t)}},{key:"getMath",value:function(){return null===O&&(O=new v(this.decimalPlaces)),O}}],[{key:"createZero",value:function(e){return new t("0",e)}},{key:"create",value:function(){return new t(arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,arguments.length>1&&void 0!==arguments[1]?arguments[1]:null)}}]),t}(),A=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}();var P=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.moneyList={}}return A(t,[{key:"addAll",value:function(t){var e=this;return t.forEach(function(t){e.add(t)}),this}},{key:"add",value:function(t){var e=t.getCurrency(),n=this.get(e);return null===n&&(n=w.createZero(e),this.moneyList[e]=n),this.moneyList[e]=n.add(t),this}},{key:"get",value:function(t){return Object(r.isUndefined)(this.moneyList[t])?null:this.moneyList[t]}},{key:"getAll",value:function(){return Object.values(this.moneyList)}}]),t}();n.d(e,"Money",function(){return w}),n.d(e,"AggregatedMoney",function(){return P})}])});
//# sourceMappingURL=main.js.map
