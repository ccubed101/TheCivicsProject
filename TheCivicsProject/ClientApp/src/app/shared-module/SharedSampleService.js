"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SharedSampleService = /** @class */ (function () {
    function SharedSampleService() {
        this.str = "Shared Sample Service";
    }
    Object.defineProperty(SharedSampleService.prototype, "SampleString", {
        get: function () {
            return this.str;
        },
        set: function (s) {
            this.str = s;
        },
        enumerable: true,
        configurable: true
    });
    return SharedSampleService;
}());
exports.SharedSampleService = SharedSampleService;
//# sourceMappingURL=SharedSampleService.js.map