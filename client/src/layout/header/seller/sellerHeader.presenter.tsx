import styles from './sellerHeader.module.css'
import { ISellerHeaderPageUIProps } from './sellerHeader.types'

export default function SellerHeaderPageUI(props:ISellerHeaderPageUIProps):JSX.Element{
    return(
        <div className={`${styles.body} ${props.visible ? '' : styles.hidden}`}>
            <div onClick={props.onClickLogo} className={styles.headerTitle}>
                IT-Farm 사장님
            </div>
            <div className={styles.headerInfoContainer}>
                <div className={styles.infoBox}>
                    <div onClick={props.onClickLogout} className={styles.categorieBox}>
                        로그아웃
                    </div>
                    <div className={styles.categorieBox}>
                        내정보
                    </div>
                </div>
            </div>
        </div>
    )
}