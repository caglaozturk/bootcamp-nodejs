<template>
    <Loader></Loader>
    <Header></Header>
    <Slider></Slider>
    <router-view/>
    <Footer></Footer>
</template>

<script>
import Slider from '@/components/layout/Slider.vue'
import Loader from '@/components/layout/Loader.vue'
import Header from './components/layout/Header.vue'
// import Sidebar from '@/components/layout/Sidebar.vue'
import Footer from './components/layout/Footer.vue'

export default {
  name: 'App',
  components: {
    Slider,
    Loader,
    Header,
    // Sidebar,
    Footer
  }
}
</script>