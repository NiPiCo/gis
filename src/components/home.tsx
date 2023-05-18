import logo from "../logo.svg";
import React from "react";


import NavBar from "./navigation/nav-bar";
import {Box} from "@mui/material";
import {BasicCard, FlexBox} from "./common/components.common.styled";
import SlideShowGis from "./swiper/swiper";

export function HomeContent() {
    return (
        <Box className="HomeWrap">
            <BasicCard>
                <FlexBox>
                    <NavBar/>
                </FlexBox>
            </BasicCard>
            <SlideShowGis/>
            Seit dem Jahre 2000 umfassen wir als Haus- und Grundstücksbetreuung im Münchner Umland, das gesamte Portfolio im privaten und gewerblichen Bereich.

            Wir sind im gesamten München und Münchner Umland, mit unseren Dienstleistungen für Sie erreichbar. Als Dienstleister in der Haus- und Grundstücksbetreuung legen wir zudem sehr großen Wert auf konstant hohe Leistung, Zuverlässigkeit, Service, geschultes Personal und professionelle Geräteausstattung.

            Für nähere Informationen zu uns und unsere Dienstleistungen oder Referenzen, nehmen Sie einfach Kontakt mit uns auf. Wir freuen uns auf Ihre Anfrage!
        </Box>
    );
}

export function Home() {
    return (
        <HomeContent/>
    );
}