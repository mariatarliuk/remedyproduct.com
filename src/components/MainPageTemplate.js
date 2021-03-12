import * as React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import CompanyInfoMainPage from "../components/CompanyInfoMainPage"

const MainPageTemplate = ({children}) => {
    return (
        <>
            <Header/>
            {children}
            <CompanyInfoMainPage/>
            <Footer/>
        </>
    )
}

export default MainPageTemplate
