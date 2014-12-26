jest.dontMock('lodash');
jest.dontMock('../model/item');
jest.dontMock('../model/cart');
jest.dontMock('../model/cart-item');

describe('Cart', function(){

  var cart;
  var cartItem;
  var sameCartItem;

  beforeEach(function(){

    var Cart = require('../model/cart');

    var toInventoryText = jest.genMockFn();
    toInventoryText.mockReturnValue('inventoryText\n');

    var getsameBarcode = jest.genMockFn();
    getsameBarcode.mockReturnValue('ITEM000001');

    cartItem = {
                item:{
                      barcode: 'ITEM000001',
                      name: '雪碧',
                      unit: '瓶',
                      price: 3.00
                     },
                count: 3,
                promotionCount: 0,
                promotionPrice: 0,
                toInventoryText: toInventoryText,
                getBarcode: getsameBarcode
               };
     sameCartItem = {
                     item:{
                           barcode: 'ITEM000001',
                           name: '雪碧',
                           unit: '瓶',
                           price: 3.00
                         },
                     count: 3,
                     promotionCount: 0,
                     promotionPrice: 0,
                     toInventoryText: toInventoryText,
                     getBarcode: getsameBarcode
                   };

    cart = new Cart();
    cart.cartItems = [cartItem,cartItem];


  });

  // describe('#addCartItem', function(){
  //
  //   it('cartItem ',function(){
  //
  //     cart.cartItems = [cartItem,cartItem];
  //
  //     cart.addCartItem(sameCartItem);
  //
  //     expect(sameCartItem.count).toBe(6);
  //
  //   });

  // });

  describe('#getInventoryText', function(){



    it('should return correct inventoryText',function(){

      var result = cart.getInventoryText();

      expect(result).toBe('inventoryText\ninventoryText\n');

    });

  });


});
