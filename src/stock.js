const Inventory = require('../ inventory.json').inventory

class Stock {
    getPrice (sku) {
        const item = Inventory.find((thisSku) => thisSku.sku === sku)
        return Number(item.price)
    }
}

module.exports = Stock