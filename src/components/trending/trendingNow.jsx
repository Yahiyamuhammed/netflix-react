import React from "react";
import styles from "./trendingNow.module.css";
import TrendingCard from "./TrendingCard";

const movies = [
  { id: 1, img: "https://occ-0-2164-2186.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABUiKNXIYjkmCmVedWUxralkvxaJAvqtsiIxM-jkmtG4Bgpu2XYlDGkqwmqUjujkKNLwjuiImN5xHgYQvYE5sgAtW2voNprG98TkAh737RgL5kQZrGbIhuwp_Tn_aJi7PzSFE.webp?r=f85&quot" },
  { id: 2, img: "https://occ-0-2164-2186.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABexxJ7CuzN9sn4oXmDXsOPWU4dalTxyPYB7mIcyBrXl-dNeHcSB1yT4BinjKzhXgVpBdRVm4GSA3X7NyZEIkGbm40jcHE4hYKJyPYK7YN660ARcEsF57PrIPsalxMtfHnlur.webp?r=319&quot" },
  { id: 3, img: "https://occ-0-2164-2186.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABcBQAzZgCcAJyLKGf0x3EjJHKr1h1oCRUQDfVspaHXampP-RjiOkIRlWBz7ViFOvUI1EdPSRcxoOPmB7paPLi52W4OmQZJ4NDMQ.webp?r=a92&quot" },
  { id: 4, img: "https://occ-0-2164-2186.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABX__4IDXUfAha-ZJby9rICyllwCXAkILhlvlrj_TXuGnRRIxxXZBffOBGK4S4kl_HN6oSWDXguVxJrnKIVY7LVDxnEP-Mo9RDWU.webp?r=207&quot" },
  { id: 5, img: "https://occ-0-2164-2186.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABTsIHqmKvuiJaunFg-3M7eRlEBPik8Un-eqTK-od9x48LzeGITagPm82bIopTRvyhIEMehQNdXN2qfj0AVpDTMhftqYStaCieJdbO-jfhSkFUVGBs9eYkpkjdzOj_UCKZi53.webp?r=06c&quot" },
  { id: 3, img: "https://occ-0-2164-2186.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABTL3LlLwXx6NEvE0PzVLVziEdtqZ5l5B7DbIMAotylS9T6sV2w09Xn-6uzmD6LDeRhhQmY7VORthSOD7Z7ovrO3pBbyZjwItXsg.webp?r=cf5&quot" },
  { id: 4, img: "https://occ-0-2164-2186.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABcJkAYihjBQ5SjWbwydLdZE8Dm1cJ0whRc21AEIS4V0VO8w65lEDAW5gwzTFTUuNqVTgBcgucwr6rMeRHra3xlru9n1CCtfOm1s.webp?r=e1d&quot" },
  
];

const TrendingNow = () => {
  return (
    // <div className={styles.trendingContainer}>
    //   <h2 className={styles.trendingTitle}>Trending Now</h2>
    //   <div className={styles.trendingList}>
    //     {movies.map((movie, index) => (
    //       <div key={movie.id} className={styles.trendingItem}>
    //         <span className={styles.rankingNumber}>{index + 1}</span>
    //         <img src={movie.img} alt={movie.title} className={styles.movieImage} />
    //         <p className={styles.movieTitle}>{movie.title}</p>
    //       </div>
    //     ))}
    //   </div>
    // </div>
    <>
    <h2 className={styles.trendingTitle}>Trending Now</h2>
    <div className={styles.trendingContainer}>
    {movies.map((val, index) => (
      <TrendingCard key={index} image={val.img} rank={index + 1} />
    ))}
  </div>
  </>
  
  );
};

export default TrendingNow;
