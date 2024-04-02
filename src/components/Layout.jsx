import AppBaR from "./AppBar/AppBar";

const Layout = ({ children }) => {
  return (
    <div>
      {<AppBaR />}
      {children}
    </div>
  );
};

export default Layout;
