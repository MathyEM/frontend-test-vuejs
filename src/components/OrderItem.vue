<template>
    <li :class="'item item-' + item.id">
        <h5 class="item-name">{{ item.name }}</h5>
        <h5 class="status" :class="item.status === -1 ? 'needs-approval' : item.status === 0 ? 'pending' : 'approved'">{{ item.status === -1 ? 'Needs approval' : item.status === 0 ? 'Pending' : 'Approved' }}</h5>
        <div class="control options">&#8942;</div>
    </li>
</template>

<script>
export default {
    name: 'OrderItem',
    props: {
        item: Object,
    }
}
</script>