// "use client";

// import React, { useState, useEffect } from "react";
// type childernProps = {
//   page: Number;
//   fetchData: any;
// };

// const Fetch = (page: number, fetchData: any) => {
//   const [isLoading, setIsLoading] = useState<boolean>(false);
//   const [apiData, setApiData] = useState<any>([]);
//   const [serverError, setServerError] = useState<any>(null);

//   useEffect(() => {
//     setIsLoading(true);

//     const fetchDataWrapper = async () => {
//       try {
//         const data = await fetchData(page);
//         setApiData(data);
//       } catch (err) {
//         setServerError(err);
//       } finally {
//         setIsLoading(false);
//       }
//     };
//     fetchDataWrapper();
//   }, [page]);

//   return { isLoading, apiData, serverError };
// };

// export default Fetch;
