const Basket = require('../src/basket')
const inventory = require('../inventory.json').inventory

describe('Basket', () => {
  it('adds an item to the basket', () => {
    let basket = new Basket()
    let itemToAdd = inventory[0]

    let items = basket.addToBasket(itemToAdd)
    let addedItem = items[0]

    expect(itemToAdd.sku).toEqual(addedItem.sku)
  })

  it ('cannot add an item if basket is full', () => {
    let basket = new Basket(0)
    let itemToAdd = inventory[0]

    let expectedErrorText = 'Basket is full!'
    let errorFromBasket = basket.addToBasket(itemToAdd)

    expect(errorFromBasket).toEqual(expectedErrorText)
  })

  it ('removes item from the basket', () => {
    let basket = new Basket()
    let itemToRemove = inventory[0]

    let items = basket.addToBasket(itemToRemove)
    expect(items.length).toEqual(1)

    items = basket.removeFromBasket(itemToRemove)
    expect(items.length).toEqual(0)
  })

  it ('cannot remove an item that is not in the basket', () => {
    let basket = new Basket()
    let item = inventory[0]

    let expectedErrorText = 'Bagel is not in the basket.'
    let errorFromBasket = basket.removeFromBasket(item)

    expect(expectedErrorText).toEqual(errorFromBasket)
  })

  it ('add multiple items to the basket', () => {
    let basket = new Basket()
    let firstItem = inventory[0]
    let secondItem = inventory[1]
    let arrayOfItems = [firstItem, secondItem]

    let items = basket.addMultipleToBasket(arrayOfItems)

    expect(items.length).toEqual(2)
    expect(arrayOfItems.length).toEqual(items.length)
  })

  it ('cannot add too many items to a basket', () => {
    let basket = new Basket(1)
    let firstItem = inventory[0]
    let secondItem = inventory[1]
    let arrayOfItems = [firstItem, secondItem]

    let expectedErrorText = 'Adding too many items to basket!'
    let errorFromBasket = basket.addMultipleToBasket(arrayOfItems)

    expect(errorFromBasket).toEqual(expectedErrorText)
  })

  it ('get total price of the basket', () => {
    let basket = new Basket()
    let firstItem = inventory[0]
    let secondItem = inventory[1]
    let arrayOfItems = [firstItem, secondItem]

    basket.addMultipleToBasket(arrayOfItems)
    let totalPrice = basket.getTotalPrice()
    let expectedPrice = Number(firstItem.price) + Number(secondItem.price)

    expect(totalPrice).toEqual(expectedPrice)
  })
})