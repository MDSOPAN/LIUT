import { AnimatePresence, motion } from "framer-motion";
import React, { useRef, useState } from "react";
import { FaPencilAlt, FaTimes } from "react-icons/fa/index.js";

async function hdlupdop(
  txt: any,
  Qid: any,
  ind: any,
  client: any,
  setOupderr: any,
  setOedit: any
) {
  if (txt.trim() == "" || txt == null) {
    setOupderr("A option cannot be empty");
    return;
  }

  const res = await fetch("/api/updateoption", {
    method: "PATCH",
    body: JSON.stringify({
      Qid: Qid,
      optnum: ind,
      Qopt: txt,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  let data = await res.json();
  console.log(data);
  await client.invalidateQueries("Questions");
  setOupderr("");
  setOedit(false);
}

async function hdldlt(el: any, ind: any, Qid: any, client: any) {
  el.preventDefault();
  if (window.confirm("Are you sure you want to delete this option?")) {
    const res = await fetch("/api/deleteoption", {
      method: "PATCH",
      body: JSON.stringify({
        Qid: Qid,
        optnum: ind,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    if (res.status == 400) {
      window.alert("Unknown error occured please check the database");
      // let err = await res.json();
      // if (err.error.includes("Must have at least two options")) {
      //   window.alert(err.error);
      // } else {
      //   console.log(err.error);
      //   window.alert("Unknown error occured please check the database");
      // }
    }
    console.log(res);
    client.invalidateQueries("Questions");
  }
}

function Qoptions({ el, ind, Qid, Qkey, client }: any) {
  let [oedit, setOedit] = useState(false);
  let [oupderr, setOupderr] = useState("");
  let oupdname: any = useRef("");
  return (
    <>
      <div className="optp">
        <p style={{ fontSize: "clamp(0.5rem, 3.5vw, 2.5rem)" }}>{el}</p>
        <div className="optbtn">
          <button className="delbtn">
            <FaPencilAlt
              onClick={(ele: any) => {
                if (!oedit) {
                  setOedit(true);
                } else {
                  setOedit(false);
                  if (oupderr) setOupderr("");
                }
              }}
              size="clamp(1rem, 2.5vw,1.3rem)"
            />
          </button>
          <FaTimes
            onClick={(ele) => {
              hdldlt(ele, ind, Qid, client);
            }}
            size="clamp(1rem, 3vw,1.5rem)"
          />
        </div>
      </div>
      {oedit && (
        <AnimatePresence>
          <motion.div
            key={Qkey}
            initial={{
              scale: 0,
            }}
            animate={{
              scale: 1,
            }}
            exit={{
              scale: 0,
            }}
          >
            <form
              onSubmit={(el) => {
                el.preventDefault();
                hdlupdop(
                  oupdname.current.value,
                  Qid,
                  ind,
                  client,
                  setOupderr,
                  setOedit
                );
              }}
            >
              <label
                style={{ fontSize: "clamp(0.7rem, 3.8vw, 2.8rem)" }}
                htmlFor="updopt"
              >
                Option:{" "}
              </label>
              <input
                style={{ fontSize: "clamp(0.5rem, 3vw, 1.5rem)" }}
                type="text"
                name="updopt"
                id="updopt"
                ref={oupdname}
              />
              <button type="submit" className="btn">
                Update
              </button>
            </form>
          </motion.div>
        </AnimatePresence>
      )}
      {oupderr && (
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
        >
          <p className="errcard card" style={{ textAlign: "center" }}>
            {oupderr}
          </p>
        </motion.div>
      )}
    </>
  );
}

export default Qoptions;
