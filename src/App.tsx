import { useEffect } from "react";
import Hero from "./components/dashboard/Hero/Hero";
import Header from "./components/statics/Header";
import Corporate from "./components/dashboard/Corporate/Corporate";
import Footer from "./components/statics/Footer";

function App() {
  useEffect(() => {
    const tawk = document.createElement('script');
    tawk.src = 'https://embed.tawk.to/6708d45a2480f5b4f58bd23b/1i9t7r0do'; 
    tawk.async = true;
    tawk.charset = 'UTF-8';
    tawk.setAttribute('crossorigin', '*');
        document.body.appendChild(tawk);
    return () => {
      document.body.removeChild(tawk);
    };

  }, []);
  return (
    <>
      <header>
        <Header />
      </header>
      <Hero />
      <Corporate/>
      <Footer/>

    </>
  );
}

export default App;
