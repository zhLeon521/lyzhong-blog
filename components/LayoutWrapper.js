/*
 * @Description:
 * @Autor: Blueheart
 * @Date: 2022-02-20 14:05:16
 * @LastEditTime: 2022-02-24 00:53:53
 * @FilePath: \honghong.me-1.0.5\components\LayoutWrapper.js
 */
import Footer from "./Footer";
import { ToastContainer } from "react-toastify";
import Navbar from "./Navbar";
import SectionContainer from "@/components/SectionContainer";

const LayoutWrapper = ({ children }) => {
    return (
        <>
            <SectionContainer>
                <div className="flex flex-col justify-between">
                    <Navbar />
                    <main className="mx-auto w-full max-w-3xl px-8 py-12 sm:px-6  xl:max-w-5xl xl:px-0">
                        {children}
                    </main>
                    {/* <Footer /> */}
                    <ToastContainer />
                </div>
            </SectionContainer>
        </>
    );
};

export default LayoutWrapper;
