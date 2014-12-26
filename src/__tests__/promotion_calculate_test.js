jest.dontMock('../model/promotion-calculate');
jest.dontMock('../model/item');
jest.dontMock('lodash');

describe('PromotionCalculate', function() {

  describe('.calculatePromotionCount()', function() {

    it('should return correct promotionCount ',function() {

      var PromotionCalculate = require('../model/promotion-calculate');

      var getBarcode = jest.genMockFn();
      getBarcode.mockReturnValue('ITEM000001');

      var getPrice = jest.genMockFn();
      getPrice.mockReturnValue(3.00);

      var cartItem = {
                      item:{
                        barcode: 'ITEM000001',
                        name: '雪碧',
                        unit: '瓶',
                        price: 3.00
                      },
                      count: 3,
                      getBarcode: getBarcode,
                      getPrice: getPrice
                    };

      var promotions = [{
                        type: 'BUY_TWO_GET_ONE_FREE',
                        barcodes: [
                                    'ITEM000000',
                                    'ITEM000001',
                                    'ITEM000005'
                                  ],
                        }];

      var result =
            PromotionCalculate.calculatePromotionCount(cartItem, promotions);

      expect(result).toBe(1);
    });
  });
});
