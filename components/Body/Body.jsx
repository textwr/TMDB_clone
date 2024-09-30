import styles from "./styles.module.css";
import FrontGate from "../FromtGate/FrontGate";
import FirstList from "../FirstList/FirstList";

export default function Body() {
  return (
    <>
      <div className={styles.body}>
        <FrontGate></FrontGate>
        <FirstList></FirstList>
      </div>
    </>
  );
}
