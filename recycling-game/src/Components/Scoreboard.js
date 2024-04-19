import React from "react";

function Scoreboard() {
    return (
        <div className="bg-gray-100 p-4 rounded-lg shadow-md border border-black">
            <h2 className="text-xl font-bold mb-4">Scoreboard</h2>
            <table className="w-full">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="py-2 px-4 text-left">Player</th>
                        <th className="py-2 px-4 text-left">Score</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-white">
                        <td className="py-3 px-4 font-medium">Player 1</td>
                        <td className="py-3 px-4 text-gray-600">100</td>
                    </tr>
                    <tr className="bg-gray-50">
                        <td className="py-3 px-4 font-medium">Player 2</td>
                        <td className="py-3 px-4 text-gray-600">90</td>
                    </tr>
                    {/* Add more players as needed */}
                </tbody>
            </table>
        </div>
    );
}

export default Scoreboard;
