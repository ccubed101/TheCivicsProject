"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RegisterModel = /** @class */ (function () {
    // Construction
    function RegisterModel(userName, password, retypePassword, isAdmin) {
        this.userName = userName;
        this.password = password;
        this.retypePassword = retypePassword;
        this.isAdmin = isAdmin;
    }
    Object.defineProperty(RegisterModel.prototype, "UserName", {
        // Property accessors.
        get: function () {
            return this.userName;
        },
        set: function (value) {
            this.userName = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterModel.prototype, "Password", {
        get: function () {
            return this.password;
        },
        set: function (value) {
            this.password = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterModel.prototype, "RetypePassword", {
        get: function () {
            return this.retypePassword;
        },
        set: function (value) {
            this.retypePassword = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterModel.prototype, "IsAdmin", {
        get: function () {
            return this.isAdmin;
        },
        set: function (value) {
            this.isAdmin = value;
        },
        enumerable: true,
        configurable: true
    });
    return RegisterModel;
}());
exports.RegisterModel = RegisterModel;
//# sourceMappingURL=register.model.js.map