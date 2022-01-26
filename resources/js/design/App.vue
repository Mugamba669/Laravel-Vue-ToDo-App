<template lang="html">
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-6">
               <Header class="center"/>
            </div>

            <div class="col-md-5">
                   <div class="card">
                        <div class="card-body">
                                <Form/>
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
    }
}
</script>
<style lang="scss" scoped>
</style>
