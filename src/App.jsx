import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import BookList from "./pages/BookList.jsx"; // Import the new BookList component

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
      <Route path="/books" element={<BookList />} /> {/* Add the new route for the BookList page */}
      </Routes>
    </Router>
  );
}

export default App;
