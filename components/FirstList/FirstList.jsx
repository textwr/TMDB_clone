import styles from "./styles.module.css";

export default function FirstList() {
  return (
    <>
      <section className={styles.trend}>
        <div className={styles.trendHeader}>
          <h2>트렌드</h2>
          <div className={styles.selector}>
            <div>오늘</div>
            <div>이번주</div>
          </div>
        </div>
      </section>
    </>
  );
}
