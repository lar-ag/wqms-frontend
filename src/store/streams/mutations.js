export const updateAll = (state, streams) => {
  state.all = streams
  state.count = streams.length
}
