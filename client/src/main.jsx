
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { GoogleOAuthProvider } from "@react-oauth/google";

createRoot(document.getElementById("root")).render(
  <GoogleOAuthProvider clientId="250640048825-2srp8lkebb3gm9uqh08gtj3v73ohq80s.apps.googleusercontent.com">
      <App />
  </GoogleOAuthProvider>
);
