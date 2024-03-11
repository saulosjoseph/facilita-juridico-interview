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
exports.CreateClientUseCase = void 0;
class CreateClientUseCase {
    constructor(clientRepository) {
        this.clientRepository = clientRepository;
    }
    execute(client) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.clientRepository.create(client);
                return {
                    created: true
                };
            }
            catch (error) {
                console.log(error);
                throw new Error("Error ao criar cliente");
            }
        });
    }
}
exports.CreateClientUseCase = CreateClientUseCase;
