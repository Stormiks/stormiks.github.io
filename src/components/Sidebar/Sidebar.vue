<template>
  <aside class="wrapper-sidebar">
    <div
      id="sidebarNav"
      class="sidebar-nav">
      <h2 class="animated infinite pulse">Резюме <span>Skylinker</span></h2>

      <SidebarNav></SidebarNav>
    </div>

    <Footer v-if="device.mobile()"/>
  </aside>
</template>

<script>
  import { mapState } from "vuex";
  import SidebarNav from "./SidebarNav";
  import Footer from "components/Footer";

  export default {
    name: "Sidebar",
    components: {
      SidebarNav,
      Footer
    },
    data() {
      return {
        sidebarNav: null,
      };
    },
    computed: {
      ...mapState({
        device: state => state.device,
      }),
    },
    mounted() {
      this.sidebarNav = document.querySelector("#sidebarNav");
      // let portfolioSection = document.querySelector('a[name] ~ .section__inner')

      if (!this.device.mobile())
        window.addEventListener("scroll", this.eventScroll);
    },
    methods: {
      eventScroll(e) {
        e.stopPropagation();

        if (e.type === "scroll")
          this.sidebarNav.style.transform = `translateY(${window.pageYOffset}px)`;

      },
      visibleEl(target) {
        // Все позиции элемента
        let targetPosition = {
          top: window.pageYOffset + target.getBoundingClientRect().top,
          left: window.pageXOffset + target.getBoundingClientRect().left,
          right: window.pageXOffset + target.getBoundingClientRect().right,
          bottom: window.pageYOffset + target.getBoundingClientRect().bottom,
        };
        // Получаем позиции окна
        let windowPosition = {
          top: window.pageYOffset,
          left: window.pageXOffset,
          right: window.pageXOffset + document.documentElement.clientWidth,
          bottom: window.pageYOffset + document.documentElement.clientHeight,
        };

        if (
          targetPosition.bottom > windowPosition.top && // Если позиция нижней части элемента больше позиции верхней чайти окна, то элемент виден сверху
          targetPosition.top < windowPosition.bottom && // Если позиция верхней части элемента меньше позиции нижней чайти окна, то элемент виден снизу
          targetPosition.right > windowPosition.left && // Если позиция правой стороны элемента больше позиции левой части окна, то элемент виден слева
          targetPosition.left < windowPosition.right
        )
          // Если позиция левой стороны элемента меньше позиции правой чайти окна, то элемент виден справа
          // Если элемент полностью видно, то запускаем следующий код
          // console.clear();
          console.log("Вы видите элемент :)");
        else
          // Если элемент не видно, то запускаем этот код
          // console.clear();
          console.log("Вы не видите элемент :)");

      },
    },
    destroyed() {
      if (!this.device.mobile())
        window.removeEventListener("scroll", this.eventScroll);
    },
  };
</script>

<style lang="less" scoped>
  .wrapper {
    &-sidebar {
      background-color: #f3f3f3;
      width: 25%;
      min-width: 160px;

      @media (max-width: 580px) {
        border-bottom: 2px solid #d2cece;
        padding: 5px;
        width: auto;
        text-align: center;
      }

      &.sidebar_mobile {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        position: fixed;
        min-height: calc(100% - 1.2rem);
        height: calc(100vh - 1.2rem);
        z-index: 10;
        transform: translateX(-100%);
        transition: 0.3s;

        &.visible {
          transform: translateX(0);
        }
      }
    }

    &-sidebar,
    &__page {
      border-right: 2px solid #d2cece;
      min-height: 100%;
      padding: 10px;
    }
  }

  .sidebar {
    &-nav {
      width: fit-content;
      transition: all 0.3s;
      transform: translateY(0px);

      h2 {
        font-family: @FFE2Bold;
        font-size: 28pt;
        color: #333333;

        span {
          color: #00b1e4;
        }
      }
    }
  }

  @media (max-width: 580px) {
    .sidebar-nav {
      margin: 0 auto;
    }

    .sidebar-nav h2 {
      margin-top: 5px;
      margin-bottom: 5px;
      font-size: 24pt;
    }
  }
</style>
