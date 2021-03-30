<template>
    <div class="base-info">
        <ProfilePicture />
        <div class="personal-info">
            <div class="name">
                <h5>Jane Cooper</h5>
            </div>
            <div class="phone">
                <div class="flag">
                    <img title="Sweden" class="CountryFlag" src="https://purecatamphetamine.github.io/country-flag-icons/3x2/SE.svg">
                </div>
                <a href="tel:4065550120">(406)555-120</a>
            </div>
        </div>
        <div class="sound-controls">
            <label for="deafen-toggle">
                <input type="checkbox" name="deafen-toggle" id="deafen-toggle" class="control-toggle">
                <div class="control deafen">
                    <i class="fas fa-volume-mute"></i>
                </div>
            </label>
            <label for="mute-toggle">
                <input type="checkbox" name="mute-toggle" id="mute-toggle" class="control-toggle">
                <div class="control mute">
                    <i class="fas fa-microphone-slash"></i>
                </div>
            </label>
        </div>
    </div>
</template>

<script>
import ProfilePicture from './ProfilePicture'

export default {
    name: 'BaseInfo',
    components: {
        ProfilePicture
    }
}
</script>

<style lang="scss">
.user-container .base-info {
    display: grid;
    grid-template-columns: 2fr 10fr 4fr;
    grid-gap: 0.8rem;

    .personal-info {
        margin: auto;

        .phone {
            .flag img {
                height: 0.7rem;
                margin-right: 0.3rem;
            }
        }
    }

    .sound-controls {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 0;
        align-items: center;
        justify-items: center;

        .control {
            $control-size: 2.2rem;
            color: $gray;
            background-color: $white;
            border: $lightgray solid 1px;
            border-radius: $border-radius;
            height: $control-size;
            width: $control-size;
            display: flex;
            cursor: pointer;

            svg {
                margin: auto;
            }

        }
        
        .control-toggle {
            visibility: hidden;
            position: absolute;

            &:checked ~ .control {
                color: $lightgreen;
                border-color: $lightgreen;
                background-color: transparentize($lightgreen, 0.75);
            }
        }
    }

}
</style>