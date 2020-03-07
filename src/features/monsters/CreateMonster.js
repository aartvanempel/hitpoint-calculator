import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createMonster, selectMonsters } from './monsterSlice';
import styles from './CreateMonster.module.scss';

export default ({ showCreateMonsterHandler }) => {
    const dispatch = useDispatch();
    const monsters = useSelector(selectMonsters)

    const colors = ['#E74C3C', '#3498DB', '#E67E22', '#2ECC71', '#9B59B6', '#1ABC9C', '#F1C40F']

    let initialSelectedColor = colors[0]
    if (monsters.length) {
        const lastUsedColor = monsters[monsters.length - 1].color
        const lastUsedColorIndex = colors.findIndex(color => color === lastUsedColor)

        initialSelectedColor = (lastUsedColorIndex < colors.length - 1) ? colors[lastUsedColorIndex + 1] : colors[0]
    }


    const [name, setName] = useState('');
    const [maxHp, setMaxHp] = useState('')
    const [color, setColor] = useState(initialSelectedColor)

    const onSubmitHandler = e => {
        e.preventDefault()

        if (!name.length || !maxHp.length || !color) return

        dispatch(createMonster({ name, maxHp, color }))
        showCreateMonsterHandler(false)
    };

    return (
        <div className={styles.container}>
            <div className={styles.titleContainer}>
                <div>
                    <h1>
                        New monster
                    </h1>
                </div>
                <div>
                    <button
                        onClick={() => showCreateMonsterHandler(false)}
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
                            autoFocus
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