import { PartialType } from "@nestjs/swagger";
import { CreateBetDto } from "./CreateBet.dto";

export class UpdateBetDto extends PartialType(CreateBetDto) {}