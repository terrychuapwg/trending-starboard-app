import Navbar from "@layouts/Navbar";
import Footer from "@layouts/Footer";

const Wrapper = ({children}) => {
  return (
    <div className="flex flex-col min-h-screen">
        <Navbar />
            <div className="flex-grow">{children}</div>
        <Footer/>
    </div>
  );
};

export default Wrapper;