"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SampleService = /** @class */ (function () {
    function SampleService() {
        this.str = "String from SampleService in src/app/core-module/Sample.service.ts";
    }
    Object.defineProperty(SampleService.prototype, "SampleString", {
        get: function () {
            return this.str;
        },
        set: function (s) {
            this.str = s;
        },
        enumerable: true,
        configurable: true
    });
    return SampleService;
}());
exports.SampleService = SampleService;
//# sourceMappingURL=Sample.service.js.map