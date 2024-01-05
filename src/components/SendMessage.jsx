import { useState } from "react";
import { UserAuth } from "../context/AuthContext";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";

export default function SendMessage() {
  const [value, setValue] = useState("");
  const { currentUser } = UserAuth();

  const handleSendMessage = async (e) => {
    e.preventDefault();

    if (value.trim() === "") {
      alert("Inserisci un messaggio!");
      return;
    }

    try {
      const { uid, displayName, photoURL } = currentUser;
      await addDoc(collection(db, "messages"), {
        text: value,
        name: displayName,
        avatar: photoURL,
        createdAt: serverTimestamp(),
        uid,
      });
    } catch (error) {
      console.log(error);
    }
    setValue("");
  };

  return (
    <div className="bg-slate-700 fixed bottom-0 w-full py-8 shadow-lg">
      <form onSubmit={handleSendMessage} className="container m-auto flex px-2">
        <input
          placeholder="Scrivi il tuo messaggio..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="input text-black w-full rounded-r-none focus:outline-none bg-slate-400"
          type="text"
        />
        <button
          type="submit"
          className="w-auto bg-slate-800 text-white rounded-r-lg px-5 text-sm font-bold"
        >
          Invia
        </button>
      </form>
    </div>
  );
}
