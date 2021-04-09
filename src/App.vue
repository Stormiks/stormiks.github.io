<template>
  <div id="app">
    <ButtonUp></ButtonUp>
    <ButtonMenu></ButtonMenu>

    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script>
  import ButtonUp from "components/ButtonUp";
  import ButtonMenu from "components/ButtonMenu";

  export default {
    components: {
      ButtonUp,
      ButtonMenu
    },
    computed: {
      layout() {
        return this.$route.meta.layout
      }
    }
  }
</script>
