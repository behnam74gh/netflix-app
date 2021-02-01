import { useState, useContext, useEffect } from "react";

import { FirebaseContext } from "../context/firebase";

export default function useContent(target) {
  const [content, setContnet] = useState([]);
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    firebase
      .firestore()
      .collection(target)
      .get()
      .then((snapshot) => {
        const allContent = snapshot.docs.map((item) => ({
          ...item.data(),
          docId: item.id,
        }));
        setContnet(allContent);
      })
      .catch((err) => console.log(err.message));
  }, [firebase, target]);

  return { [target]: content };
}
