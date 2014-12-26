jest.dontMock('lodash');
jest.dontMock('../model/item');
jest.dontMock('../model/cart');
jest.dontMock('../model/cart-item');

describe('Cart', function(){

  var cart;
  var item;
  var cartItem;

  beforeEach(function(){

    var CartItem = require('../model/cart-item');

    var cartItem = {
                    item:{
                          barcode: 'ITEM000001',
                          name: '雪碧',
                          unit: '瓶',
                          price: 3.00
                    },
                    count: 3,
                    getBarcode : getBarcode,
                    getPrice : getPrice
    };

    cartItem.promotionCount = 1;
    cartItem.promotionPrice = 0;

    var Cart = require('../model/cart');
    cart = new Cart();
    cart.cartItems = [cartItem,cartItem];

  });

  describe('#getInventoryText', function(){

    it('should return correct inventoryText',function(){

      var toInventoryText = jest.genMockFn();
      toInventoryText.mockReturnValue
                   ('名称：雪碧，数量：3瓶，单价：3.00(元)，小计：9.00(元)\n');

      var result = cart.getInventoryText();

      expect(result.count).toBe
            ('名称：雪碧，数量：3瓶，单价：3.00(元)，小计：9.00(元)\n'+
             '名称：雪碧，数量：3瓶，单价：3.00(元)，小计：9.00(元)\n');

    });

  });
});
