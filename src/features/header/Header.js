import React from 'react';
import styles from './Header.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { selectMonsters } from '../monsters/monsterSlice'
import { toggleScreen } from '../screenVisibility/screenVisibilitySlice'

export default () => {
    const dispatch = useDispatch();
    const monsters = useSelector(selectMonsters)

    return (
        <header className={styles.container}>
            <div>
                <h1>Hitpoint Calculator</h1>
            </div>
            <div className={styles.linkContainer}>
                <div>
                    <span>faq</span>
                </div>
                <div onClick={() => monsters.length && dispatch(toggleScreen({screen: 'resetDialog'}))}>
                    <span>reset</span>
                </div>
            </div>
        </header>
    )
}