import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { authAtom } from "../../utils/atom";
import axios from "axios";
import { useEffect } from "react";

const ProtectedRoute = ({ children }) => {
    const navigate = useNavigate();
    const [auth, setAuth] = useRecoilState(authAtom);
    const token = localStorage.getItem("token");

    useEffect(() => {
        if (!token) {
            setAuth({ isauth: false, user: null });
            navigate("signin");
            return;
        }

        const check = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/user/me`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setAuth({
                    isauth: true,
                    user: response.data.message,
                });
            } catch (error) {
                setAuth({ isauth: false, user: null });
                localStorage.removeItem("token");
                navigate("signin"); // Redirect to sign-in on error
                console.error(error.response?.message || error.message);
            }
        };

        check(); 
    }, [navigate, setAuth, token]);

    return auth.isauth ? children : null;
};

export default ProtectedRoute;
