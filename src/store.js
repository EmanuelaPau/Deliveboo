import { reactive } from 'vue';

export const store = reactive({
    ApiUrl: 'http://127.0.0.1:8000/api/',
    cart_list: [],
    allTypes: [],
    bestRestaurants: [],
});
