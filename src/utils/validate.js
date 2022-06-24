"use strict";
exports.__esModule = true;
exports.isJsonString = exports.bodyValidate = exports.uuidValidateV4 = void 0;
var uuidValidate = require('uuid').validate;
var uuidVersion = require('uuid').version;
var uuidValidateV4 = function (uuid) {
    return uuidValidate(uuid) && uuidVersion(uuid) === 4;
};
exports.uuidValidateV4 = uuidValidateV4;
var bodyValidate = function (body) {
    return false;
};
exports.bodyValidate = bodyValidate;
function isJsonString(str) {
    try {
        JSON.parse(str);
    }
    catch (e) {
        return false;
    }
    return true;
}
exports.isJsonString = isJsonString;
