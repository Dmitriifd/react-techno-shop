import { Footer } from '@components/footer';
import { Header } from '@components/header';
import { MobileNav } from '@components/MobileNav';

const App = () => {
  return (
    <div className="flex flex-col min-h-full">
      <Header />
      <main className="flex-auto">
        <div className="container">Main</div>
      </main>
      <MobileNav />
      <Footer />
    </div>
  );
};

export default App;
