export default {
  updateLoadingStatus (state, isLoading) {
    state.loading = isLoading
  },
  UPDATE_USER_STATE (state, data) {
    state.user = data
  },
  UPDATE_ACCOUNT_BALANCE (state, payload) {
    state.accountBalance = payload
  }
}