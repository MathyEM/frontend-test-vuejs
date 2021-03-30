<template>
<div class="category">
    <div class="active-in">
        <h4>Active in</h4>
    </div>
    <p>Health Supplements</p>
</div>
</template>

<script>
export default {
    name: 'UserCategory'
}
</script>

<style lang="scss">
    .category {
        display: flex;
        align-items: center;
        background-color: transparentize($green, 0.95);
        padding: 0.5rem 1.3rem;

        .active-in {
            $spacing: 1rem;
            padding-right: $spacing;
            margin-right: $spacing;
            border-right: 1px solid $lightgray;
        }
        p {
            color: $gray;
            font-size: 0.95rem;
        }
    }
</style>