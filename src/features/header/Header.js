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
                <h1>
                    <i class="fad fa-flask-potion"></i>
                    Hitpoint Calculator
                </h1>
            </div>
            <div className={styles.linkContainer}>
                <div onClick={() => dispatch(toggleScreen({ screen: 'faq' }))}>
                    <i class="far fa-question"></i>
                </div>
                <div onClick={() => monsters.length && dispatch(toggleScreen({ screen: 'resetDialog' }))}>
                    <i class="far fa-redo-alt"></i>
                </div>
            </div>
        </header>
    )
}