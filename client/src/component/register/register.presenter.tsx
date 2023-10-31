import styles from './register.module.css'
import { IRegisterPageUIProps } from './register.types'
import {ArrowLeftOutlined} from '@ant-design/icons'

export default function RegisterPageUI (props:IRegisterPageUIProps):JSX.Element {
    return(
        <div className={styles.wrapper}>
            <div className={styles.container}>
              <div className={`${styles.formContainer} ${styles.signInContainer}`}>
                <ArrowLeftOutlined onClick={props.onClickMoveHome} className={styles.backIcon} />
                <div className={styles.form} >
                  {props.isLogin ? <h1 className={styles.title}>로그인</h1>:<h1 className={styles.title}>회원가입</h1>}
                  {props.isLogin ? <h1 onClick={props.onClickLoginState} className={styles.titleSub}>회원가입 하러가기</h1>:<h1 onClick={props.onClickLoginState} className={styles.titleSub}>로그인 하러가기</h1>}
                  <div className={styles.socialContainer}>
                    {/* <a href="/" className={`${styles.social} ${styles.a}`}><FacebookFilled className= {`${styles.fab}  ${styles.i}`} /></a>
                    <a href="/" className={`${styles.social} ${styles.a}`}><GoogleCircleFilled className= {`${styles.fab}  ${styles.i}`} /></a> */}
                  </div>
                  {!props.isLogin && <input value={props.nickName} onChange={props.onChangeNickName} className={styles.input} type="text" placeholder="NickName" />}
                  <input value={props.email} onChange={props.onChangeEmail} className={styles.input} type="email" placeholder="Email" />
                  <input value= {props.password} onChange={props.onChangePassword} className={styles.input} type="password" placeholder="Password" />
                  {props.isLogin? <button onClick={props.submitLogin} className={styles.button}>로그인</button> : <button onClick={props.submitRegister}  className={styles.button}>회원가입</button>}
                </div>
              </div>
              <div className={styles.overlayContainer}>
                <div className={styles.overlay}>
                  <div className={`${styles.overlayPanel} ${styles.overlayRight}`}>
                    <h1 className={styles.h1}>환영합니다!</h1>
                    {props.isLogin ? <p className={styles.p}>회원가입 하러가기</p> : <p className={styles.p}>로그인 하러가기</p>}
                    {props.isLogin ? <button onClick={props.onClickLoginState} className={styles.buttonWhite} >클릭!</button>
                    :<button onClick={props.onClickLoginState} className={styles.buttonWhite} >클릭!</button>
                    }                       
                  </div>
                </div>
              </div>
            </div>
        </div>
    )
}