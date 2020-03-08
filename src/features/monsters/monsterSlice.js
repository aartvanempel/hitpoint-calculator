import { createSlice } from '@reduxjs/toolkit';

const findMonsterById = (state, id) => state.monsters.find(monster => monster.id === id);

export const monsters = createSlice({
    name: 'monsters',
    initialState: {
        monsters: [
            {
                id: 0,
                name: 'Goblin 1',
                currentHp: 10,
                maxHp: 50,
                color: '#E74C3C'
            }
        ],
    },
    reducers: {
        reset: state => {
            state.monsters = []
        },
        editMonster: (state, action) => {
            const monster = findMonsterById(state, action.payload.id)

            Object.assign(monster, {
                name: action.payload.name,
                maxHp: action.payload.maxHp,
                color: action.payload.color
            })
        },
        createMonster: (state, action) => {
            action.payload.id = new Date().getTime()
            action.payload.currentHp = Number(action.payload.maxHp)

            state.monsters.push(action.payload)
        },
        deleteMonster: (state, action) => {
            state.monsters = state.monsters.filter(monster => monster.id !== action.payload.id)
        },
        decrement: (state, action) => {
            const monster = findMonsterById(state, action.payload.id)

            monster.currentHp > 0 && monster.currentHp--
        },
        decrementByAmount: (state, action) => {
            const monster = findMonsterById(state, action.payload.id)

            monster.currentHp > 9 ?
                monster.currentHp = monster.currentHp - 10 :
                monster.currentHp = 0
        },
        increment: (state, action) => {
            const monster = findMonsterById(state, action.payload.id)

            monster.currentHp++
        },
        incrementByAmount: (state, action) => {
            const monster = findMonsterById(state, action.payload.id)

            monster.currentHp = monster.currentHp + 10
        }
    },
});

export const selectMonsters = state => state.monsters.monsters;
export const {
    reset,
    editMonster,
    createMonster,
    deleteMonster,
    decrement,
    decrementByAmount,
    increment,
    incrementByAmount
} = monsters.actions;

export default monsters.reducer;
