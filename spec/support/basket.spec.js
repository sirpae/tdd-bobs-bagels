class Basket {
    constructor() {
        this.basket = []
    }


    addToBasket(item) {
        if (!item) {
            return null
        }
        this.basket.push(item)
        return this.basket
        }

    addMultipleToBasket(items) {
        for (let i = 0; i < items.length; i++) {
            this.addToBasket(items[i])
        }
    }

    removeFromBasket(item) {
        const newBasket = []
        for (let i = 0; 1 < this.basket.length; i++) {
            if (item.variant !== this.basket[i].variant) {
                newBasket.push(this.basket[i])
            }
        }
    this.basket = newBasket
    return this.basket
    }
}