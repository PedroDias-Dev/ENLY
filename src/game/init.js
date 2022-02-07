import Overworld from "./overworld/Overworld";

(function () {

    const overworld = new Overworld({
      element: document.querySelector(".game-container")
    });
    overworld.init();
  
})();