'use strict'; 

let wantsASunday = prompt('Can we make you a sunday?').toLowerCase();

let toppings = ['Hot Fudge'; 'Cherries'; 'Sprinkles'; 'Bubblegum'];

if (wantsASunday == 'yes') {
    alert('Awesome! We have lots of variety!');
    let iceCreamFlavor = prompt('What kind of icecream would you like? We have chocolate, vanilla, and coffee.').toLowerCase();
    
    if(iceCreamFlavor === 'chocolate' || iceCreamFlavor === 'vanilla' || iceCreamFlavor === 'cofee') {
        alert('Perfect! Please choose up to three options from our list of toppings. We have Fudge, Cherries, Spinkles, and Bubblegum');
        let toppingOne = prompt('What would you like for your first topping?').toLowerCase();
        alert(toppingOne + ', great! What else?');
        let toppingTwo = prompt('What would you like for your second topping, in addition to ${toppingOne}?').toLowerCase();
    
    } else {
        alert('Unfortunately we don\'t have that flavor.');
    }

} else {
    alert('OK! Let us know if you change your mind!');
}