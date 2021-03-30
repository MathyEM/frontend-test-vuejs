<template>
    <div :class="type + '-container'">
        <div :class="type" v-for="dayOrMonth in daysOrMonths" :key="dayOrMonth.name">
            <div :class="dayOrMonth.name+' value'" :style="'height: ' + dayOrMonth.val + '%;'"></div>
            <p>{{ dayOrMonth.name.slice(0,1) }}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ActivityElem',
        props: {
            daysOrMonths: Array,
            type: String
        }
    }
</script>

<style lang="scss" scoped>
    p {
        text-transform: uppercase;
    }
</style>