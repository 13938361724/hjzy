export default {
    add_token(state,data){
      state.token = data
    },
    remove_token(state){
      state.token = ''
    },
    add_user_data(state,data){
      state.user_data = data
    },
  
    remove_user_data(state){
      state.user_data = ''
    },
  
  }