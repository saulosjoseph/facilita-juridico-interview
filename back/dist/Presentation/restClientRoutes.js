"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const filterClientController_1 = __importDefault(require("./filterClientController"));
const listClientController_1 = __importDefault(require("./listClientController"));
const createClientController_1 = __importDefault(require("./createClientController"));
class RestClientRoutes {
    static start(app) {
        app.get("/filter", filterClientController_1.default);
        app.get("/list", listClientController_1.default);
        app.post("/create", createClientController_1.default);
    }
}
exports.default = RestClientRoutes;
