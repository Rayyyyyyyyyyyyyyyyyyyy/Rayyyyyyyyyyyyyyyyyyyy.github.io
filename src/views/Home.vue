<template lang="pug">
.page-container
  span(v-for="src in imgArr")
    ImgComponent(:imgSrc="src")

</template>

<script lang="ts">
import { defineComponent } from "vue";
import ImgComponent from "@/components/ImgComponent.vue";
import ItemCard from "@/components/ItemCard.vue";

export default defineComponent({
  name: "Home",
  components: {
    ImgComponent,
    ItemCard,
  },
  setup() {
    return {
      imgArr: [
        "src/assets/images/cats.jpeg",
        "src/assets/images/fat-cat.jpeg",
      ],
    };
  },
});
</script>

<style lang="scss" scoped>
.page-container{
  @apply py-4 px-8 w-full;

  .carousel-img{
    @apply w-full h-full;
  }
}

</style>
