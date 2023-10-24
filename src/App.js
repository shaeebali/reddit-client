import React from 'react';
import Counter from "./features/counter/Counter";
import RedditPostsList from '../src/features/redditPosts/RedditPostsList';

function App() {
  return (
    <div className="App">
      {/* //add components of slices here */}
      <RedditPostsList />
    </div>
  );
}

export default App;
// Add all functioning components linked to slices here.
