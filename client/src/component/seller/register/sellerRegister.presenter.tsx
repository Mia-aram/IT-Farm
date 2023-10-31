import styles from './sellerRegister.module.css'
import { Select, Modal } from 'antd'
import { ISellerRegisterPageUIProps } from './sellerRegister.types'
import DaumPostcode from 'react-daum-postcode'

export default function SellerRegisterPageUI(props:ISellerRegisterPageUIProps):JSX.Element {
    // const handleChange = (value: string) => {
    //     console.log(`selected ${value}`);
    //   };

    return(
        <div className={styles.body}>
            <div className={styles.wrapper}>
                <span className={styles.registerTitle}>농장 등록하기</span>
                <div className={styles.registerSection1}>
                    <div className={styles.registerBox}>
                        <div className={styles.registerInputBox}>
                            <span className={styles.registerInputTitle}>농장명</span>
                            <input className={styles.registerInput} type='text'/>
                            <span className={styles.error}>농장명을 입력해주세요.</span>
                        </div>
                        <div className={styles.registerInputBox}>
                            <span className={styles.registerInputTitle}>평수</span>
                            <input className={styles.registerInput} type='text'/>
                            <span className={styles.error}>평수를 입력해주세요.</span>
                        </div>
                    </div>
                    <div className={styles.registerBox}>
                        <div className={styles.registerInputBox}>
                            <span className={styles.registerInputTitle}>재식수량</span>
                            <input className={styles.registerInput} type='text'/>
                            <span className={styles.error}>재식수량을 입력해주세요.</span>
                        </div>
                    </div>
                </div>
                <div className={styles.registerSection1}>
                    <div className={styles.registerBox}>
                        <div className={styles.registerInputBox}>
                            <span className={styles.registerInputTitle}>재배방법</span>
                            <Select
                                style={{ width: 120 }}
                                defaultValue={''}
                                // onChange={handleChange}
                                options={[
                                  { value: '토경', label: '토경' },
                                  { value: '수경', label: '수경' },
                                ]}
                            />
                            <span className={styles.error}>재배방법을 선택해주세요.</span>
                        </div>
                        <div className={styles.registerInputBox}>
                            <span className={styles.registerInputTitle}>친환경 유무</span>
                            <Select
                                style={{ width: 120 }}
                                defaultValue={''}
                                // onChange={handleChange}
                                options={[
                                  { value: '유기농', label: '유기농' },
                                  { value: '무농약', label: '무농약' },
                                  { value: '일반', label: '일반' },
                                ]}
                            />
                            <span className={styles.error}>친환경 유무를 클릭해주세요.</span>
                        </div>
                    </div>
                    <div className={styles.registerBox}>
                        <div className={styles.registerInputBox}>
                            <span className={styles.registerInputTitle}>품종</span>
                            <Select
                                style={{ width: 120 }}
                                defaultValue={''}
                                // onChange={handleChange}
                                options={[
                                  { value: '홍고추', label: '홍고추' },
                                  { value: '청양고추', label: '청양고추' },
                                  { value: '건고추', label: '건고추' },
                                ]}
                            />
                            <span className={styles.error}>품종을 선택해주세요.</span>
                        </div>
                        <div className={styles.registerInputBox}>
                            <span className={styles.registerInputTitle}>수확량</span>
                            <div className={styles.registerInputForm}>
                                <Select
                                    style={{ width: 120 }}
                                    defaultValue={''}
                                    // onChange={handleChange}
                                    options={[
                                      { value: '근', label: '근' },
                                      { value: 'kg', label: 'kg' },
                                    ]}
                                />
                                <input className={styles.registerInput} placeholder='단위 선택 후 수확량을 입력해주세요.' type='text'/>
                            </div>
                            <span className={styles.error}>품종을 선택해주세요.</span>
                        </div>
                    </div>
                </div>
                {
                        props.isOpen && (
                        <Modal
                            open={props.isOpen}
                            onOk={props.onToggleModal}
                            onCancel={props.onToggleModal}
                          >
                         <DaumPostcode onComplete={props.handleComplete} />
                       </Modal> 
                        )
                }
                <div className={styles.registerSection2}>
                    <span className={styles.registerInputTitle}>주소</span>
                    <div className={styles.registerInputForm}>
                        <input value={props.q1} className={styles.registerNum} type='text' placeholder='주소번호' readOnly />
                        <button onClick={props.onToggleModal} className={styles.searchButton}>검색</button>
                    </div>
                    <span className={styles.error}>주소를 검색해주세요.</span>
                    <input value={props.q3} className={styles.reigsterAddress1} type='text' placeholder='주소' readOnly/>
                    <span className={styles.error}>주소를 검색해주세요.</span>
                    <input className={styles.reigsterAddress2} type='text' placeholder='상세주소' />
                    <span className={styles.error}>상세주소를 입력해주세요.</span>
                </div>
                <div className={styles.submitContainer}>
                    <button className={styles.submitButton}>등록하기</button>
                </div>
            </div>
        </div>
    )
}