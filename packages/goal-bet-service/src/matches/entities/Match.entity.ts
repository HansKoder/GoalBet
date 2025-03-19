import { StatusMatch } from "../enums/StatusMatch.enum";

export class Match {
    id: number;
    league: string;
    localTeam: string;
    visitingTeam : string;
    dateMatch: Date;
    statusMatch: StatusMatch;
}