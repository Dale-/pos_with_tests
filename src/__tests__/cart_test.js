// jest.dontMock('lodash');
// jest.dontMock('../model/item');
// jest.dontMock('../model/cart');
// jest.dontMock('../model/cart-item');
//
// describe('Cart', function(){
//
//   var cart;
//   var item;
//   var cartItem;
//
//   beforeEach(function(){
//
//     var CartItem = require('../model/cart-item');
//
//     var Item = require('../model/item');
//     item = new Item('ITEM000001', '雪碧', '瓶', 3.00);
//
//     cartItem = new CartItem(item, 3);
//     cartItem.promotionCount = 1;
//     cartItem.promotionPrice = 0;
//
//     var Cart = require('../model/cart');
//     cart = new Cart();
//     cart.cartItems = [{
//                       item:item,
//                       count: 5,
//                       promotionCount: 2,
//                       promotionPrice: 0
//                     }];
//
//   });
// 
//   describe('#getInventoryText()', function(){
//
//     it('should return correct inventoryText',function(){
//
//
//       var result = cart.getInventoryText();
//
//       expect(result.count).toBe(7);
//
//     });
//
//   });
// });
