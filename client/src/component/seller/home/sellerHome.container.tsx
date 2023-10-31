import SellerHomePageUI from "./sellerHome.presenter";
import { useRouter } from "next/router";

export default function SellerHomePage():JSX.Element{
    const router = useRouter();

    const onClickRegister = () => {
        router.push('/seller/register')
    }

    return(
        <SellerHomePageUI
            onClickRegister = {onClickRegister}
         />
    )
}