import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { AppContainer } from 'react-hot-loader';
import configureStore from './store/configureStore';
import Root from './containers/Root';
import './assets/z/styles/imgs/loader.gif';
import 'react-datepicker/dist/react-datepicker.css';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

window.addEventListener('popstate', function(e) {
    if(e){
        $('.modal-backdrop').remove();
    }
});

window.appstore = store;

render(
    <AppContainer>
        <Root store={store} history={history} />
    </AppContainer>,
    document.getElementById('root')
);

if (module.hot) {
    module.hot.accept('./containers/Root', () => {
        const NewRoot = require('./containers/Root').default;
        render(
            <AppContainer>
                <NewRoot store={store} history={history} />
            </AppContainer>,
            document.getElementById('root')
        );
    });
}
