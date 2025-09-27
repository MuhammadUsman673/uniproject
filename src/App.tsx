import Navbar from "@/components/navbar/navbar";
import Main from "@/components/main/main";
import Footer from "./components/footer/footer";
import Legal from "./components/footer/legal";
import BottomNavigationBar from "./components/navbar/bottomNavigation";

function App() {
  return (
    <div className="bg-neutral-100 relative">
      <div className="max-w-[1536px] mx-auto py-4">
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
