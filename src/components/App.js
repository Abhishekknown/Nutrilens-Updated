import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './header';
import Main from './routes/Main';
import Tab from './tab';
import Auth from './authentication/auth/Auth';
import Title from './Title/Title';
import Footer from './Footer/Footer';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem('token') ? true : false);

  return (
    <>
      {loggedIn ?
        <div className='main__wrapper '>
          <Header />
          <Title />
          <Tab />
          <Main />
          <Footer/>
          {
      window.botpressWebChat.init({
        "composerPlaceholder": "Chat with Nutri Asistent ",
        "botConversationDescription": "Im here to assist you  just say hi ",
        "botId": "7cfe4e41-832a-4112-9859-f60d11e61d0e",
        "hostUrl": "https://cdn.botpress.cloud/webchat/v1",
        "messagingUrl": "https://messaging.botpress.cloud",
        "clientId": "7cfe4e41-832a-4112-9859-f60d11e61d0e",
        "webhookId": "d149c281-fda4-45f8-8bcf-761b53b1db52",
        "lazySocket": true,
        "themeName": "prism",
        "botName": "Nutri Asistent ",
        "frontendVersion": "v1",
        "useSessionStorage": true,
        "enableConversationDeletion": true,
        "theme": "prism",
        "themeColor": "#2563eb"
      })
    }
        </div>

        :
        <div className='main__wrapper'>
          <Switch>
            <Route exact path='/' component={Auth} />
          </Switch>
        </div>
      }
    </>
  )
};

export default App;
