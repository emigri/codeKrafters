import Wrapper from './Wrapper' 
import ProductCard from './Product-Card';
import ProductDetails from './Product-Details';
import Introduction from './Introduction';
import MeetOurTeam from './MeetOurTeam';
import BasketDetails from './Basket-Details';
import ProductsData from '../Products.json';
console.log(ProductsData)
function Basket () {


        return (
            <>
            <h1>Sample Basket Text</h1>
            <BasketDetails />
            </>
        )
    }
    
export default Basket;