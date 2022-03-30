<template>
    <!-- Start Footer Area -->
    <footer class="footer">
        <div class="copyright">
            <div class="container">
                <div class="inner">
                    <div class="row">
                        <div class="col-lg-6 col-12">
                            <div class="left">
                                <p>Copyright © {{ date }} <router-link to="/">Cup Cake</router-link>  -  All Rights Reserved.</p>
                            </div>
                        </div>
                        <div class="col-lg-6 col-12">
                            <div class="right">
                                <img src="assets/images/payments.png" alt="#">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    <!-- /End Footer Area -->
</template>
<script>
export default {
    name: 'Footer',
    data() {
        return {
            date: null
        }
    },
    mounted() {
        let now = new Date();
        this.date = now.getFullYear();
    }
}
</script>