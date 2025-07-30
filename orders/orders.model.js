const orders=[
        {
            date:'2012-12-09',
            subtotal:20.22,
            items:[
                {
                    product:{
                        id: 'purpleShirt',
                        description: 'old purple shirt',
                        price: 12.22
                    },
                    quantity:2
                }
            ]
            
        }
    ]

    function getAllOrders(){
        return orders;
    }

module.exports={getAllOrders}