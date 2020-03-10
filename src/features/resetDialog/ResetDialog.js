import React from 'react'
import { useDispatch } from 'react-redux';
import { reset } from '../monsters/monsterSlice';
import { toggleScreen } from '../screenVisibility/screenVisibilitySlice'
import styles from './ResetDialog.module.scss'

export default () => {
    const dispatch = useDispatch();

    return (
        <div className={styles.container}>
            <div>
                <div className={styles.textContainer}>
                    <div>
                        <i className="far fa-dragon"></i>
                    </div>
                    <h1>Do you want to clear the list of all your monsters?</h1>
                    <p>All your added monsters will be removed.</p>
                </div>
                <div className={styles.buttonContainer}>
                    <div className={styles.cancelButton}>
                        <button onClick={() => dispatch(toggleScreen({ screen: 'resetDialog' }))}>
                            <i className="far fa-times"></i> Cancel
                        </button>
                    </div>
                    <div className={styles.resetButton}>
                        <button onClick={() => {
                            dispatch(reset())
                            dispatch(toggleScreen({ screen: 'resetDialog' }))
                        }}>
                            <i className="far fa-redo-alt"></i> Clear list
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}