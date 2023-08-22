import { productStore, type Product } from '../stores/product';
import { defineStore } from 'pinia'

export interface Cart extends Product{
    id: number,
    quantity: number
    cost: number
  }

  interface CartStore{
    listCart:Array<Cart>,
    oneCart: Cart,
    total :number
  }

  function initState(): CartStore{
    return {
      listCart: [],
      total: 0,
      oneCart: {
        id: 0,
        quantity: 1,
        cost: 0,
        title: '',
        price: 0,
        description: '',
        category: '',
        image: '',
      },
  }
}

export const cartStore = defineStore('cartStore', {
    state: () => {
      return initState()
    },
    actions:{
    }
},

)
