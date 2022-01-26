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
    },
    methods:{
            pickData(){
            this.$emit("sendData",this.labelValue);
        },
    },
}
</script>

<style lang="scss" scoped>

</style>
