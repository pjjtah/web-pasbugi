import React from "react";

export const BounzeContent = ({ handleClose, children }) => {

    return (
        <div className="modal" >
            <span >
                &times;
            </span>
            <div className="modalContent"  style={{backgroundColor: "#571454fa"}}>
                <div className="modalDiv">
                    <p className="close" onClick={handleClose}></p>
                    <img className="modalImage" src={"/bounze.png"}  alt=""></img>
                    <div className="modalText">
                        <h2>BounZe</h2>
                        <br />
                        <p>Ominous Puzzle Game</p>
                        <p>-50 levels!</p>
                        <p>-Swipe, stretch and rotate objects to guide the ball!</p>
                        <p>-Glitchy CRT-television graphics!</p>
                        <br />
                        <p className="disabledLink">Under rework, not available for download atm :(</p>

                        <br />
                    </div>
                </div>
                <div className="modalDiv">
                    <img className="modalImageBot" style={{width: 300}} src={"/bounze_screenshot_1.png"} alt=""></img>
                    <img className="modalImageBot"  style={{width: 300}} src={"/bounze_screenshot_2.png"} alt=""></img>
                </div>
            </div>
        </div>
    );
};

export default BounzeContent;