import { motion } from "framer-motion";
import React, { useRef, useState } from "react";
import { FaCheckCircle } from "react-icons/fa/index.js";
import Card from "../login/Card";
function Finalize() {
  let [final, setFinal] = useState(false);
  let [ferr, setFer] = useState("");
  let [submitting, setSubmitting] = useState(false);

  let Qmin: any = useRef(0);
  let Qmax: any = useRef(0);
  let QperEx: any = useRef(0);
  let Qtime: any = useRef(0);
  return (
    <>
      <button
        className="btn"
        title="Update Exams"
        style={{
          backgroundColor: "rgb(88 201 73 / 84%)",
          display: "flex",
          justifyContent: "center",
        }}
        onClick={() => {
          final ? setFinal(false) : setFinal(true);
        }}
      >
        <FaCheckCircle size="clamp(2rem, 5vw, 4rem)" />
      </button>
      {final && (
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
            className="faddq"
            onSubmit={async (el) => {
              el.preventDefault();
              if (
                !Qmin.current.value ||
                !Qmax.current.value ||
                !Qtime.current.value ||
                !QperEx.current.value
              ) {
                setFer("Please fill every form");

                return;
              }
              setFer("");
              setSubmitting(true);

              const res = await fetch("/api/createexams", {
                method: "POST",
                body: JSON.stringify({
                  Qmin: Qmin.current.value,
                  Qmax: Qmax.current.value,
                  Qtime: Qtime.current.value,
                  QperEx: QperEx.current.value,
                }),
                headers: {
                  "Content-type": "application/json; charset=UTF-8",
                },
              });
              if (res.status == 400) {
                let err = await res.json();
                setSubmitting(false);
                setFer(err.error);
              } else {
                setSubmitting(false);
                window.alert("Succesfully Updated");
                setFer("");
                setFinal(false);
              }
            }}
          >
            <div
              style={{
                display: "grid",
                gap: "0.5em",
                gridTemplateColumns: "1fr 1fr",
                gridAutoRows: "auto",
                margin: "0.3em",
              }}
            >
              <div>
                <label htmlFor="qmin">Questions Start: </label>
                <input type="number" name="qmin" id="qmin" min={1} ref={Qmin} />
              </div>
              <div>
                <label htmlFor="qmax">Questions End: </label>
                <input type="number" name="qmax" id="qmax" min={2} ref={Qmax} />
              </div>
              <div>
                <label htmlFor="time">Time: </label>
                <input
                  type="number"
                  name="time"
                  id="time"
                  min={0}
                  ref={Qtime}
                />
              </div>
              <div>
                <label htmlFor="QperEx">Questions per Exam: </label>
                <input
                  type="number"
                  name="QperEx"
                  id="QperEx"
                  min={1}
                  ref={QperEx}
                />
              </div>
            </div>
            <button type="submit" className="btn">
              Update
            </button>
          </form>
          {submitting && (
            <Card classNa="submitanim">
              <p
                style={{
                  textAlign: "center",
                  fontSize: "clamp(0.5rem, 3vw, 2.5rem)",
                }}
              >
                Submitting
              </p>
            </Card>
          )}
          {ferr && (
            <Card classNa="errcard">
              <p
                style={{
                  textAlign: "center",
                  fontSize: "clamp(0.5rem, 3vw, 2.5rem)",
                }}
              >
                {ferr}
              </p>
            </Card>
          )}
        </motion.div>
      )}
    </>
  );
}

export default Finalize;
