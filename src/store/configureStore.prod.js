import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createEpicMiddleware } from 'redux-observable';
import rootEpic from '../epics/epics';
import rootReducer from '../reducers/reducers';

export default function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        compose(
            applyMiddleware(thunk),
            applyMiddleware(createEpicMiddleware(rootEpic)),
        )
    );
}
