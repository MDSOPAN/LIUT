import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { useRef } from "react";

async function hdlupdans(
  el: any,
  Qid: any,
  Qkey: any,
  ans: any,
  setAedit: any,
  setAupderr: any,
  client: any
) {
  el.preventDefault();
  let anss: any = Array.from(ans);
  anss.sort((a: any, b: any) => {
    return a.charCodeAt(0) * 1 < b.charCodeAt(0) * 1 ? -1 : 1;
  });
  if (!anss.length) {
    setAupderr("Please Select Atleast One Answer");
    return;
  }
  const res = await fetch("/api/updateanswers", {
    method: "PATCH",
    body: JSON.stringify({
      Qid: Qid,
      Qans: anss,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  let data = await res.json();
  console.log(data);
  await client.invalidateQueries("Questions");
  setAupderr("");
  setAedit(false);
}

function Qupdanswerform({ Qid, client, Qo, setAedit }: any) {
  let ans = useRef(new Set());
  let [aupderr, setAupderr] = useState("");
  return (
    <>
      <AnimatePresence>
        <motion.div
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
            style={{
              display: "flex",
              flexDirection: "column",
            }}
            onSubmit={(el) => {
              hdlupdans(
                el,
                Qid,
                Qid,
                ans.current,
                setAedit,
                setAupderr,
                client
              );
              ans.current = new Set();
            }}
          >
            <ul
              style={{
                listStyleType: "none",
                paddingLeft: 0,
              }}
            >
              {Qo.map((el: any, ind: any) => {
                return (
                  <li key={ind} className="chin">
                    <input
                      onClick={(el: any) => {
                        if (!ans.current.has(el.target.value)) {
                          ans.current.add(el.target.value);
                          console.log(ans.current);
                        } else {
                          ans.current.delete(el.target.value);
                          console.log(ans.current);
                        }
                      }}
                      style={{ width: "1em", height: "1em" }}
                      type="checkbox"
                      name={`updans`}
                      value={String.fromCharCode(65 + ind)}
                    />
                    <label style={{ fontSize: "clamp(0.5rem, 3.5vw, 2.5rem)" }}>
                      .{String.fromCharCode(65 + ind)}
                    </label>
                  </li>
                );
              })}
            </ul>
            <button type="submit" className="btn">
              Update
            </button>
          </form>
        </motion.div>
      </AnimatePresence>
      {aupderr && (
        <motion.div
          style={{ gridColumn: "1/3" }}
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
        >
          <p className="errcard card" style={{ textAlign: "center" }}>
            {aupderr}
          </p>
        </motion.div>
      )}
    </>
  );
}

export default Qupdanswerform;
