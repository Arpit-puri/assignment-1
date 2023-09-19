import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/shared/Layout';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Products from './pages/Products';
import { createContext, useState } from 'react';

export const UserContext = createContext(null);

function App() {
  // Define your initial context value here
  const [user, setUser] = useState([]);

  return (
    <Router>
      <UserContext.Provider value={{user,setUser}}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="products" element={<Products />} />
          </Route>
          <Route path="/register" element={<Register />} />
        </Routes>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
