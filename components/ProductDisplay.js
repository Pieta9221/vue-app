app.component('product-display', {
    props:{
    premium: {
        type: Boolean,
        required: true
        }
    },
   template: 
   /*html*/
   `<div class="product-display">
   <div class="product-container">
     <div class="product-image">
       <!-- image goes here -->
       <img :src="image" :alt="description">
       <!-- <a :href="url">Know More</a> -->
     </div>
     <div class="product-info">
       <h1>{{ title }}</h1>
       <p>{{sale}}</p>
       <!-- <p v-if="inventory > 10">In Stock</p>
       <p v-else-if="inventory <=10 && inventory > 0">Almost out of stock</p>
       <p v-else >Out of Stock</p> -->
       <!-- <p v-if="onSale">On sale</p> -->
       <p v-if="inStock">In Stock</p>
       <p v-else>Out of Stock</p>
       <p>Shipping: {{ shipping}}</p>
       <ul>
         <li v-for="detail in details">{{detail}}</li>
       </ul>
       
       <div 
         v-for="(variant, index) in variants" 
         :key="variant.id" 
         @mouseover="updateVariant(index)" 
         class="color-circle" 
         :style="{ backgroundColor: variant.color }">
       </div>
       <!-- <ul>
         <li v-for="(size, index)" :key="index">{{size}}</li>
       </ul> -->
       <button class="button" :class="{disabledButton: !inStock}" :disabled="!inStock" @click="addToCart">Add to Cart</button>
       <button class="button" :class="{disabledButton: cart == 0}" :disabled="!inStock" @click="removeFromCart" >Remove Item</button>
     </div>
     <review-list v-if="reviews.length":reviews="reviews"></review-list>
      <review-form @review-submitted="addReview"></review-form>
   </div>
 </div>`,
    data(){
        return {
        
            product: 'Socks',
            brand: 'Vue Mastery',
            selectedVariant: 0,
            description: 'A suitable product for the rainy season and beyond',
            // image: './assets/images/socks_blue.jpg',
            url: 'https://google.com',
            // inventory: 10,
            onSale: true,
            // inStock: false,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                {id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50},
                {id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0},
            ],
            sizes: ['L', 'M', 'S'],
            reviews: []
        }
    },
    methods: {
        addToCart(){
            this.$emit('add-to-cart', this.variants[this.selectedVariant].id)
        },
        removeFromCart(){
            this.$emit('remove-from-cart', this.variants[this.selectedVariant].id)
        },
        updateVariant(index){
            this.selectedVariant = index 
        },
        addReview(review){
            this.reviews.push(review)
        }
    },
    computed: {
        title(){
            return this.brand + ' ' + this.product
        },
        image(){
            return this.variants[this.selectedVariant].image
        },
        inStock(){
            return this.variants[this.selectedVariant].quantity
        },
        sale(){
            if(this.onSale){
                return this.brand + ' ' + this.product + ' is on sale.'
            } return ''
        },
        shipping(){
            if(this.premium){
                return 'Free'
            } return 2.99
        }

    }


})