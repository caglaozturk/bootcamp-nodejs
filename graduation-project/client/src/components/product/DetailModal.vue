<template>
      <!-- Modal -->
  <div class="modal fade" :class="{ show: showProductModal }">
          <div class="modal-dialog" role="document">
              <div class="modal-content">
                  <div class="modal-header">
                      <button type="button" class="close" @click='closeModal()'><span class="ti-close" aria-hidden="true"></span></button>
                  </div>
                  <div class="modal-body">
                      <div class="row no-gutters">
                          <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                              <!-- Product Slider -->
                                  <div class="product-gallery">
                                      <div class="quickview-slider-active">
                                          <div class="single-slider">
                                              <img width="569" height="528" :src="found_product.img" :alt="found_product.title">
                                          </div>
                                      </div>
                                  </div>
                              <!-- End Product slider -->
                          </div>
                          <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12 d-flex">
                              <div class="quickview-content">
                                  <h2>{{ found_product.title }}</h2>
                                  <div class="quickview-ratting-review">
                                      <div class="quickview-stock">
                                          <span><i class="fa fa-check-circle-o"></i> in stock</span>
                                      </div>
                                  </div>
                                  <h3>${{ found_product.sales }}</h3>
                                  <div class="quickview-peragraph">
                                      <p>{{ found_product.description }}</p>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
  </div>
  <!-- Modal end -->
</template>

<script>
import { mapState } from 'vuex';
import axios from "axios";
export default {
    name: 'DetailModal',
    data() {
        return {
            found_product: {}
        };
    },
    props: {
        id: Number
    },
    computed: {
        ...mapState({
            setProductId: (state) => state.setProductId,
            showProductModal: (state) => state.showProductModal
        }),
    },
    methods: {
        async getData() {
            if(!this.setProductId) {console.log("product yok");return;}
            await axios.get(`http://localhost:3000/product/getproductbyid/${this.setProductId}`)
            .then(response => {
                this.found_product = response.data.product
            })
            .catch(error => {
                console.log(error);
            });
            console.log("found_product: ",this.found_product) 
        },
        closeModal() {
            this.$store.commit('statusModal', false);
        },
    },
    watch: {
        setProductId: function (newValue) {
                          console.log("new: ",newValue)
            if(newValue) {
                this.getData();
            }
        },
    },
};
</script>

<style scoped>
.show {
    display: block;
}
</style>