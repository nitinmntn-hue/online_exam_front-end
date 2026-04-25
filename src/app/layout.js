'use client';

import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import theme from '../theme/theme';
import Footer from '../components/layout/footer';
import GridBackground from '../components/ui/gridBG';
import { FontLoader } from '../components/ui/Font';

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <ThemeProvider theme={theme}>
                    <FontLoader />
                    <CssBaseline />
                    <Box sx={{ minHeight: "100vh", background: "#030712", position: "relative", color: "text.primary" }}>

                    <GridBackground />
                    <Box sx={{  }}>{children}</Box>
                    <Footer />
                    </Box>
                </ThemeProvider>
            </body>
        </html>
    );
}