import { useEffect, useState } from "react";
import api from "../utils/Api";
import to from "await-to-js";

import { useNotif } from '../context/NotifContext';

interface Profile {
    uuid: string;
    name: string;
    lastName: string;
    email: string;
    wallet: number;
}

export const ProfileWallet  = () => {

    const [profile, setProfile] = useState<Profile>();

    const notif = useNotif();

    useEffect(() => {
        
        const makeRequestLogin = async () => {
            console.log(`[INFO] makeRequestLogin`);

            const credential = {
                email: "hans.arias74@gmail.com",
                password: "Hans.Arias_1984!"
            }
        
            const url = "/api/v1/login";
        
            const [err, response] = await to(api.post<Profile>(url, credential))
            if (err) {
                console.log(`[ERROR] Login API is failured ${err.message}`);
                notif.error(`You need to contact with admin, there is a any error with the service`);
                return;
            }

            if (!response) {
                console.log(`[WARNING] Login has a response undefined`);
                return;
            }

            console.log(`[INFO] Login credential ${JSON.stringify(response)}`);
            setProfile(response.data);
        }

        makeRequestLogin();

    }, []);

    return (
        <article className="bg-[#82A9D6] p-5 rounded-lg mt-10 w-80 mx-auto py-10">
            <h2 className="text-3xl font-bold text-center text-[#0A1F44]">Hi, {profile?.name}</h2>
            <h1 className="text-7xl text-center font-black mt-3 text-[#0A1F44]">${profile?.wallet}</h1>
            <span className="block text-sm text-center mt-3">(Wallet)</span>
        </article>
    );
}