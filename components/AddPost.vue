<template>
  <div id="addPost">
    <v-dialog
      v-model="postDialog"
      persistent
      max-width="600px"
    >
      <template #activator="{ on, attrs }">
        <v-btn
          icon
          dark
          v-bind="attrs"
          v-on="on"
        >
          <v-icon>mdi-pencil-plus</v-icon>
        </v-btn>
      </template>
      <v-card>
        <form>
          <v-card-actions>
            <v-spacer />
            <v-btn
              color="blue darken-1"
              text
              @click="postDialog = false"
            >
              キャンセル
            </v-btn>
            <button>
              <v-btn
                color="blue darken-1"
                text
                @click="postDialog = false, addPost()"
              >
                投稿する
              </v-btn>
            </button>
          </v-card-actions>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col
                  cols="12"
                  sm="12"
                  md="12"
                >
                  <v-textarea
                    v-model="post.text"
                    label="ポートフォリオの説明"
                    required
                    counter="200"
                  />
                </v-col>
                <v-col
                  cols="12"
                  sm="12"
                  md="12"
                >
                  <v-text-field
                    v-model="post.portfolioUrl"
                    label="ポートフォリオのURL"
                  />
                </v-col>
                <v-col
                  cols="12"
                  sm="12"
                >
                  <v-select
                    v-model="post.category"
                    :items="['Webアプリ', 'Webデザイン','動画編集', 'イラスト', 'その他']"
                    label="ポートフォリオの種類"
                    required
                  />
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
        </form>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data () {
    return {
      postDialog: false,
      post: {
        text: '',
        portfolioUrl: '',
        snsAccount: '',
        category: '',
        created: '',
        user: ''
      }
    }
  },
  methods: {
    addPost () {
      console.log('addPost')
      this.$store.dispatch('addPost', this.post)
      this.post.text = ''
    }
  }
}
</script>

<style>

</style>
