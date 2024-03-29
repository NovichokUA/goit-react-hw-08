import AppBar from "./AppBar/AppBar";

const Loyout = ({ children }) => {
  return (
    <div>
      {<AppBar />}
      {children}
    </div>
  );
};

export default Loyout;
