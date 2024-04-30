import { useEffect, useState } from "react"
import Hero from "./views/Hero/Hero"
import Services from "./views/Services/Services"
import Products from "./views/Products/Products"
import References from "./views/References/References"
import Care from "./views/Care/Care"
import Footer from "./views/Footer/Footer"
import Loader from "./components/Loader/Loader"

export default function App() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);

  }, [])


  return (
    <>
      {isLoading ? <Loader/> : (
        <>
          <Hero />
          <Services />
          <Products />
          <References />
          <Care />
          <Footer />
        </>
      )}
    </>
  )
}

