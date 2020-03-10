import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleScreen } from '../screenVisibility/screenVisibilitySlice';
import styles from './AddButton.module.scss'

export default () => {
    const dispatch = useDispatch()

    return (
        <div>
            <button
                onClick={() => dispatch(toggleScreen({screen: 'createMonster'}))}
                className={styles.button}
            >
                <i className="far fa-plus"></i>
                Add monster
            </button>
        </div>
    )
}