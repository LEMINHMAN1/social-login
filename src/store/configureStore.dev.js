import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createEpicMiddleware } from 'redux-observable';
import rootEpic from '../epics/epics';
import rootReducer from '../reducers/reducers';
import DevTools from '../containers/DevTools';

export default function configureStore(initialState) {
    const store = createStore(
        rootReducer,
        initialState,
        compose(
            applyMiddleware(thunk),
            applyMiddleware(createEpicMiddleware(rootEpic)),
            DevTools.instrument()
        )
    );

    return store;
}
