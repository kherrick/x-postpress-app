import { store } from '../store/configureStore'

import { decrementCount as decrementCountCreator, incrementCount as incrementCountCreator } from '../actions/creators'

export const decrementCount = () => store.dispatch(decrementCountCreator())
export const incrementCount = () => store.dispatch(incrementCountCreator())
