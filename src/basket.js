class Basket {
    constructor() {
        this.basket = []
    }
}

addToBasket(item) {
    if (item) {
        this.basket.push(item)
    }
    return this.basket
}

addMultipleToBasket (items) {
    for (let i = 0; i < items.length; i++) {
        this.addToBasket(items[i])
    }
    return this.basket
}

removeFromBasket(item) {
    const newBasket = []
    for (let i = 0; i < this.basket.length; i++) {
        if (item.variant !== this.basket[i].variant) {
            newBasket.push(this.basket[i])
        }
    }
    this.basket = newBasket
    return this.basket
}

module.exports = Basket