import styles from "./styles.module.css";
export default function FrontGate() {
  return (
    <>
      <section className={styles.frontGate}>
        <div className={styles.frontGateWrapper}>
          <div className={styles.contentWrapper}>
            <div className={styles.title}>
              <h2>환영합니다</h2>
              <h3>
                수백만 개의 영화, TV 프로그램 및 인물을 발견하세요. 지금
                살펴보세요.
              </h3>
            </div>
            <div className={styles.search}>
              <form action="">
                <label>
                  <input
                    type="text"
                    placeholder="영화, TV프로그램, 인물 검색..."
                  />
                </label>
                <button type="submit">Search</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
