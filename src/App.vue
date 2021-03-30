<template>
  <section class="user-container">
    <BaseInfo />
    <UserCategory />
    <UserActivity />
    <UserOrder />
  </section>
</template>

<script>
import BaseInfo from './components/BaseInfo'
import UserCategory from './components/UserCategory'
import UserActivity from './components/UserActivity'
import UserOrder from './components/UserOrders'

export default {
  name: 'App',
  components: {
    BaseInfo,
    UserCategory,
    UserActivity,
    UserOrder,
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

  .base-info, .category, .orders {
    padding: $vertical-padding $side-padding;
  }

  /// CONTROLS START
  .control {
      @include no-select;

      &:hover {
          $speed: 100ms;
          filter: brightness(0.9);
          box-shadow: inset -1px 1px 3px -2px rgba(0, 0, 0, 70%);
          transition: background-color $speed, box-shadow $speed;
      }

      &:active {
          box-shadow: inset -2px 2px 6px -4px rgba(0, 0, 0, 70%);
      }
  }
  /// CONTROLS END

}
/// CONTAINER END

</style>
