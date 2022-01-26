<template>
    <div class="form-group">
        <form @submit="saveData" method="post">
                <Formgroup
                 v-for="gp in formData"
                 :key="gp.id"
                 :label="gp.name"
                 :labelValue="gp.value"
                 />
            <div class="form-group">
               <input type="submit" class="form-control btn-block" value="Register Product"/>
           </div>
        </form>
    </div>
</template>

<script>
import Formgroup from './Formgroup.vue'
export default {
    name:"Form",
    components:{
        Formgroup,
    },
    data(){
        return{
            formData:[
                {
                    id:1,
                    name:"Product Name",
                    value:""
                },{
                    id:2,
                    name:"Product Category",
                    value:""
                },{
                    id:1,
                    name:"Price",
                    value:""
                },{
                    id:1,
                    name:"Quantity",
                    value:""
                }
            ]
        }
    },
    methods:{

    }
}
</script>

<style lang="scss" scoped>

</style>
