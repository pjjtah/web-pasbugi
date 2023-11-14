import React from "react";

export const CrocoContent = ({ handleClose, children }) => {

    return (
        <div className="modal" >
            <span >
                &times;
            </span>
            <div className="modalContent"  style={{backgroundColor: "#505714fa"}}>
                <div className="modalDiv">
                <p className="close" onClick={handleClose}></p>
                    <img className="modalImage" src={"/croco.png"} alt=""></img>
                    <div className="modalText">
                        <h2>CrocoDale</h2>
                        <br />
                        <p>Autoscrolling Platformer featuring:</p>
                        <p>-16 levels!</p>
                        <p>-Cosmetic hats!</p>
                        <p>-Mischievous monkeys!</p>
                        <br />
                        <a href="https://play.google.com/store/apps/details?id=com.PapriGames.CrocoDale" target="_blank" rel="noopener noreferrer">Download on Play Store</a>

                        <br />
                    </div>
                </div>
                <div className="modalDiv">
                    <img className="modalImageBot" src={"/croco_screenshot_1.png"} alt=""></img>
                    <img className="modalImageBot" src={"/croco_screenshot_2.png"} alt=""></img>
                </div>
            </div>
        </div>
    );
};

export default CrocoContent;