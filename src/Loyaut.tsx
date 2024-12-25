import Sidebar from "./components/Sidebar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Sidebar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
