import { Providers } from "@/store/providers";
import MyApp from './app';
import "./global.css";
import "./styles/mobile.css";
import "./styles/mobile-home.css";
import "./styles/mobile-deposit.css";
import "./styles/mobile-withdraw.css";
import "./styles/mobile-transfer.css";
import "./styles/mobile-loan.css";
import "./styles/mobile-contact.css";
import "./styles/mobile-angpao.css";
import "./styles/mobile-invite.css";

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
