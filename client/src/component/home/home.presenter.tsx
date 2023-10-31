import styles from './home.module.css';
import { IHomePageUIProps } from './home.types';
import Image from '/img/home/background.png';

export function HomePageUI (props:IHomePageUIProps):JSX.Element {
    return (
        <div className={styles.homeBody}>
            {/* <div className={styles.homeWrapper}>
                <div className={styles.titleContainer}>
                    <img src='/img/home/homelogos.png' className={styles.logo} />
                    <div className={styles.logoTitle}>
                        IT-Farm
                    </div>
                </div>
                <div className={styles.buttonContainer}>
                    <button onClick={props.onCLickCustom} className={styles.selectButton}>사러왔어요</button>
                    <button onClick={props.onClickAdmin} className={styles.selectButton}>판매할래요</button>
                </div>
            </div> */}
            <div className={styles.homeWrapper}>
                <div className={styles.buttonContainer}>
                    <button className={styles.selectButton}>사러왔어요</button>
                    <button onClick={props.onClickAdmin} className={styles.selectButton}>팔러왔어요</button>
                </div>
                
            </div>
            
        </div>
    )
}