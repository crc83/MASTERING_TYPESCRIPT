"use strict";
var array = ["10", "20", "40"];
delete array[1];
for (var i = 0; i < array.length; i++) {
    console.log("array[".concat(i, "] = ").concat(array[i]));
}
//# sourceMappingURL=primitive_types.js.map