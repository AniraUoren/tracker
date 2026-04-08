import Styles from "./error-message.module.css";

function ErrorMessage({errorMessage}) {
    return(
        <>
            <span className={Styles.error}>{errorMessage}</span>
        </>
    )
}

export default ErrorMessage;