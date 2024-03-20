import { useState, useEffect } from 'react'

// Create a function for basket
function BasketDetails ({items, cartId}){
    const [basketItems, setBasketItems] = useState([]);
    useEffect(()=>{
        // Set basket 
        if (basketItems.lenght === 0) {
            setBasketItems(items);
        } else {
            setBasketItems(basketItems);
        }
    }, [basketItems, items])
    // Total price calculation 
    function calcTotal () {
        return basketItems.reduce((total, item) => total + item.websitePrice * item.quantity, 0)
    }
    // Update quantitiy
    const updateQTY = async(id, nQTY) => {
        // QTY should be at least 1 
        const vQTY = Math.max(nQTY, 1);
        const updatedItems = cartItems.map((item)=>{
            if (item.id === id) {
                return {...item, quantity: vQTY}
            }
            return item;
        })
    }
    // Remove selected item 
    function removeItem() {
        //Remove items when id doesnt match
        const updatedItems = cartItems.filter((item)=>item.id !== id);
        setCartItems(updatedItems);
    }
    // Clear Basket
    function clearBasket() {
        preventDefault();
        setBasketItems(null);
    }
return (
    <>
    <h1>SAMPLE BASKET TEXT</h1>
    <div>Total Price : {calcTotal()}</div>
    <button onClick={clearBasket}>Clear</button>
    <div>
        {basketItems.map((item, index) => (
            <>
            <img src={item.image1} />
            <div>Title : {item.name}</div>
            Description : {item.description}
            <button onClick={()=>removeItem(item.id)}>Remove</button>
            <button onClick={updateQuantity(item.id, item.quantity + 1)}>+</button>
            <button onClick={updateQuantity(item.id, item.quantity - 1)}>-</button>
            <div>Total Price : £{item.websitePrice * item.quantity}</div>
            </>
        ))}
    </div>
    </>
    );
}

export default BasketDetails;