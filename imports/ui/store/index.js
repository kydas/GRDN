import {Tracker} from 'meteor/tracker';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/root';
import createReactiveMiddlewares from 'meteor-redux-middlewares';

const {
  sources, subscriptions
} = createReactiveMiddlewares(Tracker);

const store = createStore(
  rootReducer,
  compose(applyMiddleware(sources, subscriptions, thunk))
);
export default store;
