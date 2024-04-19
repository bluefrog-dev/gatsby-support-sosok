import React, { useState } from "react"
import { MDXProvider } from "@mdx-js/react"
import { Link } from "gatsby"
import "../styles/font.css";
import "../styles/global.css"
import "../styles/header.module.css";
import { DarkMode, GlobalStyle, LightMode, ThemeProvider } from "@chakra-ui/react";

const shortcodes = { Link };
console.log("루트페이지?Layout?");

export const Layout = ({ children }: any) => {
    const [isDark, setIsDark] = useState(
        JSON.parse(localStorage.getItem("isDark") || "false")
    );
    return (
        <ThemeProvider theme={isDark ? DarkMode : LightMode }>
            <GlobalStyle /> 
            <MDXProvider components={shortcodes}>
                {children}
            </MDXProvider>
        </ThemeProvider>
    )
}