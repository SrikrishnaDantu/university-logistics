const db = require("../models");
const { verifyJwtToken } = require("./users.controller");
const Tutorial = db.tutorial;

// Create and Save a new Tutorial
exports.create = (req, res) => {
    var access = verifyJwtToken(req, 'admin');

    // Validate request
    if (access) {
        if (!req.body.course) {
            res.status(400).send({ message: "Content can not be empty!" });
            return;
        }

        // Create a Tutorial
        const tutorial = new Tutorial({
            course: req.body.course,
            branch: req.body.branch,
            link: req.body.link,
        });

        // Save Tutorial in the database
        tutorial
            .save(tutorial)
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.status(500).send({
                    message: err.message || "Some error occurred while creating the Tutorial."
                });
            });
    } else {
        res.status(403).send('unauthorized');
    }
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
    var access = verifyJwtToken(req, '');
    if (access) {
        const course = req.query.course;
        var condition = course ? { course: { $regex: new RegExp(course), $options: "i" } } : {};
        debugger;
        Tutorial.find(condition)
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.status(500).send({
                    message: err.message || "Some error occurred while retrieving tutorials."
                });
            });
    } else {
        res.status(403).send('unauthorized');
    }
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Tutorial.findById(id)
        .then(data => {
            if (!data)
                res.status(404).send({ message: "Not found Tutorial with id " + id });
            else res.send(data);
        })
        .catch(err => {
            res
                .status(500)
                .send({ message: "Error retrieving Tutorial with id=" + id });
        });
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }

    const id = req.params.id;

    Tutorial.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found!`
                });
            } else res.send({ message: "Tutorial was updated successfully." });
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Tutorial with id=" + id
            });
        });
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Tutorial.findByIdAndRemove(id, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`
                });
            } else {
                res.send({
                    message: "Tutorial was deleted successfully!"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Tutorial with id=" + id
            });
        });
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
    Tutorial.deleteMany({})
        .then(data => {
            res.send({
                message: `${data.deletedCount} Tutorials were deleted successfully!`
            });
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while removing all tutorials."
            });
        });
};