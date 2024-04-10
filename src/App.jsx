import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";
import PostListProvider from "./store/post-list-store";
import "./spinner-container.css"
import { useState, useEffect } from "react";
import Spinner from "./components/loadingspinner"; // Assuming you have a Spinner component
import Welcomemessage from "./components/welcomemessage";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");
  const [loading, setLoading] = useState(true); // State to manage loading spinner

  useEffect(() => {
    // Simulating an asynchronous operation
    const fetchData = () => {
      setTimeout(() => {
        setLoading(false); // Set loading to false after data is fetched
      }, 2000); // Simulating a 2-second delay
    };

    fetchData(); // Call the fetchData function

    // Cleanup function to clear any pending tasks in case component unmounts
    return () => {
      clearTimeout(); 
    };
  }, []); // Empty dependency array to only run this effect once on initial render

  return (
    <PostListProvider>
      <div className="app-container">
        {loading ? (
          <div className="spinner-container">
            
            <Spinner />
             {/* Display spinner while loading */}
          </div>
        ) : (
          <>
            <Sidebar
              selectedTab={selectedTab}
              setSelectedTab={setSelectedTab}
            ></Sidebar>
            <div className="content">
              <Header></Header>
              {selectedTab === "Home" ? (
                <PostList></PostList>
              ) : (
                <CreatePost></CreatePost>
              )}
              
              <Footer></Footer>
            </div>
          </>
        )}
      </div>
    </PostListProvider>
  );
}

export default App;


