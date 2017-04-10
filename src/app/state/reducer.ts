import * as fromRouter from '@ngrx/router-store';
import { ActionReducer, combineReducers } from '@ngrx/store';

export interface State {
  router: fromRouter.RouterState;
}

const reducers = {
  router: fromRouter.routerReducer
};

export function reducer(state: any, action: any): ActionReducer<State> {
  return combineReducers(reducers);
}
