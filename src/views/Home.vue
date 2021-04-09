<template>
  <main class="main">
    <MyInfo />
    <Skils />
    <Portfolio />
    <Contact />
  </main>
</template>

<script>
  import MyInfo from "p-views/home/MyInfo"
  import Skils from "p-views/home/Skils"
  import Portfolio from "p-views/home/Portfolio"
  import Contact from "p-views/home/Contact"

  export default {
    name: "Home",
    components: {
      MyInfo,
      Skils,
      Portfolio,
      Contact,
    },
    data() {
      return {
        swiperContainer: null,
        instSwiper: null
      }
    },
    mounted() {
    }
  }
</script>

<style lang="less" scoped>
  .swiper-container {
    width: 100%;
    height: calc(100vh - 68px - 55px);
  }
</style>

<style lang="less">
  .main {
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    width: 100%;

    &-container {
      display: flex;
      padding: 15px;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      a {
        color: #0660bd;
        font-size: 18px;
      }

      a:hover {
        text-decoration: underline;
      }
    }

    @media (max-width: 580px) {
      display: block;
    }
  }

  .info-caption {
    color: #444343;
    font-family: @FFE2SemiBoldItalic;
    font-size: 24pt;
    display: flex;
    justify-content: center;
    position: relative;

    span::before {
      content: "";
      border-bottom: 2px solid #229dff;
      position: absolute;
      width: 100%;
      bottom: 0;
    }
  }
</style>
