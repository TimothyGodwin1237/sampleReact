import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();

  const handleReturnPromise = () => {
    return new Promise((resolve, reject) => {
      const success = false;
      if (success) {
        resolve("Resolved");
      } else {
        reject("Rejected");
      }
    });
  };

  const handlePromise = async () => {
    try {
      const result = await handleReturnPromise();
      console.log("result : ", result);
    } catch (error) {
      console.log("error : ", error);
    }
  };

  const handleAdd = () => {
    return 10 + 20;
  };

  useEffect(() => {
    console.log("START");
    handlePromise();
    const result = handleAdd();
    console.log("END : ", result);
    // const myPromise = new Promise((resolve, reject) => {
    //   const success = true;
    //   if (success) {
    //     resolve("Resolved");
    //   } else {
    //     reject("Rejected");
    //   }
    // });

    // console.log("myPromise: ", myPromise);

    // myPromise
    //   .then((result) => {
    //     console.log("result : ", result);
    //   })
    //   .catch((error) => {
    //     console.log("error : ", error);
    //   });
  }, []);

  return (
    <div>
      <p>Contacts Page</p>
      <button onClick={() => navigate("/userAbout")}>To About</button>
    </div>
  );
};

export default Contact;
