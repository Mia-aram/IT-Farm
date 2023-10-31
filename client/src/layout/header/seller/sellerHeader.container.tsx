import SellerHeaderPageUI from "./sellerHeader.presenter";
import { useEffect, useState, useRef, useMemo } from "react";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { loginState } from "@/src/store/states";
import throttle from "lodash/throttle";

export default function SellerHeaderPage():JSX.Element {
    /* 내렸을때 true 올릴때 false */
    const [visible, setVisible] = useState(true);

    const beforeScrollY = useRef(0);

    const router = useRouter();

    const [localLogin, setLocalLogin] = useRecoilState(loginState)

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    
    const handleScroll = useMemo(
      () =>
        throttle(() => {
          const currentScrollY = window.scrollY;
          if (beforeScrollY.current < currentScrollY) {
            setVisible(false);
          } else {
            setVisible(true);
          }
          beforeScrollY.current = currentScrollY;
        }, 250),
      [beforeScrollY]
    );

    const onClickLogout = ()=> {
        localStorage.setItem('loginState', 'false')
        setLocalLogin(false)
        router.push('/')
    }

    const onClickLogo = () => {
      router.push('/seller')
    }


    return(
        <SellerHeaderPageUI
            visible = {visible}
            onClickLogout = {onClickLogout}
            onClickLogo = {onClickLogo}
         />
    )
}