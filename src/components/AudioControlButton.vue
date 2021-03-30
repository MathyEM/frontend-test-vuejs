<template>
    <label :for="name+'-toggle'">
        <input type="checkbox" :name="name+'-toggle'" :id="name+'-toggle'" class="control-toggle">
        <div :class="'control '+name">
            <i :class="iconName"></i>
        </div>
    </label>
</template>

<script>
export default {
    name: 'AudioControlButton',
    props: {
        name: {
            type: String
        },
        iconName: {
            type: String
        }
    }
}
</script>