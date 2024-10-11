import { useEffect } from "react";
import Hero from "./components/dashboard/Hero/Hero";
import Header from "./components/statics/Header";

function App() {
  useEffect(() => {
    // Create a script element
    const tawk = document.createElement('script');
    tawk.src = 'https://embed.tawk.to/6708d45a2480f5b4f58bd23b/1i9t7r0do'; // replace with your unique Tawk.to ID
    tawk.async = true;
    tawk.charset = 'UTF-8';
    tawk.setAttribute('crossorigin', '*');
    
    // Append the script to the body
    document.body.appendChild(tawk);

    // Cleanup script on component unmount
    return () => {
      document.body.removeChild(tawk);
    };

  }, []);
  return (
    <>
       {/* Header */}

      <header>
        <Header />
      </header>

     {/* Hero Section */}
      <Hero />


    </>
  );
}

export default App;
