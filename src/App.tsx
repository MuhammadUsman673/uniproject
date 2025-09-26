import Navbar from "@/components/navbar/Navbar";
import Main from "@/components/main/Main";
import Footer from "./components/main/footer";
import Legal from "./components/footer/legal";
import BottomNavigationBar from "./components/navbar/BottomNavigation";

function App() {
  return (
    <div className="bg-neutral-100 relative">
      <div className="container mx-auto py-4">
        <Navbar />
        <div className="lg:px-6">
          <Main />
        </div>
      </div>
      <div className="bg-[#001136]">
        <Footer />
        <Legal />
      </div>
        <BottomNavigationBar />
    </div>
  );
}

export default App;
