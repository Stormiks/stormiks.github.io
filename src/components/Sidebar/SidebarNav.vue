<template>
  <nav class="nav">
    <ul class="nav-list">
      <SidebarNavLink
        v-for="link in menu"
        :key="`nav-${link.url}`"
        :link="link"
      >
        <template v-slot:count>
          <SidebarLinkCount
            v-if="link.getter"
            :getter-func="link.getter">
          </SidebarLinkCount>
        </template>
      </SidebarNavLink>
    </ul>
  </nav>
</template>

<script>
  import SidebarNavLink from "./SidebarNavLink";
  import SidebarLinkCount from "./SidebarLinkCount";
  import { mapState } from "vuex";

  export default {
    name: "SidebarNav",
    data() {
      return {};
    },
    components: {
      SidebarNavLink,
      SidebarLinkCount,
    },
    computed: mapState({
      menu: state => state.menuLinks,
    }),
  };
</script>

<style lang="less" scoped>
  .nav-list {
    padding: 10px 0 10px 0;

    @media (max-width: 580px) {
      margin: 0;
    }
  }
</style>
