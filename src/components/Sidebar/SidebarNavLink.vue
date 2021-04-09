<template>
  <li class="list-item">
    <a
      :href="link.url"
      :title="link.title">
      {{ link.title }}
      <slot name="count"></slot>
    </a>
  </li>
</template>

<script>
  export default {
    name: "SidebarNavLink",
    props: {
      link: Object,
    },
  };
</script>

<style lang="less" scoped>
  .list-item {
    padding-left: 15px; /* Oтступ слева для списка */
    list-style: none; /* Убираем маркер */
    text-align: left;
    padding: 5px 0 5px 0;

    a {
      display: flex;
      text-align: left;
      padding: 3px;
      justify-content: space-between;
      border-bottom: 2px solid #a7a7a7;
      transition: all 0.3s;

      &,
      &:visited {
        text-decoration: none; /* Убираем подчёркивание */
        font-family: @FFE2SemiBold;
        font-size: 14pt;
        color: #adadad;
        padding: 7px;
      }

      &:hover {
        cursor: pointer; /* При наведение курсор - рука */
        border-radius: 7px;
        background: #f3f3f3;
        box-shadow: 0 0 5px #ada9a9;
        padding: 7px;
        color: #02adc6;
        text-decoration: underline solid #847b7b; /* Подчёркивание при наведении */
      }
    }

    @media (max-width: 580px) {
      a {
        text-align: center;
      }
    }
  }
</style>
