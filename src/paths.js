const paths = {
    home() {
        return '/';
    },
    deposit() {
        return '/bank/deposit';
    },
    instantTopUp() {
        return '/bank/deposit/instant-top-up';
    },
    bankTransfer() {
        return '/bank/deposit/bank-transfer';
    },
    withdraw() {
        return '/bank/withdraw';
    },
    addBank() {
        return '/bank/withdraw/add-bank';
    },
    transfer() {
        return '/bank/transfer';
    },
    transferDetail() {
        return '/bank/transfer/detail';
    },
    transferRecipt() {
        return '/bank/transfer/detail/recipt'
    },
    contact() {
        return '/bank/transfer/contact';
    },
    contactDetail() {
        return '/bank/transfer/contact/detail';
    },
    angpao() {
        return '/bank/transfer/angpao';
    },
    angpaoSend() {
        return '/bank/transfer/angpao/send';
    },
    angpaoRecieve() {
        return '/bank/transfer/angpao/recieve';
    },
    loan() {
        return '/bank/loan';
    },
    loanApply() {
        return '/bank/loan/loan-apply';
    },
    promotion() {
        return '/bank/promotion';
    },
    tutorial() {
        return '/bank/tutorial';
    },
    invite() {
        return '/invite';
    },
};

export default paths;
