import axios from "axios";
import { useEffect } from "react";

export const AxiosGET = (props) => {
  const AxiosCall = () => {
    useEffect(() => {
      axios({
        method: "GET",
        url: props.APICallUrl,
        responseType: "json",
        headers: {
          "Content-Type": "application/json",
          token: localStorage.token,
        },
      })
        .then((jsonResponse) => {
          props.setActivityItem(jsonResponse.data);
        })
        .catch((err) => {
          //Api error handling.
          if (err.message === "Not Found") {
            props.setErrorAPI("Something went wrong.");
          } else {
            props.setErrorAPI("Please try again.");
          }
        });
    }, []);
  };
  return <>{AxiosCall()}</>;
};
