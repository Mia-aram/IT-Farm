import SellerRegisterPageUI from "./sellerRegister.presenter";
import { ChangeEvent, useState } from "react";


export default function SellerRegisterPage():JSX.Element{
    const [isOpen, setIsOpen] = useState(false)
    const [formData, setFormData] = useState({
        q1: '',
        q3: '',
        detailadress: '',
        farmName: '',
        area: '',
        mailNumber: '',
        quantity: ''
      });

    const onToggleModal = () => {
        setIsOpen((prev) => !prev)
    }

    const handleComplete = (data:any) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            q1: data.zonecode,
            q3: data.address
          }));

        onToggleModal(); // 주소창은 자동으로 사라지므로 모달만 꺼주면
    }

    const onChangeDetailadress = (event:ChangeEvent<HTMLTextAreaElement>) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            detailadress: event.target.value
          }));
    }

    return (
        <SellerRegisterPageUI
            onToggleModal = {onToggleModal}
            q1 = {formData.q1}
            q3 = {formData.q3}
            detailadress = {formData.detailadress}
            isOpen = {isOpen}
            handleComplete = {handleComplete}
            onChangeDetailadress = {onChangeDetailadress}
         />
    )
}