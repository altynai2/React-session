import { applyMiddleware, createStore, combineReducers } from 'redux';
import { thunk } from 'redux-thunk';

// Пример редьюсера
const rootReducer = combineReducers({
  // Добавьте ваши редьюсеры
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

export default store;
