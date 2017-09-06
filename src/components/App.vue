<template>
    <div class="tmpl">
        {{msg}}
    </div>
</template>
<script>
    export default{
        //注意点，在.vue中编写的data一定是一个方法，如果是直接在.hmtl中编写可以是一个属性
        data(){
            return {
                msg:'欢迎来到vuejs学习'
            }
        }
    }
</script>
<style>
    .tmpl{
        color:red;
    }
</style>