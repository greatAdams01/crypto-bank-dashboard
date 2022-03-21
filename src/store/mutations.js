export default {
  updateLoadingStatus (state, isLoading) {
    state.loading = isLoading
  },
  UPDATE_USER_STATE (state, data) {
    state.user = data
  },
  UPDATE_ACCOUNT_BALANCE (state, payload) {
    state.accountBalance = payload
  },
  UPDATE_ASSET (state, payload) {
    state.asset = payload
  },
  UPDATE_PACKAGES (state, payload) {
    state.packages = payload
  },
  UPDATE_COINS_LIST (state, payload) {
    state.coins = payload
  }
}