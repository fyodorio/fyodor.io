<template>
   <div class="post-tags">
   		<a class="post-tags__link" v-for="tag in post.tags" :href="tag.path">
   			<span>#</span> {{ tag.title }}
		</a>
    </div>
</template>

<script>
export default {
  props: ['post']
}
</script>

<style lang="scss">
.post-tags {
  margin: 1em 0 0;
  line-height: 200%;

  &__link {
  	margin-right: .7em;
  	font-size: .8em;
  	color: currentColor;
  	text-decoration: none;
  	background-color: var(--bg-color);
  	color: currentColor!important; //Todo: remove important;
  	padding: .5em;
  	border-radius: var(--radius);
  }
}
</style>