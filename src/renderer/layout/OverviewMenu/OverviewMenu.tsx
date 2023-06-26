import styles from './OverviewMenu.module.css'
import FilesIcon from '@/assets/copy.svg'
import NamingsIcon from '@/assets/edit.svg'
import { useState } from 'react'
import { CurrentPage } from '../../types/pages'
import cn from 'classnames'
import { Link, useLocation } from 'react-router-dom'

const OverviewMenu = () => {
    const location = useLocation()

    return (
        <div className={styles.OverviewMenu}>
            <Link to={'/'}>
                <div
                    className={cn(styles.Item, {
                        [styles.Selected]: location.pathname === '/files',
                    })}
                >
                    <FilesIcon />
                    <p>Files</p>
                </div>
            </Link>
            <Link to={'/namings'}>
                <div
                    className={cn(styles.Item, {
                        [styles.Selected]: location.pathname === '/namings',
                    })}
                >
                    <NamingsIcon />
                    <p>Namings</p>
                </div>
            </Link>
        </div>
    )
}

export default OverviewMenu
