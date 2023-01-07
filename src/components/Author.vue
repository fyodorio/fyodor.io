<template>
	<div class="author">

		<img alt="Author image" class="author__image" src="https://res.cloudinary.com/fyodorio/image/upload/v1673112865/my-logos/author_wudaur.jpg" width="180" height="180" />

		<h1 v-if="showTitle" class="author__site-title">
			{{ config.title }}
		</h1>

		<p class="author__intro">
			{{ config.description }}
		</p>

		<p class="author__links">
			<a href="https://twitter.com/fyodorio">Twitter</a>
			<a href="https://github.com/fyodorio">GitHub</a>
			<a href="https://codepen.io/fyodorio">CodePen</a>
			<a href="https://dev.to/fyodorio">DEV</a>
		</p>

	</div>
</template>

<script>
import config from '../data/config';

export default {
	props: ['showTitle'],
	data: () => {
		return {
			config
		}
	}
}
</script>

<style lang="scss">
.author {
	margin: 0 auto;
	max-width: 500px;
	text-align: center;
	padding: calc(var(--space) / 2) 0;

	&__image {
		border-radius: 100%;
		width: 90px;
		height: 90px;
		margin-bottom: 1em;
	}

	&__intro {
		opacity: .8;
	}

	&__site-title {
		font-size: 1.5em;
	}

	&__links {
		margin-top: -.5em;
		a {
			margin: 0 .5em;
		}
	}
}
</style>
