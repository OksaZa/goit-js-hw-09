!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,n){o[e]=n},n.parcelRequired7c6=r);var a=r("6JpON");function i(e,n){var t=Math.random()>.3;return new Promise((function(o,r){setTimeout((function(){t?o({position:e,delay:n}):r({position:e,delay:n})}),n)}))}document.querySelector(".form").addEventListener("submit",(function(n){n.preventDefault();for(var t=n.currentTarget.elements,o=t.delay,r=t.step,u=t.amount,l=1;l<=u.value;l+=1){var s=l,f=parseInt(o.value)+(l-1)*parseInt(r.value);if(parseInt(o.value)<0||parseInt(r.value)<0||parseInt(u.value)<=0)return void e(a).Notify.failure("Please enter positive values for delay, step, and amount.");i(s,f).then((function(n){var t=n.position,o=n.delay;e(a).Notify.success("Fulfilled promise ".concat(t," in ").concat(o,"ms"))})).catch((function(n){var t=n.position,o=n.delay;e(a).Notify.failure("Rejected promise ".concat(t," in ").concat(o,"ms"))}))}}))}();
//# sourceMappingURL=03-promises.08f472f7.js.map
