"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BetService = void 0;
const common_1 = require("@nestjs/common");
let BetService = class BetService {
    bets = [];
    idx = -1;
    findAll() {
        return this.bets;
    }
    findOne(id) {
        const find = this.bets.find(bet => bet.id == id);
        if (!find)
            throw new common_1.NotFoundException(`The Bet with the ID ${id} does not found`);
        return find;
    }
    create(payload) {
        this.idx += 1;
        const data = {
            id: this.idx,
            ...payload
        };
        this.bets.push(data);
        return data;
    }
    update(payload, id) {
        const findIndex = this.bets.findIndex(bet => bet.id == id);
        if (findIndex == -1)
            throw new common_1.NotFoundException(`The Bet with the ID ${id} does not found`);
        const old = this.bets[findIndex];
        this.bets[findIndex] = {
            ...payload,
            ...old,
        };
    }
};
exports.BetService = BetService;
exports.BetService = BetService = __decorate([
    (0, common_1.Injectable)()
], BetService);
//# sourceMappingURL=bet.service.js.map