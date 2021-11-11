import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//Project Imports
import { Header } from './components/Header';
import { MainLayout } from './components/MainLayout';
import { Media } from 'reactstrap';

const App = () => {
  return (
    <div className="main-layout">
      <Header />
      <MainLayout />
      <div className="main-layout-background">
        <Media object src='/images/60761955a0def9c540bbfde0_artwork-services-00.svg' alt="Site logo" className="main-layout-picture"></Media>
      </div>
    </div>
  );
}

export default App;
