import React from 'react'
import { useTransition, animated } from 'react-spring'
import Monster from './Monster'
import { useSelector } from 'react-redux'
import { selectMonsters } from './monsterSlice'
import styles from './MonsterList.module.scss'

export default () => {
    const monsters = useSelector(selectMonsters)

    const transitions = useTransition(monsters, monster => monster.id, {
        from: { opacity: 0, transform: 'translateX(-50%)' },
        enter: { opacity: 1, transform: 'translateX(0)' },
        leave: { opacity: 0, transform: 'translateX(50%)' },
        config: {
            duration: 250
        }
    })

    return (
        <div className={styles.container}>
            {
                transitions.map(({ item, props, key }) => (
                    <animated.div key={key} style={props}>
                        <Monster monster={item} />
                    </animated.div>
                ))

            }
        </div>
    )
}