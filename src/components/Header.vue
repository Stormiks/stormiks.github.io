<template>
  <header class="header">
    <div class="header-logo">
      <h1>Резюме Frontend-разработчика</h1>
    </div>
  </header>
</template>

<script>
  export default {
    name: "Header",
  }
</script>

<style lang="less">
  .header {
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    &-logo {
      align-items: flex-start;
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
      justify-content: center;
      width: 100%;

      img {
        height: 80px;
        width: 300px;
        margin-right: 5px;
      }

      h1 {
        font-size: 30pt;
        color: #4c4c4c;
        text-shadow: 0 0px 10px #7d7676;
        font-style: italic;
        font-family: @FFE2Regular;
        letter-spacing: 3px;
        font-weight: bold;
        margin-left: 5px;
        margin: 10px 0 10px 5px;
      }
    }

    @media (max-width: 580px) {
      display: block;

      &-logo {
        display: block;
        height: auto;

        h1 {
          font-size: 26pt;
          color: #4c4c4c;
          text-shadow: 0 0px 10px #7d7676;
          font-style: italic;
          font-family: "Exo 2";
          letter-spacing: 3px;
          margin: 10px 0;
          font-weight: bold;
        }
      }
    }
  }
</style>
