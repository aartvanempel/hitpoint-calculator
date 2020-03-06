import React from 'react';
import styles from './AddButton.module.scss'

export default ({ showCreateMonsterHandler }) => {
    return (
        <div>
            <button
                onClick={() => showCreateMonsterHandler(true)}
                className={styles.button}
            >
                + Add monster
            </button>
        </div>
    )
}