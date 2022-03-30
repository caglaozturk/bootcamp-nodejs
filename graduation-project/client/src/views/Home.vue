<template>
  <!-- Start Small Banner  -->
  <section class="small-banner section">
      <div class="container-fluid">
          <div class="row">
              <!-- Single Banner  -->
              <div class="col-lg-4 col-md-6 col-12">
                  <div class="single-banner">
                      <img src="@/assets/images/fetured_prd_1.png" alt="#">
                  </div>
              </div>
              <!-- /End Single Banner  -->
              <!-- Single Banner  -->
              <div class="col-lg-4 col-md-6 col-12">
                  <div class="single-banner">
                      <img src="@/assets/images/fetured_prd_2.png" alt="#">
                  </div>
              </div>
              <!-- /End Single Banner  -->
              <!-- Single Banner  -->
              <div class="col-lg-4 col-12">
                  <div class="single-banner tab-height">
                      <img src="@/assets/images/fetured_prd_3.png" alt="#">
                  </div>
              </div>
              <!-- /End Single Banner  -->
          </div>
      </div>
  </section>
  <!-- End Small Banner -->

  <!-- Start Product Area -->
  <div class="product-area section">
          <div class="container">
              <div class="row">
                  <div class="col-12">
                      <div class="section-title">
                          <h2>Trending Item</h2>
                      </div>
                  </div>
              </div>
              <div class="row">
                  <div class="col-12">
                      <div class="product-info">
                            <div class="row">
                                <div class="col-xl-3 col-lg-4 col-md-4 col-12" v-for="(data,index) in trend_products" :key="index">
                                    <div class="single-product">
                                        <div class="product-img">
                                            <a href="#">
                                                <img class="default-img" :src="data.img" :alt="data.title">
                                                <img class="hover-img" :src="data.img" :alt="data.title">
                                            </a>
                                            <div class="button-head">
                                                <div class="product-action-2">
                                                    <a title="Quick View" @click="showModal(data.id)"><i class="p-3 ti-eye"></i><span>Quick Shop</span></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="product-content">
                                            <h3><a href="#">{{data.title}}</a></h3>
                                            <div class="product-price">
                                                <span>{{ data.sales }}.00 ₺</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                      </div>
                  </div>
              </div>
          </div>
  </div>
  <!-- End Product Area -->
  <detail-modal></detail-modal>
</template>

<script>
import axios from "axios";
import DetailModal from '@/components/product/DetailModal.vue'
export default {
    name: 'Home',
    data() {
        return {
            trend_products: []
        };
    },
    components: {
        DetailModal
    },
    methods: {
        async getData() {
            await axios.get("http://localhost:3000/product/gettrendproduct")
            .then(response => {
                this.trend_products = response.data;
            })
            .catch(error => {
                console.log(error);
            });
            console.log("trend_products: ",this.trend_products) 
        },
        showModal(id) {
            console.log(id)
            this.$store.commit('setProductId', id);
            this.$store.commit('statusModal', true);
        },
    },
    async created() {
        await this.getData();
    },
};
</script>
