<template lang="pug">
el-image.img-item(
  :src="imgSrc"
  alt=""
  fit="cover"
  )
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ImgComponent",
  props: {
    imgSrc: {
      type: String,
      default: () => "",
    },
    setup() {
      return {
      };
    },
  },
});
</script>
<style lang="scss" scoped>
.img-item{
  @apply w-full h-full;
}
</style>
