import NavBar from "./NavBar/NavBar";


const layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div>
      <NavBar />
      <main>{children}</main>
    </div>
  );
}

export default layout;