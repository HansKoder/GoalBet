import React from "react";

interface MatchProps {
    league: string;
    localTeam: string;
    visitingTeam : string;
}

export const MatchCard : React.FC<MatchProps> = ({league, localTeam, visitingTeam}) => {

    return (
        <article className="bg-[#F8ECB0] px-10 py-2 shadow-lg w-80 max-w-md mx-auto rounded-3xl mt-10 text-center">
            <span className="text-[#7C6C12] text-2xl font-black block mt-5">
                { localTeam }
            </span>
            
            <span className="text-[#7C6C12] text-1xl font-black block">
                VS
            </span>
            
            <span className="text-[#7C6C12] text-2xl font-black block">
                { visitingTeam }
            </span>

            <span className="text-[#938332] text-sm italic">
                { league }
            </span>

            <button className="bg-[#FFD700] block mt-4 px-5 py-2 rounded-3xl text-black font-black text-2xl mx-auto">
                Bet Now
            </button>
        </article>
    );

}