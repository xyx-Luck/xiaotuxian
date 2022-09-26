// 数据懒加载函数
import { useIntersectionObserver } from "@vueuse/core"
import {ref} from 'vue'
export const useLazyData=(apiFn)=>{
    //被观察的对象
    const target=ref(null);
    //页面加载的数据
    const result=ref([]);
    const {stop}=useIntersectionObserver(
        target,
        ([{isIntersecting}],observerElement)=>{
            //isIntersecting  是否进入可视区
            if(isIntersecting){
                stop();//如果已经进入可视区，就停止监视
                // 调用api接口获取函数
                apiFn().then(data=>{
                    console.log(data)
                    result.value=data.result;
                })
            }
        }
    )
    return {target,result};
}