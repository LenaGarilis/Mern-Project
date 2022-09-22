const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Product = require("../models/Product");

const { check, validationResult } = require("express-validator");

router.get("/", (req, res) => {
  res.json("i am from Backend");
});

// -----------Create new User---------
// form data check validation
const validateForm = [
  check("username")
    .notEmpty()
    .withMessage("User name is empty")
    .isEmail()
    .withMessage("It must be a valid email"),

  //password validity
  check("password")
    .notEmpty()
    .withMessage("Password is empty")
    .isLength({ min: 4, max: 10 })
    .withMessage("Password must be 4-10 characters")
    .matches(/[a-zA-Z0-9]$/, "g")
    .withMessage(
      "Password must contain numbers, characters, 1 capital letter, 1 small letter"
    ),

  //password confirm
];

router.post("/user/create", validateForm, async (req, res) => {
  console.log(req.body);

  // validation check req body data(form data)
  //password confirm
  await check("confirm_password", "Password doesnt match")
    .equals(req.body.password)
    .run(req);

  // user name is not there
  const errors = validationResult(req);
  // when error[] is not empty
  if (!errors.isEmpty()) {
    res.json(errors);
  }
  // no validation problems
  else {
    // save it toDB and response to frontend
    // at this point in DB automatically the collection users is created

    new User(req.body).save(() => {
      //send message to Backend
      console.log("data created");
      //send message to frontEnd
      res.json("A user is created successfully");
    });
  }
});

//-------------Login a user-----------
router.post("/user/login", (req, res) => {
  User.findOne({
    email: req.body.email,
    password: req.body.password,
  }).then((user) => {
    //console.log(user)
    // if there is a user or not null user
    if (user != null) {
      Product.find({ added_by: user._id }).then((products) => {
        res.json({
          user,
          message: "Successfully login",
          products, // array of object
        });
      });
    } else {
      //no user
      res.json("wrong data! please give us correct email and password");
    }
  });
});

// ---------to add product from form-------------

router.post("/product/add/:userid", (req, res) => {
  let newProduct = req.body;
  newProduct.added_by = req.params.userid;
  console.log(newProduct);
  console.log(req.params);
  console.log(req.body);
  new Product(newProduct).save(() => {
    console.log(" 1 product created from form");
    //send message to frontEnd
    res.json("1 product is created successfully");
  });
});

// -----------display all products from database-------

router.get("/product/all", (req, res) => {
  Product.find().then((result) => {
    res.json(result);
  });
});
//get massive data from fakerjs for testing
// check at http://localhost:5000/user/add
//https://fakerjs.dev/guide/
// const { faker } = require("@faker-js/faker");
// router.get("/user/add", (req, res) => {
//   const userData = {
//     userName: faker.internet.userName(),
//     password: faker.internet.password(),
//     email: faker.internet.email(),
//   };
//   console.log(userData);
//   new User(userData).save(() => {
//     //send message to Backend
//     console.log(" 1 user created from faker");
//     //send message to frontEnd
//     res.json("1 user is created successfully");
//   });
// });

//======Product routes========
// check at http://localhost:5000/product/add
// router.get("/product/add", (req, res) => {
//   const newProduct = {
//     product_title: faker.commerce.product(),
//     price: faker.commerce.price(),
//     quantity: faker.datatype.number(),
//     created_at: Date.now(),
//     //how login can get user info or id
//     added_by: "6303793aee3daf939f4afa93", // after login or events
//   };
//   new Product(newProduct).save(() => {
//     console.log(" 1 product created from faker");
//     //send message to frontEnd
//     res.json("1 product is created successfully");
//   });
// });

router.get("/productByUser/:productid", (req, res) => {
  // find 1 product based on id
  //  http://localhost:5000/productByUser/630372dcb83dcf67a1ccd458w (product id)
  Product.findById(req.params.productid)
    .populate("added_by") // we see also the user who added it
    .then((data) => {
      res.json(data);
    });
});

// task2: display all products from db from specific user

router.get("/product/all/:user", (req, res) => {
  const user = req.params.user;
  Product.find({ added_by: user }).then((result) => {
    res.json(result);
  });
});

module.exports = router;
