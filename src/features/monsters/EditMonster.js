import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editMonster } from './monsterSlice';
import { toggleScreen } from '../screenVisibility/screenVisibilitySlice'
import styles from './CreateMonster.module.scss';

export default ({monster}) => {
    const dispatch = useDispatch();
    const colors = ['#E74C3C', '#3498DB', '#E67E22', '#2ECC71', '#9B59B6', '#1ABC9C', '#F1C40F']

    const [name, setName] = useState(monster.name);
    const [maxHp, setMaxHp] = useState(monster.maxHp)
    const [color, setColor] = useState(monster.color)

    const onSubmitHandler = e => {
        e.preventDefault()

        if (!name.length || !maxHp || !color.length) return

        dispatch(editMonster({ id: monster.id, name, maxHp, color }))
        dispatch(toggleScreen({screen: 'editMonster'}))
    };

    return (
        <div className={styles.container}>
            <div className={styles.titleContainer}>
                <div>
                    <h1>
                        Edit monster
                    </h1>
                </div>
                <div>
                    <button
                        onClick={() => dispatch(toggleScreen({screen: 'editMonster'}))}
                        className={styles.button}
                    >
                        close
                    </button>
                </div>
            </div>
            <div>
                <form onSubmit={e => onSubmitHandler(e)}>
                    <div className={styles.formRow}>
                        <input
                            placeholder="Monster's name"
                            type='text'
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                    </div>

                    <div className={styles.formRow}>
                        <input
                            placeholder="Max HP"
                            inputMode="numeric"
                            pattern="[0-9]*"
                            type='text'
                            value={maxHp}
                            onChange={e => setMaxHp(e.target.value)}
                        />
                    </div>

                    <div className={`${styles.formRow} ${styles.radioContainer}`}>
                        {
                            colors.map((colorOption, index) => (
                                <div key={index}>
                                    <label className={styles.label}>
                                        <input
                                            type='radio'
                                            checked={color === colorOption}
                                            onChange={() => setColor(colorOption)}
                                        />
                                        <span className={styles.radio} style={{ backgroundColor: colorOption }} />
                                    </label>
                                </div>
                            ))
                        }
                    </div>

                    <div className={styles.submitContainer}>
                        <button type='submit' className={styles.submitButton}>
                            ✓ Done
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}