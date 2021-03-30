import * as React from "react"
import Header from "../components/common/Header"
import Footer from "../components/common/Footer"
import CompanyInfoMainPageContent from "../components/pagesContent/CompanyInfoMainPageContent"

if (typeof window !== "undefined") {
    // eslint-disable-next-line global-require
    require("smooth-scroll")('a[href*="#"]')
  }

const MainPageTemplate = ({children}) => {
    return (
        <>
            <Header/>
            {children}
            <CompanyInfoMainPageContent/>
            <Footer/>
        </>
    )
}

export default MainPageTemplate
