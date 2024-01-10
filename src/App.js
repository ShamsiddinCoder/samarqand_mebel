import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Loyaut from './routes/Loyaut';
import { routes } from './routes/routes';

function App() {
  return (
    <div className="App">
      <Routes>
        {
          routes?.map(({paths, elements: Components}) => (
            <Route 
              path={paths}
              element={
                <Loyaut>
                  <Components />
                </Loyaut>
              }
            />
          ))
        }
      </Routes>
    </div>
  );
}

export default App;
