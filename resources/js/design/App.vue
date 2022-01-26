<template lang="html">
    <div class="container-fluid">

        <div class="row m-5 p-lg-6">
            <div class="col-md-6">
                <div class="card shadow shadow-lg">
                    <div class="card-header">
                        <div class="card-title">
                               <Header class="center"/>
                         </div>
                    </div>
                    <div class="card-body">
                            <div class="list-group">
                                <p class="list-group-item list-group-horizontal-md list-group-item-light" v-for="(item, index) in fetchTasks"
                                  :key="index">{{item.Item}} ----   {{item.Category}}</p>
                            </div>

                    </div>
                </div>
            </div>

            <div class="col-md-6">
                   <div class="card shadow shadow-lg">
                        <div class="card-body">
                                <Form
                                @refreshTasks="loadTasks"/>
                            </div>
                        </div>
            </div>
        </div>
    </div>
</template>
<script>
import Header from "./components/Header/Header";
import Form from './components/Container/Form';

export default {
    name:"App",
    components:{
        Header,
        Form
    },
    data(){
        return{
            fetchTasks:[]
        }
    },
    methods:{
        loadTasks(){
             axios.get("api/items")
        .then(response => this.fetchTasks = response.data)
        .catch(error => console.log(error))
        }
    },
    created(){
       this.loadTasks();
        // axios.put('api/item/2').then(response => console.log(response.data));
    }
}
</script>
<style lang="scss" scoped>
</style>
