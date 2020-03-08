import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useDebouncedCallback } from 'use-debounce';
import styles from './Monster.module.scss'
import { toggleScreen } from '../screenVisibility/screenVisibilitySlice'
import {
    decrement,
    decrementByAmount,
    increment,
    incrementByAmount
} from './monsterSlice';

export default ({ monster, monsterToEditHandler }) => {
    const [hpDiff, setHpDiff] = useState(0)
    const [value, setValue] = useState(0)
    const [showHpDiff, setShowHpDiff] = useState(false)
    const dispatch = useDispatch()
    const isDead = monster.currentHp === 0

    const [debouncedCallback] = useDebouncedCallback(() => {
        setShowHpDiff(false)
        monster.currentHp === 0 ? setValue(0) : setValue(hpDiff)
        setHpDiff(0)
        setShowHpDiff(true)
    }, 700)

    return (
        <div className={isDead ? styles.isDead : styles.container}>
            <div
                className={styles.infoContainer}
                onClick={() => {
                    monsterToEditHandler(monster)
                    dispatch(toggleScreen({ screen: 'editMonster' }))
                }}
            >
                <div className={styles.nameContainer}>
                    <span style={{ backgroundColor: monster.color }} />
                    <h2>
                        {monster.name}
                    </h2>
                </div>
                <div className={styles.hpContainer}>
                    {
                        value !== 0 && monster.currentHp !== 0 && showHpDiff && (
                            <span className={styles.hpDiff}>
                                {value > 0 ? `+${value}` : `${value}`}
                            </span>
                        )
                    }
                    <span className={styles.currentHp}>{monster.currentHp}</span>
                    <span className={styles.maxHp}>/{monster.maxHp}</span>
                </div>
            </div>
            <div className={styles.buttonContainer}>
                <div>
                    <button onClick={() => {
                        dispatch(decrementByAmount({ id: monster.id }))
                        setHpDiff(prev => prev - 10)
                        debouncedCallback()
                    }}>
                        -10
                    </button>
                </div>
                <div>
                    <button onClick={() => {
                        dispatch(decrement({ id: monster.id }))
                        setHpDiff(prev => prev - 1)
                        debouncedCallback()
                    }}>
                        -1
                    </button>
                </div>
                <div>
                    <button onClick={() => {
                        dispatch(increment({ id: monster.id }))
                        setHpDiff(prev => prev + 1)
                        debouncedCallback()
                    }}>
                        +1
                    </button>
                </div>
                <div>
                    <button onClick={() => {
                        dispatch(incrementByAmount({ id: monster.id }))
                        setHpDiff(prev => prev + 10)
                        debouncedCallback()
                    }}>
                        +10
                    </button>
                </div>
            </div>
        </div>
    )
}