import {findAllCategory} from '../../api/category'
import {topCategory} from '../../api/constants'
export default{
    namespaced:true,
    state(){
        return{
            // list:topCategory.map((item)=>{item.name})
            list:[]
        }
    },
    mutations:{
        setCategoryList(state,newVal){
            state.list=newVal
        },
        //修改当前一级分类的数据为true
        show(state,id){
            //查找state.list的id和当前点击的id相同，open的值修改为true 
            const category=state.list.find((category)=>category.id==id);
            category.open=true
        },
        //修改当前一级分类的数据为false
        hide(state,id){
            //查找state.list的id和当前点击的id相同，open的值修改为false 
            const category=state.list.find((category)=>category.id==id);
            console.log(category)
            category.open=false;
        }
    },
    actions:{
        async getCategoryList(context){
           const {result}= await findAllCategory();
           //给数据添加一个open属性，控制二级菜单的显示与隐藏
           result.forEach((item)=>{
             item.open=false
           })
           console.log(result)
           context.commit('setCategoryList',result)
        }
    }
}