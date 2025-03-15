import { useEffect, useState } from "react"
import { MatchCard } from "./MatchCard";

interface Match {
    id: number;
    league: string;
    localTeam: string;
    visitingTeam : string;
    dateMatch: Date;
}

export const MatchesList = () => {

    const [matches, setMatches] = useState<Match[]>([]);

    useEffect(() => {
        fetch("http://localhost:3000/api/v1/matches/find-all")
        .then((response) => response.json())
        .then((data) => setMatches(data))
        .catch((err) => console.log(`API matches has a error, detail ${err}`))
    }, []);
   
    return (
        <>
            {
                matches.map(item => (
                    <MatchCard 
                        key={item.id}
                        league={item.league}
                        localTeam={item.localTeam}
                        visitingTeam={item.visitingTeam}
                    />
                ))
            }
        </>
    );
}