import Navbar from "@/components/navbar/Navbar";
import Main from "@/components/main/Main";
import Footer from "./components/main/footer";

function App() {
  return (
    <div className="">
      <div className="container mx-auto">
        <Navbar />
        <Main />
      </div>
      <div className="bg-[#001136]">
        <Footer />
      </div>
    </div>
  );
}

export default App;
