import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import postsReducer from '../features/redditPosts/redditPostsSlice'

export const store = configureStore({
  reducer: {
    posts: postsReducer
  },
});
