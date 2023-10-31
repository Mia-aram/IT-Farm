import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { ChangeEvent } from "react";
import { useRecoilState } from "recoil";
import { loginState } from "@/src/store/states";
import RegisterPageUI from "./register.presenter";
import axios from "axios";

export default function RegisterPage(): JSX.Element {
    const router = useRouter()

    const [nickName, setNickName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [isLogin, setIsLogin] = useState(true) /* 로그인창 true, 회원가입창 false */

    const [localLogin, setLocalLogin] = useRecoilState(loginState)

    const onChangeNickName = (event: ChangeEvent<HTMLInputElement>) => {
        setNickName(event.target.value)
    }

    const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value)
    }

    const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
    }

    const onClickLoginState = () => {
        setIsLogin((prev) => !prev)
    }

    const onClickMoveHome = () => {
        router.push('/')
    }


    const submitLogin = async () => {
        try{
            const response = await axios.post('http://localhost:8000/users/login/' ,{
                email : email,
                password : password,
            })
            localStorage.setItem('nickname', response.data.nickname)
            localStorage.setItem('loginState', 'true')
            setLocalLogin(true)
            console.log(response)
            if (localStorage.getItem('userState') === 'buyer') {
                router.push('/purchase')
                return
            }
    
            if (localStorage.getItem('userState') === 'seller') {
                router.push('/seller')
                return
            }
        }catch(error){
            console.log('error',error)
        }    
    }

    const submitRegister = async () => {

        try {
            const response = await axios.post('http://localhost:8000/users/register/',{
            nickname : nickName,
            email : email,
            password : password,
            user_type : localStorage.getItem('userState')
            })

            if (response.status === 201){
                setNickName('')
                setEmail('')
                setPassword('')
                onClickLoginState()
            }
        }catch(error){
            console.log(error,'error')
        }
    }

    return (
        <RegisterPageUI
            onChangeNickName={onChangeNickName}
            onChangeEmail={onChangeEmail}
            onChangePassword={onChangePassword}
            onClickLoginState={onClickLoginState}
            onClickMoveHome={onClickMoveHome}
            submitLogin={submitLogin}
            isLogin={isLogin}
            nickName={nickName}
            email={email}
            password={password}
            submitRegister = {submitRegister}
        />
    )
}