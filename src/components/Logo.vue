<template>
	<a class="logo" href="/">
	  <span class="logo__text">
	    &larr; {{ config.title }}
	  </span>
	</a>
</template>

<script>
import config from '../data/config';

export default {
	data: () => {
		return {
			config
		}
	}
}
</script>

<style lang="scss">
.logo {
	text-decoration: none;
  color: var(--body-color)!important;
  font-size: .9em;

	&__image {
		vertical-align: middle;
		border-radius: 99px;
		height: 40px;
		width: 40px;
		margin-right: .5em;
	}
}
</style>
