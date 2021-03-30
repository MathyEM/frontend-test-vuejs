<template>
  <section class="user-container">
    <BaseInfo />
  </section>
</template>

<script>
import BaseInfo from './components/BaseInfo'

export default {
  name: 'App',
  components: {
    BaseInfo
  },
}
</script>

<style lang="scss">
/// BASE STYLING START
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif
}

div {
  display: inline-block;
}

#app {
  display: block;
}

h4 {
  font-size: 0.75rem;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
  color: $darkgray;
}

h5 {
  font-size: 1rem;
  color: $black;
  font-weight: normal;
}

a {
  text-decoration: none;
  color: $darkgray;
}

a:hover, .value:hover, .item:hover {
  filter: brightness(0.9);
  transition: background-color 100ms;
}
/// BASE STYLING END

// CONTAINER START
.user-container {
  margin: auto;
  margin-top: 10rem;
  max-width: 400px;
  border: $lightgray solid 1px;
  border-radius: $border-radius;
  box-shadow: 0 0 5px 0px rgba(136, 136, 136, 0.1);
  
  display: grid;
  grid-template-rows: 5rem 2rem 8rem minmax(8rem, auto);

  & > :not(div:last-child) {
    border-bottom: lightgray solid 1px;
  }

  .base-info, .category, .activity, .orders {
    padding: $vertical-padding $side-padding;
  }

}

</style>
