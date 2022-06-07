class Basket {
    items
    // {
    //   "sku": "BGLO",
    //   "price": "0.49",
    //   "name": "Bagel",
    //   "variant": "Onion"
    // },
    // {
    //   "sku": "BGLP",
    //   "price": "0.39",
    //   "name": "Bagel",
    //   "variant": "Plain"
    // },
  
    maxSize
  
    constructor(maxSize = 5) {
      this.items = []
      this.maxSize = maxSize
    }
  
    addToBasket(item) {
      if (this.maxSize === this.items.length) {
        return 'Basket is full!'
      }
      
      if (item) {
        this.items.push(item)
      }
  
      return this.items
    }
  
    addMultipleToBasket (itemsToAdd) {
      if (this.items.length + itemsToAdd.length > this.maxSize) {
        return 'Adding too many items to basket!'
      }
  
      for (let i = 0; i < itemsToAdd.length; i++) {
        this.addToBasket(itemsToAdd[i])
      }
      return this.items
    }
  
    removeFromBasket(item) {
      // const newBasket = []
  
      // for (let i = 0; i < this.items.length; i++) {
      //     if (item.variant !== this.items[i].variant) {
      //         newBasket.push(this.items[i])
      //     }
      // }
  
      // if (this.items.length === newBasket.length) {
      //   return 'Bagel is not in the basket.'
      // }
  
      // this.items = newBasket
      // return this.items
      let itemIndex = -1
      
      for (let i = 0; i < this.items.length; i++) {
        if (item.sku === this.items[i].sku) {
          itemIndex = i
        }
      }
  
      if (itemIndex === -1) {
        return 'Bagel is not in the basket.'
      }
  
      this.items.splice(itemIndex, 1)
  
      return this.items
    }
  
    getTotalPrice () {
      let totalPrice = 0
  
      for (let i = 0; i < this.items.length; i++) {
        totalPrice = totalPrice + Number(this.items[i].price)
      }
  
      return totalPrice
    }
  }
  
  module.exports = Basket