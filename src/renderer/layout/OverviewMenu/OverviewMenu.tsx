import styles from './OverviewMenu.module.css'
import FilesIcon from '@/assets/copy.svg'
import NamingsIcon from '@/assets/edit.svg'
import { useState } from 'react'
import { CurrentPage } from '../../types/pages'
import cn from 'classnames'

const OverviewMenu = () => {
    const [currentPage, setCurrentPage] = useState<CurrentPage>('files')

    const changeCurrentPageHandler = (page: CurrentPage) => {
        setCurrentPage(page)
    }

    return (
        <div className={styles.OverviewMenu}>
            <div
                className={cn(styles.Item, { [styles.Selected]: currentPage === 'files' })}
                onClick={() => changeCurrentPageHandler('files')}
            >
                <FilesIcon />
                <p>Files</p>
            </div>
            <div
                className={cn(styles.Item, { [styles.Selected]: currentPage === 'namings' })}
                onClick={() => changeCurrentPageHandler('namings')}
            >
                <NamingsIcon />
                <p>Namings</p>
            </div>
        </div>
    )
}

export default OverviewMenu
