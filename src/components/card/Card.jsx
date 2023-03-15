import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { GetData } from "../../services/DataServices";
import "./CardStyles.css";
import patternDividerDesktop from "../../assets/pattern-divider-desktop.svg";
import patternDividerMobile from "../../assets/pattern-divider-mobile.svg";
import dice from "../../assets/icon-dice.svg";

export default function Card() {
    const [id, setId] = useState("");
    const [advice, setAdvice] = useState("");

    let BtnClick = async () => {
        let adviceData = await GetData();
        setId(adviceData.id);
        setAdvice(adviceData.advice);
    }

    useEffect( () => {
        BtnClick()
    }, []);
    
    return (
        <div className="advice-card">
            <p className="advice-id"> ADVICE #{id} </p>
            <p className="advice-quote font-link"> "{advice}" </p>
            <picture className="divider">
                <source media="(min-width: 768px)" srcSet={patternDividerDesktop} />
                <img src={patternDividerMobile} alt="divider" />
            </picture>
            <Button className="random-btn" onClick={BtnClick}>
                <img src={dice} alt="New Advice Button" />
            </Button>
        </div>
    );
}