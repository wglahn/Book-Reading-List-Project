function shoppingCart(action,item,cartArr){
    let newCart = [];

    switch(action){
        case 'add': //add item to cart
            newCart = cartArr
            newCart.splice(newCart.length+1,0,item);
            break;
        case 'delete': //delete one of an item from cart
            newCart = cartArr
            let pos = newCart.indexOf(item);
            newCart.splice(pos,1)
            break;
        case 'delete_all': //delete all of an item from cart
            newCart = cartArr.filter(cartItem => cartItem.id != item.id);
            break;
        case 'clear': //delete all items from cart
            // do nothing
    }

    return newCart;
}

let cartArr = [{'id':1},{'id':2},{'id':3},{'id':2}];
let item = cartArr[1]

// console.log(shoppingCart('add',{id:2},cartArr));
// console.log(shoppingCart('delete',item,cartArr));
// console.log(shoppingCart('delete_all',item,cartArr));
// console.log(shoppingCart('clear',{'id':1},cartArr));