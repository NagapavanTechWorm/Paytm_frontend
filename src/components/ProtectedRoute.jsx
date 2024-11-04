import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { authAtom } from "../../utils/atom";
import axios from "axios";
const ProtectedRoute = ({children}) => {
    const navigate = useNavigate();
    const [auth, setAuth] = useRecoilState(authAtom);
    const token = localStorage.getItem('token');
    if(!token){
        setAuth({
            isauth:false,
            user:null  
         });
         navigate('signin')
         return;
    }
    const check = async ()=>{
        try{
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/user/me`,{
                headers:{
                    'Authorization':`bearer ${token}`
                }
            });
            setAuth({
                isauth:true,
                user:response.data.message
            })
        }
        catch(error){
            setAuth({
                isauth:false,
                user:null  
             });
             localStorage.removeItem('token');
            console.log(error.response.message);
        }
    }
    if(!auth.isauth){
        check();
    }
    return auth.isauth ? children :null;
}
export default ProtectedRoute;