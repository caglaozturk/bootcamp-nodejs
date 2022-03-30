<template>
<footer class="page-footer">
    <div class="footer-content">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 col-sm-6">
                    <p>Copyright © {{ date }} <router-link to="/">Cup Cake</router-link>  -  All Rights Reserved.</p>
                </div>
            </div>
        </div>
    </div>
</footer>
</template>
<script>
export default {
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
