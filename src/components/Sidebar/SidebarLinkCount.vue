<template>
  <span class="link__count">
    {{ count }}
  </span>
</template>

<script>
  export default {
    name: "SidebarLinkCount",
    props: {
      getterFunc: {
        type: String,
        default: "",
      },
    },
    computed: {
      count() {
        return this.getterFunc !== "" ? this.getCount() : "";
      },
    },
    methods: {
      getCount() {
        return this.$store.getters[this.getterFunc];
      },
    },
  };
</script>

<style lang="less" scoped>
  .link__count {
    display: inline;
    border-radius: 10px;
    padding: 0 0.45rem;

    &:hover {
      &.link__count {
        background-color: #e0dfdf;
        color: #444343;
        box-shadow: 0 0 2px 0 #444343;
        text-decoration: none !important;
      }
    }
  }
</style>
