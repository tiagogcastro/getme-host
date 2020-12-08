const allCards = [
    // Totalmente editavel, só clicar e abrir ali e trocar a info que quiser
    {
        id: 1,
        icon: '',
        title: 'Hospede seu Site Pessoal',
        price: 3.15,
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
            'Sei la 1'
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
        price: 6.65,
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
            'Sei la'
        ],
        classname: ['card'],
        
        button: { // Se quiser personalizar o button com cor diferente por exemplo
            href: "https://google.com"
        }
    },

    {
        id: 3,
        icon: '',
        title: 'Hospede seu Site Pessoal',
        price: 13.65,
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


const One = () => (
    <div className="component">
        <h1>Reduzimos o tempo de resposta do seu site em até 10 vezes!</h1>
        <div className="texts">
            <h2>Seu site ficará muito mais rápido com uma hospedagem em nginx nativo!</h2>
            <p>Nossas hospedagens permitem a opção entre nginx ou Apache nativos, ou Apache + nginx em Proxy Reverso. O nginx como webserver é muito superior ao Apache, com uma capacidade de processar um fluxo de tráfego muito superior, e com uma resposta até dez vezes mais rápida que as hospedagens normais!
            Além disto, o nginx é muito eficaz no auxílio contra ataques ddos layer 7!
            </p>
        </div>
    </div>
)

const Two = () => (
    <div className="component">
        <h1>Reduzimos o tempo de resposta dos DNS em até 10 vezes!</h1>
        <div className="texts">
            <h2>Resolução de nomes DNS geolocalizada que responde pelo servidor mais próximo da sua casa, garantindo sempre o menor tempo de respota nos DNS.   </h2>
            <p>Nossos servidores DNS ficam espalhados entre nossos datacenters, para garantir sempre a menor latência na resolução dos domínios. Se você estiver nas Américas, o tempo médio de resposta dos DNS será de cerca de 20ms na maioria dos países. (versus 200ms se não tivesse GeoDNS)
            </p>
        </div>
    </div>
)

const Three = () => (
    <div className="component">
        <h1>Certificados SSL para todos seus domínios hospedados conosco. De graça.</h1>
        <div className="texts">
            <h2>Ofecerecemos ilimitados certificados SSL gratuitamente, para todos seus domínios e subdomínios hospedados conosco, que renovarão automaticamente enquanto sua hospedagem permanecer ativa, sem custos.</h2>
            <p>Direto pelo painel Plesk da sua hospedagem de sites conosco, você poderá acessar o menu Let's Encrypt e gerar quantos certificados SSL você quiser, para todos os seus domínios e subdomínios hospedados conosco. Os certificados serão renovados automaticamente enquanto sua hospedagem permanecer ativa conosco.
            </p>
        </div>
    </div>
)

const Four = () => (
    <div className="component">
        <h1>Backups diários, feitos em off-site, e que garantem os seus dados!</h1>
        <div className="texts">
            <h2>Toda madrugada fazemos backups automatizados das hospedagens de sites em um storage remoto, que ficam disponíveis no seu painel de controle para restaurar quando quiser!</h2>

            <p>Garanta que seus dados estão a salvo com as hospedagens da VirtusHost, que possuem backups automáticos feitos toda madrugada; no seu painel de controle da hospedagem, basta ir no menu de Backups para poder baixar ou restaurar um backup de seu site.
            </p>
        </div>
    </div>
)


export {allCards, One, Two, Three, Four};