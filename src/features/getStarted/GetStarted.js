import React from 'react'
import styles from './GetStarted.module.scss'

export default () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div>
                    <i className="far fa-dragon"></i>
                </div>
                <p>Add some monsters to get started</p>
            </div>
        </div>
    )
}