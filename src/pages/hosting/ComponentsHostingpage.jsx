import React, { useState } from 'react';
import {} from 'react-icons'
import { FcCheckmark } from 'react-icons/fc'
import {allCards, One, Two, Three, Four, Five} from './cardsAndTexts'

export const Cards = () => (
    <>
     {allCards.map((value, index) => (
         <div key={index} className={value.classname}>
                 <i>{value.icon}</i>
                 <h3>{value.title}</h3>
                 <h1><sup>$</sup>{value.price} <sub>/mês</sub></h1>
                 <p>{value.recommended}</p>
             <div className="info">
                {value.accept.map(all => <p key={index}><FcCheckmark /> {all}</p>)}
                {value.noAccept.length >= 1 ? value.noAccept.map(all => <p key={index}>❌ {all}</p>) : <span></span>}
             </div>
             <a href={value.button.href} target="_blank">Assinar agora</a>
         </div>)
       )}
   </>
 )

export function ComponentTexts() {
    const [render, setRender] = useState('');
    function MyShitchComponent(render) {
        switch (render) {
            case 'one':
                return <One/>
            case 'two':
                return <Two />
            case 'three':
                return <Three />
            case 'four':
                return <Four />
            default:
                return <One />
        }
    }
    return (
        <div className="buttonsAndComponents">
            <button onClick={() => setRender('one')}>Component 1</button>
            <button onClick={() => setRender('two')}>Component 2</button>
            <button onClick={() => setRender('three')}>Component 3</button>
            <button onClick={() => setRender('four')}>Component 4</button>
            <div className="showComponent">
                {MyShitchComponent(render)}
            </div>
        </div>
    )
}