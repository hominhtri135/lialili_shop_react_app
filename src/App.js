import { Route, Routes } from "react-router-dom";

import { Fragment } from "react";
import HomePage from "pages/HomePage";
import Main from "components/layout/Main";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route element={<Main></Main>}>
          <Route path="/*" element={<HomePage></HomePage>}></Route>
        </Route>
      </Routes>
    </Fragment>
  );
}

export default App;
