import ReactDOM from 'react-dom/client';

import reportWebVitals from './reportWebVitals';
import GlobalStyle from './styles/globalStyle';
import {
  Banner,
  About,
  Offices,
  Concierge,
  Ligala,
  Tag,
  Partners,
  ContactUs
} from "./components";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <div>
    <GlobalStyle />
    {/* Hero Banner Section */}
    <Banner />
    {/* About section */}
    <About />
    {/* Services section */}
    <Offices />
    <Concierge />
    {/* Ligala section */}
    <Ligala />
    {/* Tag section */}
    <Tag />
    <Partners />
    {/* Contact section */}
    <ContactUs />
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
