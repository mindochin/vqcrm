export default ({ app, Vue }) => {
  Vue.prototype.$toastInfo = function (msg) {
    if (!msg) {
      return
    }

    this.$q.notify({
      color: 'info',
      textColor: 'white',
      icon: 'info',
      position: 'top',
      message: msg
    })
  }
}
