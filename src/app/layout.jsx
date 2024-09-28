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
import "./styles/mobile-transaction.css";
import "./styles/mobile-tutorial.css";
import "./styles/mobile-wallet.css";
import "./styles/mobile-convert.css";
import "./styles/mobile-profile.css";
import "./styles/mobile-promotion.css";
import "./styles/mobile-bonus.css";
import "./styles/mobile-check-in.css";
import "./styles/mobile-vip.css";
import "./styles/mobile-level.css";
import "./styles/mobile-lucky-draw.css";
import "./styles/mobile-collection.css";
import "./styles/mobile-auth.css";

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
