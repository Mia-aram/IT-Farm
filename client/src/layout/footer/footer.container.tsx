import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { loginState } from "@/src/store/states";
import FooterPageUI from "./footer.presenter";

export default function FooterPage():JSX.Element{
    const router = useRouter()

    const [localLogin, setLocalLogin] = useRecoilState(loginState)

    const onClickHome = ()=> {
        router.push('/')
    }

    const onClickRegister = ()=> {
        router.push('/register')
    }

    const onClickLogout = () => {
        localStorage.setItem('loginState', 'false')
        setLocalLogin(false)
        alert('로그아웃 하였습니다.')
    }

    return(
        <FooterPageUI
            onClickHome = {onClickHome}
            onClickRegister = {onClickRegister}
            onClickLogout = {onClickLogout}
            localLogin = {localLogin}
         />
    )
}