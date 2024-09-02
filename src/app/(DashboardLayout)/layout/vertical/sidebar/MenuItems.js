import { uniqueId } from "lodash";

import {
    IconTicket,
    IconCurrencyDollar,
    IconDashboard,
    IconWallet,
    IconTransfer,
    IconBrandYoutube,
    IconCashBanknote,
    IconDeviceGamepad,
    IconDice5,
    IconHexagonNumber7,
    IconPentagonNumber5,
    IconCards,
    IconPlayFootball,
    IconTransactionDollar,
    IconQrcode,
    IconHeadset,
} from "@tabler/icons-react";

const Menuitems = [
    {
        navlabel: true,
        subheader: "Home",
    },
    {
        id: uniqueId(),
        title: "Dashboard",
        icon: IconDashboard,
        href: "/dashboard",
    },
    {
        navlabel: true,
        subheader: "Bank",
    },
    {
        id: uniqueId(),
        title: "Deposit",
        icon: IconCashBanknote,
        href: "/bank/deposit",
    },
    {
        id: uniqueId(),
        title: "Withdraw",
        icon: IconWallet,
        href: "/bank/withdraw",
    },
    {
        id: uniqueId(),
        title: "Transfer",
        icon: IconTransfer,
        href: "/bank/transfer",
    },
    {
        id: uniqueId(),
        title: "Loan",
        icon: IconCurrencyDollar,
        href: "/bank/loan",
    },
    {
        id: uniqueId(),
        title: "Promotion",
        icon: IconTicket,
        href: "/bank/promotion",
    },
    {
        id: uniqueId(),
        title: "Tutorial",
        icon: IconBrandYoutube,
        href: "/bank/tutorial",
    },
    {

        navlabel: true,
        subheader: "Games",
    },
    {
        id: uniqueId(),
        title: "Games",
        icon: IconDeviceGamepad,
        href: "/games/",
        children: [
            {
                id: uniqueId(),
                title: "Live",
                icon: IconDice5,
                href: "/games/live",
            },
            {
                id: uniqueId(),
                title: "Lotto",
                icon: IconHexagonNumber7,
                href: "/games/lotto",
            },
            {
                id: uniqueId(),
                title: "Pocker",
                icon: IconCards,
                href: "/games/pocker",
            },
            {
                id: uniqueId(),
                title: "Slot",
                icon: IconPentagonNumber5,
                href: "/games/slot",
            },
            {
                id: uniqueId(),
                title: "Sport",
                icon: IconPlayFootball,
                href: "/games/sport",
            },
        ],
    },
    {
        navlabel: true,
        subheader: "User",
    },
    {
        id: uniqueId(),
        title: "Transaction",
        icon: IconTransactionDollar,
        href: "/transaction",
    },
    {
        id: uniqueId(),
        title: "Wallet",
        icon: IconWallet,
        href: "/wallet",
    },
    {
        id: uniqueId(),
        title: "Invite",
        icon: IconQrcode,
        href: "/invite",
    },
    {
        id: uniqueId(),
        title: "Live Chat",
        icon: IconHeadset,
        href: "/live-chat",
    },
];

export default Menuitems;
