module.exports = app => {
    const hostel = require("../controllers/hostel.controller.js");

    var router = require("express").Router();

    // Create a new Tutorial
    router.post("/", hostel.create);

    // Retrieve all Tutorials
    router.get("/", hostel.findAll);

    // Retrieve a single Tutorial with id
    router.get("/:id", hostel.findOne);

    // Update a Tutorial with id
    router.put("/:id", hostel.update);

    // Delete a Tutorial with id
    router.delete("/:id", hostel.delete);

    // Create a new Tutorial
    router.delete("/", hostel.deleteAll);

    app.use("/api/hostel", router);
};