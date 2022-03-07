<template>
    <div id="wrapper">
        <sidebar></sidebar>
        <!-- Content Wrapper -->
        <div id="content-wrapper" class="d-flex flex-column">
            <!-- Main Content -->
            <div id="content">
                <Header></Header>
                <router-view/>
            </div>
            <!-- End of Main Content -->
            <Footer></Footer>
        </div>
        <!-- End of Content Wrapper -->
    </div>
    <!-- End of Page Wrapper -->
    <scroll-top></scroll-top>
    <logout-modal></logout-modal>
</template>

<script>
import ScrollTop from '@/components/ScrollTop.vue'
import LogoutModal from '@/components/LogoutModal.vue'
import Header from './components/Header.vue'
import Sidebar from '@/components/Sidebar.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    ScrollTop,
    LogoutModal,
    Header,
    Sidebar,
    Footer
  }
}
</script>
