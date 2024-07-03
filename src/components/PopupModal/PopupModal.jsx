import styles from "./PopupModal.module.scss";

function PopupModal({children}) {
  return (
    <div className={styles.popup}>
      {children}
    </div>
  )
}

export default PopupModal