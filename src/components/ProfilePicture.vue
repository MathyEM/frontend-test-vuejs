<template>
    <div class="profile-picture">
        <div class="image">
            <span class="user-status"></span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProfilePicture',
}
</script>

<style lang="scss">
.profile-picture {
    display: flex;
    height: 100%;
    width: 100%;

    .image {
        background-color: $gray;
        border-radius: 50%;
        width: 100%;
        align-self: center;
        position: relative;

        &:after {
            content: "";
            display: block;
            padding-bottom: 100%;
        }

        .user-status {
            background-color: $lightgreen;
            border: 0.15rem solid white;
            border-radius: 50%;
            width: 30%;
            align-self: center;
            position: absolute;
            bottom: 0;
            right: 0;

            &:after {
                content: "";
                display: block;
                padding-bottom: 100%;
            }
        }
    }
}
</style>