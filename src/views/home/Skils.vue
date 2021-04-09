<template>
  <section class="main-container skils">
    <a name="skils"></a>
    <h3 class="info-caption">
      <span>Скилы</span>
    </h3>
    <div class="block-flex section__inner">
      <!-- <SkilsContainer
        :skilsGroups="skilsGroup"
        v-for="(skilsGroup, index) in skilsGroups"
        :key="`skils-${index}`"
      >
        <template v-slot="{ item }">
          <SkilsItem
            v-for="(skil, index) in item"
            :skil="skil"
            :key="`skils-skil-${index}`"
          ></SkilsItem>
        </template>
      </SkilsContainer> -->
      <SkilsItem
        v-for="(skil, index) in skilsGroups"
        :skil="skil"
        :key="`skils-skil-${index}`"
      ></SkilsItem>
    </div>
  </section>
</template>

<script>
  import SkilsContainer from "./SkilsContainer";
  import SkilsItem from "./SkilsItem";

  import { mapState } from "vuex";

  export default {
    name: "Skils",
    components: {
      SkilsContainer,
      SkilsItem,
    },
    data() {
      return {};
    },
    computed: mapState({
      skilsGroups: state => state.skilsGroups,
    }),
  };
</script>

<style lang="less" scoped>
  .block-flex {
    align-items: center;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
</style>
