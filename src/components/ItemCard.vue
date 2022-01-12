<template lang="pug">
.card
  img.card-img(
    src="https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg"
    alt="")
  .card-title {{ cardTitle }}
  .card-context {{ cardContext }}

</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ItemCard",
  props: {
    imgSrc: {
      type: String,
      default: () => "",
    },
    cardTitle: {
      type: String,
      default: "The Fox (What Does The Fox Say?)",
    },
    cardContext: {
      type: String,
      default: `Dog goes "woof"
Cat goes "meow"
Bird goes "tweet"
And mouse goes "squeek"
Cow goes "moo"
Frog goes "croak"
And the elephant goes "toot"
Ducks say "quack"
And fish go "blub"
And the seal goes "ow ow ow"
But there's one sound
That no one knows
What does the fox say?
"Ring-ding-ding-ding-dingeringeding!
Gering-ding-ding-ding-dingeringeding!
Gering-ding-ding-ding-dingeringeding!"
What the fox say?`,
    },
  },
  setup() {
    return {
    };
  },
});
</script>
<style lang="scss" scoped>
.card {
  @apply rounded bg-bg w-full my-4 p-4;
  min-height: 200px;
  max-width: 500px;
  @apply transition;
  &:hover{
    transform: translate(-10px, 10px);
    @apply bg-primary;
    .card-title{
      @apply text-primary-light;
    }
    .card-context{
      @apply text-primary-medium;

    }
  }
  &-img{
    @apply h-1/3 rounded;
  }
  &-title{
    @apply text-font-light mt-4 text-xl;
  }
  &-context{
    @apply p-2 text-font-medium text-sm;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
}
</style>
