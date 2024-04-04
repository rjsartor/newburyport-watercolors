import NavBar from "./navbar";
import { Home } from "./home";
import { About } from "./about";
import { Works } from "./works";
import { Contact } from "./contact";
import './globals.css'
import { Footer } from "./footer";

export default function App() {
  return (
    <main className='flex flex-column items-stretch'>
      <NavBar />
      <Home />
      <Works />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}