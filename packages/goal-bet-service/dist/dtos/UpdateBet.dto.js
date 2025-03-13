"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateBetDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const CreateBet_dto_1 = require("./CreateBet.dto");
class UpdateBetDto extends (0, swagger_1.PartialType)(CreateBet_dto_1.CreateBetDto) {
}
exports.UpdateBetDto = UpdateBetDto;
//# sourceMappingURL=UpdateBet.dto.js.map