import React from "react";

var __html = require('../../game/index.html');
var template = { __html: __html };


const Game = () => {

    return (
        <div dangerouslySetInnerHTML={template} />
    )
}

export default Game;