import './App.css';
import NavRoutes from './components/navRoutes';
import Layout from './components/Layout';
import { BrowserRouter } from 'react-router-dom';
import { styles } from './components/styles';

function App() {
  return (
    <BrowserRouter>
      <div className="app-container" style={styles.wholeAppBg}>
        <Layout>
          <NavRoutes />
        </Layout>
      </div>
    </BrowserRouter>
  );
}

export default App;
