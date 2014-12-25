jest.dontMock('../model/item');

describe('Item', function(){

  describe('.all()', function(){

    it('should return correct information',function(){

      var Item = require('../model/item');

      var result = Item.all();

      var expectBarcode = 'ITEM000000';
      var expectName = '雪碧';
      var expectUnit = '斤';
      var expectPrice = 15.00;

      expect(result[0].barcode).toBe(expectBarcode);
      expect(result[1].name).toBe(expectName);
      expect(result[2].unit).toBe(expectUnit);
      expect(result[3].price).toBe(expectPrice);
    });

  });
});
