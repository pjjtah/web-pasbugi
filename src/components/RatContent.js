import React from "react";

export const RatContent = ({ handleClose, children }) => {

    return (
        <div className="modal" >
            <span >
                &times;
            </span>
            <div className="modalContent"  style={{backgroundColor: "#142f57fa"}}>
                <div className="modalDiv">
                    <p className="close" onClick={handleClose}></p>
                    <img className="modalImage" src={"/rat.png"}  alt=""></img>
                    <div className="modalText">
                        <h2>Unannounced Rat Game</h2>
                        <br />
                        <p>What?</p>
                        <p>-Survive hardships of the year 2033..</p>
                        <p>-Cook traditional finnish foods!</p>
                        <p>-Be the resistance against Corruption!</p>
                        <p>-Defeat the Final Boss!</p>
                        <br />
                        <p className="disabledLink">Under Development..</p>

                        <br />
                    </div>
                </div>
                <div className="modalDiv">
                    <img className="modalImageBot" style={{width: 300}} src={"/rat_screenshot_1.png"} alt=""></img>
                    <img className="modalImageBot"  style={{width: 300}} src={"/rat_screenshot_2.png"} alt=""></img>
                </div>
            </div>
        </div>
    );
};

export default RatContent;