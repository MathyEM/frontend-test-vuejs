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
            <AudioControlButton name="deafen" iconName="fas fa-volume-mute" />
            <AudioControlButton name="mute" iconName="fas fa-microphone-slash" />
        </div>
    </div>
</template>

<script>
import ProfilePicture from './ProfilePicture'
import AudioControlButton from './AudioControlButton'

export default {
    name: 'BaseInfo',
    components: {
        ProfilePicture,
        AudioControlButton
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
    /// CONTROLS START
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
    /// CONTROLS END

}
</style>