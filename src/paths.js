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
};

export default paths;
