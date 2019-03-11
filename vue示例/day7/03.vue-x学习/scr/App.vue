<template>
    <div>
        这是一个根组件
        <counter></counter>
        <hr>
        <amount></amount>
    </div>
</template>
<script>
import amount from '../scr/components/Amount.vue'
import counter from '../scr/components/Counter.vue'
export default {
    components:{
        amount,
        counter
    }
}
</script>
<style lang="scss" scoped>

</style>

