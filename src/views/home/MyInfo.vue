<template>
  <section class="main-container my-info">
    <a name="my-info"></a>
    <h3 class="info-caption">
      <span>Обо мне</span>
    </h3>
    <p>
      Дмитрий {{ fullYear }} лет, <em>Front-end</em> разработчик. Имеются навыки: вёрстке сайта с нуля, без дополнительных библиотек и фреймворков; разработка анимации для <em>DOM</em> элементов; добавление динамики с помощью <em>CSS3</em>; внимательность к деталям; хорошие знания БЭМ; подбор шрифтов; базовые умения работать с изображениями.
    </p>
  </section>
</template>


<script>
  import moment from 'moment'

  export default {
    name: 'MyInfo',
    computed: {
      fullYear() {
        if (moment)
          return moment(new Date()).diff(moment('12-04-1993'), 'years', false)


        return ''
      }
    }
  }
</script>

<style lang="less" scoped>
  .my-info {
    p {
      font-family: @FFE2Light;
      font-size: 20px;
      margin: 50px 0;
      text-align: left;
    }

    em {
      font-weight: bold;
      color: #0660BD;
    }

    @media (max-width: 580px) {
      p {
        margin: 25px 0;
      }
    }
  }
</style>
