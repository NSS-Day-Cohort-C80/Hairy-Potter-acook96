let primaryKey = 1;

export const makePottery = (shape, weight, height) => {
    const pottery = {
        type: shape,
        heft: weight,
        tall: height,
    }
    primaryKey++;
    return pottery
}