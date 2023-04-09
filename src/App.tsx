import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { useQuery } from '@tanstack/react-query';
import request from 'graphql-request';
import { useGetRandombusinessesQuery } from './__generated__/graphql';
import graphqlRequestClient from './lib/grapql-request';
// import { randomBusinesses } from './queries/random-business.query';

function App() {
  const [count, setCount] = useState(0);

  // const {} = useQuery({
  //   queryKey: ['random-businesses'],
  //   queryFn: async () =>
  //     request('http://localhost:8080/graphql', randomBusinesses, {

  //     })
  // });

  const { data } = useGetRandombusinessesQuery(graphqlRequestClient, {
    limit: 12
  });

  console.log('data: ', data?.randomBusinesses.data);

  return (
    <div className='App'>
      <div>
        <a href='https://vitejs.dev' target='_blank'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://reactjs.org' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className='card'>
        <button onClick={() => setCount(count => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className='read-the-docs'>
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;