import { Head } from "./components/home/Head";
import { Info } from "./components/home/Info";
import { Nav } from "./components/home/Nav";
import { Order } from "./components/home/Order";

function App() {
  return (
    <>
      <Nav />
      <Head />
      <Info />
      <Order />
    </>
  );
}

export default App;
