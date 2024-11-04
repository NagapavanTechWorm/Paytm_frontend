//utils/atom.jsx
import axios from "axios";
import { useEffect } from "react";
import { atom, selector } from "recoil";


export const authAtom = atom({
    key:"Auth",
    default:{
       isauth:null,
       user:null  
    }
})

export const userAtom = atom({
    key: "users",
    default: selector({
        key: "usersSelector",
        get: async () => { 
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/user`, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                });
                console.log(response.data.users);
                return response.data.users; 
            } catch (error) {
                console.error(error.response?.message || error.message);
                return null; 
            }
        }
    }),
});