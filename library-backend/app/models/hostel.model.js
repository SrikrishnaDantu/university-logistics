module.exports = mongoose => {
    var schema = mongoose.Schema({
        block: String,
        roomNo: String,
        studentId: String,
        roomCost: String,
        status: String,
        fromDate: Date,
        toDate: Date
    }, { timestamps: true });

    schema.method("toJSON", function() {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    const hostel = mongoose.model("hostel", schema);
    return hostel;
};