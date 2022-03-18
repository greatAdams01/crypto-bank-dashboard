export default {
  updateLoadingStatus (state, isLoading) {
    state.loading = isLoading
  },
  updateUserState (state, data) {
    state.user = data
  }
}