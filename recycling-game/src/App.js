import React from "react";
import Scoreboard from "./Components/Scoreboard";

function App() {
    return (
        <div className="h-screen flex items-center justify-center bg-gradient-to-r from-green-500 to-blue-500">
            <div className="flex justify-center items-center w-1/2">
                <Scoreboard />
            </div>
        </div>
    );
}

export default App;
