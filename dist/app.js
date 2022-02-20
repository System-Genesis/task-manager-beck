"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const route_1 = __importDefault(require("./route"));
exports.app = (0, express_1.default)();
exports.app.use(express_1.default.json());
exports.app.use((0, morgan_1.default)('dev'));
exports.app.use('/api', route_1.default);
exports.app.use('/isAlive', (_req, res) => {
    res.status(200).send('alive');
});
exports.app.use('*', (_req, res) => {
    res.status(404).send('Invalid Route');
});
exports.default = exports.app;
//# sourceMappingURL=app.js.map