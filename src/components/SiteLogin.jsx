import React, { useContext } from 'react';
import { FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from '../provider/AuthProvider';
const SiteLogin = () => {
    const {loginWithGoogle,setUser,verifiedUser} = useContext(AuthContext)

    const handleGoogleLogin = () =>{
        loginWithGoogle()
        .then(result =>{
            const user = result.user;
            console.log(user);
            setUser(user)
            verifiedUser()
        })
        .catch(error=>{
            console.log(error);
            
        })
        
    }

    return (
        <div className='*:w-full space-y-3'>
            <p className='font-bold text-2xl mb-3'>Login With</p>
            <button onClick={handleGoogleLogin} className='btn text-xl font-semibold'><FaGoogle /> Login With Google</button>
            <button className='btn text-xl font-semibold'><FaGithub/> Login With Github</button>
        </div>
    );
};

export default SiteLogin;