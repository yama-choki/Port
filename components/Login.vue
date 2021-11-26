<template>
  <div id="login">
    <div class="text-center">
      <v-dialog
        v-model="loginDialog"
        width="500"
      >
        <template #activator="{ on, attrs }">
          <v-btn
            dark
            v-bind="attrs"
            icon
            v-on="on"
          >
            <v-icon>mdi-login</v-icon>
          </v-btn>
        </template>

        <v-card>
          <v-card-title class="text-h5 grey lighten-2">
            ログイン
          </v-card-title>

          <div class="container">
            <!-- <p class="title is-1 is-spaced">user:{{ $store.getters['login/getLoginUser'] }}</p> -->
            <button @click="loginGoogle()">
              Google ログイン
            </button>
            <button @click="loginTwitter()">
              Twitter ログイン
            </button>
            <!-- <button @click="loginFacebook()">
              Facebook ログイン
            </button> -->
          </div>

          <v-divider />

          <v-card-actions>
            <v-spacer />
            <v-btn
              color="primary"
              text
              @click="loginDialog = false"
            >
              I accept
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loginDialog: false
    }
  },
  methods: {
    loginTwitter () {
      // eslint-disable-next-line no-console
      console.log('Twitter login')
      this.$store.dispatch('loginTwitter')
      this.loginDialog = false
    },
    loginGoogle () {
      // eslint-disable-next-line no-console
      console.log('Google login')
      this.$store.dispatch('loginGoogle')
      this.loginDialog = false
    }
  }
}
</script>

<style scoped>
.container{
  text-align: center;
}
</style>
