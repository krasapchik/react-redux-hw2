import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  AboutPage,
  Header,
  PostsPage,
  MainPage,
  PostsDetails,
} from "../../pages";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/posts" element={<PostsPage />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/posts/:id" element={<PostsDetails />} />
          <Route path="*" element={<div>Not found 404</div>} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
