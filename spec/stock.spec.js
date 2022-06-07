const Stock = require('../src/stock')

describe('Stock', () => {
    it('gets the price of an item', () => {
        const stock = new Stock()
        const expected = {
            sku: 'BGLO',
            price: 0.49
        }
        
        const result = stock.getPrice(expected.sku)
        expect(result).toEqual(expected.price)
    })
})