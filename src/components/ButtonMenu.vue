<template>
  <button
    v-if="device.mobile()"
    @click="toggleSidebar"
    id="btnMenu"
    class="btn__menu btn__aside"
    type="button"
  >
    <div></div>
    <div></div>
    <div></div>
  </button>
</template>

<script>
  import { mapState } from "vuex";

  export default {
    name: "ButtonMenu",
    mounted() {
      if (this.device.mobile()) {
        this.createBgBackDiv()

        document.querySelector("#sidebarBgBack").addEventListener("click", e => {
          if (e.target) this.toggleSidebar();
        });
      }
    },
    computed: {
      ...mapState({
        device: state => state.device
      })
    },
    methods: {
      toggleSidebar() {
        document.querySelector("body").classList.toggle("visible");
        document.querySelector("#btnMenu").classList.toggle("active");
        document.querySelector("#sidebarBgBack").classList.toggle("visible");
        document.querySelector("#asideSidebarNav").classList.toggle("visible");
      },
      createBgBackDiv() {
        if (!document.querySelector("#sidebarBgBack")) {
          const $divBgBackMenu = document.createElement("div");
          $divBgBackMenu.classList.add("sidebar__bg-back");
          $divBgBackMenu.id = "sidebarBgBack";
          document.body.appendChild($divBgBackMenu);
        }
      },
    },
    beforeDestroy() {
      document.querySelector("#sidebarBgBack").removeEventListener("click");
    }
  };
</script>

<style lang="less" scoped>
  .btn__menu {
    display: block;
    background: none;
    border-radius: 7px;
    border: 2px solid #e0dfdf;
    height: 35px;
    width: 35px;
    position: fixed;
    padding: 0 0.2em;
    bottom: 15px;
    right: 15px;
    transition: 0.15s;
    z-index: 14;

    &.active {
      background-color: #f3f3f3;
      z-index: 15;

      &:hover {
        background-color: #f3f3f3 !important;
      }
    }

    &:hover {
      cursor: pointer;
      background-color: rgba(#d6d6d6, 30%);
      outline: none;
    }

    &:focus {
      border: 2px solid darken(#e0dfdf, 20%);
    }

    > div {
      height: 2px;
      background-color: rgba(#888, 100%);
      border-radius: 5px;
      margin: 0.4em 0;
      pointer-events: none;
    }
  }
</style>
