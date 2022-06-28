import AOS from 'aos';

import AppHeader from './components/AppHeader/AppHeader';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage';

import 'aos/dist/aos.css';
import './App.css';
import AppFooter from './components/AppFooter/AppFooter';

function App() {
  AOS.init({
    // Global settings:
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 100, // the delay on throttle used while scrolling the page (advanced)

    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 300, // values from 0 to 3000, with step 50ms
    easing: 'linear', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

  });
  return (
    <Router>
      <AppHeader />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/sanpham/:slug' element={<AboutPage />} />
      </Routes>
      <AppFooter />
    </Router>
  );
}

export default App;
