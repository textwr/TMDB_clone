import styles from "./styles.module.css";
import FrontGate from "../FromtGate/FrontGate";
import FirstList from "../FirstList/FirstList";
import SecondList from "../SecondList/SecondList";

export default function Body() {
  return (
    <>
      <div className={styles.body}>
        <FrontGate></FrontGate>
        <FirstList></FirstList>
        <SecondList></SecondList>
      </div>
    </>
  );
}
