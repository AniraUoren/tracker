import "./chech-box.css"
import {useState} from "react";

function CheckBox({status = ""}) {
    const [statusTask, setStatusTask] = useState(status);
     function handleClick() {
        switch (statusTask) {
            case "":
                setStatusTask("start");
                break;
            case "start":
                setStatusTask("run");
                break;
            case "run":
                setStatusTask("done");
                break;
            case "done":
                setStatusTask("pending");
                break;
            case "pending":
                setStatusTask("cancel");
                break;
            case "cancel":
                setStatusTask("");
                break;
        }
    }

    return (
        <div className={statusTask !== "" ? `checkBox checkBox_${statusTask}` : "checkBox"} onClick={handleClick}>

        </div>

    );
}

export default CheckBox;