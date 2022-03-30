<template>
<div>
  <b-row>
    <b-colxx xxs="12">
      <piaf-breadcrumb :heading="`${$t('menu.search')} : ${this.$route.query.search}`"/>
      <div class="separator mb-5"></div>
    </b-colxx>
  </b-row>
  <b-row v-if="total === 0">
      <b-colxx xxs="12" class="srch-no-rslt-cntnr">
          <no-result :text="this.$route.query.search"></no-result>
      </b-colxx>
  </b-row>
  <b-row v-else>
    <b-colxx xxs="12">
        <b-card class="mb-4" >
           <div v-for="(item,index) in items" :key="index" :class="{'mb-3':items.length!=(index+1)}">
             <div class="w-40 w-sm-100">
                <p class="list-item-heading mb-1 color-theme-1">{{item.title}}</p>
                <p class="mb-1 text-muted text-small">{{item.category}} | {{item.title}}</p>
                <p class="mb-4 text-small">{{ item.description }}</p>
             </div>
             <div class="separator mb-5" v-if="items.length!=(index+1)"></div>
           </div>
        </b-card>
    </b-colxx>
    <b-colxx xxs="12" class="mt-3 ">
      <b-pagination-nav class="justify-content-center pagination" :number-of-pages="total/perPage" :link-gen="linkGen" v-model="page" :per-page="perPage" align="center">
          <template v-slot:next-text>
              <i class="simple-icon-arrow-right" />
          </template>
          <template v-slot:prev-text>
              <i class="simple-icon-arrow-left" />
          </template>
          <template v-slot:first-text>
              <i class="simple-icon-control-start" />
          </template>
          <template v-slot:last-text>
              <i class="simple-icon-control-end" />
          </template>
      </b-pagination-nav>
    </b-colxx>

  </b-row>
  </div>
</template>
<script>
import NoResult from "@/components/Common/NoResult";
import { mapActions } from "vuex";

export default {
  data() {
    return {
      keyword: "",
      page: 1,
      perPage: 4
    };
  }, 
  components: {
    "no-result": NoResult
  },
  methods: {
    ...mapActions(["getAllProducts"]),
    linkGen (pageNum) {
      return '#page-' + pageNum
    },
    loadItems() {
      this.getAllProducts(this.apiUrl);
    },
  },
  computed: {
    total: {
      get() { return this.$store.state.product.total },
      set(value) { this.$store.commit('setState', {key: 'total', value: value}) }
    },
    items: {
      get() { return this.$store.state.product.items },
      set(value) { this.$store.commit('setState', {key: 'items', value: value}) }
    },
    apiUrl() {
      return `?sort=date&page=${this.page}&per_page=${this.perPage}&search=${this.keyword}`;
    }
  }, 
  watch: {
    $route: function(event) { 
      this.page = event.hash.split("-")[1] || 1;
      this.keyword = this.$route.query.search;
      this.loadItems();   
    }
  },

  mounted() {
    this.keyword = this.$route.query.search;
    this.loadItems();
  }
};
</script>