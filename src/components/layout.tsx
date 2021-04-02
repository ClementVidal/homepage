import { FunctionComponent } from "react";

const Layout: FunctionComponent = ({ children }) => {
  return (
    <>
      <div className="content">
        {children}
      </div>
    </>
  );
};

export default Layout;
