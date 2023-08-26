import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import Layout from './layout/Layout';
import Router from './routes/Router';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Router />
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
