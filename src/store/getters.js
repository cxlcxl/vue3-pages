const getters = {
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  user_id: state => state.user.user_id
}
export default getters
