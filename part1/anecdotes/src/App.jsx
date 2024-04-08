import React, { useState } from 'react';

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ];

  // set anecdotes vote to zero
  const initialVotes = Array(anecdotes.length).fill(0);
  const [votes, setVotes] = useState(initialVotes);
  const [selected, setSelected] = useState(0);

  const handleVote = () => {
    const newVotes = [...votes];
    newVotes[selected] += 1;
    setVotes(newVotes);
  };

  // display random anecdote
  const handleNextAnecdote = () => {
    const randomIndex = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomIndex);
  };

  // display the anecdote with the largest number of votes
  const maxVotesIndex = votes.indexOf(Math.max(...votes));

  return (
    <div>
      <div>
        <h2>Anecdote of the Day</h2>
        <div>{anecdotes[selected]}</div>
        <div>has {votes[selected]} votes</div>
        <button onClick={handleVote}>Vote</button>
        <button onClick={handleNextAnecdote}>Next Anecdote</button>
      </div>
      <div>
        <h2>Anecdote with Most Votes</h2>
        <div>{anecdotes[maxVotesIndex]}</div>
        <div>has {votes[maxVotesIndex]} votes</div>
      </div>
    </div>
  );
};

export default App;
