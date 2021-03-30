<template>
    <div class="activity">
        <div class="month-activity">
            <h4>Month</h4>
            <ActivityElem type="month" :daysOrMonths="months" />
        </div>
        <div class="week-activity">
            <h4>Week</h4>
            <ActivityElem type="day" :daysOrMonths="days" />
        </div>
    </div>
</template>

<script>
import ActivityElem from './ActivityElem'

export default {
    name: 'UserActivity',
    components: {
        ActivityElem,
    },
    data() {
        return {
            months: [
                { name: 'jan', val: 60 },
                { name: 'feb', val: 40 },
                { name: 'mar', val: 20 },
                { name: 'apr', val: 50 },
                { name: 'may', val: 70 },
                { name: 'jun', val: 5 },
                { name: 'jul', val: 15 },
                { name: 'aug', val: 90 },
                { name: 'sep', val: 60 },
                { name: 'oct', val: 20 },
                { name: 'nov', val: 40 },
                { name: 'dec', val: 60 }
            ],
            days: [
                { name: 'mon', val: 60 },
                { name: 'tue', val: 40 },
                { name: 'wed', val: 20 },
                { name: 'thu', val: 40 },
                { name: 'fri', val: 50 },
                { name: 'sat', val: 10 },
                { name: 'sun', val: 5 }
            ]
        }
    }
}

</script>

<style lang="scss">
.activity {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0;

    &>div {
        padding: 1.2rem $side-padding;
        display: grid;
        grid-template-rows: min-content auto;
        grid-gap: 0.3rem;
        justify-content: center;

        &:first-child {
            border-right: solid $lightgray 1px;
        }

        &>div {
            display: grid;
            grid-gap: 0.25rem;
            text-align: center;
            height: 100%;

            &>div {
                height: 100%;
                display: grid;
                grid-template-rows: auto min-content;
                grid-gap: 0.4rem;
                align-items: end;
                width: 0.6rem;
            }

            .value {
                background-color: $lightgray;
                height: 1%;
                width: 100%;
                border-radius: $border-radius/2;
            }

            p {
                color: darken($lightgray, 10%);
                font-size: 0.6rem;
                font-weight: bold;
            }
        }

        &.month-activity {
            .month-container {
                grid-template-columns: repeat(12, 1fr);
            }
        }

        &.week-activity {
            .day-container {
                grid-template-columns: repeat(7, min-content);
            }
        }

    }

}
/// ACTIVITY END

</style>