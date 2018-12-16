"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var PreloadStrategy = /** @class */ (function () {
    function PreloadStrategy() {
    }
    PreloadStrategy.prototype.preload = function (route, load) {
        // The following line is commented out and replaced with the line below it because it is not clear where "of" is defined.
        // It may be that "of" is a keyword that is defined in a more recent version of "rxjs" (>6.0?).  But not sure.
        return route.data && route.data.preload ? load() : rxjs_1.of(null);
        //return route.data && route.data.preload ? load() : new Observable<any>();
    };
    return PreloadStrategy;
}());
exports.PreloadStrategy = PreloadStrategy;
//# sourceMappingURL=preload-strategy.js.map