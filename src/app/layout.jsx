import { Providers } from "@/store/providers";
import MyApp from './app';
import "./global.css";
import "./mobile.css";
import "./mobile-home.css";
import "./mobile-deposit.css";
import "./mobile-loan.css";

export const metadata = {
    title: 'Modernize Main Demo',
    description: 'Modernize Main kit',
}

export default function RootLayout({ children }) {

    return (
        <html lang="en" suppressHydrationWarning>
            <body>
                <Providers>
                    <MyApp>{children}</MyApp>
                </Providers>
            </body>
        </html>
    );
}
