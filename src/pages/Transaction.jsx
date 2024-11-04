import React from 'react'
import { useState } from 'react'
import { FaUser, FaRupeeSign } from 'react-icons/fa'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRecoilValueLoadable } from 'recoil'
import { authAtom } from '../../utils/atom'
import Loading from '../components/Loading'
const Transaction = () => {
    const [amount, setAmount] = useState('')
    const [showModal, setShowModal] = useState(false)
    const [password, setPassword] = useState('')
    const [showSuccess, setShowSuccess] = useState(false)

    const {id,email} = useParams();
    const navigate = useNavigate();
    const user = useRecoilValueLoadable(authAtom);
    console.log(user.contents)

    if(user.state == 'loading') return <Loading/>

  
    const handleTransfer = () => {
      if (!amount) return
      setShowModal(true)
    }

    const verifyPass = async()=>{
        try{
            const response = await axios.post(`${import.meta.env.VITE_API_URL}/user/verify`,{
                password: password,
                id:user.contents.user._id
            },{
                headers:{
                    Authorization:`bearer ${localStorage.getItem('token')}`
                }
            });
            console.log(response.data.message)
            if(!response.data.message){
                toast.error("wrong password")
                return; 
            }
            return response.data.message;
        }
        catch(error){
            console.log(error.message)
            return false
        }
    }

    const transfer = async()=>{
        try{
            const response = await axios.put(`${import.meta.env.VITE_API_URL}/transaction/transfer`,{
                senderId:user.contents.user._id,
                receiverId:id,
                amt:parseInt(amount)
            },{
                headers:{
                    Authorization:`bearer ${localStorage.getItem('token')}`,
                }
            });
            console.log(response.data);
            setShowModal(false)
            setShowSuccess(true)
            setTimeout(() => {
                setShowSuccess(false)
                setAmount('')
                setPassword('')
            }, 2000)
            navigate("/dashboard")
        }
        catch(error){
            toast.error(error.response.data.message)
            console.log(error.message)
        }
    }
  
    const handleConfirm = async() => {
      if (!password) return
      const status = await verifyPass();
      if(status){
        await transfer();
      }
    }
  
    return (
      <div className="min-h-[90vh] bg-gray-100 flex items-center justify-center p-4">
        <ToastContainer/>
        <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
          {/* User Info */}
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-blue-100 p-3 rounded-full">
              <FaUser className="text-blue-600 text-xl" />
            </div>
            <div>
              <h2 className="text-lg font-semibold">{email}</h2>
            </div>
          </div>
  
          {/* Amount Input */}
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Enter Amount
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaRupeeSign className="text-gray-500" />
              </div>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="0.00"
              />
            </div>
          </div>
  
          {/* Transfer Button */}
          <button
            onClick={handleTransfer}
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Transfer Money
          </button>
  
          {/* Password Modal */}
          {showModal && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
              <div className="bg-white rounded-lg p-6 w-full max-w-sm">
                <h3 className="text-lg font-semibold mb-4">Enter Password</h3>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-blue-500"
                  placeholder="Enter your password"
                />
                <div className="flex gap-3">
                  <button
                    onClick={() => setShowModal(false)}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleConfirm}
                    className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                  >
                    Confirm
                  </button>
                </div>
              </div>
            </div>
          )}
  
          {/* Success Message */}
          {showSuccess && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="bg-white rounded-lg p-6 text-center">
                <div className="text-green-500 text-2xl mb-2">✓</div>
                <p className="text-lg font-semibold">Money Sent Successfully!</p>
              </div>
            </div>
          )}
        </div>
      </div>
    )
}

export default Transaction