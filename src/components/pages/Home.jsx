import { useState } from 'react'

import ProductsData from '../Products.json';
import SiteContentData from '../SiteContent.json';

import Slider from './Slider' 
import Wrapper from './Wrapper' 
import ProductCard from './Product-Card';
import ProductDetails from './Product-Details';
import Introduction from './Introduction';
import MeetOurTeam from './MeetOurTeam';


function Home () {

    // Initialise state of the Site Content Data json (single site content object)
    const [siteContent, setSiteContent] = useState(SiteContentData);

    // Initialise state of the Product Data json (array of product objects)
    const [products, setProducts] = useState(ProductsData);
    
    // Initialise state of the "Promoted" Product Data
    const newPromotedProducts = ProductsData.filter((item) => item.promotion === "true");
    const [promotedProducts, setPromotedProducts] = useState(newPromotedProducts);

    // Initialise state of the Selected Product (for display in the Product Details Modal)
    const [selectedProduct, setSelectedProduct] = useState(ProductsData[0]);

    // Initialise the Product Details Modal (popup)
    const [openModal_ProductDetails, setOpenModal_ProductDetails,] = useState(false);

    

    // View Selected Product in the Product Details Modal
    const viewSelectedProduct = (id) => {

        // Set data for the Product Details Modal
        const newSelectedProduct = ProductsData.filter((item) => item.id === id);
        setSelectedProduct(newSelectedProduct[0])

        // Make the Product Details Modal visible
        setOpenModal_ProductDetails(true)
    };


        return (
            // Home Page content
           
            <>
            <div className='m-0 p-0 home'>
                <Slider
                slider_image1={siteContent.slider_image1}
                slider_image2={siteContent.slider_image2} 
                slider_image3={siteContent.slider_image3} 
                slider_image4={siteContent.slider_image4} 
                slider_image5={siteContent.slider_image5} 
                slider_image6={siteContent.slider_image6}
                />

                <Introduction
                our_services={siteContent.our_services}
                our_model={siteContent.our_model} 
                our_prices={siteContent.our_prices} 
                />

                <div className="container my-10">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our current promotions</h2>
                    <p className="mt-4 text-lg leading-8 text-gray-600">Select 'Our Products' from the menu to see all of our products</p>
                </div>
                <Wrapper>
                    {promotedProducts.map((item) => (
                        <ProductCard
                        viewSelectedProduct={viewSelectedProduct}
                        id={item.id}
                        key={item.id}
                        name={item.name}
                        image1={item.image1}
                        description={item.description}
                    />))}
                </Wrapper>    
          
                <ProductDetails 
                    open={openModal_ProductDetails} 
                    onClose={() => setOpenModal_ProductDetails(false)} 

                    id={selectedProduct.id}
                    name={selectedProduct.name}
                    description={selectedProduct.description}
                    features={selectedProduct.features}
                    image1={selectedProduct.image1}
                    image2={selectedProduct.image2}
                    websitePrice={selectedProduct.websitePrice}
                    mobilePrice={selectedProduct.mobilePrice}
                    developmentDays={selectedProduct.developmentDays}
                />
   
                 <MeetOurTeam></MeetOurTeam>
            </div>

            </>
        )
    }
    export default Home;