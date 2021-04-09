<template>
  <div
    class="wrapper"
    :class="{ 'wrapper_mobile': device.mobile() }"
  >
    <Sidebar
      id="asideSidebarNav"
      :class="{ 'sidebar_mobile': device.mobile() }"
    ></Sidebar>

    <section class="wrapper__page">
      <Header />

      <router-view />

      <Footer v-if="!device.mobile()"/>
    </section>
  </div>
</template>

<script>
  import Header from "components/Header";
  import Sidebar from "components/Sidebar/Sidebar";
  import Footer from "components/Footer";
  import { mapState } from 'vuex';

  export default {
    name: "PublicLayout",
    components: {
      Header,
      Sidebar,
      Footer
    },
    computed: {
      ...mapState({
        device: state => state.device
      })
    }
  }
</script>

<style lang="less">
  body.visible {
    overflow: hidden;
  }

  .sidebar__bg-back {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(#000, 60%);
    z-index: 9;

    &.visible {
      display: block;
    }
  }
</style>
<style lang="less" scoped>
  .wrapper {
    position: relative;
    display: flex;
    flex-wrap: nowrap;
    min-height: 100%;

    &__page {
      display: block;
    }

    @media (max-width: 580px) {
      width: auto;
      display: block;
      margin: 0;

      &_mobile {
        box-shadow: 0 0 6px 0 rgba(#000, 70%);
        margin-bottom: 4em;
      }

      &-sidebar,
      &__page {
        border: none;
      }

      &__page {
        margin: 0;
        padding: 10px;
        width: auto;
      }
    }
  }
</style>
