import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/Home";

const AppRouter = ({ isLoggedIn, isLoggedOut }) => {
  return (
    <Router>
      <Routes>
        {isLoggedIn ? (
          <>
            <Route path="/" element={<Home />} />
          </>
        ) : (
          <Route path="/" element={<Auth />} />
        )}
        {isLoggedOut ? (
          <>
            <Route path="/" element={<Auth />} />
          </>
        ) : (
          <Route path="/" element={<Home />} />
        )}
      </Routes>
    </Router>
  );
};

export default AppRouter;
