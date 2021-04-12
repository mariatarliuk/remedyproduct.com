import * as React from "react";
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import "../styles/index.css";
import CasesList from '../components/pagesContent/CasesList'

const CasesPage = () => {
    return (
        <>
            <Header />
            <CasesList />
            <Footer />
        </>
    )
}

export default CasesPage
