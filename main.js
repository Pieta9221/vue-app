const app = Vue.createApp({
    data(){
        return {
            product: 'Boots',
            description: 'A suitable product for the rainy season and beyond',
            image: './assets/images/socks_blue.jpg',
            url: 'https://google.com',
            inStock: true, 
            inventory: 10,
            onSale: true
        }
    }
})
