import "./chech-box.css"

function CheckBox({status, changeStatus}) {
     function handleClick() {
        switch (status) {
            case "":
                // setTasklist("start");
                changeStatus("start");
                break;
            case "start":
                changeStatus("run");
                break;
            case "run":
                changeStatus("done");
                break;
            case "done":
                changeStatus("pending");
                break;
            case "pending":
                changeStatus("cancel");
                break;
            case "cancel":
                changeStatus("");
                break;
        }
    }

    return (
        <div className={`checkBox checkBox_${status}`} onClick={handleClick}>
        </div>

    );
}

export default CheckBox;