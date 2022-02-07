import React from "react";

const Game = () => {

    return (
        <div className="game-container">
            <canvas className="game-canvas" width="800" height="600"></canvas>
            <script src="../../game/init.js"></script>
        </div>
    );
}

export default Game;