<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <!-- <img :src="$vedrhost + '/og.png'"> -->
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Vue from 'vue'

export default {
  name: 'Home',
	metaInfo () {
		return {
		  title: 'Vue Express Dynamic Rendering',
		  titleTemplate: '%s - Kusiaga',
		  htmlAttrs: {
		    lang: 'en'
		  },
		  meta: [
		  	{ name: 'description', content: 'This is an example page of VERD (Vue Express Dynamic Rendering) created by Kusiaga.' },
		  	{ property: 'og:image', name: 'og:image', content: this.$vedrhost + '/og.png' },
		  	{ property: 'og:description', name: 'og:description', content: 'For facebook crawler. This is an example page of VERD (Vue Express Dynamic Rendering) created by Kusiaga.' },
		  	{ name: 'twitter:card', content: 'summary_large_image' },
		  	{ name: 'twitter:description', content: 'For twitter crawler. This is an example page of VERD (Vue Express Dynamic Rendering) created by Kusiaga.' },
		  	{ name: 'twitter:image', content: this.$vedrhost + '/og.png' },
		  ]
		}
	},
  components: {
    HelloWorld
  },
  data () {
  	return {
  		url: this.$vedrhost
  	}
  },
  mounted () {
  	console.log(this.url)
  }
}
</script>
