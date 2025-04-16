import "@/styles/globals.css";
import Navbar from "@/src/components/navbar";
import Footer from "@/src/components/footer";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar/>
      <Component {...pageProps} />
      <Footer/>
    </>
  )
}
