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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientRepository = void 0;
class ClientRepository {
    constructor(db) {
        this.db = db;
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.db.query("SELECT * FROM Clientes");
        });
    }
    create(client) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.db.query("INSERT INTO Clientes (name, email, telefone) VALUES ($1, $2, $3);", [client.name, client.email, client.phone]);
        });
    }
    filter(filter) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.db.query("SELECT * FROM Clientes");
        });
    }
}
exports.ClientRepository = ClientRepository;
