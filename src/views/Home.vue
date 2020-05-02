<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
	metaInfo: {
	  title: 'Vue Express Dynamic Rendering',
	  titleTemplate: '%s - Kusiaga',
	  htmlAttrs: {
	    lang: 'en'
	  },
	  meta: [
	  	{ name: 'description', content: 'This is an example page of VERD (Vue Express Dynamic Rendering) created by Kusiaga.' },
	  	{ property: 'og:image', name: 'og:image', content: '/og.png' },
	  	{ property: 'og:description', name: 'og:description', content: 'For facebook crawler. This is an example page of VERD (Vue Express Dynamic Rendering) created by Kusiaga.' },
	  	{ name: 'twitter:card', content: 'summary_large_image' },
	  	{ name: 'twitter:description', content: 'For twitter crawler. This is an example page of VERD (Vue Express Dynamic Rendering) created by Kusiaga.' },
	  ]
	},
  components: {
    HelloWorld
  }
}
</script>
