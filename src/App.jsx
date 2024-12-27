import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Home from './components/Home';
import Nav from './components/Nav';
import Card from './components/Card';
import Recipe from './components/Recipe';
import cardData from './components/data';

const App = () => {
  const location = useLocation();

  // Define routes where the Nav should not appear
  const noNavRoutes = ['/', '/sign-in', '/sign-up'];

  return (
    <div>
      {/* Conditionally render Nav */}
      {!noNavRoutes.includes(location.pathname) && <Nav />}

      <main>
        <Routes>
          {/* Authentication routes */}
          <Route path="/" element={<SignIn />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />

          {/* Main application routes */}
          <Route path="/home" element={<Home />} />
          <Route path="/recipe/:id" element={<Recipe />} />
        </Routes>
        <Routes>
            <Route path="/home" element={<Card cardData={cardData} />} />
          </Routes>
      </main>
    </div>
  );
};

export default App;
