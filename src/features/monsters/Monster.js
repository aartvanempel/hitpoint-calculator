import React from 'react'
import { useDispatch } from 'react-redux'
import styles from './Monster.module.scss'
import {
    decrement,
    decrementByAmount,
    increment,
    incrementByAmount
} from './monsterSlice';

export default ({ monster }) => {
    const dispatch = useDispatch()
    const isDead = monster.currentHp === 0

    return (
        <div className={`${isDead ? styles.isDead : styles.container}`}>
            <div className={styles.infoContainer}>
                <div className={styles.nameContainer}>
                    <span style={{backgroundColor: monster.color}}/>
                    <h2>{monster.name}</h2>
                </div>
                <div className={styles.hpContainer}>
                    <span className={styles.currentHp}>{monster.currentHp}</span>
                    <span className={styles.maxHp}>/{monster.maxHp}</span>
                </div>
            </div>
            <div className={styles.buttonContainer}>
                <div>
                    <button onClick={() => dispatch(decrementByAmount({ id: monster.id }))}>-10</button>
                </div>
                <div>
                    <button onClick={() => dispatch(decrement({ id: monster.id }))}>-1</button>
                </div>
                <div>
                    <button onClick={() => dispatch(increment({ id: monster.id }))}>+1</button>
                </div>
                <div>
                    <button onClick={() => dispatch(incrementByAmount({ id: monster.id }))}>+10</button>
                </div>
            </div>
        </div>
    )
}