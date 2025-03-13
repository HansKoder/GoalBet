import { PartialType } from "@nestjs/swagger";
import { CreateMatchDto } from "./CreateMatch.dto";

export class updateMatchDto extends PartialType(CreateMatchDto) {}