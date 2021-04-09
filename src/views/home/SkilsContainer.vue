<template>
  <div
    class="row"
    v-if="skilsGroups.length">
    <slot :item="skilsGroups"></slot>
  </div>
</template>

<script>
  export default {
    name: "SkilsContainer",
    props: {
      skilsGroups: Array,
    }
  }
</script>
