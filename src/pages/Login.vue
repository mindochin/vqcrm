<template>
  <q-page
    padding
    class="row bg-blue-grey-4 window-height window-width justify-center items-center"
  >
    <div class="col-xs-12 col-sm-6 col-md-3">

      <h5 class="text-h5 text-white q-my-md">Вход в систему</h5>

      <q-form
        @submit="onSubmit"
        @reset="onReset"
        ref="formLogin"
      >
        <q-card
          square
          bordered
          class="q-pa-xs shadow-1"
        >
          <q-card-section>

            <q-input
              filled
              v-model.trim="login"
              label="Логин *"
              lazy-rules
              :rules="loginRules"
            />

            <q-input
              filled
              type="password"
              v-model.trim="password"
              label="Пароль *"
              lazy-rules
              counter
              :rules="passwordRules"
            />
          </q-card-section>
          <q-card-actions class="q-px-md">
            <q-btn
              label="Submit"
              type="submit"
              color="primary"
              :loading="loading"
            >
              <span slot="loading">
                <q-spinner class1="on-left" /></span>
            </q-btn>
            <q-btn
              label="Reset"
              type="reset"
              color="primary"
              flat
              class="q-ml-sm"
            />
          </q-card-actions>
        </q-card>
      </q-form>

    </div>
  </q-page>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      login: '',
      password: '',
      loading: false,
      loginRules: [val => (val && val.length > 1) || 'Логин обязателен'],
      passwordRules: [
        val => (val !== null && val !== '') || 'Пароль обязателен',
        val => (val.length >= 6) || 'Пароль не менее 6 символов']
    }
  },
  methods: {
    onSubmit () {
      this.$refs.formLogin.validate().then(success => {
        if (success) {
          this.loading = true
          const formData = {
            login: this.login,
            password: this.password
          }

          this.$store.dispatch('login', formData)
            .then((res) => {
              console.log(res)
              this.$router.push('/')
            })
            .catch((e) => {
              this.loading = false
              this.$toastWarning(e)
            })
        }
      })
    },

    onReset () {
      this.login = ''
      this.password = ''
      this.$refs.formLogin.resetValidation()
    }
  }
}
</script>
