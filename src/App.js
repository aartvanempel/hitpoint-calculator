import React, { useState } from 'react';
import { useTransition, animated } from 'react-spring';
import { useSelector } from 'react-redux'
import Header from './features/header/Header';
import AddButton from './features/addButton/AddButton';
import CreateMonster from './features/monsters/CreateMonster';
import EditMonster from './features/monsters/EditMonster';
import MonstersList from './features/monsters/MonsterList';
import styles from './App.module.scss';

import { selectScreenVisibility } from './features/screenVisibility/screenVisibilitySlice'

export default () => {
  const showCreateMonster = useSelector(selectScreenVisibility).createMonster
  const showEditMonster = useSelector(selectScreenVisibility).editMonster
  const [monsterToEdit, setMonsterToEdit] = useState({})

  const monsterToEditHandler = monster => setMonsterToEdit(monster)

  const createTransitions = useTransition(showCreateMonster, null, {
    from: { opacity: 0, transform: 'translateY(-50%)' },
    enter: { opacity: 1, transform: 'translateY(0px)' },
    leave: { opacity: 0, transform: 'translateY(50%)' },
  })

  const editTransitions = useTransition(showEditMonster, null, {
    from: { opacity: 0, transform: 'translateY(-50%)' },
    enter: { opacity: 1, transform: 'translateY(0px)' },
    leave: { opacity: 0, transform: 'translateY(50%)' },
  })

  return (
    <div>
      <Header />

      <div className={styles.container}>

        <div>
          <MonstersList monsterToEditHandler={monsterToEditHandler} />
        </div>

        <div className={styles.bottomContainer}>
          <AddButton />
        </div>

        <div className={`${styles.overlay} ${showCreateMonster ? styles.showOverlay : ''}`}>
          {
            createTransitions.map(({ item, key, props }) =>
              item && (
                <animated.div key={key} style={props}>
                  <CreateMonster />
                </animated.div>
              )
            )
          }
        </div>

        <div className={`${styles.overlay} ${showEditMonster ? styles.showOverlay : ''}`}>
          {
            editTransitions.map(({ item, key, props }) =>
              item && (
                <animated.div key={key} style={props}>
                  <EditMonster monster={monsterToEdit} />
                </animated.div>
              )
            )
          }
        </div>

      </div>
    </div>

  )
}