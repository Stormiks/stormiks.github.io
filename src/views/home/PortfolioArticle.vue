<template>
  <article class="block-cell">
    <figure class="block-images">
      <img
        :src="`/assets/img/project-img${item.preview}`"
        :alt="item.title"
      />
    </figure>
    <h4>{{ item.title }}</h4>
    <p :style="{ 'color: red': item.isDevelopments }">{{ item.description }}</p>
    <a
      :href="isUrl(item.url)"
      target="_blank"
    >Открыть проект</a>
  </article>
</template>

<script>
  export default {
    props: {
      item: Object
    },
    methods: {
      isUrl(str) {
        const checkProtocol = str.match(/http|https/i)
        return checkProtocol ? str : `/portfolio${str}`
      }
    }
  }
</script>

<style lang="less" scoped>
  .block-cell {
    align-items: flex-start;
    display: flex;
    height: 290px;
    position: relative;
    padding: 4px 4px 46px;
    margin: 5px 2px;
    width: 230px;
    justify-content: center;
    flex-wrap: wrap;
    transition: 0.2s;

    > figure {
      align-items: center;
      box-shadow: 0 0 9px 0px #696969;
      border-radius: 4px;
      display: flex;
      margin: 3px 1rem;
      padding: 2px;
      justify-content: center;

      img {
        width: 100%;
      }
    }

    > h4 {
      color: #2d586c;
      font-family: @FFE2SemiBoldItalic;
      font-weight: bold;
      font-size: large;
      letter-spacing: 1px;
      margin: 10px 0;
      width: 100%;
    }

    > p {
      font-size: 10pt;
      font-family: @FFE2Regular;
      text-align: left;
    }

    > a {
      position: absolute;
      bottom: 7px;
      border-radius: 7px;
      color: #9e9595;
      padding: 3px;
      margin-top: 10px;
      opacity: 0;
    }

    &:hover {
      background-color: #d6d5d5;
      border-radius: 5px;
      box-shadow: 0px 5px 11px 1px #7b7b7b, inset 0px 0px 1px 1px #8888883b;

      > a {
        opacity: 1;
        transition: all 0.15s ease-in 0s;

        &:hover {
          border-radius: 12px;
          background-image: linear-gradient(to top, #e0cea4, #03a9f43b);
          color: #02202d;
          letter-spacing: 1.3px;
          padding: 5px 14px;
          text-decoration-style: solid;
          text-decoration-line: underline;
          text-decoration-color: #84740e;
          box-shadow: 0px 1px 11px 0px #0000008f, inset 0 0 11px 1px #8db7da29;
        }
      }
    }

    @media (max-width: 580px) {
      height: 270px;
      width: 320px;
    }
  }
</style>
