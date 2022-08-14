import "./index.scss";
import React from "react";
import Home from "./pages/Home/Home";
import { Routes, Route, useLocation } from "react-router-dom";
import NotFound from "./pages/NotFound/NotFound";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Collection from "./pages/Collection/Collection";
import { collections } from "./assets/collections";
import { useTransition, animated } from "react-spring";

export const ItemsContext = React.createContext();

function App() {
  const [items, setItems] = React.useState([]);
  const [collectionName, setCollectionName] = React.useState({});

  const location = useLocation();
  const transitions = useTransition(location, {
    key: location,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    exitBeforeEnter: true,
  });

  return transitions((props, item) => (
    <animated.div style={props}>
      <ItemsContext.Provider
        value={{
          items,
          setItems,
          collectionName,
          setCollectionName,
        }}
      >
        <Routes location={item}>
          <Route
            path="/"
            element={
              <Home style={{ overflowx: "hidden" }} collections={collections} />
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/collection"
            element={<Collection collections={collections} />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ItemsContext.Provider>
    </animated.div>
  ));
}

export default App;
