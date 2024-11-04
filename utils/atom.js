//utils/atom.jsx
import { atom, selector } from "recoil";


export const authAtom = atom({
    key:"Auth",
    default:{
       isauth:null,
       user:null  
    }
})

