import { expect, test } from "vitest";



import { ROCK, PAPER, SCISSORS, DRAW, WIN, LOSS } from "/app.js";

import { calculateRoundResult,generateComputerMove, calculateNewScores } from "/app.js";

test('draw one' , () => {
    expect (calculateRoundResult(ROCK, ROCK)).toStrictEqual({outcome: DRAW, message: "Both players chose rock. It's a draw." })
})