<template>
    <div class="tmpl">
        {{msg}} <br />
        <button @click="aa">点击事件</button>
        <div>
            <span v-if="isok">嘿嘿</span>
        </div>
    </div>
</template>
<script>
    export default{
        //注意点，在.vue中编写的data一定是一个方法，如果是直接在.hmtl中编写可以是一个属性
        data(){
            return {
                msg:'欢迎来到vuejs学习',
                isok:0
            }
        },
        methods:{
            aa(){
                this.isok = !this.isok;
            }
        }
    }
</script>
<style>
    .tmpl{
        color:red;
    }
</style>