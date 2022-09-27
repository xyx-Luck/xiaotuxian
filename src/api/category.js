import request from './request'
export const findAllCategory=()=>{
    return request('/home/category/head','get')
}
// 获取品牌弹出行数据
export const findBrandCategory=(limit=6)=>{
    return request('/home/brand','get',{limit})
}

//获取新鲜好物数据
export const findNew=(limit=4)=>{
    return request('/home/new','get',{limit})
}
// 获取人气推荐数据
export const findHot=(limit=4)=>{
    return request('/home/hot','get',{limit})
}

// 获取品牌推荐
export const findBrand=(limit=10)=>{
    return request('/home/brand','get',{limit})
}

// 获取商品区块
export const findGoods=()=>{
    return request('/home/goods','get')
}

//最新专题
export const findSpecial=()=>{
    return request('/home/special','get')
}