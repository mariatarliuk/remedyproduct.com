import * as React from "react";
import MainPageTemplate from "../templates/MainPageTemplate"
import "../styles/index.css";
import TeamPageContent from '../components/pagesContent/TeamPageContent'
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

const TeamPage = ({location}) => {
    return (
        <>
            <Header
                path={location.pathname}
            />
            <TeamPageContent/>
            <Footer/>
        </>
    )
}

export default TeamPage
