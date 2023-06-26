import { useState } from 'react'
import styles from './InputPageName.module.css'

const InputPageName = () => {
    const [inputValue, setInputValue] = useState<string>('Naming here')

    return (
        <input
            value={inputValue}
            className={styles.InputPageName}
            onChange={(event) => setInputValue(event.target.value)}
        />
    )
}

export default InputPageName
