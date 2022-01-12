<template lang="pug">
.flex
  .aside
    .profile
      img.profile-photo(
        src="@/assets/images/cat-nana.jpeg"
        alt="")
      .profile-name Ray
      .profile-remark 開始做一件事情需要的只是一點點的好奇心而已
    .link
      .link-item
        img.linkImg(
          src="@/assets/images/github.png"
          alt="")
        a.linkHref(
          href="https://github.com/Rayyyyyyyyyyyyyyyyyyyy?tab=repositories"
        ) Rayyyyyyyyyyyyyyyyyyyy
      .link-item
        img.linkImg(
          src="@/assets/images/send.png"
          alt="")
        a.linkHref(
          href="https://rayyyyyyyyyyyyyyyyyyyy.github.io/vuePress-blog/"
        ) Blog
  .flex.flex-col.flex-1
    Header
    router-view
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "@/components/Header.vue";

export default defineComponent({
  name: "App",
  components: {
    Header,
  },
  setup() {
    return {

    };
  },
});
</script>

<style lang="scss" scoped>

  .aside{
    @apply flex flex-col p-6 items-center;
    @apply bg-bg overflow-y-auto w-1/5;
    min-height: 100vh;

    .profile{
      @apply flex flex-col items-center;
      &-photo{
        @apply w-32 h-32;
        @apply rounded-full;
      }
      &-name{
        @apply text-lg mt-4 text-primary-dark;
      }
      &-remark{
        @apply text-sm text-primary text-center;
      }
    }
    .link{
      @apply w-full;

      &-item{
        @apply mt-4;
        @apply flex items-center truncate;

        .linkImg{
          @apply w-8 h-8 mr-4;
        }
        .linkHref{
          @apply text-secondary text-base;
          &:hover{
            @apply text-secondary-medium;
          }
        }
      }
    }
  }
</style>
