jest.dontMock('../model/promotion');

describe('Promotion', function(){

  describe('.all()', function(){

    it('should return correct promotion information',function(){

      var Promotion = require('../model/promotion');

      var result = Promotion.all();

      var promotionType = 'BUY_TWO_GET_ONE_FREE';
      var promotionBarcode = [
                              'ITEM000000',
                              'ITEM000001',
                              'ITEM000005'
                             ];

      expect(result[0].type).toBe(promotionType);
      expect(result[0].barcodes).toEqual(promotionBarcode);
    });

  });
});
