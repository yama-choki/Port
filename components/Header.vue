<template>
  <v-app-bar
    color="#00CCCC"
    dark
    max-width="1263px"
    app
  >
    <v-toolbar-title>
      Port
    </v-toolbar-title>

    <v-spacer />
  </v-app-bar>
</template>

<script>
export default {
  data () {
    return {
      dialog: false
    }
  },
  methods: {
    loginGoogle () {
      // eslint-disable-next-line no-console
      console.log('Google login')
      this.$store.dispatch('header/loginGoogle')
      this.dialog = false
    },
    loginTwitter () {
      // eslint-disable-next-line no-console
      console.log('Twitter login')
      this.$store.dispatch('header/loginTwitter')
      this.dialog = false
    },
    loginFacebook () {
      // eslint-disable-next-line no-console
      console.log('Facebook login')
      this.$store.dispatch('header/loginFacebook')
      this.dialog = false
    }
  }
}
</script>

<style lang="scss" scoped>

.container {
  margin: 0 auto;
  display: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

</style>
