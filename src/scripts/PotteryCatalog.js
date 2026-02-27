const potteryForSale = []

export const toSellOrNotToSell = (piece) => {
    if (piece.cracked === false) {
        if (piece.weight >= 6) {
            piece.price = 40
        }
        if (piece.weight < 6) {
            piece.price = 20
        }
        potteryForSale.push(piece)
    }
    return piece
}

export const usePottery = () => {
    return structuredClone(potteryForSale)
}