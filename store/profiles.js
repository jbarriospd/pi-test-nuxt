import ProfileService from '@/services/ProfileService.js'
export const state = () => ({
  users: [],
  user: {}
})
export const mutations = {
  SET_USERS(state, users) {
    state.users = users
  },
  SET_USER(state, user) {
    state.user = user
  }
}
export const actions = {
  fetchEvents({ commit }) {
    return ProfileService.getUsers().then((response) => {
      commit('SET_USERS', response.data)
    })
  },
  fetchEvent({ commit }, id) {
    return ProfileService.getUser(id).then((response) => {
      commit('SET_USER', response.data)
    })
  }
}
