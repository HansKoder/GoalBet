"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BetController = void 0;
const common_1 = require("@nestjs/common");
const CreateBet_dto_1 = require("../../dtos/CreateBet.dto");
const bet_service_1 = require("../../services/bet/bet.service");
const parse_int_pipe_1 = require("../../common/parse-int/parse-int.pipe");
const UpdateBet_dto_1 = require("../../dtos/UpdateBet.dto");
let BetController = class BetController {
    betService;
    constructor(betService) {
        this.betService = betService;
    }
    findAll() {
        return this.betService.findAll();
    }
    findOne(id) {
        return this.betService.findOne(id);
    }
    create(payload) {
        return this.betService.create(payload);
    }
    update(payload, id) {
        return this.betService.update(payload, id);
    }
};
exports.BetController = BetController;
__decorate([
    (0, common_1.Get)("find-all"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], BetController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)("find-by-id/:id"),
    (0, common_1.HttpCode)(common_1.HttpStatus.ACCEPTED),
    __param(0, (0, common_1.Param)("id", parse_int_pipe_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], BetController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)("create"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateBet_dto_1.CreateBetDto]),
    __metadata("design:returntype", void 0)
], BetController.prototype, "create", null);
__decorate([
    (0, common_1.Put)("update/:id"),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)("id", parse_int_pipe_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UpdateBet_dto_1.UpdateBetDto, Number]),
    __metadata("design:returntype", void 0)
], BetController.prototype, "update", null);
exports.BetController = BetController = __decorate([
    (0, common_1.Controller)('api/v1/bet/'),
    __metadata("design:paramtypes", [bet_service_1.BetService])
], BetController);
//# sourceMappingURL=bet.controller.js.map