<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Home',
	metaInfo () {
		return {
		  title: 'About VEDR',
		  titleTemplate: '%s - Kusiaga',
		  htmlAttrs: {
		    lang: 'en'
		  },
		  meta: [
		  	{ name: 'description', content: 'This is an example page of VERD (Vue Express Dynamic Rendering) created by Kusiaga.' },
		  	{ property: 'og:image', content: this.$vedrhost + '/og.jpg' },
		  	{ property: 'og:description', content: 'For facebook crawler. This is an example page of VERD (Vue Express Dynamic Rendering) created by Kusiaga.' },

		  	{ name: 'twitter:card', content: 'summary_large_image' },
		  	{ name: 'twitter:title', content: 'Vue Express Dynamic Rendering - Kusiaga' },
		  	{ name: 'twitter:description', content: 'For twitter crawler. This is an example page of VERD (Vue Express Dynamic Rendering) created by Kusiaga.' },
		  	{ name: 'twitter:image', content: this.$vedrhost + '/og.jpg' },
		  ]
		}
	},
}
</script>
