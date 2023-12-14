import React, { ReactNode } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import styles from "./page.module.css";
type TemplateType = {
  children: ReactNode;
};
const AddPostTemplate: React.FC<TemplateType> = ({ children }) => {
  return (
    <div className={`flex flex-col h-screen `}>
      <Header />
      <main className={`flex-1 px-3 lg:px-5`}>{children}</main>
      <Footer />
    </div>
  );
};

export default AddPostTemplate;
