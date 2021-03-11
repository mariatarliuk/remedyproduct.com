import * as React from "react"
import Header from "../components/Header"
import CompanyInfoMainPage from "../components/CompanyInfoMainPage"

const MainPageTemplate = ({children}) => {
    return (
        <>
            <Header/>
            {children}
            <CompanyInfoMainPage/>
        </>
    )
}

export default MainPageTemplate
