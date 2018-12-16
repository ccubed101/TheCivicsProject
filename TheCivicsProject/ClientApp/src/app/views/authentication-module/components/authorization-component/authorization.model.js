"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AuthorizationModel = /** @class */ (function () {
    // Construction
    function AuthorizationModel(isAdmin) {
        this.isAdmin = isAdmin;
    }
    Object.defineProperty(AuthorizationModel.prototype, "IsAdmin", {
        // Property accessors.
        get: function () {
            return this.isAdmin;
        },
        set: function (value) {
            this.isAdmin = value;
        },
        enumerable: true,
        configurable: true
    });
    return AuthorizationModel;
}());
exports.AuthorizationModel = AuthorizationModel;
//# sourceMappingURL=authorization.model.js.map