import { useState } from "react";

export const ClaimBonus = () => {

    const [isOpen, setOpen] = useState<boolean>(false);
    const [isChecked, setIsChecked] = useState(false);

    return (
        <>
            <article className="bg-[#70C265] px-10 py-2 shadow-lg w-80 max-w-md mx-auto rounded-3xl mt-10 text-center">
                <h1 className="text-3xl font-black text-[#18631B] mt-5">
                    Claim your welcome Bonus!
                </h1>

                <p className="mt-4 font-thin text-lg italic">
                    Get <span className="text-green-800 font-extrabold">$10</span> free on your first bet
                </p>

                <button className="mt-3 mb-5 bg-[#18631B] py-3 px-5 text-white font-black rounded-3xl text-2xl"
                    onClick={() => setOpen(true)}>
                    Claim Bonus Now
                </button>
            </article>

            {
                isOpen && (
                    <div className="fixed inset-0 flex items-center justify-center bg-[#0A1F44] bg-opacity-50">
                        <div className="bg-[#70C265] p-4 rounded-lg w-90 md:max-w-sm px-10 py-10">
                            <h2 className="font-black text-4xl text-[#18631B] text-center">Congratulations!</h2>
                            <p className="italic mt-4 text-lg mb-15">
                                You have received a $10 bonus <br />
                                on your first deposit.
                            </p>

                            <h3 className="text-3xl font-black text-[#18631B] underline mb-4">
                                Conditions
                            </h3>

                            <ul>
                                <li className="my-2 text-md text-gray-900">The bonus expires in 30 days</li>
                                <li className="my-2 text-md text-gray-900">The bonus can only be used to be wagered</li>
                            </ul>

                            <div className="mt-5 mb-10">
                                <label className="flex items-center space-x-2 text-md">
                                    <span className="text-gray-800">
                                        Accept Conditions
                                    </span>
                                    <input
                                        type="checkbox"
                                        className="w-8 h-7 accent-green-500 cursor-pointer"
                                        checked={isChecked}
                                        onChange={(e) => setIsChecked(e.target.checked)}
                                    />
                                </label>
                            </div>

                            <button
                                className={`w-full py-2 rounded-lg text-2xl text-white font-black transition-all ${isChecked ? "bg-[#18631B] hover:bg-green-600" : "bg-gray-600 cursor-not-allowed"
                                    }`}
                                disabled={!isChecked}
                            >
                                Claim Bonus
                            </button>
                            <button
                                className="w-full py-2 rounded-lg text-2xl text-[#20201E] font-black transition-all bg-[#FFD700] mt-2"
                                onClick={()=> setOpen(false)}
                            >
                                Maybe Later
                            </button>
                        </div>
                    </div>
                )
            }
        </>
    );
}