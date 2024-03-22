import "bootstrap/dist/css/bootstrap.min.css";
// imported swiper css (imported twice)
import "swiper/css";
import "./App.css";
import Banner from "./pages/Banner";
import Header from "./pages/Header";
import BlogPage from "./components/BlogPage";




function App() {
  return (
    <div>
      <Header />
      <Banner />
      <BlogPage/>  
    </div>
  );
}

export default App;
