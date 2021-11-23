<template>
  <div id="posts">
    <ul>
      <li v-for="post in posts" :key="post.id">
        <v-card
          class="mx-2"
          max-width="600"
          outlined
        >
          <v-list-item three-line>
            <v-list-item-content>
              <div class="postTop">
                <p>{{ post.category }}</p>
                <p>{{ post.created }}</p>
              </div>
              <v-list-item-title class="text-h6 mb-1">
                <div class="postUser">
                  <img :src="post.userIcon" alt="">
                  <p>あいうえおあいうえおあいうえおあいうえお</p>
                </div>
              </v-list-item-title>
              <v-list-item-subtitle>{{ post.text }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-card-actions>
            <v-btn
              outlined
              rounded
              text
            >
              Button
            </v-btn>
          </v-card-actions>
        </v-card>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    posts () {
      return this.$store.getters.posts
    }
  }
}
</script>

<style>
#posts{
  margin: 0 auto;
  max-width: 600px;
}

#posts ul {
  list-style: none;
  margin: 0px;
  padding: 0;
  width: 100%;
}

#posts ul li{
  margin-bottom: 18px;
}

.postTop{
  display: flex;
  justify-content: space-between;
}

.postTop p{
  line-height: 14px;
  font-size: 14px;
  margin-bottom: 8px;
}

.postUser{
  display: flex;
}
.postUser img{
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: solid #00CCCC 2px;
}
.postUser p{
  font-size: 16px;
  width: 1px;
  height: 36px;
  margin: 0 4px;
  justify-content: wrap;
  display: inline-block;
}
</style>
