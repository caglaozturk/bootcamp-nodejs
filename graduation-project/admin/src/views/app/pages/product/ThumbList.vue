
<template>
  <b-row>
    <b-colxx class="disable-text-selection">
      <list-page-heading
        :title="$t('menu.products')"
        :selectAll="selectAll"
        :isSelectedAll="isSelectedAll"
        :isAnyItemSelected="isAnyItemSelected"
        :keymap="keymap"
        :displayMode="displayMode"
        :changeDisplayMode="changeDisplayMode"
        :changeOrderBy="changeOrderBy"
        :changePageSize="changePageSize"
        :onContextMenuAction="onContextMenuAction"
        :sort="sort"
        :searchChange="searchChange"
        :from="from"
        :to="to"
        :total="total"
        :perPage="perPage"
      ></list-page-heading>
      <template v-if="isLoad">
        <list-page-listing
          :displayMode="displayMode"
          :items="items"
          :selectedItems="selectedItems"
          :toggleItem="toggleItem"
          :lastPage="lastPage"
          :perPage="perPage"
          :page="page"
          :changePage="changePage"
          :handleContextMenu="handleContextMenu"
          :onContextMenuAction="onContextMenuAction"
        ></list-page-listing>
      </template>
      <template v-else>
        <div class="loading"></div>
      </template>
    </b-colxx>
  </b-row>
</template>

<script>
import { mapActions } from "vuex";
import ListPageHeading from "../../../../containers/pages/ListPageHeading";
import ListPageListing from "../../../../containers/pages/ListPageListing";

export default {
  components: {
    "list-page-heading": ListPageHeading,
    "list-page-listing": ListPageListing
  },
  data() {
    return {
      displayMode: "thumb"
    };
  },
  methods: {
    ...mapActions(["getAllProducts", "deleteProduct"]),
    loadItems() {
      this.isLoad = false;
      this.getAllProducts(this.apiUrl);
    },
    changeDisplayMode(displayType) {
      this.displayMode = displayType;
    },
    changePageSize(perPage) {
      this.page = 1;
      this.perPage = perPage;
    },
    changeOrderBy(sort) {
      this.sort = sort;
    },
    searchChange(val) {
      this.search = val;
      this.page = 1;
    },

    selectAll(isToggle) {
      if (this.selectedItems.length >= this.items.length) {
        if (isToggle) this.selectedItems = [];
      } else {
        this.selectedItems = this.items.map(x => x.id);
      }
    },
    keymap(event) {
      switch (event.srcKey) {
        case "select":
          this.selectAll(false);
          break;
        case "undo":
          this.selectedItems = [];
          break;
      }
    },
    getIndex(value, arr, prop) {
      for (var i = 0; i < arr.length; i++) {
        if (arr[i][prop] === value) {
          return i;
        }
      }
      return -1;
    },
    toggleItem(event, itemId) {
      if (event.shiftKey && this.selectedItems.length > 0) {
        let itemsForToggle = this.items;
        var start = this.getIndex(itemId, itemsForToggle, "id");
        var end = this.getIndex(
          this.selectedItems[this.selectedItems.length - 1],
          itemsForToggle,
          "id"
        );
        itemsForToggle = itemsForToggle.slice(
          Math.min(start, end),
          Math.max(start, end) + 1
        );
        this.selectedItems.push(
          ...itemsForToggle.map(item => {
            return item.id;
          })
        );
      } else {
        if (this.selectedItems.includes(itemId)) {
          this.selectedItems = this.selectedItems.filter(x => x !== itemId);
        } else this.selectedItems.push(itemId);
      }
    },
    handleContextMenu(vnode) {
      if (!this.selectedItems.includes(vnode.key)) {
        this.selectedItems = [vnode.key];
      }
    },
    onContextMenuAction() {
      console.log(
        "context menu item clicked - " + ": ",
        this.selectedItems
      );
      this.deleteProduct();
    },
    changePage(pageNum) {
      this.page = pageNum;
    }
  },
  computed: {
    isLoad: {
      get() { return this.$store.state.product.isLoad },
      set(value) { this.$store.commit('setState', {key: 'isLoad', value: value}) }
    },
    page: {
      get: function() { return this.$store.state.product.page },
      set(value) { this.$store.commit('setState', {key: 'page', value: value}) }
    },
    perPage: {
      get() { return this.$store.state.product.perPage },
      set(value) { this.$store.commit('setState', {key: 'perPage', value: value}) }
    },
    search: {
      get() { return this.$store.state.product.search },
      set(value) { this.$store.commit('setState', {key: 'search', value: value}) }
    },
    from: {
      get() { return this.$store.state.product.from },
      set(value) { this.$store.commit('setState', {key: 'from', value: value}) }
    },
    to: {
      get() { return this.$store.state.product.to },
      set(value) { this.$store.commit('setState', {key: 'to', value: value}) }
    },
    total: {
      get() { return this.$store.state.product.total },
      set(value) { this.$store.commit('setState', {key: 'total', value: value}) }
    },
    lastPage: {
      get() { return this.$store.state.product.lastPage },
      set(value) { this.$store.commit('setState', {key: 'lastPage', value: value}) }
    },
    items: {
      get() { return this.$store.state.product.items },
      set(value) { this.$store.commit('setState', {key: 'items', value: value}) }
    },
    selectedItems: {
      get() { return this.$store.state.product.selectedItems },
      set(value) { this.$store.commit('setState', {key: 'selectedItems', value: value}) }
    },
    sort: {
      get() { return this.$store.state.product.sort },
      set(value) { this.$store.commit('setState', {key: 'sort', value: value}) }
    },
    isSelectedAll() {
      return this.selectedItems.length >= this.items.length;
    },
    isAnyItemSelected() {
      return (
        this.selectedItems.length > 0 &&
        this.selectedItems.length < this.items.length
      );
    },
    apiUrl() {
      return `?sort=${this.sort.column}&page=${this.page}&per_page=${this.perPage}&search=${this.search}`;
    }
  },
  watch: {
    search() {
      this.page = 1;
    },
    apiUrl() {
      this.loadItems();
    }
  },
  mounted() {
    this.loadItems();
  }
};
</script>
