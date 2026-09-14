import { useEffect } from "react";
import AppRoutes from "./routes/AppRoutes";
import socket from "./socket/socket";

function App() {

  useEffect(() => {

    socket.on("connect", () => {

      console.log("🟢 Connected to Backend");
      console.log("Socket ID:", socket.id);

    });

    socket.on("disconnect", () => {

      console.log("🔴 Disconnected");

    });

    return () => {

      socket.off("connect");
      socket.off("disconnect");

    };

  }, []);

  return <AppRoutes />;

}

export default App;