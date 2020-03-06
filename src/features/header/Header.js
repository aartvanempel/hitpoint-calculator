import React from 'react';
import styles from './Header.module.scss';
import { useDispatch } from 'react-redux';
import { reset } from '../monsters/monsterSlice';

export default () => {
    const dispatch = useDispatch();

    return (
        <header className={styles.container}>
            <div>
                <h1>Hitpoint Calculator</h1>
            </div>
            <div className={styles.linkContainer}>
                <div>
                    <span>faq</span>
                </div>
                <div>
                    <span onClick={() => dispatch(reset())}>reset</span>
                </div>
            </div>
        </header>
    )
}