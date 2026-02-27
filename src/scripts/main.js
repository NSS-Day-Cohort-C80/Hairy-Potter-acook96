// Imports go first
import { makePottery } from "./PotteryWheel.js"
import { firePottery } from "./kiln.js"

// Make 5 pieces of pottery at the wheel
let mug = makePottery("mug", 3, 4)
let bowl = makePottery("bowl", 5, 3)
let vase = makePottery("vase", 10, 12)
let plate = makePottery("plate", 4, 1)
let cup = makePottery("cup", 2, 6)
// Fire each piece of pottery in the kiln
firePottery(mug, 2200)
firePottery(bowl, 2150)
firePottery(vase, 2195)
firePottery(plate, 2340)
firePottery(cup, 2222)
console.log(mug, bowl, vase, plate, cup)

// Determine which ones should be sold, and their price


// Invoke the component function that renders the HTML list

