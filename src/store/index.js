import {createStore} from "vuex";

export default createStore(
    {
        state:
            {
                user: sessionStorage.getItem("user"),
                isLogin: sessionStorage.getItem("isLogin")
            },
        getters:{},
        mutations:
            {
                login:function (state,user){
                    state.user = user
                    state.isLogin = true
                    sessionStorage.setItem('user',user)
                    sessionStorage.setItem('isLogin',true)
                },
                logout:function (state){
                    state.user = null
                    state.isLogin = false
                    sessionStorage.removeItem('user')
                    sessionStorage.removeItem('isLogin')
                },
            },
        actions:{
            loginAction:function (context,user)
            {
                context.commit('login',user)
            },
            logoutAction:function (context)
            {
                context.commit('logout')
            }
        }
    }
)