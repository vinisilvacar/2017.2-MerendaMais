import { IS_LOADING, IS_NOT_LOADING } from './types';

// Actions
export const isLoading = () => ({
  type: IS_LOADING,
});

export const isNotLoading = () => ({
  type: IS_NOT_LOADING,
});

export const resetSpecificState = state => ({
  type: state,
});

export const resetStore = (...states) => (dispatch) => {
  for (let i = 0; i < states.length; i += 1) {
    dispatch(resetSpecificState(`reset_${states[i]}`.toUpperCase()));
  }
};
