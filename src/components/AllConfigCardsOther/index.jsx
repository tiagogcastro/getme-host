// Cards da página de hospedagem de sites
// Altere qualquer valor
const allCards = [
    // Totalmente editavel, só clicar e abrir ali e trocar a info que quiser
    {
        id: 1,
        icon: '',
        title: 'Hospede seu Site Pessoal',
        price: '35',
        recommended: 'Recomendado para até 5.000 visitas mensais',
        accept: [ // Vai ficar com CONFERE verde
            'Hospeda 1 Domínio',
            '10GB de Espaço em Disco SSD',
            'Tráfego Mensal Ilimitado',
            '3 Contas de E-Mail',
            '3 Subdomínios',
            '3 Bancos MySQL',
            'GeoDNS',
            'Node.js',
            'Ruby',
            'PHP Composer',
        ],
        noAccept: [ // Vai ficar com X se caso não tiver
            'Anti-DDOS Premium',
            'Backups Diários',
            'Certificado SSL Grátis',
        ],
        classname: ['card'],
        button: { // Se quiser personalizar o button com cor diferente por exemplo
            href: "https://google.com"
        }
    },

    {
        id: 2,
        icon: '',
        title: 'Hospede seu Site Pessoal',
        price: '69,90',
        recommended: 'Recomendado para até 5.000 visitas mensais',
        accept: [ // Vai ficar com CONFERE verde
            'Hospeda 1 Domínio',
            '10GB de Espaço em Disco SSD',
            'Tráfego Mensal Ilimitado',
            '3 Contas de E-Mail',
            '3 Subdomínios',
            '3 Bancos MySQL',
            'GeoDNS',
            'Node.js',
            'Ruby',
            'PHP Composer',
            'Anti-DDOS Premium',
        ],
        noAccept: [ // Vai ficar com X se caso não tiver
            'Backups Diários',
            'Certificado SSL Grátis',
        ],
        classname: ['card'],
        classPopulate: ['populate'],
        
        button: { // Se quiser personalizar o button com cor diferente por exemplo
            href: "https://google.com"
        }
    },

    {
        id: 3,
        icon: '',
        title: 'Hospede seu Site Pessoal',
        price: '109,90',
        recommended: 'Recomendado para até 5.000 visitas mensais',
        accept: [ // Vai ficar com CONFERE verde
            'Hospeda 1 Domínio',
            '10GB de Espaço em Disco SSD',
            'Tráfego Mensal Ilimitado',
            '3 Contas de E-Mail',
            '3 Subdomínios',
            '3 Bancos MySQL',
            'GeoDNS',
            'Node.js',
            'Ruby',
            'PHP Composer',
            'Anti-DDOS Premium',
            'Backups Diários',
            'Certificado SSL Grátis',
        ],
        noAccept: [ // Vai ficar com X se caso não tiver
            
        ],
        classname: ['card'],

        button: {
            href: "https://google.com"
        }
    },
]


// Cards da página de servidor VPS
// Cards com o valor em moeda do BRASIL
const valuesBr = [
    // Card 1
    {
        title: '1GB',
        price: '15,50',
        accept: [
            'Painel de Controle',
            '1Gbps de Uplink',
            'Tráfego Ilimitado',
            'IP Dedicado',
        ],
        href: "https://google.com",
        buttonText: 'Assinar agora',
    },
    // Card 2
    {
        title: '1GB',
        price: '45,90',
        accept: [
            'Painel de Controle',
            '1Gbps de Uplink',
            'Tráfego Ilimitado',
            'IP Dedicado',
        ],
        href: "https://google.com",
        buttonText: 'Assinar agora',
        classPopulate: ['populate']

    },
    // Card 3
    {
        title: '1GB',
        price: '120,90',
        accept: [
            'Painel de Controle',
            '1Gbps de Uplink',
            'Tráfego Ilimitado',
            'IP Dedicado',
        ],
        href: "https://google.com",
        buttonText: 'Assinar agora '

    }
]

// Cards com o valor em moeda dos Estados Unidos
const valuesUsa = [
    // Card 1
    {
        title: 'Cloud 1GB',
        price: 39,
        accept: [
            'Painel de Controle',
            '1Gbps de Uplink',
            'Tráfego Ilimitado',
            'IP Dedicado',
        ],
        href: "https://google.com",
        buttonText: 'Assinar agora '

    },
    // Card 2
    {
        title: 'Cloud 1GB',
        price: 39,
        accept: [
            'Painel de Controle',
            '1Gbps de Uplink',
            'Tráfego Ilimitado',
            'IP Dedicado',
        ],
        href: "https://google.com",
        buttonText: 'Assinar agora ',
        classPopulate: ['populate']

    },
    // Card 3
    {
        title: 'Cloud 1GB',
        price: 39,
        accept: [
            'Painel de Controle',
            '1Gbps de Uplink',
            'Tráfego Ilimitado',
            'IP Dedicado',
        ],
        href: "https://google.com",
        buttonText: 'Assinar agora '

    }
]


// Table da página TeamSpeak
// Altere o valor e crie quantas quiser.
const textsInTbody = [
    {
        Memory: '8GB de Memória RAM',
        Cpu:'8 núcleos de CPU',
        ssd: '400GB SSD',  
        text:'e todas as demais features aaaa aaaa aaaa aaaa aaaa aaaaa aaaaa aaaa aaaaa aaaa aaaa aaaa aaaa aaaaaaaa aaaa aaaa aaaa aaaa aaaaa aaaaa aaaa aaaaa aaaa aaaa aaaa aaaa aaaaaaaa aaaa aaaa aaaa aaaa aaaaa aaaaa aaaa aaaaa aaaa aaaa aaaa aaaa aaaa aaaaaa aaaa aaaa aaaa aaaa aa',
        price:'R$ 269 BRL/mês',
        button: 'Assine agora',
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

export {allCards, valuesBr, valuesUsa, textsInTbody}