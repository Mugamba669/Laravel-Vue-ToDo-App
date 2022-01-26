<template>
     <div class="form-group">
                <label for="">{{label}}</label>
                 <input type="text" v-model="labelValue" class="form-control">
     </div>
</template>

<script>
export default {
    name:"Formgroup",
    props:{
        label:String,
        labelValue:String,
    },
    methods:{
         saveData(){

        }
    },
    mounted(){

    }
}
</script>

<style lang="scss" scoped>

</style>
