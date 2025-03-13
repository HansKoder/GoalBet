"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchesService = void 0;
const common_1 = require("@nestjs/common");
let MatchesService = class MatchesService {
    id = -1;
    matches = [];
    findAll() {
        return this.matches;
    }
    create(payload) {
        this.id++;
        const entity = {
            id: this.id,
            ...payload
        };
        this.matches.push(entity);
        return entity;
    }
    findOne(id) {
        const find = this.matches.find(m => m.id == id);
        if (!find)
            throw new common_1.NotFoundException(`The match with the ID ${id} is not found`);
        return find;
    }
    update(payload, id) {
        const findIndex = this.matches.findIndex(m => m.id == id);
        if (findIndex == -1)
            throw new common_1.NotFoundException(`The match with the ID ${id} is not found`);
        const old = this.matches[findIndex];
        this.matches[findIndex] = {
            ...old,
            ...payload,
        };
        return this.matches[findIndex];
    }
};
exports.MatchesService = MatchesService;
exports.MatchesService = MatchesService = __decorate([
    (0, common_1.Injectable)()
], MatchesService);
//# sourceMappingURL=matches.service.js.map