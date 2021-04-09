<template>
  <footer class="footer">
    <div class="block-footer">
      <figure class="footer-logo">
        <img
          src="/assets/img/logo/logo-min.png"
          alt="SK" />
      </figure>
      <div class="footer-copy">
        <p>
          &copy; {{ curYear }}г.
          <a href="http://stormiks.github.io">Skylinker</a>
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
  import moment from 'moment';

  export default {
    name: 'Footer',
    computed: {
      curYear() {
        return moment().format('YYYY')
      }
    }
  }
</script>

<style lang="less" scoped>
  .footer {
    display: block;

    &-logo {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 4px;
      margin-block-start: 0;
      margin-block-end: 0;
      margin-inline-start: 0;
      margin-inline-end: 0;

      img {
        margin-right: 3px;
      }
    }

    &-copy {
      margin-left: .5rem;

      p {
        font-family: @FFE2Light;
        margin-top: 0;
        margin-bottom: 0;
      }

      a, a:visited {
        text-decoration: none;
        font-family: @FFE2SemiBold;
        font-size: 14pt;
        color: #adadad;
        padding: 7px;
        transition: .2s;
      }

      a:hover {
        cursor: pointer; /* При наведение курсор - рука */
        border-radius: 7px;
        background: #f3f3f3;
        box-shadow: 0 0 5px #ADA9A9;
        padding: 7px;
        color: #02ADC6;
        text-decoration: underline solid #847B7B; /* Подчёркивание при наведении */
      }
    }
  }

  .block-footer {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }
</style>
