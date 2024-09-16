"use client";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { styled, useTheme } from "@mui/material/styles";
import React, { useState, useEffect } from "react";
import Header from "./layout/vertical/header/Header";
import Sidebar from "./layout/vertical/sidebar/Sidebar";
import Customizer from "./layout/shared/customizer/Customizer";
import Navigation from "./layout/horizontal/navbar/Navigation";
import HorizontalHeader from "./layout/horizontal/header/Header";
import { useSelector } from 'react-redux';
import MobileLayout from "./layout/mobile/layout";

const MainWrapper = styled("div")(() => ({
    display: "flex",
    minHeight: "100vh",
    width: "100%",
}));

const PageWrapper = styled("div")(() => ({
    display: "flex",
    flexGrow: 1,
    paddingBottom: "60px",
    flexDirection: "column",
    zIndex: 1,
    width: "100%",
    backgroundColor: "transparent",
}));

export default function RootLayout({ children }) {
    const customizer = useSelector((state) => state.customizer);
    const theme = useTheme();
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkIsMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        checkIsMobile(); // Initial check

        window.addEventListener('resize', checkIsMobile);
        return () => {
            window.removeEventListener('resize', checkIsMobile);
        };
    }, []);


    // Render nothing until the isMobile value is determined (Optional)
    if (typeof window === 'undefined') {
        return null;
    }

    return (
        <>
            {isMobile ?
                <MobileLayout>
                    {children}
                </MobileLayout>
                :
                <MainWrapper>
                    {customizer.isHorizontal ? "" : <Sidebar />}
                    <PageWrapper
                        className="page-wrapper"
                        sx={{
                            ...(customizer.isCollapse && {
                                [theme.breakpoints.up("lg")]: {
                                    ml: `${customizer.MiniSidebarWidth}px`,
                                },
                            }),
                        }}
                    >
                        {customizer.isHorizontal ? <HorizontalHeader /> : <Header />}
                        {customizer.isHorizontal ? <Navigation /> : ""}
                        <Container
                            sx={{
                                maxWidth: customizer.isLayout === "boxed" ? "lg" : "100%!important",
                            }}
                        >
                            <Box sx={{ minHeight: "calc(100vh - 170px)" }}>
                                {children}
                            </Box>
                        </Container>
                        <Customizer />
                    </PageWrapper>
                </MainWrapper >
            }
        </>
    );
}
