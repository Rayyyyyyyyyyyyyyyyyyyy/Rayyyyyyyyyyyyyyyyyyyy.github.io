<template lang="pug">
.card
  .card-header ABOUT
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ItemCard",
  setup() {
    return {
    };
  },
});
</script>
<style lang="scss" scoped>
.card {
  @apply rounded bg-bg w-full mt-4 p-4;
  min-height: 200px;
  max-width: 500px;
  @apply transition;
  &:hover{
    transform: translate(-10px, 10px);
    @apply bg-primary;
  }
  &-header{
   @apply text-secondary-medium;
  }

}
</style>
