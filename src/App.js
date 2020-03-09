import React, { useState } from 'react';
import { useTransition, animated } from 'react-spring';
import { useSelector } from 'react-redux'
import { selectMonsters } from './features/monsters/monsterSlice'
import Header from './features/header/Header';
import AddButton from './features/addButton/AddButton';
import CreateMonster from './features/monsters/CreateMonster';
import EditMonster from './features/monsters/EditMonster';
import Faq from './features/faq/Faq'
import ResetDialog from './features/resetDialog/ResetDialog';
import MonstersList from './features/monsters/MonsterList';
import GetStarted from './features/getStarted/GetStarted';
import styles from './App.module.scss';

import { selectScreenVisibility } from './features/screenVisibility/screenVisibilitySlice'

export default () => {
  const monsters = useSelector(selectMonsters)
  const showCreateMonster = useSelector(selectScreenVisibility).createMonster
  const showEditMonster = useSelector(selectScreenVisibility).editMonster
  const showFaq = useSelector(selectScreenVisibility).faq
  const showResetDialog = useSelector(selectScreenVisibility).resetDialog
  const [monsterToEdit, setMonsterToEdit] = useState({})
  const screenTransistion = {
    from: { opacity: 0, transform: 'translateY(-50%)' },
    enter: { opacity: 1, transform: 'translateY(0px)' },
    leave: { opacity: 0, transform: 'translateY(50%)' },
  }
  const createTransitions = useTransition(showCreateMonster, null, screenTransistion)
  const editTransitions = useTransition(showEditMonster, null, screenTransistion)
  const resetTransitions = useTransition(showResetDialog, null, screenTransistion)
  const faqTransitions = useTransition(showFaq, null, screenTransistion)

  const monsterToEditHandler = monster => setMonsterToEdit(monster)

  return (
    <div>
      <Header />

      <div className={styles.container}>

        { !monsters.length && <GetStarted /> }

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

        <div className={`${styles.overlay} ${showResetDialog ? styles.showOverlay : ''}`}>
          {
            resetTransitions.map(({ item, key, props }) =>
              item && (
                <animated.div key={key} style={props}>
                  <ResetDialog />
                </animated.div>
              )
            )
          }
        </div>

        <div className={`${styles.overlay} ${showFaq ? styles.showOverlay : ''}`}>
          {
            faqTransitions.map(({ item, key, props }) =>
              item && (
                <animated.div key={key} style={props}>
                  <Faq />
                </animated.div>
              )
            )
          }
        </div>

      </div>
    </div>

  )
}