
import './App.css'
import Footer from './layouts/Footer';
import Navbar from './layouts/Navbar';
import AppRoutes from './routes/AppRoutes';

function App() {

  return (
    <div className="text-red-500">
      <Navbar />
      <div className='mt-[10vh]'>
        <AppRoutes />
      </div>
      <Footer />
    </div>
  );
}

export default App;
