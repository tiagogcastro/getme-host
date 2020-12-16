import React from 'react';
import {textsInTbody} from '../AllConfigCardsOther/index'

export default function Table() {
    return (
        <table>
            <thead>
                <tr>
                    <th> Memória Ram</th>
                    <th>CPU</th>
                    <th>HD</th>
                    <th></th> {/* Se deixar vazio, vai criar um espaço entre as palavras */}
                    <th>Preço</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {textsInTbody.map((value, index) => (
                <tr>
                    <td key={index}>
                        <p>{value.Memory}</p>
                    </td>
                    <td key={index}>
                        <p>{value.Cpu}</p>
                    </td>
                    <td key={index}>
                        <p>{value.ssd}</p>
                    </td>
                    <td className="text" key={index}>
                        <p>{value.text}</p>
                    </td>
                    <td key={index}>
                        <p>{value.price}</p>
                    </td>
                    <td key={index}>
                        <a href="#">{value.button}</a>
                    </td>
                </tr>
                ))}
            </tbody>
        </table>
    )
}