import axios from 'axios';
import { defineStore } from 'pinia'

export interface Product{
    id?: number,
    title: string,
    price: number,
    description:string,
    category: string,
    image: string,
}
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ProductItem{

}

interface ProductStore{
  products: Array<Product>,
    one:Product,
    visible: boolean,
    checked: boolean,
    searchQuery: Array<Product>,

}

function initState(): ProductStore{
  return {
    products: [],
    one:{
    title:'',
    image:'',
    price: 0,
    category:'',
    description:''},

    visible: false,
    checked : false,
    searchQuery: [
    ],
  }

}
export const productStore = defineStore('productStore', {
  state: () => {
    return initState()
  },
  actions: {
    async fetchData(){
      await axios
      .get(`https://fakestoreapi.com/products/`)
      .then((response) => {this.products = response.data})
    },
    //fetch each product
    async fetchOne(id:number){
      await axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {this.one = response.data})
    },
    //add products into a array

    async create(one:Product) {
          console.log(one);
        await axios
        .post(`https://fakestoreapi.com/products?limit=5`, one )
        .then( (response) => console.log(response))
        .catch(function (error) {
          console.log(error);
        });
    },

    async delete(id: number){
       await axios.delete(`https://64930abe428c3d2035d13828.mockapi.io/crud/${id}`)
            .catch((error) => console.log(error));

    },
    async update(one:Product){
      await axios.put(`https://64930abe428c3d2035d13828.mockapi.io/crud/${one.id}`,one)
        .catch((error) => console.log(error));
    },


    // async resultQuery() {
    //   if (this.searchQuery) {
    //     return this.products.filter((one) => {
    //       return this.searchQuery
    //         .toString()
    //         .toLowerCase()
    //         .split(" ")
    //         .every((v) => one.title.toLowerCase().includes(v));
    //     });
    //   } else {
    //     return this.products;
    //   }
    // },

  },
})
