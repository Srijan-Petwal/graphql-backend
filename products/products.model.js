const products=[
        {
            id: 'purpleShirt',
            description:'A Purple Shirt',
            reviews:[],
            price:10.20,
            
        },
        {
            id: 'beigePant',
            description:'A Beige Pant',
            reviews:[],
            price: 19.19
        }
    ]

function getAllProducts(){
    return products;
}
function getProductsByPrice(mini,maxi){
    return products.filter((product)=> product.price>=mini && product.price<=maxi)
}
function getProductById(id){
    return products.filter((product)=>product.id===id)
}
function addNewProduct(id,description,price){
    const newProduct={
        id:id,
        description:description,
        reviews:[],
        price:price
    }
    products.push(newProduct)
    return newProduct;
}
function addNewReview(id,rating,comment){
    const requiredProduct=products.find(product=>id===product.id);
    if(requiredProduct){
    const tempComment=comment?comment:"";
    requiredProduct.reviews.push({
        rating,
        comment:tempComment 
    })
    //console.log(requiredProduct)
    
}
     //don't forget to return the required object if defined so in schema!!
    return requiredProduct; 
}
module.exports={getAllProducts,getProductsByPrice,getProductById,addNewProduct,addNewReview}