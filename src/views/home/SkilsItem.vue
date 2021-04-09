<template>
  <div class="container-skil">
    <div
      class="skil"
      v-if="skil">
      <h4>{{ skil.name }}</h4>
      <progress
        :value="skil.progressCur"
        :max="skil.progressMax"></progress>
    </div>
  </div>
</template>

<script>
  export default {
    name: "SkilsItem",
    props: {
      skil: Object,
    }
  }
</script>

<style lang="less" scoped>
  .container-skil {
    display: block;
    margin: 30px;

    @media (max-width: 540px) {
      margin: 1em;
    }
  }

  .skil {
    background: #e0dfdf;
    display: block;
    height: 80px;
    width: 260px;
    padding: 1px 5px;
    transition: 0.25s;

    > h4 {
      color: #2d586c;
      margin: 10px;
      letter-spacing: 1px;
      font-family: @FFE2SemiBoldItalic;
    }

    > h4:hover {
      color: #4294ac;
    }

    &:hover {
      background: #d0d7d8;
      box-shadow: 0px 0px 5px 1px #9e9595, inset 0px 0px 1px 1px dodgerblue;
    }

    progress {
      box-sizing: content-box;
      display: inline-block;
      height: 8px;
      width: 260px;
      vertical-align: 0;
    }
  }
</style>
