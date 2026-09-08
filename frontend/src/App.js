import logo from './logo.svg';
import './App.css';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Header className="min-h-[calc(100vh-120px)]" />
    <main>
      <Outlet />
    </main>
    <Footer />
    </>
  );
}

export default App;
