import React from 'react'


const MobileHomePage = () => {
    return (
        <div className="sports-menu">
            <div className="menu-left">
                <button className="menu-button">
                    <img src="/mobile_images/icons/dice.png" alt="Live" className="menu-icon" />
                    Live
                </button>
                <button className="menu-button">
                    <img src='/mobile_images/icons/slot.png' alt="Slot" className="menu-icon" />
                    Slot
                </button>
                <button className="menu-button active">
                    <img src='/mobile_images/icons/ball.png' alt="Sport" className="menu-icon" />
                    Sport
                </button>
                <button className="menu-button">
                    <img src='/mobile_images/icons/billard.png' alt="Lotto" className="menu-icon" />
                    Lotto
                </button>
                <button className="menu-button">
                    <img src='/mobile_images/icons/cards.png' alt="Poker" className="menu-icon" />
                    Poker
                </button>
            </div>
            <div className="menu-right">
                <div className="banner cockfighting">
                    <img src="/mobile_images/banners/banner2.png" alt="Cock Fighting" />
                </div>

                <div className="banner racing">
                    <img src="/mobile_images/banners/banner3.png" alt="Horse Racing" />
                </div>

                <div className="banner aba-sports">
                    <img src="/mobile_images/banners/banner1.png" alt="ABA Sports" />
                </div>
            </div>
        </div>
    )
}

export default MobileHomePage
