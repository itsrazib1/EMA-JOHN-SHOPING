import React, { useEffect, useState } from "react";
import { addToDb, getShoppingCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../product/Product";
import "./Shop.css";
const Shop = () => {
  const [products, setProducts] = useState([]);

  const [cart,setCart] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  /*
  useEffect(()=>{
    const storeCart = getShoppingCart();
    // step one get id 
    for (const id in storeCart){
      // step 2 get the product by using id 
      const addedProduct = products.find(product => product.id === id);
      
      // step no 3 get quantity of product 
      const quantity = storeCart[id];
      addedProduct.quantity= quantity
      console.log(addedProduct);
      
    }
  } , [products])
  */

  useEffect(() => {
const storeCart = getShoppingCart();
const savecart = [];
// step 1 
for (const id in storeCart){
  // step-2 get product from product id 
const addedProduct = products.find(product => product.id === id )
if (addedProduct){
  // add quantity 
  const quantity = storeCart[id];
  addedProduct.quantity = quantity;
  savecart.push(addedProduct);
}
console.log('added product',addedProduct)

}
setCart(savecart);
  },[products] )

  const hansleAddToCart = (product) => {
    const newCart = [...cart,product];
    setCart(newCart);
    addToDb(product.id)



  };

  return (
    <div>
      <div className="Shop-container">
        <div className="product-containar">
          {products.map((product) => (
            <Product key={product.id}
            product={product}
            hansleAddToCart = {hansleAddToCart}
             ></Product>
          ))}
          {/* <Product></Product> */}
        </div>
        <div className="cart-container">
         <Cart cart={cart}></Cart>
        </div>
      </div>
    </div>
  );
};

export default Shop;
