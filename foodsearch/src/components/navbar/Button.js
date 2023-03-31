import React from "react";
import "./Button.css";
import { useAuth0 } from "@auth0/auth0-react";

export function Button() {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  return (
    <>
      {isAuthenticated ? (
        <>
          <button onClick={logout} className="btn">
            Log Out
          </button>

          <img src={user.picture} />
        </>
      ) : (
        <button onClick={loginWithRedirect} className="btn">
          Sign up
        </button>
      )}
    </>
  );
}
