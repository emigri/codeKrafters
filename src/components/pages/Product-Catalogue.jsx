import { useState } from 'react'

import ProductsData from '../Products.json';
import SiteContentData from '../SiteContent.json';
import Wrapper from './Wrapper' 
import ProductCard from './Product-Card';
import ProductDetails from './Product-Details';

function ProductCatalogue (){
   // Initialise state of the Site Content Data json (single site content object)
   const [siteContent, setSiteContent] = useState(SiteContentData);

   // Initialise state of the Product Data json (array of product objects)
   const [products, setProducts] = useState(ProductsData);

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
        <>
        <Wrapper>
        {products.map((item) => (
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
        </>
    );
}

export default ProductCatalogue;