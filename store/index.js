import firebase from '~/plugins/firebase'

// const db = firebase.firestore()
// const postsRef = db.collection('posts')

export const state = () => ({
  posts: [
    { text: 'Greyhound divisely hello coldly fonwderfully', userName: 'なまえ', userIcon: 'https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light', category: 'Webアプリ', url: '', image: null, created: '2021-11-19', userAccount: '', id: 'id' }
  ],
  user: null,
  userUid: null,
  userName: null
})

export const getters = {
  posts: (state) => {
    return state.posts
  }
}

export const mutations = {
  setUser (state, user) {
    state.user = user
    console.log('setUser')
  },
  setUserUid (state, userUid) {
    state.userUid = userUid
    console.log('setUserUid')
  },
  setUserName (state, userName) {
    state.userName = userName
    console.log('setUserName')
  }
}

export const actions = {
  loginGoogle ({ commit }) {
    // eslint-disable-next-line no-console
    console.log('Google login action')
    const provider = new firebase.auth.GoogleAuthProvider()
    firebase.auth().signInWithPopup(provider).then(function (result) {
      const user = result.user
      // eslint-disable-next-line no-console
      console.log('success : ' + user.uid + ' : ' + user.displayName)
      commit('setUser', user)
      // commit('setUserUid', user.uid)
      // commit('setUserName', user.displayName)
    }).catch(function (error) {
      const errorCode = error.code
      // eslint-disable-next-line no-console
      console.log('error : ' + errorCode)
    })
  },
  loginTwitter ({ commit }) {
    // eslint-disable-next-line no-console
    console.log('Twitter login action')
    const provider = new firebase.auth.TwitterAuthProvider()
    firebase.auth().signInWithPopup(provider).then(function (result) {
      const user = result.user
      // eslint-disable-next-line no-console
      console.log('success : ' + user.uid + ' : ' + user.displayName)
      console.log(user)
      commit('setUserUid', user.uid)
      commit('setUserName', user.displayName)
    }).catch(function (error) {
      const errorCode = error.code
      // eslint-disable-next-line no-console
      console.log('error : ' + errorCode)
    })
  }
}
