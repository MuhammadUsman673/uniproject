import Main from "@/components/main";
import MainLayout from "@/layouts/main";

function Home() {
  return (
    <div className="bg-neutral-100 relative">
      <MainLayout>
        <div className="lg:px-6 pb-15">
          <Main />
        </div>
      </MainLayout>
    </div>
  );
}

export default Home;
