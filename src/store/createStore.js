import { createStore, compose, applyMiddleware } from 'redux';
export default (reducers, middlewares ) => {
  const enhancer = process.env.NODE_ENV === 'development'
    // eslint-disable-next-line
    ? compose(console.tron.createEnhancer(), applyMiddleware( ... middlewares))
    // eslint-disable-next-line
    : applyMiddleware( ... middlewares)
  return createStore(reducers, enhancer);
}
