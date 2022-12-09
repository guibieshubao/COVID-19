import axios from 'axios'

const server =axios.create({
    baseURL:"http://localhost:3333"//接口端口

})

//!bug写法------------------------- 1获取地区接口
// export const getAPiList=()=>{
//     server.get('/api/list').then(res=>res.data)
// }


// 接口一
export function getAPiList(){
    return server.get('/api/list')
}

// 接口二
export function getApiGDList(){
    return server.get('/api/list1')
}

// 接口三：世界疫情
export function getWorldList(){
    return server.get('/api/list2')
}
