import { Provider } from "react-redux";
import Body from "./components/Body";
import Header from "./components/Header";
import "./index.css";
import store from "./utils/appStore";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchVedio from "./components/WatchVedio";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },

      {
        path: "watch",
        element: <WatchVedio />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <div>
        {/**
 Header
  - Logo
  - SearchBar
 Body 
  - SideBar
  - ListItems
 MainContainer
  - ButtonList
  - Vediocontainer
    - VedioCard
 
  */}
        <Header />
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
