<template>
  <section class="user-container">
    <h1>Hello World</h1>
  </section>
</template>

<script>

export default {
  name: 'App',
  components: {},
}
</script>

<style lang="scss">
/// VARIABLES START
$lightgreen: lighten(rgb(0, 158, 61), 10);
$green: green;
$white: white;
$black: lighten(black, 20%);
$darkgray: darkgray;
$gray: gray;
$lightgray: lighten(lightgray, 6%);
$red: lighten(red, 25%);
$blue: saturate(dodgerblue, 10%);

$vertical-padding: 0.5rem;
$side-padding: 1rem;

$border-radius: 5px;
/// VARIABLES END

/// MIXINS START
@mixin no-select {
  -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
}
/// MIXINS END

/// BASE STYLING START
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif
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

  div {
    display: inline-block;
  }
}

</style>
