<template>
  <b-modal
    id="modalright"
    ref="modalright"
    :title="$t('pages.add-new-modal-title')"
    modal-class="modal-right"
  >
    <b-form>
      <b-form-group class="error-l-100 tooltip-label-right" :label="$t('pages.product-name')">
        <b-form-input v-model.trim="$v.newItem.title.$model" :state="!$v.newItem.title.$error" />
        <b-form-invalid-feedback v-if="!$v.newItem.title.required">Please enter title</b-form-invalid-feedback>
      </b-form-group>
      <b-form-group class="error-l-100 tooltip-label-right" :label="$t('pages.category')">
        <v-select :options="categories" v-model="newItem.category" />
        <b-form-invalid-feedback class="d-block" v-if="!$v.newItem.category.required && $v.newItem.category.$dirty">Category is required!</b-form-invalid-feedback>
      </b-form-group>
      <b-form-group class="error-l-100 tooltip-label-right" :label="$t('pages.sales')">
        <b-form-input v-model.trim="$v.newItem.sales.$model" :state="!$v.newItem.sales.$error" type="number" />
        <b-form-invalid-feedback v-if="!$v.newItem.sales.required">Please enter sales</b-form-invalid-feedback>
      </b-form-group>
      <b-form-group class="error-l-100 tooltip-label-right" :label="$t('pages.stock')">
        <b-form-input v-model.trim="$v.newItem.stock.$model" :state="!$v.newItem.stock.$error" type="number" />
        <b-form-invalid-feedback v-if="!$v.newItem.stock.required">Please enter stock</b-form-invalid-feedback>
      </b-form-group>
      <b-form-group class="error-l-100 tooltip-label-right" :label="$t('pages.image')">
          <b-input-group :prepend="$t('input-groups.upload')">
            <b-form-file :state="!$v.newItem.img.$error" @change="onFileSelected" v-model="newItem.img" accept=".jpg, .png, .jpeg" :placeholder="$t('input-groups.choose-file')"></b-form-file>
            <b-form-invalid-feedback class="d-block" style="margin-top:10px" v-if="!$v.newItem.img.required && $v.newItem.img.$dirty">Please select image!</b-form-invalid-feedback>
          </b-input-group>
          <small class="form-text font-weight-bold text-dark">{{ $t('pages.upload_img_warn') }} !....</small>
          <div class="mt-1">{{ $t('pages.selected_file') }}: {{ newItem.img ? newItem.img.name : '' }}</div>
      </b-form-group>
      <b-form-group class="error-l-100 tooltip-label-right" :label="$t('pages.description')">
        <b-textarea v-model.trim="$v.newItem.description.$model" :state="!$v.newItem.description.$error" :rows="2" :max-rows="2" />
        <b-form-invalid-feedback v-if="!$v.newItem.description.required">Please enter description</b-form-invalid-feedback>
      </b-form-group>
      <b-form-group class="error-l-100 tooltip-label-right" :label="$t('pages.status')">
        <b-form-radio-group v-model.trim="$v.newItem.status.$model">
          <template v-for="option in statuses">
            <b-form-radio :value="option.value" :key="option.text">
              {{ option.text }}
            </b-form-radio>
          </template>
        </b-form-radio-group>
        <b-form-invalid-feedback class="d-block" v-if="!$v.newItem.status.required && $v.newItem.status.$dirty">Please select one!</b-form-invalid-feedback>
      </b-form-group>
    </b-form>

    <template slot="modal-footer">
      <b-button
        variant="outline-secondary"
        @click="hideModal('modalright')"
      >{{ $t('pages.cancel') }}</b-button>
      <b-button variant="primary" @click="addNewItem()" class="mr-1">{{ $t('pages.submit') }}</b-button>
    </template>
  </b-modal>
</template>
<script>
import { mapActions } from "vuex";
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";
import { validationMixin } from "vuelidate";
const { required } = require("vuelidate/lib/validators");
export default {
  data() {
    return {
      newItem: {
        title: "",
        category: "",
        description: "",
        status: "",
        img: null,
        sales: null,
        stock: null
      }
    };
  },    
  mixins: [validationMixin],
  validations: {
    newItem: {
        title: { required },
        category: { required },
        description: { required },
        status: { required },
        img: { required },
        sales: { required },
        stock: { required }
    }
  },
  components: {
    "v-select": vSelect
  },
  computed: {
    isStatuses() {
      return Boolean(this.newItem.status)
    }
  },
  props: ["categories", "statuses"],
  methods: {
    ...mapActions(["postProduct"]),
    onFileSelected(event) {
      this.newItem.img = event.target.files[0]
    },
    addNewItem() {
      console.log("adding item : ", this.newItem);
      this.$v.$touch();
      if (!this.$v.newItem.$anyError) {
        this.postProduct({
          title: this.newItem.title,
          category: this.newItem.category.value,
          description: this.newItem.description,
          status: this.newItem.status,
          img: this.newItem.img,
          sales: this.newItem.sales,
          stock: this.newItem.stock
        });
      }
    },
    hideModal(refname) {
      this.$refs[refname].hide();
    }
  }
};
</script>

