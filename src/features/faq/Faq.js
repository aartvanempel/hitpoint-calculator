import React from 'react'
import { useDispatch } from 'react-redux';
import { toggleScreen } from '../screenVisibility/screenVisibilitySlice'
import styles from './Faq.module.scss'

export default () => {
    const dispatch = useDispatch();

    return (
        <div className={styles.container}>
            <div className={styles.titleContainer}>
                <div>
                    <h1>F.A.Q.</h1>
                </div>
                <div>
                    <button onClick={() => dispatch(toggleScreen({ screen: 'faq' }))}>
                        <i class="far fa-times"></i>
                    </button>
                </div>
            </div>
            <div className={styles.textContainer}>
                <div>
                    <h2>What do I need the Hitpoint Calculator for?</h2>
                    <p>This tool was created for dungeon masters that are bad at math and want to track hitpoints for multiple monsters or NPC’s.</p>
                </div>

                <div>
                    <h2>Dungeon masters? Monsters? What are you talking about?</h2>
                    <p>These are instructions for a satanistic cult… Just kidding, this is a tool for the game Dungeons and Dragons. Google it to find out more.</p>
                </div>

                <div>
                    <h2>How do I use this tool?</h2>
                    <p>Add monsters by clicking the ‘Add monster’ button at the bottom. Fill in a name for your monster (E.g. Goblin), set it’s hitpoints, change the color if you want <span>and change the amount if you want to add multiple copies. A number will be added to the copies to easily differentiate them</span>. Use the buttons below each monster in your list to substract and add hitpoints during your games.</p>
                </div>

                <div>
                    <h2>How do I edit the monsters?</h2>
                    <p>Change the name, hitpoints, color or delete a monster by tapping it’s name.</p>
                </div>

                <div>
                    <h2>Can I clear the whole list?</h2>
                    <p>Clear the list by tapping the reset button in the top right of the page.</p>
                </div>

                <div>
                    <h2>Excuse me, but who am I talking to?</h2>
                    <p>Hi I’m Koen. Dungeon master and webdesigner. E-mail me at <a href='mailto:dmkoen@gmail.com'>dmkoen@gmail.com</a> to talk about Dungeons and Dragons or if you have feedback on this tool.</p>
                </div>
            </div>
        </div>
    )
}