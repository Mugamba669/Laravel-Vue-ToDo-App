<template>
    <div class="form-group">
        <form @submit="saveData">
                <Formgroup
                 v-for="gp in formData"
                 :key="gp.id"
                 :label="gp.name"
                 @sendData="sentData"
                 />
            <div class="form-group">
               <input type="submit" class="form-control btn-block" value="Add Task"/>
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
            db:[],
            formData:[
                {
                    id:1,
                    name:"Product Name",
                    value:""
                },{
                    id:2,
                    name:"Product Category",
                    value:""
                }
                // },{
                //     id:3,
                //     name:"Price",
                //     value:""
                // },{
                //     id:4,
                //     name:"Quantity",
                //     value:""
                // }
            ]
        }
    },
    methods:{
        sentData(data){
            console.log(data)
            this.db = [...this.db,data];
        },
        saveData(e){
            e.preventDefault();
            var item = {
                name:this.db[0],
                category:this.db[1],
            }
            axios.post("api/item/store",{
                item:item
            }).then(response => {
                    if(response.status == 201){
                            document.querySelector("input[type='text']").value = "";
                            item.name = "";
                            item.category = "";
                    }
            })
            .catch(error => console.log(error));
            // console.log(this.db);
            this.$emit("refreshTasks");
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
