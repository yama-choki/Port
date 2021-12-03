// import firebase from '~/plugins/firebase'

// const db = firebase.firestore()
// const postsRef = db.collection('posts')

export const state = () => ({
  posts: [
    // { text: 'Greyhound divisely hello coldly fonwderfully', userName: 'なまえ', userIcon: 'https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light', category: 'Webアプリ', url: '', image: null, created: '2021-11-19', userAccount: '', id: 'id' }
    'are', 'kore', 'sore'
  ],
  user: null
})

export const getters = {
  posts: (state) => {
    return state.posts
  }
}

export const actions = {
}

export const mutaions = {
  submitPost (state, post) {
    state.posts.push(post)
  },
  deletePost (state, index) {
    state.posts.splice(index, 1)
  }
}
