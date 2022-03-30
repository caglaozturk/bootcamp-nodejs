<template>
  <!-- Start Product Area -->
  <div class="product-area section">
          <div class="container">
              <div class="row">
                  <div class="col-12">
                      <div class="section-title">
                          <h2 v-if="this.$route.query.search">SEARCH RESULT</h2>
                          <h2 v-else>ÜRÜNLERİMİZ</h2>
                      </div>
                  </div>
              </div>
              <div class="row">
                  <div class="col-12">
                      <div class="product-info">
                          <div class="tab-content">
                              <!-- Start Single Tab -->
                              <div class="tab-pane fade show active">
                                  <div class="tab-single">
                                      <div class="row">
                                        <div class="srch-no-rslt-cntnr" v-if="found_products.length === 0">
                                            <no-result :text="$route.query.search"></no-result>
                                        </div>

                                        <div class="col-xl-3 col-lg-4 col-md-4 col-12" v-for="(data,index) in found_products" :key="index">
                                            <div class="single-product" v-if="data._source">
                                                <div class="product-img">
                                                    <a href="#">
                                                        <img class="default-img" :src="data._source.img" :alt="data._source.title">
                                                        <img class="hover-img" :src="data._source.img" :alt="data._source.title">
                                                    </a>
                                                    <div class="button-head">
                                                        <div class="product-action-2">
                                                            <a title="Quick View" @click="showModal(data._source.id)"><i class="p-3 ti-eye"></i><span>Quick Shop</span></a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="product-content">
                                                    <h3><a href="#">{{data._source.title}}</a></h3>
                                                    <div class="product-price">
                                                        <span>{{ data._source.sales }}.00 ₺</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                      </div>
                                  </div>
                              </div>
                              <!--/ End Single Tab -->
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
import NoResult from '@/components/product/NoResult.vue'
export default {
    name: 'SelectedProducts',
    data() {
        return{
            found_products: []
        }
    },
    components: {
        DetailModal,
        NoResult
    },
    methods: {
        async getData() {
            console.log("getdata")
            let search = this.$route.query.search || "";
            await axios.get(`http://localhost:3000/product/productElg?search=${search}`)
            .then(response => {
                if(response.data == "Bulunamadı") this.found_products = []
                else this.found_products = response.data
                console.log(this.found_products)
            })
            .catch(error => {
                this.found_products = []
                console.log(error);
            });
        },
        showModal(id) {
            this.$store.commit('setProductId', id);
            this.$store.commit('statusModal', true);
        },
    },
    watch: {
      "$route": "getData"
    },
    async created() {
        await this.getData();
        console.log(this.$route.query.search)
    },
};
</script>