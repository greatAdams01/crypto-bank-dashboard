export default {
  updateLoadingStatus (state, isLoading) {
    state.loading = isLoading
  },
  UPDATE_USER_STATE (state, data) {
    state.user = data
  }
}