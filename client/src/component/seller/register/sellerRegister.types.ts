import { ChangeEvent } from "react";

export interface ISellerRegisterPageUIProps {
    onToggleModal : () => void;
    q1 : string;
    q3 : string;
    detailadress : string;
    isOpen : boolean;
    handleComplete : (data:any) => void;
    onChangeDetailadress : (event:ChangeEvent<HTMLTextAreaElement>) => void;
}