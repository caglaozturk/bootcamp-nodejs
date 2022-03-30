<template>
  <b-row class="h-100">
    <b-colxx xxs="12" md=10  class="mx-auto my-auto">
      <b-card class="auth-card" no-body>
          <div class="position-relative image-side ">
            <p class=" text-white h2">{{ $t('dashboards.magic-is-in-the-details') }}</p>
              <p class="white mb-0">  Please use this form to register. <br />If you are a member, please
                <router-link to="/user/login" class="white">login</router-link>.
              </p>
          </div>
          <div class="form-side">
            <router-link to="/"><span class="logo-single"/></router-link>
            <h6 class="mb-4">{{ $t('user.register')}}</h6>
            <b-form @submit.prevent="formSubmit">
               <label class="form-group has-float-label mb-4">
                <input type="text" required class="form-control" v-model="form.fullname">
                <span>{{ $t('user.fullname') }}</span>
              </label>
              <label class="form-group has-float-label mb-4">
                <input type="email" required class="form-control" v-model="form.email">
                <span>{{ $t('user.email') }}</span>
              </label>
              <label class="form-group has-float-label mb-4">
                <input type="password" required class="form-control" v-model="form.password">
                <span>{{ $t('user.password') }}</span>
              </label>
              <div class="d-flex justify-content-between align-items-center">
                  <router-link to="/user/login">{{ $t('user.have-acoount')}}</router-link>
                  <b-button type="submit" variant="primary" size="lg" class="btn-shadow">{{ $t('user.register-button')}}</b-button>
              </div>
          </b-form>
        </div>
      </b-card>
    </b-colxx>
  </b-row>
</template>
<script>
import { adminRoot } from '../../constants/config';
import {
    mapActions
} from "vuex";
export default {
  data () {
    return {
      form: {
        fullname: '',
        email: '',
        password: ''
      },
    }
  },
  methods: {
    ...mapActions(["register"]),
    formSubmit () {
      this.register(this.form);
    }
  }
}
</script>


