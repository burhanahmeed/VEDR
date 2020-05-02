<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Home',
	metaInfo: {
	  title: 'About Page VEDR',
	  titleTemplate: '%s - Kusiaga',
	  htmlAttrs: {
	    lang: 'en'
	  },
	  meta: [
	  	{ name: 'description', content: 'This is an about page VEDR (Vue Express Dynamic Rendering) created by Kusiaga.' },
	  	{ property: 'og:image', name: 'og:image', content: '/og.png' },
	  	{ property: 'og:description', name: 'og:description', content: 'For facebook crawler. This is an about page VEDR (Vue Express Dynamic Rendering) created by Kusiaga.' },
	  	{ name: 'twitter:card', content: 'summary_large_image' },
	  	{ name: 'twitter:description', content: 'For twitter crawler. This is an about page VEDR (Vue Express Dynamic Rendering) created by Kusiaga.' },
	  ]
	},
}
</script>
