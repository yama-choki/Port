<template>
  <div>
    <div>{{ $store.state.posts }}</div>
    <v-text-field v-model="post.title" label="title" />
    <v-text-field v-model="post.text" label="text" />
    <v-btn icon @click.prevent="submitPost()">
      <v-icon>mdi-pencil-plus</v-icon>
    </v-btn>
    <ul>
      <li v-for="(post, index) in posts" :key="post.id">
        <p>{{ post.title }}</p>
        <p>{{ post.text }}</p>
        <p v-if="post.created">{{ post.created.toDate() | dateFilter }}</p>        
        <v-btn icon @click="deletePost(index)">
          <v-icon>mdi-trash-can-outline</v-icon>
        </v-btn>
      </li>
    </ul>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  data() {
    return {
      post: {
        title: "",
        text: "",
        created: "",
      },
    };
  },
  async created() {
    await this.getPosts();
  },
  computed: {
    posts() {
      return this.$store.getters.posts;
    },
  },
  filters: {
    dateFilter: function(date){
      return moment(date).format('YYYY/MM/DD HH:mm:ss')
    }
  },
  methods: {
    getPosts() {
      this.$store.dispatch("getPosts");
    },
    submitPost() {
      if (this.post) {
        console.log(this.post);
        this.$store.dispatch("submitPost", this.post);
      }
    },
    deletePost(index) {
      const postId = this.posts[index].id
      this.$store.commit("deletePost", postId);
    },
  },
};
</script>

<style></style>
