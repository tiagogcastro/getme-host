import React from 'react';

// Altere o valor e crie quantas quiser.
const textsInTbody = [
    {
        Memory: '8GB de Memória RAM',
        Cpu:'8 núcleos de CPU',
        ssd: '400GB SSD',  
        text:'e todas as demais features aaaa aaaa aaaa aaaa aaaa aaaaa aaaaa aaaa aaaaa aaaa aaaa aaaa aaaa aaaaaaaa aaaa aaaa aaaa aaaa aaaaa aaaaa aaaa aaaaa aaaa aaaa aaaa aaaa aaaaaaaa aaaa aaaa aaaa aaaa aaaaa aaaaa aaaa aaaaa aaaa aaaa aaaa aaaa aaaa aaaaaa aaaa aaaa aaaa aaaa aa',
        price:'R$ 269 BRL/mês',
        button: 'Assine agora'
    },
    {
        Memory: '8GB de Memória RAM',
        Cpu:'8 núcleos de CPU',
        ssd: '160GB SSD',  
        text:'e todas as demais features ',
        price:'R$ 109 BRL/mês',
        button: 'Assine agora'
    },
    {
        Memory: '15GB de Memória RAM',
        Cpu:'8 núcleos de CPU',
        ssd: '160GB SSD',  
        text:'e todas as demais features ',
        price:'R$ 49 BRL/mês',
        button: 'Assine agora'
    },
    {
        Memory: '8GB de Memória RAM',
        Cpu:'2 núcleos de CPU',
        ssd: '160GB SSD',  
        text:'e todas as demais features ',
        price:'R$ 23 BRL/mês',
        button: 'Assine agora'
    },
    {
        Memory: '8GB de Memória RAM',
        Cpu:'4 núcleos de CPU',
        ssd: '160GB SSD',  
        text:'e todas as demais features ',
        price:'R$ 169 BRL/mês',
        button: 'Assine agora'
    },
]

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