"use strict";
exports.__esModule = true;
exports.filter = exports.todo = void 0;
var recoil_1 = require("recoil");
exports.todo = (0, recoil_1.atom)({
    key: 'todo',
    "default": []
});
exports.filter = (0, recoil_1.atom)({
    key: 'filter',
    "default": [{
            state: 'all',
            term: ''
        }]
});
