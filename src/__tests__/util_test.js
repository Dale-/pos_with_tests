jest.dontMock('../model/util');

describe('Util', function(){

  describe('.toFixed', function(){

    it('should return correct promotion num format',function(){

      var Util = require('../model/util');

      var result = Util.toFixed(2.2345);

      expect(result).toBe('2.23');

      // result = Util.toFixed(2.2385);
      //
      // expect(result).toBe('2.23');
    });

  });
});
