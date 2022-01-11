<template lang="pug">
.flex
  .aside
    .profile
      img.profile-photo(
        src="@/assets/images/cat-nana.jpeg"
        alt="")
      .profile-name Ray
      .profile-remark Test Remark
    .link
      .link-item
        img.linkImg(
          src="@/assets/images/github.png"
          alt="")
        a.linkHref(
          href="https://github.com/Rayyyyyyyyyyyyyyyyyyyy?tab=repositories"
        ) Rayyyyyyyyyyyyyyyyyyyy
  router-view
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  setup() {
    return {

    };
  },
});
</script>

<style lang="scss" scoped>

  .aside{
    @apply flex flex-col p-6 items-center;
    @apply bg-primary h-screen overflow-y-auto w-1/5;

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
        @apply text-sm text-secondary-light;
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
            @apply text-primary-light;
          }
        }
      }
    }
  }
</style>
