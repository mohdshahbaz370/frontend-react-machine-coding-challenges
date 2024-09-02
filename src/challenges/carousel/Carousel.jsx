import { useState, useEffect } from "react";
import styles from "./carousel.module.css";

const Carousel = () => {
  const data = [
    {
      id: 1,
      url: "https://imgs.search.brave.com/bAdI7a7qnuuOIJphttt3DfbzLnCU7ZDMtnkejXq6UII/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zdDIu/ZGVwb3NpdHBob3Rv/cy5jb20vMTAwMDkz/OC81NDk5L2kvNDUw/L2RlcG9zaXRwaG90/b3NfNTQ5OTg2MTMt/c3RvY2stcGhvdG8t/Z2luZ2VyLWNhdC5q/cGc",
    },
    {
      id: 2,
      url: "https://imgs.search.brave.com/YzG9FgYN5qLWsiYyJ4dUEvxav9e98dBH0loR8YPRA1E/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTc0/ODc3NTY1L3Bob3Rv/L3BvcnRyYWl0LW9m/LWEtYnJvd24tY2F0/LWFnYWluc3QtYS1n/cmF5LWJhY2tncm91/bmQuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPWlGcFFNSzlF/aTIzVm9XcExLa2Zh/TFVtdXN5Y3VaWllV/OWtWMjNzT2F6YzQ9",
    },
    {
      id: 3,
      url: "https://imgs.search.brave.com/lZtf1S7JKFcaZs2lhxTpAtaJzTk_V35Xt8ys4htuVBU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9idXJz/dC5zaG9waWZ5Y2Ru/LmNvbS9waG90b3Mv/Y2F0LXBvc2VzLXBl/cmZlY3RseS5qcGc_/d2lkdGg9MTAwMCZm/b3JtYXQ9cGpwZyZl/eGlmPTAmaXB0Yz0w",
    },
    {
      id: 4,
      url: "https://imgs.search.brave.com/t6Nv0DwxoIACRxxtX2h7yt31ux5SCXHWgHVpoGh1diw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAyLzM2Lzk5LzIy/LzM2MF9GXzIzNjk5/MjI4M19zTk94Q1ZR/ZUZMZDVwZHFhS0do/OERSR01aeTdQNFhL/bS5qcGc",
    },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);
  const handleNextBtn = () => {
    if (currentSlide === data?.length - 1) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };
  const handlePreviousBtn = () => {
    if (currentSlide === 0) {
      setCurrentSlide(data?.length - 1);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <div className={styles.container}>
      <div>
        <img
          //   key={data[currentSlide]?.id}
          src={data[currentSlide]?.url}
          alt="animal"
        />
      </div>
      <div>
        <button onClick={handleNextBtn}>Next</button>
        <button onClick={handlePreviousBtn}>Previous</button>
      </div>
    </div>
  );
};

export default Carousel;

// import React, { useState, useEffect } from "react";
// import styles from "./carousel.module.css";

// const Carousel = () => {
//   const data = [1, 2, 3, 4];
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const carouselInfiniteScroll = () => {
//     if (currentIndex === data.length - 1) {
//       setCurrentIndex(0);
//     } else {
//       setCurrentIndex(currentIndex + 1);
//     }
//   };
//   useEffect(() => {
//     const interval = setInterval(() => carouselInfiniteScroll(), 3000);
//     return () => clearInterval(interval);
//   });

//   return (
//     <div className={styles["carousel-container"]}>
//       {data?.map((item, index) => (
//         <h1
//           key={item}
//           className={styles["carousel-item"]}
//           style={{ transform: `translate(-${currentIndex * 100}%)` }}
//         >
//           {item}
//         </h1>
//       ))}
//     </div>
//   );
// };

// export default Carousel;
