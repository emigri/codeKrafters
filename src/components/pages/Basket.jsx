import { useState, useEffect } from 'react'
import TestProductsData from '../Products.json';


// Create a function for basket
function Basket ({items, cartId}){

    // TEST DATA
    cartId = 1
    const [basketItems, setBasketItems] = useState(TestProductsData);


    // const [basketItems, setBasketItems] = useState([]);
    // useEffect(()=>{
    //     // Set basket 
    //     if (basketItems.lenght === 0) {
    //         setBasketItems(items);
    //     } else {
    //         setBasketItems(basketItems);
    //     }
    // }, [basketItems, items])

    // Total price
    function calcTotal () {
        return basketItems.reduce((total, item) => total + Number(item.websitePrice), 0)
    }

    // Remove selected item 
    function removeItem(id) {
        //Remove items when id doesnt match
        const updatedItems = basketItems.filter((item)=>item.id !== id);
        setBasketItems(updatedItems);
    }
    // Clear Basket
    function clearBasket() {
        setBasketItems([]);
    }


return (
    <div className = "card basket">
        <h1>Your Basket</h1>
        
        <div>
            {basketItems.map((item, i) => (
                <div key={i}> 
                    <div>Title : {item.name}</div>
                    Description : {item.description}
                    <div>Price : £{item.websitePrice.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</div>
                    <button className = "basketButton" onClick={()=>removeItem(item.id)}>Remove</button>
                </div>
            ))}
        </div>
        <div>Total Price : £{calcTotal().toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</div>
        <button className = "basketButton" onClick={clearBasket}>Clear Basket</button>
        <button className = "basketButton">Goto Payment</button>
    </div>
    );
}

export default Basket;