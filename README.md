# getme-host

![React](https://img.shields.io/badge/React-17-61DAFB?logo=react&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript&logoColor=black)
![React Router](https://img.shields.io/badge/react__router--dom-5-CA4245?logo=reactrouter&logoColor=white)

Getme Host is a marketing site for a hosting provider: plan and pricing pages
for web hosting, VPS servers and TeamSpeak servers, built with React.

## Features

- Dedicated pages for web hosting, VPS and TeamSpeak plans plus home page
- Centralized pricing card configuration (`src/components/AllConfigCardsOther`): plan prices, texts and card contents can be edited in a single place without touching page components
- Configurable page sections under `src/components/partesConfiguraveis`
- Client-side routing with React Router

## Tech stack

| Layer | Tools |
|---|---|
| Language | JavaScript (JSX) |
| UI | React 17, Create React App 4, react-icons |
| Routing | react-router-dom 5 |

## How to run

```bash
# requirements: Node.js 14-16 era runtime (see legacy note)
yarn install
yarn start    # http://localhost:3000
```

Tip: to change prices or card texts, edit the files inside
`src/components/AllConfigCardsOther`; no changes to page code are needed.
(`Instrucoes.txt` documents this workflow in Portuguese.)

## Legacy note

Project from 2020-2021 with era-pinned dependencies (React 17, CRA 4).
Expect friction on current Node versions without upgrades. Estimated
modernization effort if picked up later: small (half-day), mainly migrating
CRA to Vite and bumping dependencies. No fixes are planned as part of this
cleanup phase.

## License

[MIT](LICENSE)

## Author

Built by [Tiago Gonçalves de Castro](https://github.com/tiagogcastro)
· [LinkedIn](https://www.linkedin.com/in/tiagogcastro)
