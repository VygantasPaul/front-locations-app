import React, { ReactNode } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import { Lato } from "next/font/google";
const lato = Lato({
  subsets: ["latin"],
  weight: "400",
});
type TemplateType = {
  children: ReactNode;
};
const PageTemplate: React.FC<TemplateType> = ({ children }) => {
  return (
    <div className={`flex flex-col h-screen `}>
      <Header />
      <main
        className={`grid grid-cols-1 xl:grid-cols-3 lg:px-5  xl:container mx-auto flex-1 ${lato.className}`}
      >
        <div className="flex-1">{children}</div>
      </main>
      <Footer />
    </div>
  );
};

export default PageTemplate;
