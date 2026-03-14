// Core Module
const path = require("path");
const fs = require("fs");

// External Module
const express = require("express");
const session = require("express-session");
const { MongoStore } = require("connect-mongo");
const mongoose = require("mongoose");
const multer = require("multer");

const DB_PATH =
  "mongodb+srv://ayushmansriv622_db_user:Mongo%40Atlas%40ayush@projectcluster.s4zqkqy.mongodb.net/airbnb?appName=ProjectCluster";

//Local Module
const storeRouter = require("./routes/storeRouter");
const hostRouter = require("./routes/hostRouter");
const authRouter = require("./routes/authRouter");
const rootDir = require("./utils/pathUtil");
const errorsController = require("./controllers/errors");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

const randomString = (length) => {
  const characters = "abcdefghijklmnopqrstuvwxyz";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, randomString(10) + "-" + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/jpeg"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};
const multerOptions = {
  storage,
  fileFilter,
};

// Ensure uploads directory exists
if (!fs.existsSync("uploads")) {
  fs.mkdirSync("uploads", { recursive: true });
}

app.use(multer(multerOptions).single("photo")); // for downloading file type photos
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(rootDir, "public")));
app.use("/uploads", express.static(path.join(rootDir, "uploads")));
app.use("/host/uploads", express.static(path.join(rootDir, "uploads")));
app.use("/homes/uploads", express.static(path.join(rootDir, "uploads")));

const PORT = 3000;

mongoose
  .connect(DB_PATH)
  .then(() => {
    console.log("Connected to Mongo");

    app.use(
      session({
        secret: "KnowledgeGate AI with Complete Coding",
        resave: false,
        saveUninitialized: false,
        store: new MongoStore({
          mongoUrl: DB_PATH,
          collectionName: "sessions_new",
          serialize: JSON.stringify,
          unserialize: JSON.parse,
        }),
        cookie: {
          maxAge: 1000 * 60 * 60 * 24, // 1 day
          httpOnly: true,
        },
      }),
    );

    app.use((req, res, next) => {
      req.isLoggedIn = req.session.isLoggedIn || false;
      next();
    });

    app.use(authRouter);
    app.use(storeRouter);
    app.use("/host", (req, res, next) => {
      if (req.isLoggedIn) {
        next();
      } else {
        res.redirect("/login");
      }
    });
    app.use("/host", hostRouter);

    app.use(errorsController.pageNotFound);

    app.listen(PORT, () => {
      console.log(`Server running on address http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Error while connecting to Mongo: ", err);
  });
