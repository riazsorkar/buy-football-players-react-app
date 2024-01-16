import './Cart.css';

const Cart = () => {
    return (
        <div>

        <div className="calculation-container">
                <div className="fixed-container">
                <h1>Selected Players</h1>
                <div className="added-players">
                    <div className="player-image">
                        <img src="https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQKII5DeHffbS0TulcaTZA-ABvq20TC2IYu481ynzS7PErPxvm-ahaH5BkKotZU_ojFp_27_kBGG1OL1TU" alt="" />
                    </div>
                    <div className="player-info">
                        <h4>Erling Haaland</h4>
                        <h4>Country: Norway</h4>
                        <h4>$100</h4>
                    </div>
                </div>
                <div className="calculation-info">
                    <h3>Player: 1</h3>
                    <h3>Total Price: $100</h3>
                    <button className="hire-btn">Hire Now</button>
                </div>

            </div>
                </div>
            
        </div>
    );
};

export default Cart;