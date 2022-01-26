/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
import "bootstrap/dist/css/bootstrap.min.css";
window.Vue = require("vue").default;
import App from "./design/App.vue";
// import "bootstrap/"
const app = new Vue({
    components:{
        App,
    }
});

app.$mount('#app')
