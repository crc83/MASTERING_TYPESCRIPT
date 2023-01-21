"use strict";
var _a;
var array = ["10", "20", "40", null];
delete array[1];
for (var i = 0; i < array.length; i++) {
    console.log("array[".concat(i, "] = ").concat(array[i]));
    console.log("array[".concat(i, "] = ").concat(((_a = array[i]) !== null && _a !== void 0 ? _a : "42")));
}
//# sourceMappingURL=primitive_types.js.map