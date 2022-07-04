import ContentComponent from "../components/ContentComponent";
import FooterComponent from "../components/FooterComponent";
import HeaderComponent from "../components/HeaderComponent";

export default function MainComponent() {
    return (
        <>
            <HeaderComponent></HeaderComponent>
            <ContentComponent></ContentComponent>
            <FooterComponent></FooterComponent>
        </>
    )
}