<template lang="pug">
.page-container
  el-carousel(height="250px")
    el-carousel-item(v-for="(src, idx) in imgArr" :key="idx")
      el-image.img-item(
        :src="src"
        alt=""
        fit="contain"
      )
  el-row(:gutter="20")
    el-col(:span="8")
      ItemCard
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ItemCard from "@/components/ItemCard.vue";

export default defineComponent({
  name: "Home",
  components: {
    ItemCard,
  },
  setup() {
    return {
      imgArr: [
        "https://raw.githubusercontent.com/Rayyyyyyyyyyyyyyyyyyyy/Rayyyyyyyyyyyyyyyyyyyy.github.io/develop/src/assets/images/fat-cat.jpeg",
        "https://raw.githubusercontent.com/Rayyyyyyyyyyyyyyyyyyyy/Rayyyyyyyyyyyyyyyyyyyy.github.io/develop/src/assets/images/cats.jpeg",
        "https://raw.githubusercontent.com/Rayyyyyyyyyyyyyyyyyyyy/Rayyyyyyyyyyyyyyyyyyyy.github.io/develop/src/assets/images/cat-nana.jpeg",
      ],
    };
  },
});
</script>

<style lang="scss" scoped>
.page-container{
  @apply py-4 px-8 w-full;

  .img-item{
    @apply w-full h-full rounded;
  }
}

</style>
