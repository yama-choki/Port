<template>
  <section id="index">
    <v-app>
      <header>
        <Header />
      </header>
      <section id="container">
        <main>
          <!-- <Posts /> -->
          <Test />
        </main>
      </section>
    </v-app>
  </section>
</template>

<script>
import HomeHeader from '~/components/Header.vue'
export default {
  // eslint-disable-next-line vue/no-unused-components
  components: { HomeHeader }
}
</script>

<style scoped>
#index{
  max-width: 1263px;
  margin: 0 auto;
}
main{
  margin: 0 auto;
}
header{
  margin: 0 auto;
}

#container{
  margin-top: 64px;
  display:flex
}
</style>
