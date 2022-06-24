"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.deleteUser = exports.updateUser = exports.createUser = exports.getUser = exports.getUsers = void 0;
var utils_1 = require("../utils/utils");
var User = require('../users/user');
var validate_1 = require("../utils/validate");
function getUsers(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var users, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, User.findAll()];
                case 1:
                    users = _a.sent();
                    res.writeHead(200, { 'Content-type': 'application/json' });
                    res.end(JSON.stringify(users));
                    return [3 /*break*/, 3];
                case 2:
                    err_1 = _a.sent();
                    console.log(err_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.getUsers = getUsers;
function getUser(req, res, id) {
    return __awaiter(this, void 0, void 0, function () {
        var valid, user, err_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    valid = (0, validate_1.uuidValidateV4)(id);
                    if (!valid) {
                        res.writeHead(400, { 'Content-type': 'application/json' });
                        res.end(JSON.stringify({ message: '400 - ID is not valid ' }));
                    }
                    return [4 /*yield*/, User.findById(id)];
                case 1:
                    user = _a.sent();
                    if (!user) {
                        res.writeHead(404, { 'Content-type': 'application/json' });
                        res.end(JSON.stringify({ message: '404 - user not found ' }));
                    }
                    else {
                        res.writeHead(200, { 'Content-type': 'application/json' });
                        res.end(JSON.stringify(user));
                    }
                    return [3 /*break*/, 3];
                case 2:
                    err_2 = _a.sent();
                    console.log(err_2);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.getUser = getUser;
function createUser(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var body, _a, name_1, age, hobbies, user, newUser, err_3;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, (0, utils_1.getPostData)(req)];
                case 1:
                    body = _b.sent();
                    _a = JSON.parse(body), name_1 = _a.name, age = _a.age, hobbies = _a.hobbies;
                    if (!name_1 || !age || !hobbies) {
                        res.writeHead(400, { 'Content-type': 'application/json' });
                        res.end(JSON.stringify({ message: '400 - body does not contain required fields' }));
                        return [2 /*return*/];
                    }
                    user = { name: name_1, age: age, hobbies: hobbies };
                    return [4 /*yield*/, User.create(user)];
                case 2:
                    newUser = _b.sent();
                    res.writeHead(201, { 'Content-type': 'application/json' });
                    return [2 /*return*/, res.end(JSON.stringify(newUser))];
                case 3:
                    err_3 = _b.sent();
                    console.log(err_3);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.createUser = createUser;
function updateUser(req, res, id) {
    return __awaiter(this, void 0, void 0, function () {
        var valid, user, body, _a, name_2, age, hobbies, newParams, updateUser_1, _b, _c, _d, _e, err_4;
        return __generator(this, function (_f) {
            switch (_f.label) {
                case 0:
                    _f.trys.push([0, 6, , 7]);
                    valid = (0, validate_1.uuidValidateV4)(id);
                    if (!valid) {
                        res.writeHead(400, { 'Content-type': 'application/json' });
                        res.end(JSON.stringify({ message: '400 - ID is not valid ' }));
                    }
                    return [4 /*yield*/, User.findById(id)];
                case 1:
                    user = _f.sent();
                    if (!!user) return [3 /*break*/, 2];
                    res.writeHead(404, { 'Content-type': 'application/json' });
                    res.end(JSON.stringify({ message: '404 - user not found ' }));
                    return [3 /*break*/, 5];
                case 2: return [4 /*yield*/, (0, utils_1.getPostData)(req)];
                case 3:
                    body = _f.sent();
                    _a = JSON.parse(body), name_2 = _a.name, age = _a.age, hobbies = _a.hobbies;
                    newParams = {
                        name: name_2 || user.name,
                        age: age || user.age,
                        hobbies: hobbies || user.hobbies
                    };
                    updateUser_1 = User.update(newParams, id);
                    res.writeHead(201, { 'Content-type': 'application/json' });
                    _c = (_b = res).end;
                    _e = (_d = JSON).stringify;
                    return [4 /*yield*/, User.findById(id)];
                case 4:
                    _c.apply(_b, [_e.apply(_d, [_f.sent()])]);
                    _f.label = 5;
                case 5: return [3 /*break*/, 7];
                case 6:
                    err_4 = _f.sent();
                    console.log(err_4);
                    return [3 /*break*/, 7];
                case 7: return [2 /*return*/];
            }
        });
    });
}
exports.updateUser = updateUser;
function deleteUser(req, res, id) {
    return __awaiter(this, void 0, void 0, function () {
        var valid, user, err_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    valid = (0, validate_1.uuidValidateV4)(id);
                    if (!valid) {
                        res.writeHead(400, { 'Content-type': 'application/json' });
                        res.end(JSON.stringify({ message: '400 - ID is not valid ' }));
                    }
                    return [4 /*yield*/, User.findById(id)];
                case 1:
                    user = _a.sent();
                    _a.label = 2;
                case 2:
                    _a.trys.push([2, 6, , 7]);
                    if (!!user) return [3 /*break*/, 3];
                    res.writeHead(404, { 'Content-type': 'application/json' });
                    res.end(JSON.stringify({ message: '404 - user not found ' }));
                    return [3 /*break*/, 5];
                case 3: return [4 /*yield*/, User.remove(id)];
                case 4:
                    _a.sent();
                    res.writeHead(204, { 'Content-type': 'application/json' });
                    res.end(JSON.stringify({ message: "product ".concat(id, " has been deleted") }));
                    _a.label = 5;
                case 5: return [3 /*break*/, 7];
                case 6:
                    err_5 = _a.sent();
                    console.log(err_5);
                    return [3 /*break*/, 7];
                case 7: return [2 /*return*/];
            }
        });
    });
}
exports.deleteUser = deleteUser;
