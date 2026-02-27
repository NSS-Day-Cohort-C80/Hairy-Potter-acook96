// Imports go first
import { makePottery } from "./PotteryWheel.js"
import { firePottery } from "./kiln.js"
import { toSellOrNotToSell, usePottery } from "./PotteryCatalog.js"

// Make 5 pieces of pottery at the wheel
let mug = makePottery("mug", 3, 4)
let bowl = makePottery("bowl", 6, 3)
let vase = makePottery("vase", 10, 12)
let plate = makePottery("plate", 4, 1)
let cup = makePottery("cup", 2, 6)
// Fire each piece of pottery in the kiln
const firedMug = firePottery(mug, 2200)
const firedBowl = firePottery(bowl, 2150)
const firedVase = firePottery(vase, 2195)
const firedPlate = firePottery(plate, 2340)
const firedCup = firePottery(cup, 2222)
// Determine which ones should be sold, and their price
toSellOrNotToSell(firedMug)
toSellOrNotToSell(firedBowl)
toSellOrNotToSell(firedVase)
toSellOrNotToSell(firedPlate)
toSellOrNotToSell(firedCup)

let pottery = usePottery()
console.log(pottery)

// Invoke the component function that renders the HTML list

