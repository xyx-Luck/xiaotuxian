export default{
    namespaced:true,
    state(){
        return{
            profile:{
                id:'',
                avatar:'',
                account:'',
                mobile:'',
                token:''

            }
        }
    },
    mutations:{
        // updateProfile(state,newVal){
        //     state.profile=newVal
        // }
    }
}