<template>
    <div class="orders">
        <h4>Recent orders</h4>
        <ul class="items">
            <OrderItem v-for="item in orders" :key="item.id" :item="item" />
        </ul>
    </div>
</template>

<script>
import OrderItem from './OrderItem'

export default {
    name: 'UserOrders',
    components: {
        OrderItem,
    },
    data() {
        return {
            orders: [
                {
                    id: 1,
                    name: 'Berkshire Hathaway',
                    status: -1
                },
                {
                    id: 2,
                    name: 'CVS Health Corp',
                    status: 0
                }
            ]
        }
    }
}
</script>

<style lang="scss">
.orders {
    padding: $vertical-padding*3 $side-padding;

    h4 {
        margin-bottom: 0.75rem;
    }

    .items {
        list-style: none;

        .item {
            border: $lightgray solid 1px;
            border-bottom-left-radius: $border-radius;
            border-bottom-right-radius: $border-radius;
            background-color: lighten($lightgray, 10);
            padding: $vertical-padding/2 $vertical-padding;

            display: grid;
            grid-template-columns: 4fr 5fr 1fr;
            align-items: center;

            &:not(:last-child) {
                border-bottom: none;
                border-top-left-radius: $border-radius;
                border-top-right-radius: $border-radius;
                border-bottom-left-radius: 0;
                border-bottom-right-radius: 0;
            }

            .item-name {
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }

            .status, .options {
                justify-self: end;
            }

            .status {
                
                &.needs-approval {
                    color: $red;
                }

                &.pending {
                    color: $blue;
                }
            }

            .options {
                font-size: 1.2rem;
                text-align: center;
                border-radius: $border-radius/2;
                background-color: inherit;
                color: $darkgray;
                cursor: pointer;
            }
        }
    }
}
</style>