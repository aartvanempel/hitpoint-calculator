import React, { useState } from 'react';
import { useTransition, animated } from 'react-spring';
import Header from './features/header/Header';
import AddButton from './features/addButton/AddButton';
import CreateMonster from './features/monsters/CreateMonster';
import MonstersList from './features/monsters/MonsterList';
import styles from './App.module.scss';

export default () => {

  const [showCreateMonster, setShowCreateMonster] = useState(false)

  const showCreateMonsterHandler = value => setShowCreateMonster(value)

  const transitions = useTransition(showCreateMonster, null, {
    from: { opacity: 0, transform: 'translateY(-50%)' },
    enter: { opacity: 1, transform: 'translateY(0px)' },
    leave: { opacity: 0, transform: 'translateY(50%)' },
  })

  return (
    <div className={styles.container}>

      <Header />

      <div>
        <MonstersList />
      </div>

      <div className={styles.bottomContainer}>
        <AddButton showCreateMonsterHandler={showCreateMonsterHandler} />
      </div>

      <div className={`${styles.overlay} ${showCreateMonster && styles.showOverlay}`}>
        {
          transitions.map(({ item, key, props }) =>
            item && (
              <animated.div key={key} style={props}>
                <CreateMonster showCreateMonsterHandler={showCreateMonsterHandler} />
              </animated.div>
            )
          )
        }
      </div>

    </div>
  )
}