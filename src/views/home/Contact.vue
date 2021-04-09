<template>
  <section class="main-container contact">
    <a name="contact"></a>
    <h3 class="info-caption">
      <span>Контакты</span>
    </h3>
    <div class="block-cell-contact section__inner">
      <p>
        <span>Skype:</span>
        <a
          rel="contact"
          href="skype:skylinkertu?call">Skylinkertu</a>
      </p>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'Contact'
  }
</script>

<style lang="less" scoped>
  .block-cell-contact {
    display: inline-block;
    text-align: left;

    p {
      font-family: @FFE2Light;
      padding: 2px 7px;
      margin: 5px 2px;
      transition: .25s;

      &:hover {
        color: #fff;
        background: #0395ffba;
        border-radius: 14px;
      }

      > span {
        display: inline-block;
        font-family: @FFE2SemiBold;
        text-shadow: -1px 1px 5px #00000099;
        letter-spacing: 1px;

        + a {
          margin-left: 5px;
        }
      }
    }

    a {
      text-decoration: none;
      color: black;

      &:hover {
        text-decoration-line: underline;
        text-decoration-style: solid;
        text-decoration-color: #036480;
      }
    }
  }
</style>
