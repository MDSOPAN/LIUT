import React, { useEffect, useRef, useState } from "react";
import { QueryClient, useQuery, useQueryClient } from "react-query";
import { usePageContext } from "../../renderer/usePageContext";
import Question from "./Question";
import Card from "../login/Card";
import "./qs.css";
import { motion } from "framer-motion";
import Finalize from "./Finalize";
export { Page };

const checkempty = (opt: Array<String>) => {
  let empty = false;
  opt.forEach((el) => {
    if (el.trim() == "" || el == null) {
      empty = true;
    }
  });
  return empty;
};

const hdlsubmit = async (
  el: any,
  Qid: any,
  setisData: any,
  setAddquestionerr: any,
  client: QueryClient
) => {
  el.preventDefault();
  let qu: any = document.querySelector("form textarea");
  let qel = qu;
  qu = qu.value;
  const ans = document.querySelectorAll("input[name=ropt]:checked");
  let an = new Array();
  ans.forEach((el: any) => {
    an.push(String.fromCharCode(el.value));
  });
  const inoptions = document.querySelectorAll("input[name=options]");
  const opt = new Array();
  inoptions.forEach((el: any, ind: any) => {
    opt.push(el.value);
  });
  console.log(an.length);
  if (qu.trim() == "" || qu == null) {
    setAddquestionerr("Question Cannot be Empty");
    return;
  } else if (!an.length) {
    setAddquestionerr("Plese Select Atleast One Answer");
    return;
  } else if (checkempty(opt)) {
    setAddquestionerr("A option cannot be empty");
    return;
  }
  console.log(qu);
  const res = await fetch("/api/addquestion", {
    method: "POST",
    body: JSON.stringify({
      Qbody: qu,
      Qoptions: opt,
      Qans: an,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  let data = await res.json();
  client.invalidateQueries("Questions");
  setAddquestionerr("");
  //Emptying The form
  inoptions.forEach((el: any, ind: any) => {
    el.value = "";
    if (ind > 1) {
      el.parentElement.remove();
    }
  });
  ans.forEach((el: any) => {
    el.checked = false;
  });
  qel.value = "";

  setisData(true);
  console.log(data);
  return new Promise((resolve, reject) => {
    resolve("Done");
  });
};

function Page() {
  let client = useQueryClient();
  let pgcontext = usePageContext();
  let [addquestionerr, setAddquesionerr] = useState("");

  const { isLoading, error, data }: any = useQuery(["Questions"], async () => {
    let res: any = await fetch(`/api/getallquestions`);
    if (res.status == 400) {
      throw new Error("Cannot Connect to the database");
    }
    console.log("RES", res.status);
    res = await res.json();
    return res;
  });
  let Questions: any[] = [];
  let Ans: any[] = [];
  let Qid = 0;
  let [isdata, setisData] = useState(false);
  if (!isLoading && !error) {
    Questions = data.data;
  }
  console.log(Questions);
  useEffect(() => {
    if (Questions.length && !isLoading && !error) setisData(true);
  }, [isLoading]);
  let code = useRef(67);
  return (
    <>
      <Finalize />
      {isLoading && (
        <Card classNa="submitanim">
          <p
            style={{
              textAlign: "center",
              fontSize: "clamp(0.5rem, 3vw, 2.5rem)",
            }}
          >
            Loading
          </p>
        </Card>
      )}
      {!isdata && !isLoading && !error && (
        <Card>
          <h1 style={{ textAlign: "center" }}>No Questions Yet.</h1>
          <h2 style={{ textAlign: "center" }}>Please Create One</h2>
        </Card>
      )}
      {error && !isLoading && (
        <Card classNa="errcard">
          <h1 style={{ textAlign: "center" }}>{error.message}</h1>
        </Card>
      )}
      {isdata &&
        Questions &&
        Questions.map((el, ind) => {
          return (
            <Question
              Q={el.body}
              Qo={el.options}
              A={el.answers}
              key={ind}
              idx={ind}
              Qid={el.id}
            />
          );
        })}

      <Card classNa="addQfrm">
        <h2>Add a Question: </h2>
        <form
          className="faddq"
          onSubmit={(el) => {
            hdlsubmit(el, Qid, setisData, setAddquesionerr, client);

            code.current = 67;
          }}
        >
          <label htmlFor="Qte">Question:</label>
          <textarea id="Qte" />
          <fieldset>
            <legend>Options</legend>
            <div className="chin">
              <input type="checkbox" name="ropt" value="65" />
              <input type="text" name="options" />
            </div>
            <div className="chin">
              <input type="checkbox" name="ropt" value="66" />
              <input type="text" name="options" />
            </div>
          </fieldset>
          <button
            type="button"
            style={{ width: "100%" }}
            className="btn"
            onClick={(el: any) => {
              let ele = el.target.parentElement.querySelector("fieldset");
              let div = document.createElement("div");
              let inp = document.createElement("input");
              inp.setAttribute("type", "text");
              inp.setAttribute("name", "options");
              let rnp = document.createElement("input");
              rnp.setAttribute("type", "checkbox");
              rnp.setAttribute("name", "ropt");
              rnp.setAttribute("value", `${code.current}`);
              code.current += 1;
              div.appendChild(rnp);
              div.appendChild(inp);
              div.classList.add("chin");

              ele.appendChild(div);
            }}
          >
            Add Option
          </button>
          <button className="btn" style={{ width: "100%" }} type="submit">
            Submit
          </button>
        </form>
        {addquestionerr && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
          >
            <p className="errcard card" style={{ textAlign: "center" }}>
              {addquestionerr}
            </p>
          </motion.div>
        )}
      </Card>
    </>
  );
}

export const documentProps = {
  // This title and description will override the defaults
  title: "LIUT Admin",
};
