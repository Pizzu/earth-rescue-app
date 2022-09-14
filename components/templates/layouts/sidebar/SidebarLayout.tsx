export interface ISidebarLayout {
  children: React.ReactNode;
}

const SidebarLayout: React.FC<ISidebarLayout> = ({ children }) => {
  return (
    <>
      <div className="fixed top-0 left-0 w-28 h-screen bg-secondaryBlue-200"></div>
      <div className="pl-36 pr-36 w-full max-w-screen-2xl mx-auto">
        {children}
      </div>
    </>
  );
};

export default SidebarLayout;
