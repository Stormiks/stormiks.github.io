<template>
  <section class="main-container portfolio">
    <a name="portfolio"></a>
    <h3 class="info-caption">
      <span>Портфолио</span>
    </h3>
    <div
      class="block-row section__inner"
      v-if="projects.length">
      <PortfolioArticle
        v-for="(project, index) in projects"
        :key="`project-${index}`"
        :item="project"
      ></PortfolioArticle>
    </div>
  </section>
</template>

<script>
  import PortfolioArticle from "p-views/home/PortfolioArticle";
  import { mapState } from "vuex";

  export default {
    name: "Portfolio",
    data() {
      return {};
    },
    computed: mapState({
      projects: state => state.portfolio,
    }),
    components: {
      PortfolioArticle,
    },
  }
</script>

<style lang="less" scoped>
	.block-row {
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
	}
</style>
