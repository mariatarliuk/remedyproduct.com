import * as React from "react"
import CompanyInfoMainPageContent from "../components/pagesContent/CompanyInfoMainPageContent"

if (typeof window !== "undefined") {
    // eslint-disable-next-line global-require
    require("smooth-scroll")('a[href*="#"]')
  }

const MainPageTemplate = ({children}) => {
    return (
        <>
            {children}
            <CompanyInfoMainPageContent/>
        </>
    )
}

export default MainPageTemplate
