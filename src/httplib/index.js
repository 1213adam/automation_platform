import axios from "axios";
import router from "../router";
import {ElMessage} from 'element-plus'

axios.defaults.validateStatus = (status) => {
    return status >= 200 && status < 400  //设置200-399 之间的响应码为正常
}
axios.defaults.baseURL = "http://120.27.146.185:8076"

function login(username, password) {
    const config = {
        // url:"http://jsonplaceholder.typicode.com/posts/1",
        url: "/api/login/",
        method: 'post',
        data: {
            username,
            password
        }
    }
    axios(config).then(
        (response) => {
            console.log(response.data)
            ElMessage.success("登录成功")
            router.push("/")
            localStorage.setItem('islogin','yes')  //浏览器设置登录状态

        }
    ).catch((error) => {
        console.log(error.response.data)
        ElMessage.error("登录失败")
         localStorage.setItem('islogin','no')  //浏览器设置登录状态
    })

}
function logout() {
    const config={
        method:"get",
        url:"/api/logout"
    }
    axios(config).then(()=>{
        ElMessage.success("退出登录")
        router.push('/login')
        localStorage.setItem('islogin','no')
    }).catch(()=>{
        ElMessage.error("退出失败")
    })
}
export  {login,logout}