jest.dontMock('lodash');
jest.dontMock('../model/util');
jest.dontMock('../model/item');
jest.dontMock('../model/cart');
jest.dontMock('../model/cart-item');
jest.dontMock('../model/promotion-calculate');
jest.dontMock('../model/promotion');

describe('Cart', function(){

  var cart;
  var cartItem;
  var sameCartItem;
  var diffCartItem;

  beforeEach(function(){

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

    var getPrice = jest.genMockFn();
    getPrice.mockReturnValue(3.00);

    var getSubtotal = jest.genMockFn();
    getSubtotal.mockReturnValue(6.00);


    cartItem = {
                item:{
                      barcode: 'ITEM000001',
                      name: '雪碧',
                      unit: '瓶',
                      price: 3.00
                     },
                count: 3,
                promotionCount: 0,
                promotionPrice: 3,
                toInventoryText: toInventoryText,
                getBarcode: getsameBarcode,
                getPrice: getPrice,
                toPromotionText: toPromotionText,
                isPromotion: isPromotion,
                getSubtotal:getSubtotal
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

  describe('#getTotalAmount', function(){

    it('should return correct totalAmount',function(){

      var result = cart.getTotalAmount();

      expect(result).toBe('6.00');

    });

  });

  describe('#getSavingMoney', function(){

    it('should return correct savingMoney',function(){

      var result = cart.getSavingMoney();

      expect(result).toBe('3.00');

    });

  });

  describe('#toString', function(){

    it('should return correct string',function(){

      cartItem.promotionCount = 1;

      var result = cart.toString(cart);

      var moment = require('moment');

      var expectText =
                      '***<没钱赚商店>购物清单***\n' +
                      '打印时间：' + moment().format('YYYY年MM月DD日 HH:mm:ss') +
                      '\n' +
                      '----------------------\n' +
                      'inventoryText\n' +
                      '----------------------\n' +
                      '挥泪赠送商品：\n' +
                      'PromotionText\n' +
                      '----------------------\n' +
                      '总计：6.00(元)\n' +
                      '节省：3.00(元)\n' +
                      '**********************' ;

      expect(result).toBe(expectText);

    });

  });


});
