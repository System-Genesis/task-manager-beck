"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
require('dotenv').config();
const start = async () => {
    console.log(process.env.PORT);
    app_1.default.listen(process.env.PORT || 3000, () => {
        console.log('Listening on port: ' + process.env.PORT || 3000);
    });
};
start().catch((e) => console.log(e));
//# sourceMappingURL=server.js.map