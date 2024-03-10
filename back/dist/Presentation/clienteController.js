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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const webService_1 = __importDefault(require("../Infrastructure/webService"));
const singleTon_1 = __importDefault(require("../Application/singleTon"));
console.log("teste");
webService_1.default.get("/list", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send(singleTon_1.default.getInstance().listClientUseCase.execute());
}));
webService_1.default.post("/create", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const client = req.body;
    res.send(singleTon_1.default.getInstance().createClientUseCase.execute(client));
}));
webService_1.default.get("/teste", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send("teste");
}));
