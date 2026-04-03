import Styles from "./chech-box.module.css"

function CheckBox({status, day, changeStatus}) {
     function handleClick() {
        switch (status) {
            case "":
                changeStatus("start", day);
                break;
            case "start":
                changeStatus("run", day);
                break;
            case "run":
                changeStatus("done", day);
                break;
            case "done":
                changeStatus("pending", day);
                break;
            case "pending":
                changeStatus("cancel", day);
                break;
            case "cancel":
                changeStatus("", day);
                break;
        }
    }

    return (
        <div className={`${Styles.checkBox} ${Styles[`checkBox_${status}`]}`} onClick={handleClick}>
        </div>

    );
}

export default CheckBox;