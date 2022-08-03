import CircularProgress from "@mui/material/CircularProgress";
import React, { useEffect, useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";

// import { AuthPage } from "../pages/authPages/loginPage/AuthPage";
// import { MainPageLayout } from "../pages/mainPages/MainPageLayout";
// import { createTheme, ThemeProvider } from "@mui/material/styles";
// import { roleTypes } from "../types/types";
// import { DashboardLayout } from "../pages/dashboard/DashboardLayout";
// import { checkAuthorization } from "../helpers/utilities";
// import { ClientLayout } from "../pages/clientsPages/ClientLayout";
// import { FcmTransferFormikNew } from "../pages/clientsPages/FcmTransferFormikNew";
// import { PackagePrint } from "../pages/other/PackagePrint";

export const AppRouter = () => {
  // const theme = createTheme({
  //   typography: {
  //     // Tell MUI what's the font-size on the html element is.
  //     htmlFontSize: 10,
  //   },
  // });
  // const dispatch = useDispatch();
  // const { checking, role } = useSelector((state) => state.auth);

  // useEffect(() => {
  //   dispatch(startChecking());
  // }, [dispatch]);

  // if (checking) {
  //   return <CircularProgress />;
  // }

  return (
    <HashRouter>
      <Routes>
        {/* {checkAuthorization(role, roleTypes.collaborator) && (
          <Route path="/dashboard/*" element={<DashboardLayout />}></Route>
        )} */}
        {/* <Route path="/auth" element={<AuthPage />}></Route>
        <Route path="/auth/:token" element={<AuthPage />}></Route>
        {role === "User" && (
          <Route path="/clients/*" element={<ClientLayout />}></Route>
        )} */}

        {/* <Route path="/*" element={<MainPageLayout />}></Route>
        <Route path="/test" element={<FcmTransferFormikNew />}></Route>
        <Route
          path="/other/print/fcmPackage/:fcmPackageId"
          element={<PackagePrint />}
        ></Route> */}
        {/* <Route path="*" element={<LoginPage />} /> */}
        {/* <Route path="/auth/register" element={<LoginPage />} /> */}
      </Routes>
    </HashRouter>
  );
};
