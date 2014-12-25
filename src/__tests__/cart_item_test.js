jest.dontMock('../model/cart-item');
jest.dontMock('../model/item');

describe('CartItem', function(){

  var cartItem;
  var item;

  beforeEach(function(){

    var CartItem = require('../model/cart-item');
    var Item = require('../model/item');
    item = new Item('ITEM000001', '雪碧', '瓶', 3.00);
    cartItem = new CartItem(item, 3);
    cartItem.promotionCount = 1;
    cartItem.promotionPrice = 0;
  });

  describe('#getBarcode()', function(){

    it('should return correct barcode',function(){

      var result = cartItem.getBarcode();

      expect(result).toBe('ITEM000001');
    });
  });


  describe('#getPrice()', function(){

    it('should return correct price',function(){

      var result = cartItem.getPrice();

      expect(result).toBe(3.00);
    });
  });

  describe('#isPromotion()', function(){

    it('should return correct isPromotion',function(){

      var result = cartItem.isPromotion();

      expect(result).toBe(true);
    });
  });

  describe('#getOriginSubtotal()', function(){

    it('should return correct originSubtotal',function(){

      var result = cartItem.getOriginSubtotal();

      expect(result).toBe(9);
    });
  });

  describe('#getSubtotal()', function(){

    it('should return correct subtotal',function(){

      cartItem.getOriginSubtotal = jest.genMockFn();

      cartItem.getOriginSubtotal.mockReturnValue(9);

      var result = cartItem.getSubtotal();

      expect(result).toBe(9);
    });
  });

  describe('#toPromotionText()', function(){

    it('should return correct promotionText',function(){

      var result = cartItem.toPromotionText();

      expect(result).toBe('名称：雪碧，数量：1瓶\n');
    });
  });

});
