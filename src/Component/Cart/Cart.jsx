import React from 'react';
import './Cart.css'
const Cart = ({cart}) => {

// console.log(cart)
let total = 0 ;
let TotalShiping = 0 ;
let TaxTotal = 0;
let grandTotal = 0;
let quantity = 0;
for (const product of cart ){
    product.quantity = product.quantity || 1;
total = total + product.price * product.quantity;
TotalShiping = TotalShiping + product.shipping ;
TaxTotal =total/100*7;
grandTotal = total + TotalShiping + TaxTotal;
quantity = quantity + product.quantity;
}

// const {cart} = props;
    return (
        <div className='cartBg'>
             <h4>Order-summary</h4>
          <p>Selected Itme {quantity}</p>
          <p>Total Price: ${total.toFixed(2)}</p>
          <p>Total Shipping Charge: ${TotalShiping.toFixed(2)}</p> 
          <p>Tax: ${TaxTotal.toFixed(2)} </p> 
          <h6>Grand Total: ${grandTotal.toFixed(2)}</h6>
          <button>Clear Cart</button> <br /> <br />
          <button>Review Order</button>
        </div>
    );
};

export default Cart;