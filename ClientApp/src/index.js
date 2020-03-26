import React from 'react';
import ReactDOM from 'react-dom';
import ExternalApi from './components/ExternalApi';
import { Auth0Provider } from "./react-auth0-wrapper";
import config from "./auth_config.json";

// A function that routes the user to the right place
// after login
const onRedirectCallback = appState => {
    window.history.replaceState(
        {},
        document.title,
        appState && appState.targetUrl ? appState.targetUrl : window.location.pathname
    );
};

ReactDOM.render(
    <Auth0Provider
        domain={config.domain}
        client_id={config.clientId}
        redirect_uri={window.location.origin+"/Highland"}
        audience={config.audience}
        onRedirectCallback={onRedirectCallback}
    >
        <ExternalApi />
    </Auth0Provider>,
    document.getElementById("root")
);
