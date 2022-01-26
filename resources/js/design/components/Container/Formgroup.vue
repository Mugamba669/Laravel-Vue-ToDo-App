<template>
     <div class="form-group">
                <label for="">{{label}}</label>
                 <input type="text" @change="pickData" v-model="labelValue" class="form-control">
            </div>
</template>

<script>
export default {
    name:"Formgroup",
    data(){
        return{
            labelValue:""
        }
    },
    props:{
        label:String,
        value:String
    },
    methods:{
            pickData(){

            this.$emit("sendData",this.labelValue);
        },
        mounted() {
            this.labelValue = this.value;
        },
    },
}
</script>

<style lang="scss" scoped>

</style>
