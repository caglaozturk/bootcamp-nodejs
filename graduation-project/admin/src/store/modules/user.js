import Vue from 'vue';
import firebase from 'firebase/app'
import 'firebase/auth'
import { currentUser, isAuthGuardActive } from '../../constants/config'
import { setCurrentUser, getCurrentUser } from '../../utils'
import router from '../../router'

export default {
  state: {
    currentUser: isAuthGuardActive ? getCurrentUser() : currentUser,
    processing: false,
    forgotMailSuccess: null,
    resetPasswordSuccess: null
  },
  getters: {
    currentUser: state => state.currentUser,
    processing: state => state.processing,
    forgotMailSuccess: state => state.forgotMailSuccess,
    resetPasswordSuccess: state => state.resetPasswordSuccess,
  },
  mutations: {
    setUser(state, payload) {
      state.currentUser = payload
      state.processing = false
    },
    setLogout(state) {
      state.currentUser = null
      state.processing = false
    },
    setProcessing(state, payload) {
      state.processing = payload
    },
    setError(state, payload) {
      state.currentUser = null
      state.processing = false
    },
    setForgotMailSuccess(state) {
      state.currentUser = null
      state.processing = false
      state.forgotMailSuccess = true
    },
    setResetPasswordSuccess(state) {
      state.currentUser = null
      state.processing = false
      state.resetPasswordSuccess = true
    }
  },
  actions: {
    register({ commit }, payload) {
      commit('setProcessing', true)
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
      .then(userCredential => {
        // Signed in 
        let user = userCredential.user;
        return user.updateProfile({displayName: payload.fullname});
      })
      .then(
        () => {
          router.push({ path: `/user/login` })
          Vue.$toast.success("Kayıt Başarılı");
        }
      ).catch(
        err => {
          Vue.$toast.error(err.message);
        }
      )
      .finally(() => commit('setProcessing', false))
    },
    login({ commit }, payload) {
      commit('setProcessing', true)
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
        .then(
          user => {
            const item = { ...user.user.providerData[0], ...currentUser }
            setCurrentUser(item)
            commit('setUser', item)
          }
        ).catch(
          err => {
            setCurrentUser(null);
            Vue.$toast.error(err.message);
          }
        )
        .finally(() => commit('setProcessing', false))
    },
    forgotPassword({ commit }, payload) {
      commit('setProcessing', true)
      firebase.auth().sendPasswordResetEmail(payload.email)
        .then(
          () => {
            router.push({ path: `/user/login` })
            Vue.$toast.success("Lütfen mailinizi kontrol edin");
            commit('setForgotMailSuccess')
          }
        ).catch(
          err => {
            commit('setError', err.message)
            Vue.$toast.error(err.message);
          }
        )
    },
    resetPassword({ commit }, payload) {
      commit('setProcessing', true)
      firebase.auth().confirmPasswordReset(payload.resetPasswordCode, payload.newPassword)
        .then(
          () => {
            router.push({ path: `/user/login` })
            Vue.$toast.success("Lütfen mailinizi kontrol edin");
            commit('setResetPasswordSuccess')
          }
        ).catch(
          err => {
            commit('setError', err.message)
            Vue.$toast.error(err.message);
          }
        )
    },
    signOut({ commit }) {
      firebase.auth().signOut()
        .then(() => {
          setCurrentUser(null);
          commit('setLogout')
          router.push({ path: `/user/login` })
        }).catch( err => { Vue.$toast.error(err.message) })
    }
  }
}
