const app = Vue.createApp({
    data(){
        return {
            cart: 0,
            product: 'Boots',
            description: 'A suitable product for the rainy season and beyond',
            image: './assets/images/socks_blue.jpg',
            url: 'https://google.com',
            inStock: fals, 
            inventory: 10,
            onSale: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                {id: 2234, color: 'green', image: './assets/images/socks_green.jpg'},
                {id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg'},
            ],
            sizes: ['L', 'M', 'S']
        }
    },
    methods: {
        addToCart(){
            this.cart += 1
        },
        removeFromCart(){
            if (this.cart >= 1) {
                this.cart -= 1
            }
        },
        updateImage(variantImage){
            this.image = variantImage
        }
    }
})
