import questionBank from "./questionBank";
import shuffleArray from "../utils/shuffleArray";

function generateBoard() {

    const shuffled = shuffleArray(questionBank);

    return shuffled.slice(0,25);

}

export default generateBoard;