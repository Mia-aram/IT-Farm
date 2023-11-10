import styles from './home.module.css';
import { IHomePageUIProps } from './home.types';

export function HomePageUI (props:IHomePageUIProps):JSX.Element {
    return (
        <div className={styles.homeBody}>
            <div className={styles.homeWrapper}>
                <div className={styles.titleContainer}> 
                    <img src='/img/home/homelogo.png' className={styles.logo} />
                </div>
                <div className={styles.buttonContainer}>
                    <button onClick = {props.onCLickCustom} className={styles.selectButton}>사러왔어요</button>
                    <button onClick={props.onClickAdmin} className={styles.selectButton}>팔러왔어요</button>
                </div>
            </div>      
        </div>
    )
}