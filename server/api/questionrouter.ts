import { Router } from "express";
import { createHmac } from "crypto";
import { PrismaClient } from "../../prisma";
import { v4 as uuid } from "uuid";
import translate from "google-translate-api-x";
import toJsonf from "./jsonfix";
const questionrouter = Router();

const prisma = new PrismaClient();

questionrouter.get("/getallquestions", async (req, res, next) => {
  try {
    await prisma.$connect;

    let data = await prisma.questions.findMany();

    await prisma.$disconnect;
    res.status(200).send({
      status: "Success",
      data: toJsonf(data),
    });
  } catch (error: any) {
    await prisma.$disconnect;
    res.status(400).json({
      status: "Failed",
      error: error.toString(),
    });
  }
});
///////////////////app
questionrouter.get("/app/getallquestions", async (req, res, next) => {
  try {
    await prisma.$connect;

    let data = await prisma.questions.findMany({
      where: {
        ExamNo: {
          not: null,
        },
      },

      orderBy: {
        id: "asc",
      },
    });
    let updid = await prisma.datastore.findFirst({
      where: {
        id: "updid",
      },
      select: {
        value: true,
      },
    });
    // let qarr = new Array();
    // if (req.params.lang !== "en") {
    //   data.forEach(async (el: any) => {
    //     qarr.push(translate(el.body, { from: "en", to: req.params.lang }));
    //   });
    //   let da = await Promise.all(qarr);

    //   da.forEach((el, i) => {
    //     data[i].body = el.text;
    //   });

    //   // console.log(da);
    // }
    await prisma.$disconnect;
    res.status(200).send({
      status: "Success",
      data: toJsonf(data),
      updid,
    });
  } catch (error: any) {
    console.log(error);
    await prisma.$disconnect;
    res.status(400).json({
      status: "Failed",
      error: error.toString(),
    });
  }
});

questionrouter.post("/app/translation/:type", async (req, res, next) => {
  try {
    await prisma.$connect;

    let tr = req.body.translate;
    let data: any = await translate(tr, { from: "en", to: req.body.lang });

    if (req.params.type == "array") {
      let optarr = new Array();
      data.forEach((el: any) => {
        optarr.push(el.text);
      });
      await prisma.$disconnect;
      res.status(200).send({
        status: "Success",
        data: optarr,
      });
    } else {
      await prisma.$disconnect;
      res.status(200).send({
        status: "Success",
        data: data.text,
      });
    }

    //   // console.log(da);
    // }
  } catch (error: any) {
    console.log(error);
    await prisma.$disconnect;
    res.status(400).json({
      status: "Failed",
      error: error.toString(),
    });
  }
});

questionrouter.get("/app/getexamquestions/:Exno", async (req, res, next) => {
  try {
    await prisma.$connect;
    let Exno: any = req.params.Exno;
    Exno = Exno * 1;
    let data = await prisma.questions.findMany({
      where: {
        ExamNo: Exno,
      },
      orderBy: {
        id: "asc",
      },
    });

    await prisma.$disconnect;
    res.status(200).send({
      status: "Success",
      data: toJsonf(data),
    });
  } catch (error: any) {
    await prisma.$disconnect;
    res.status(400).json({
      status: "Failed",
      error: error.toString(),
    });
  }
});

questionrouter.get("/app/getexams", async (req, res, next) => {
  try {
    await prisma.$connect;

    let data = await prisma.exams.findMany({
      orderBy: {
        No: "asc",
      },
      include: {
        questions: true,
      },
    });
    let updid = await prisma.datastore.findFirst({
      where: {
        id: "updid",
      },
      select: {
        value: true,
      },
    });
    await prisma.$disconnect;
    res.status(200).send({
      status: "Success",
      data: toJsonf(data),
      updid,
    });
  } catch (error: any) {
    await prisma.$disconnect;
    res.status(400).json({
      status: "Failed",
      error: error.toString(),
    });
  }
});
//////////////////app end
questionrouter.use((req, res, next) => {
  let userid: any = process.env.USER_NAME?.toString();
  let pass: any = process.env.USER_PASS?.toString();
  let hash = createHmac("sha256", userid).update(pass).digest("hex");

  let storedhash = req.cookies.gopassion;
  if (hash == storedhash) {
    next();
  } else {
    res.status(401).json({
      status: "Not Authenticated",
    });
  }
});

questionrouter.patch(
  "/updatequestion",
  async (req: any, res: any, next: any) => {
    try {
      await prisma.$connect;
      let qs = await prisma.questions.update({
        data: {
          body: req.body.Qbody,
        },
        where: {
          id: BigInt(req.body.Qid),
        },
      });

      await prisma.$disconnect;
      res.status(200).send({
        status: "Success",
        data: toJsonf(qs),
      });
    } catch (error: any) {
      await prisma.$disconnect;
      res.status(400).json({
        status: "Failed",
        error: error.toString(),
      });
    }
  }
);

questionrouter.delete(
  "/deletequestion",
  async (req: any, res: any, next: any) => {
    try {
      await prisma.$connect;

      await prisma.questions.delete({
        where: {
          id: BigInt(req.body.Qid),
        },
      });

      await prisma.$disconnect;
      res.status(204).json({
        status: "Success",
      });
    } catch (error: any) {
      await prisma.$disconnect;
      res.status(500).json({
        status: "Failed",
        error: error.toString(),
      });
    }
  }
);

questionrouter.post("/addquestion", async (req, res, next) => {
  try {
    await prisma.$connect;

    let data = await prisma.questions.create({
      data: {
        body: req.body.Qbody,
        answers: req.body.Qans,
        options: req.body.Qoptions,
      },
    });

    await prisma.$disconnect;
    res.status(201).send({
      status: "Success",
      data: toJsonf(data),
    });
  } catch (error: any) {
    await prisma.$disconnect;
    res.status(400).json({
      status: "Failed",
      error: error.toString(),
    });
  }
});

//////////////////////////////Options

questionrouter.patch("/updateoption", async (req: any, res: any, next: any) => {
  try {
    await prisma.$connect;
    let os: any = await prisma.questions.findUniqueOrThrow({
      select: {
        options: true,
      },
      where: {
        id: BigInt(req.body.Qid),
      },
    });
    let oarr: any[] = os.options;
    oarr[req.body.optnum * 1] = req.body.Qopt;
    console.log(os);
    let qs = await prisma.questions.update({
      data: {
        options: oarr,
      },
      where: {
        id: BigInt(req.body.Qid),
      },
    });

    await prisma.$disconnect;
    res.status(200).send({
      status: "Success",
      data: toJsonf(qs),
    });
  } catch (error: any) {
    await prisma.$disconnect;
    console.log(error);
    res.status(400).json({
      status: "Failed",
      error: error.toString(),
    });
  }
});

questionrouter.patch("/addoption", async (req: any, res: any, next: any) => {
  try {
    await prisma.$connect;
    let os: any = await prisma.questions.findUniqueOrThrow({
      select: {
        options: true,
      },
      where: {
        id: BigInt(req.body.Qid),
      },
    });
    let oarr: any[] = os.options;

    oarr.push(req.body.Qopt);

    let qs = await prisma.questions.update({
      data: {
        options: oarr,
      },
      where: {
        id: BigInt(req.body.Qid),
      },
    });

    await prisma.$disconnect;
    res.status(200).send({
      status: "Success",
      data: toJsonf(qs),
    });
  } catch (error: any) {
    await prisma.$disconnect;
    res.status(400).json({
      status: "Failed",
      error: error.toString(),
    });
  }
});

questionrouter.patch("/deleteoption", async (req: any, res: any, next: any) => {
  try {
    await prisma.$connect;
    let os: any = await prisma.questions.findUniqueOrThrow({
      select: {
        options: true,
      },
      where: {
        id: BigInt(req.body.Qid),
      },
    });
    let oarr: any[] = os.options;
    // if (oarr.length == 2) {
    //   throw new Error("Must have at least two options");
    // }
    oarr.splice(req.body.optnum * 1, 1);

    let qs = await prisma.questions.update({
      data: {
        options: oarr,
      },
      where: {
        id: BigInt(req.body.Qid),
      },
    });

    await prisma.$disconnect;
    res.status(204).send({
      status: "Success",
    });
  } catch (error: any) {
    await prisma.$disconnect;
    res.status(400).json({
      status: "Failed",
      error: error.toString(),
    });
  }
});

//////////////////////////////Answers

questionrouter.patch(
  "/updateanswers",
  async (req: any, res: any, next: any) => {
    try {
      await prisma.$connect;

      let aarr: any[] = req.body.Qans;
      let qs = await prisma.questions.update({
        data: {
          answers: aarr,
        },
        where: {
          id: BigInt(req.body.Qid),
        },
      });

      await prisma.$disconnect;
      res.status(200).send({
        status: "Success",
        data: toJsonf(qs),
      });
    } catch (error: any) {
      await prisma.$disconnect;
      console.log(error);
      res.status(400).json({
        status: "Failed",
        error: error.toString(),
      });
    }
  }
);

//////////////////////////////Exams

// questionrouter.post("/createexams", async (req, res, next) => {
//   try {
//     await prisma.$connect;

//     let qmin = req.body.Qmin * 1 - 1;
//     let qmax = req.body.Qmax;
//     let questions = await prisma.questions.findMany({
//       skip: qmin,
//       take: qmax - qmin,
//     });
//     questions.sort((a, b) => {
//       let min = -1;
//       let max = 1;
//       return Math.floor(Math.random() * (max - min) + min);
//     });
//     let qnum = questions.length;
//     if (qmax - qmin > questions.length) {
//       throw new Error("Not enough questions");
//     }
//     if (req.body.QperEx * 1 > qnum) {
//       throw new Error(
//         "Qestions per exam cannot be greater than the total questoins"
//       );
//     }
//     let QperEx = req.body.QperEx * 1;
//     let exnum = Math.floor(qnum / QperEx);

//     await prisma.exams.deleteMany();

//     let data = await prisma.$transaction(async (tx) => {
//       await tx.exams.create({
//         data: {
//           No: 1,
//           time: req.body.Qtime * 1,
//         },
//       });
//       for (let i = 0, ex = 1, qnu = 0; ex <= exnum; i++) {
//         await tx.questions.update({
//           data: {
//             ExamNo: ex,
//           },
//           where: {
//             id: questions[i].id,
//           },
//         });

//         qnu++;
//         if (qnu == QperEx) {
//           ex++;
//           if (ex > exnum) {
//             break;
//           }
//           await tx.exams.create({
//             data: {
//               No: ex,
//               time: req.body.Qtime * 1,
//             },
//           });

//           qnu = 0;
//         }
//       }
//       let count = await tx.datastore.count({
//         where: {
//           id: "updid",
//         },
//       });
//       console.log(count);
//       if (!count) {
//         await tx.datastore.create({
//           data: {
//             id: "updid",
//             value: uuid(),
//           },
//         });
//       } else {
//         await tx.datastore.update({
//           data: {
//             value: uuid(),
//           },
//           where: {
//             id: "updid",
//           },
//         });
//       }
//     });

//     await prisma.$disconnect;
//     res.status(201).send({
//       status: "Success",
//     });
//   } catch (error: any) {
//     await prisma.$disconnect;
//     res.status(400).json({
//       status: "Failed",
//       error: error.toString(),
//     });
//   }
// });

questionrouter.post("/createexams", async (req, res, next) => {
  try {
    await prisma.$connect;

    let qmin = req.body.Qmin * 1 - 1;
    let qmax = req.body.Qmax;
    let questions = await prisma.questions.findMany({
      skip: qmin,
      take: qmax - qmin,
    });
    questions.sort((a, b) => {
      let min = -1;
      let max = 1;
      return Math.floor(Math.random() * (max - min) + min);
    });
    let qnum = questions.length;
    if (qmax - qmin > questions.length) {
      throw new Error("Not enough questions");
    }
    if (req.body.QperEx * 1 > qnum) {
      throw new Error(
        "Qestions per exam cannot be greater than the total questoins"
      );
    }
    let QperEx = req.body.QperEx * 1;
    let exnum = Math.floor(qnum / QperEx);

    let trarr = new Array();
    trarr.push(prisma.exams.deleteMany());
    trarr.push(
      prisma.exams.create({
        data: {
          No: 1,
          time: req.body.Qtime * 1,
        },
      })
    );

    for (let i = 0, ex = 1, qnu = 0; ex <= exnum; i++) {
      trarr.push(
        prisma.questions.update({
          data: {
            ExamNo: ex,
          },
          where: {
            id: questions[i].id,
          },
        })
      );

      qnu++;
      if (qnu == QperEx) {
        ex++;
        if (ex > exnum) {
          break;
        }
        trarr.push(
          prisma.exams.create({
            data: {
              No: ex,
              time: req.body.Qtime * 1,
            },
          })
        );

        qnu = 0;
      }
    }
    let count = await prisma.datastore.count({
      where: {
        id: "updid",
      },
    });

    if (!count) {
      trarr.push(
        prisma.datastore.create({
          data: {
            id: "updid",
            value: uuid(),
          },
        })
      );
    } else {
      trarr.push(
        prisma.datastore.update({
          data: {
            value: uuid(),
          },
          where: {
            id: "updid",
          },
        })
      );
    }

    await prisma.$transaction([...trarr]);
    await prisma.$disconnect;
    res.status(201).send({
      status: "Success",
    });
  } catch (error: any) {
    await prisma.$disconnect;
    res.status(400).json({
      status: "Failed",
      error: error.toString(),
    });
  }
});
export default questionrouter;
