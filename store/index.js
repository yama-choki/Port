import firebase from "~/plugins/firebase";

const db = firebase.firestore();
const postsRef = db.collection("posts");

export const state = () => ({
  posts: [
    // { text: 'Greyhound divisely hello coldly fonwderfully', userName: 'なまえ', userIcon: 'https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light', category: 'Webアプリ', url: '', image: null, created: '2021-11-19', userAccount: '', id: 'id' }
  ],
  user: null,
});

export const getters = {
  posts: (state) => {
    return state.posts;
  },
};

export const actions = {
  submitPost({ dispatch }, post) {
    console.log(post);
    postsRef
      .add({
        title: post.title,
        text: post.text,
        created: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then(() => {
        console.log(this.post);
        dispatch("getPosts");
      });
  },
  getPosts({ commit }) {
    postsRef.get().then((res) => {
      const posts = [];
      res.forEach((post) => {
        const data = post.data();
        posts.push({
          title: data.title,
          text: data.text,
          created: data.created,
          id: post.id,
        });
      });
      console.log(posts);
      commit("getPosts", posts);
    });
  },
  deletePost({ dispatch }, id) {
    postsRef.doc(id).delete();
    dispatch("getPosts");
  },
};

export const mutations = {
  getPosts(state, posts) {
    state.posts = posts;
  },
  deletePost(state, index) {
    state.posts.splice(index, 1);
  },
};
