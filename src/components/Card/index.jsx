import React from 'react'
import css from './Card.module.css'

const Card = () => {
    return (
        <div className={css.container}>
            <div className={css.main}>
            <h2 className={css.title}>Lets do it...</h2>
                <div className={css.todo}>
            <input type="text" className={css.textIn}></input>
            <input type="date"></input>
            <button value="Add">Add</button>
            <ul className="ul"></ul>
            </div>
            </div>
        </div>
    )
}

export {Card}