import styles from "./styles.module.css";

export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerWrapper}>
          <div className={styles.header_left}>
            <a href="">
              <img src="../assets/logo.svg" alt="" width={154} height={20} />
            </a>
            <ul className={styles.header_leftUL}>
              <li>
                <a href="#">메뉴1</a>
              </li>
              <li>
                <a href="#">메뉴2</a>
              </li>
              <li>
                <a href="#">메뉴3</a>
              </li>
              <li>
                <a href="#">메뉴4</a>
              </li>
            </ul>
          </div>
          <div className={styles.header_right}>
            <ul className={styles.header_rightUL}>
              <li>
                <a href="#">
                  <img src="../assets/plus.svg" alt="" width={20} height={20} />
                </a>
              </li>
              <li>
                <a href="#">ko</a>
              </li>
              <li>
                <a href="#">로그인</a>
              </li>
              <li>
                <a href="#">회원가입</a>
              </li>
              <li>
                <a href="#">
                  <img
                    src="../assets/search.svg"
                    alt=""
                    width={30}
                    height={30}
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}
