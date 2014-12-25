jest.dontMock('lodash');
jest.dontMock('../model/scanner');
jest.dontMock('../model/item');
jest.dontMock('../model/cart-item');

describe('Scanner', function(){

  var scanner;

  beforeEach(function(){

    var Scanner = require('../model/scanner');
    scanner = new Scanner();
  });

  describe('#getTagCount()', function(){

    it('should return correct tagCount',function(){

      var result = scanner.getTagCount('6');

      expect(result).toBe(6);
    });
  });

  describe('#scan()', function(){

    it('should return correct cartItem',function(){

      var result = scanner.scan('ITEM000003-2');
      var expectCount = 2;
      var expectName = '荔枝';

      expect(result.count).toBe(expectCount);
      expect(result.item.name).toBe(expectName);
    });
  });

});
