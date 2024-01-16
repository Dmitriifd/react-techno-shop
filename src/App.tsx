import { Footer } from '@components/footer';
import { Header } from '@components/header';
import { MobileNav } from '@components/MobileNav';
import { Slider } from '@components/Slider';

const App = () => {
  return (
    <div className="flex flex-col min-h-full">
      <Header />
      <main className="flex-auto">
        <div className="container mt-5">
          <Slider />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
      </main>
      <MobileNav />
      <Footer />
    </div>
  );
};

export default App;
