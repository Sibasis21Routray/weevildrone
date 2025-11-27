
import './App.css'
import Footer from './layouts/Footer';
import Navbar from './layouts/Navbar';
import AppRoutes from './routes/AppRoutes';
import ScrollToTop from './utils/ScrollToTop';

function App() {

  return (
    <div className="">
      <Navbar />
      <div className='mt-[10vh]'>
        <ScrollToTop/>
        <AppRoutes />
      </div>
      <Footer />  
    </div>
  );
}

export default App;
