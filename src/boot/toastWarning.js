/* import Vue from 'vue'

Vue.prototype.$qnerror = function (msg) {
  this.$q.notify({
    color: 'negative',
    textColor: 'white',
    icon: 'warning',
    position: 'top',
    message: msg
  })
}
Vue.prototype.$qninfo = function (msg) {
  this.$q.notify({
    color: 'info',
    textColor: 'white',
    icon: 'info',
    position: 'top',
    message: msg
  })
}
Vue.prototype.$qnsuccess = function (msg) {
  this.$q.notify({
    color: 'positive',
    textColor: 'white',
    icon: 'success',
    position: 'top',
    message: msg
  })
} */
export default async ({ app, Vue }) => {
  Vue.prototype.$toastWarning = function (msg) {
    if (!msg) {
      return
    }

    this.$q.notify({
      color: 'negative',
      textColor: 'white',
      icon: 'warning',
      position: 'top',
      message: msg
    })
  }
}
