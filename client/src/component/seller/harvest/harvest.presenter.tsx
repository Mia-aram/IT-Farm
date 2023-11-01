import FarmlistPage from './farmlist/farmlist.container'
import styles from './harvest.module.css'
import { IHarvestPageUIProps } from './harvest.types'
import { Select } from 'antd'

export default function HarvestPageUI(props: IHarvestPageUIProps):JSX.Element {
    return (
        <div className={styles.body}>
            <div className={styles.wrappers}>
                <span className={styles.registerTitle}>내농장 목록</span>
                <div className={styles.farmContainer}>
                    {props.farmData?.map((farmData) => {
                        return(
                            <FarmlistPage
                                key={farmData.id}
                                farmData = {farmData}
                             />
                        )
                    })}
                </div>
                <div className={styles.inputContainer}>
                    <span className={styles.inputTitle}>농사기법</span>
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
                    <span className={styles.inputTitle}>품종</span>
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
                    <span className={styles.inputTitle}>수확량</span>
                    <div className={styles.box}>
                        <Select
                            style={{ width: 120 }}
                            defaultValue={''}
                            // onChange={handleChange}
                            options={[
                              { value: 'true', label: 'kg' },
                              { value: 'false', label: '근' },
                            ]}
                        />
                        <input className={styles.mount} type='text' placeholder='수확량을 입력해주세요' />
                    </div>
                    <div className={styles.submitBox}>
                        <button className={styles.submitButton}>등록하기</button>
                    </div>
                </div>
            </div>
        </div>
    )
}