import { AnimatePresence, motion } from "framer-motion";
import React, { useRef, useState } from "react";
import "./login.css";

const hdlsubmit = async (
  logid: any,
  logpass: any,
  setError: any,
  setAuth: any
) => {
  let res = await fetch("/auth/login", {
    method: "POST",
    body: JSON.stringify({
      id: logid,
      pass: logpass,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  console.log(res);
  if (res.status == 400) {
    setError("Invalid Credintials");
  } else if (res.status == 500) {
    setError("Something Went Wrong On The Server");
  } else {
    setError("");
    setAuth(true);
    let data = await res.json();
    window.location.reload();
  }
};

function Page() {
  let logid: any = useRef("");
  let pass: any = useRef("");
  let [error, setError] = useState("");
  let [auth, setAuth] = useState(false);
  return (
    <div className="card logcard">
      <form
        className="logform"
        onSubmit={(el) => {
          el.preventDefault();
          hdlsubmit(logid.current.value, pass.current.value, setError, setAuth);
        }}
      >
        <label htmlFor="userid">Name: </label>
        <input
          type="text"
          name="userid"
          id="userid"
          ref={logid}
          autoComplete="off"
          spellCheck={false}
        />
        <label htmlFor="userpass">Password: </label>
        <input
          type="password"
          name="userpass"
          id="userpass"
          ref={pass}
          autoComplete="off"
        />
        <button
          className="btn"
          type="submit"
          style={{ width: "auto", height: "auto" }}
        >
          Login
        </button>
      </form>
      {error && (
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
        >
          <p className="errcard card" style={{ textAlign: "center" }}>
            {error}
          </p>
        </motion.div>
      )}
      {auth && (
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
        >
          <p className="succcard card" style={{ textAlign: "center" }}>
            Login Successful
          </p>
        </motion.div>
      )}
    </div>
  );
}

export const documentProps = {
  // This title and description will override the defaults
  title: "Login",
};
export { Page };
