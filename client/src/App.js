import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import Form from "./components/Form/Form";
import AdventureProvider from "./context/AdventureContext";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Adventures from "./pages/Adventures/Adventures";
import SearchProvider from "./context/SearchContext";
import AdventureModal from "./components/AdventureModal/AdventureModal";

const App = () => {
  return (
    <BrowserRouter>
      <SearchProvider>
        <AdventureProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<Form />} />
            <Route path="/new/:id" element={<Form />} />
            <Route path="/adventures" element={<Adventures />} />
            <Route path="/detail/:id" element={<AdventureModal />} />
            <Route path="/adventures/:fav" element={<Adventures />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </AdventureProvider>
      </SearchProvider>
    </BrowserRouter>
  );
};

export default App;
