import Styles from "./mark.module.css";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";

function Mark({ type, typeSelect }) {
    const [isActive, setIsActive] = useState(false);
    const [currentType, setCurrenType] = useState("");

    // useEffect(() => {
    //     setCurrenType(type);
    // })

    const handleOnClickToggle = () => {
        setIsActive(!isActive);
    }

    const handleSelectType = (type) => {
      typeSelect(type);
      setCurrenType(type);
      setIsActive(false);
    }

    return (
        <div className={Styles.mark}>
            <div className={`${Styles.mark_selector} ${Styles[`mark_selector__${currentType}`]}`} onClick={handleOnClickToggle}></div>
            <div className={`${Styles.mark_select} ${isActive ? Styles.mark_select__active : ''}`} id="mark-menu">
                <button className={Styles.mark_options + ' ' + Styles['mark_options__home']} onClick={()=> handleSelectType("home")}>Дом</button>
                <button className={Styles.mark_options + ' ' + Styles['mark_options__work']} onClick={()=> handleSelectType("work")}>Работа</button>
                <button className={Styles.mark_options + ' ' + Styles['mark_options__family']} onClick={()=> handleSelectType("family")}>Семья</button>
                <button className={Styles.mark_options + ' ' + Styles['mark_options__hobby']} onClick={()=> handleSelectType("hobby")}>Хобби</button>
            </div>
        </div>

    )
}

export default Mark;