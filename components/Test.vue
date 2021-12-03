<template>
  <div>
    <v-text-field v-model="post" label="post" />
    <v-btn
      icon
      @click.prevent="submitPost()"
    >
      <v-icon>mdi-pencil-plus</v-icon>
    </v-btn>
    <ul>
      <li v-for="(post, index) in posts" :key="post.id">
        {{ post }}
        <v-btn
          icon
          @click="deletePost(index)"
        ><v-icon>mdi-trash-can-outline</v-icon>
        </v-btn>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      post: ''
    }
  },
  computed: {
    // eslint-disable-next-line vue/no-dupe-keys
    posts () {
      return this.$store.getters.posts
    }
  },
  methods: {
    submitPost () {
      if (this.post) {
        this.posts.push(this.post)
        this.post = ''
      }
    },
    deletePost (index) {
      this.posts.splice(index, 1)
    }
  }
}
</script>

<style>

</style>
