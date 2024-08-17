"use strict"

const priceData = {
    Apples: '23.4',
    BANANAS: '48',
    oRAngGEs: '48.7584',
};

function optimizer(data) {
    return Object.fromEntries(
        Object.entries(data).map(([key, value]) => [
            key.toLowerCase(),
            parseFloat(value).toFixed(2)
        ])
    );
}

let updatedPriceData = optimizer(priceData);

console.log(updatedPriceData); // {apples: '23.40', bananas: '48.00', oranges: '48.76'}