import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Homepage from '.././pages/home/Homepage';
import Hostingpage from '.././pages/hosting/Hostingpage';
import Serverspage from '.././pages/servers/Serverspage';
import TeamSpeak from '.././pages/teamspeak/TeamSpeakpage';


export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Homepage} />
      <Route path="/hospedagem-de-sites" exact component={Hostingpage} />
      <Route path="/servidor-cloud" exact component={Serverspage} />
      <Route path="/teamSpeak" exact component={TeamSpeak} />
    </Switch>
  );
}