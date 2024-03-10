import axios from "axios";
import { jwtDecode } from "jwt-decode"// import { jwtDecode } from "jwt-decode";
// import jwt_decode from 'jwt-decode'
// import jwt_decode from 'jwt-decode'
export const getApii=async(data,callback)=>{
    return await axios.post('https://fakestoreapi.com/auth/login',data)
    .then(a=>
        {
            callback(true,a.data.token)
            console.log(a)
            return a
        }
        )
        .catch(a=>{
            callback(false,a)
        })
}
export const getUsername=(token)=>{
    // const decoded =jwtDecode(token);
    // const decoded = jwtDecode(token);
    // console.log(decoded)
    console.log('dhuasdyu')

}
// export const getUsername =(token)=>{
//     const decoded =jwt_decode(token)
//     console.log(decoded)
//     return decoded
// }


