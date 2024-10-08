import styles from "./styles.module.css";
import { useEffect, useState } from "react";

export default function FirstList() {
  const [trending, setTrending] = useState();

  async function getData() {
    const response = await fetch(
      "https://api.themoviedb.org/3/trending/movie/day?language=ko-KR&page=1",
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYjdkYTNmNTczM2Q0YzEyYTYwMDUzMWI4Yzk0ZmNhNSIsIm5iZiI6MTcyNzM5Njc3Mi4xODUwNDMsInN1YiI6IjY2ZjVmOGY2YjlkNjdhYWRlYzUwOGUzYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZcYttt7E0dXEb9m_aaDr7b5pfs44R6blCHPPvE8FAaY",
        },
      }
    );

    const data = await response.json();
    setTrending(data.results);
    console.log(data.results);
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <section className={styles.trend}>
        <div className={styles.trendHeader}>
          <h2>트렌드</h2>
          <div className={styles.selector}>
            <div className={`${styles.selected} ${styles.select}`}>오늘</div>
            <div className={`${styles.select}`}>이번주</div>
          </div>
        </div>
        <div className={styles.trendBody}>
          {trending ? (
            trending.map((e, idx) => {
              return (
                <div key={idx} className={styles.trendingElement}>
                  <img
                    src={`https://image.tmdb.org/t/p/w300${e.poster_path}`}
                    alt=""
                  />
                  <div className={styles.trendingContent}>
                    <p>
                      <h3>{e.title}</h3>
                    </p>
                    <p>{e.release_date}</p>
                  </div>
                </div>
              );
            })
          ) : (
            <p>로딩중...</p>
          )}
        </div>
      </section>
    </>
  );
}
