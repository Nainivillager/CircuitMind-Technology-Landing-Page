import './App.css';
import NavRoutes from './components/navRoutes';
import Layout from './components/Layout';
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <>
      <BrowserRouter>
        <div className="bg-slate-50">
          <Layout>
            <NavRoutes />
          </Layout>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
