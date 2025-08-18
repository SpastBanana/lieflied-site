import { Footer } from "./components/home/footer";
import { Head } from "./components/home/Head";
import { Info } from "./components/home/Info";
import LoginPopup from "./components/home/LoginPopup";
import { Nav } from "./components/home/Nav";
import { Order } from "./components/home/Order";

function App() {
  return (
    <>
      <Nav />
      <LoginPopup />
      <Head />
      <Info />
      <Order />
      <Footer />
    </>
  );
}

export default App;
