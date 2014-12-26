jest.dontMock('lodash');
jest.dontMock('../model/item');
jest.dontMock('../model/cart');
jest.dontMock('../model/cart-item');

describe('Cart', function(){

  // var _;
  var cart;
  var cartItem;
  var sameCartItem;
  var diffCartItem;

  beforeEach(function(){

    // _ = require('lodash');
    var Cart = require('../model/cart');

    var toInventoryText = jest.genMockFn();
    toInventoryText.mockReturnValue('inventoryText\n');

    var toPromotionText = jest.genMockFn();
    toPromotionText.mockReturnValue('PromotionText\n');

    var isPromotion = jest.genMockFn();
    isPromotion.mockReturnValue(true);

    var getsameBarcode = jest.genMockFn();
    getsameBarcode.mockReturnValue('ITEM000001');

    var getdiffBarcode = jest.genMockFn();
    getdiffBarcode.mockReturnValue('ITEM000003');

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
                getBarcode: getsameBarcode,
                toPromotionText: toPromotionText,
                isPromotion: isPromotion
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

     diffCartItem = {
                     item:{
                           barcode: 'ITEM000003',
                           name: '荔枝',
                           unit: '斤',
                           price: 15.00
                     },
                     count: 3,
                    //  promotionCount: 0,
                    //  promotionPrice: 0,
                    //  toInventoryText: toInventoryText,
                     getBarcode: getdiffBarcode
                   };

    cart = new Cart();

    cart.cartItems = [cartItem];

  });

  describe('#addCartItem', function(){

    it('cartItem ',function(){

      var _ = require('lodash');

      cart.addCartItem(sameCartItem);

      var existCartItem = _.find(cart.cartItems, function(cartItem){
        return (cartItem.barcode === sameCartItem.barcode);
      });

      expect(existCartItem.count).toBe(6);

      cart.addCartItem(diffCartItem);

      existCartItem = _.contains(cart.cartItems, diffCartItem);

      expect(existCartItem).toBe(true);

    });

  });

  describe('#getInventoryText', function(){

    it('should return correct inventoryText',function(){

      var result = cart.getInventoryText();

      expect(result).toBe('inventoryText\n');

    });

  });

  describe('#getPromotionText', function(){

    it('should return correct promotionText',function(){

      var result = cart.getPromotionText();

      expect(result).toBe('PromotionText\n');

    });

  });


});
