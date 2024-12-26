import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Home from './components/Home'; 
import Nav from './components/Nav';
import Card from './components/Card';
import Recipe from './components/Recipe'; // Recipe page component
import cardData from './components/data'; // Assuming cardData is an array of recipe objects

const App = () => {
  return (
    <Router>
      <div>
        <header>
          <Nav />
        </header>
        <main>
          {/* Wrap the Routes component around all the Route components */}
          <Routes>
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/" element={<SignIn />} />
            <Route path="/home" element={<Home />} />
            <Route path="/recipe/:id" element={<Recipe />} /> {/* Recipe page route */}
          </Routes>

          {/* The Card component should be rendered inside the /home route */}
          <Routes>
            <Route path="/home" element={<Card cardData={cardData} />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
