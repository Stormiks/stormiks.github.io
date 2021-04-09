<template>
  <div
    @click.prevent="scrollTop"
    class="buttonUp">
    <button
      class="up"
      title="Наверх">
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 512 512"
        style="enable-background: new 0 0 512 512"
        xml:space="preserve"
      >
        <path
          d="M256,0C114.833,0,0,114.833,0,256s114.833,256,256,256s256-114.853,256-256S397.167,0,256,0z M256,472.341 c-119.275,0-216.341-97.046-216.341-216.341S136.725,39.659,256,39.659c119.295,0,216.341,97.046,216.341,216.341 S375.275,472.341,256,472.341z"
        />
        <path
          d="M369.227,283.365l-99.148-99.148c-7.734-7.694-20.226-7.694-27.96,0l-99.148,99.148c-6.365,7.416-6.365,18.382,0,25.798 c7.119,8.309,19.651,9.28,27.96,2.161L256,226.256l85.267,85.069c7.734,7.694,20.226,7.694,27.96,0 C376.921,303.591,376.921,291.098,369.227,283.365z"
        />
      </svg>
    </button>
  </div>
</template>

<script>
  // import { mapState } from 'vuex';

  export default {
    name: "ButtonUp",
    // computed: {
    // 	...mapState({
    // 		device: state => state.device
    // 	})
    // },
    mounted() {
      // if (this.device.mobile()) {
      $(window).scroll(function () {
        const buttonUp = $(".buttonUp");
        if ($(this).scrollTop() > 200)
          buttonUp.fadeIn(1200);


        if ($(this).scrollTop() < 200) buttonUp.fadeOut(200);
      });
      // }
    },
    methods: {
      scrollTop() {
        $("html, body").animate({ scrollTop: 0 }, 1500);
      },
    },
  };
</script>

<style lang="less" scoped>
  .buttonUp {
    display: none;
    cursor: pointer;
    opacity: 0.4;
    // background-color: #c0dbe7;
    // border: 1px solid #0cc5e6;
    border-radius: 100%;
    box-shadow: 0 0 5px 3px #979494;
    position: fixed; /* Фиксируем элемент*/
    padding: 0;
    bottom: 10px;
    left: 10px;
    z-index: 10; /* Делаем повверх всех элементов */
    transition: 0.3s;

    &:hover {
      // background-color: rgba(#5D8AE2, 70%);
      opacity: 1;
    }

    button {
      text-decoration: none;
      letter-spacing: 2px;
      background: none;
      border: none;
      color: #bfebf7;
      font-family: @FFE2Bold;
      font-weight: bold;
      padding: 5px;
      height: 40px;
      width: 40px;
      display: block;
      font-size: 1rem;

      svg {
        fill: #888;
      }

      &:hover {
        color: #000;
        cursor: pointer;
      }
    }
  }
</style>
