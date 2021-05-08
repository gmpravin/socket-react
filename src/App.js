import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://127.0.0.1:4001";

function App() {
  const [response, setResponse] = useState("");

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);

    const bookingId = [111, 222, 333, 444, 555];

    setInterval(() => {

      socket.emit("sendLocation", { lat: "633763", long: "884664", bookingId: Math.floor(Math.random() * bookingId.length) });

    }, 2000);

    socket.on("getLocation", data => {
      console.log(data.data.bookingId,"****");
      if (data.data.bookingId == 1) {
        setResponse(data);
      }
    })



  }, []);

  return (
    <p>
      Location {JSON.stringify(response)}
    </p>
  );
}

export default App;