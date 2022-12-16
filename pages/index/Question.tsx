import React, { useRef, useState } from "react";
import {
  FaTimes,
  FaArrowDown,
  FaArrowUp,
  FaPencilAlt,
  FaPlus,
} from "react-icons/fa/index.js";
import { useQueryClient } from "react-query";
import Card from "../login/Card";
import Qoptions from "./Qoptions";
import Qupdanswerform from "./Qupdanswerform";
import { motion } from "framer-motion";

async function hdladdopt(
  Qid: any,
  Qkey: any,
  Qopt: any,
  setAddopt: any,
  setAddopterr: any,
  client: any
) {
  let sel = document.querySelectorAll(`input[name=upA${Qkey}]:checked`);
  let ans = new Array();
  sel.forEach((el: any) => {
    ans.push(el.value);
  });
  console.log(ans);
  if (Qopt == "" || Qopt == null) {
    setAddopterr("Option cannot be empty");
    return;
  }
  const res = await fetch("/api/addoption", {
    method: "PATCH",
    body: JSON.stringify({
      Qid: Qid,
      Qopt: Qopt,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  let data = await res.json();
  console.log(data);
  setAddopterr("");
  await client.invalidateQueries("Questions");
  setAddopt(false);
}

function Question({ Q, Qo, A, Qid, idx }: any) {
  let client = useQueryClient();
  let [addopt, setAddopt] = useState(false);
  let [addopterr, setAddopterr] = useState("");
  let addoptref: any = useRef("");
  let [aedit, setAedit] = useState(false);
  let [qedit, setqedit] = useState(false);
  let [qupderr, setQupderr] = useState("");

  let [qoexpanded, setQoexpanded] = useState(false);
  let [aexpanded, setAexpanded] = useState(false);

  let updq: any = useRef("");

  return (
    <Card classNa="Ques">
      <div className="del">
        <button className="delbtn del">
          <FaPencilAlt
            size="clamp(1rem, 2vw, 3rem)"
            onClick={(el: any) => {
              if (!qedit) {
                setqedit(true);
              } else {
                setqedit(false);
                if (qupderr) setQupderr("");
              }
            }}
          />
        </button>
        <button className="delbtn del">
          <FaTimes
            size="clamp(1rem, 2.5vw, 3.5rem)"
            onClick={async (el: any) => {
              el.preventDefault();
              if (
                window.confirm("Are you sure you want to delete this question?")
              ) {
                let res = await fetch("/api/deletequestion", {
                  method: "DELETE",
                  body: JSON.stringify({
                    Qid: Qid * 1,
                  }),
                  headers: {
                    "Content-type": "application/json; charset=UTF-8",
                  },
                });
                // res = await res.json();
                console.log(res);
                client.invalidateQueries("Questions");
              }
            }}
          />
        </button>
      </div>
      <h2
        style={{ gridColumn: "1/3", fontSize: "clamp(0.7rem, 2vw, 3.4rem)" }}
      >{`${idx + 1}. ${Q}`}</h2>
      {qedit && (
        <motion.div
          style={{ gridColumn: "1/3" }}
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
            onSubmit={async (el) => {
              el.preventDefault();
              if (
                updq.current.value.trim() == "" ||
                updq.current.value == null
              ) {
                setQupderr("Question cannot be empty");
                return;
              }
              const res = await fetch("/api/updatequestion", {
                method: "PATCH",
                body: JSON.stringify({
                  Qid: Qid * 1,
                  Qbody: updq.current.value,
                }),
                headers: {
                  "Content-type": "application/json; charset=UTF-8",
                },
              });
              let data = await res.json();
              console.log(data);
              client.invalidateQueries("Questions");
              setQupderr("");
              setqedit(false);
            }}
          >
            <label htmlFor="updQ">Question: </label>
            <br />
            <textarea
              id="updQ"
              ref={updq}
              style={{
                fontSize: " clamp(0.7rem, 2vw, 3.4rem)",
              }}
            />
            <br />
            <button className="btn" type="submit">
              Submit
            </button>
          </form>
        </motion.div>
      )}
      {qupderr && (
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
            {qupderr}
          </p>
        </motion.div>
      )}
      <div>
        <div
          style={{
            display: "flex",
            alignContent: "center",
            margin: "0.5em",
          }}
          onClick={() => {
            qoexpanded ? setQoexpanded(false) : setQoexpanded(true);
          }}
        >
          <p
            style={{
              fontSize: "clamp(0.7rem, 2vw, 2.8rem)",
              fontWeight: "bold",
            }}
          >
            Options
          </p>
          {!qoexpanded && <FaArrowDown className="ansed" />}
          {qoexpanded && <FaArrowUp className="ansed" />}
        </div>
        {qoexpanded && (
          <div>
            <ol type="A">
              {Qo.map((el: any, ind: any) => {
                return (
                  <li key={ind} className="optli">
                    <Qoptions
                      el={el}
                      ind={ind}
                      Qid={Qid}
                      // Qkey={Qkey}
                      client={client}
                    />
                  </li>
                );
              })}
            </ol>
            <button
              title="Add an option"
              className="btn"
              style={{
                backgroundColor: "#365c7c",
                display: "flex",
                alignItems: "center",
              }}
              onClick={(el) => {
                if (!addopt) {
                  setAddopt(true);
                } else {
                  setAddopt(false);
                  setAddopterr("");
                }
              }}
            >
              <FaPlus size="clamp(0.2rem,1em,1.5rem)" />
              <p
                style={{
                  fontSize: "clamp(0.2rem,1em,1.5rem)",
                  margin: "0.2em",
                }}
              >
                Add an option
              </p>
            </button>
          </div>
        )}
        {addopt && (
          <motion.div
            key={Qid}
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
                hdladdopt(
                  Qid,
                  Qid,
                  addoptref.current.value,
                  setAddopt,
                  setAddopterr,
                  client
                );
              }}
            >
              <label
                htmlFor="adddopt"
                style={{
                  fontSize: "clamp(0.2rem,2.5vw,1.5rem)",
                }}
              >
                Option {Qo.length + 1}:{" "}
              </label>
              <input
                style={{
                  width: "80%",
                  fontSize: "clamp(0.7rem, 2vw, 3.4rem)",
                }}
                type="text"
                name="addopt"
                id="addopt"
                ref={addoptref}
              />
              <button type="submit" className="btn">
                Add
              </button>
            </form>
          </motion.div>
        )}
        {addopterr && (
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
              {addopterr}
            </p>
          </motion.div>
        )}
      </div>
      <div className="ans">
        <div
          className="title"
          onClick={(el) => {
            aexpanded ? setAexpanded(false) : setAexpanded(true);
          }}
        >
          <p
            style={{
              fontSize: "clamp(0.7rem, 2vw, 2.8rem)",
              fontWeight: "bold",
            }}
          >
            Answers
          </p>
          {!aexpanded && <FaArrowDown className="ansed" />}
          {aexpanded && <FaArrowUp className="ansed" />}
        </div>
        <div
          style={{
            display: "flex",
          }}
        >
          {aexpanded && (
            <FaPencilAlt
              className="ansed"
              onClick={(ele: any) => {
                !aedit ? setAedit(true) : setAedit(false);
              }}
              size="clamp(1rem, 2vw,3rem)"
            />
          )}
        </div>
        {aexpanded && (
          <>
            {!aedit && (
              <ul className={`ansroot${Qid}`}>
                {A.map((el: any, ind: any) => {
                  return (
                    <li className={`ansp ans${Qid}${ind}`} key={ind}>
                      <p>{el}</p>
                    </li>
                  );
                })}
              </ul>
            )}
            {aedit && (
              <Qupdanswerform
                Qid={Qid}
                client={client}
                Qo={Qo}
                setAedit={setAedit}
              />
            )}
          </>
        )}
      </div>
    </Card>
  );
}

export default Question;
