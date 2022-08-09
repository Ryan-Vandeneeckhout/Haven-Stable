import axios from "axios";

export const AxiosPOST = (props) => {
  const AxiosCall = () => {
      const body = props.body;
      console.log(body);
      
      axios({
        method: "POST",
        url: props.APICallUrl,
        responseType: "json",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
        },
      
      })
        .then((jsonResponse) => {
          props.setItem(jsonResponse.data);
        })
        .catch((err) => {
          //Api error handling.
          if (err.message === "Not Found") {
            props.setErrorAPI("Something went wrong.");
          } else {
            props.setErrorAPI("Please try again.");
          }
        });
  };
    return (
        <>
        {AxiosCall()}
        </>
    );
};
