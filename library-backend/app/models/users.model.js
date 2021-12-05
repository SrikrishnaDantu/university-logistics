module.exports = mongoose => {

    var schema = mongoose.Schema({
        username: {
            type: String,
            min: [4, 'Too short, min 4 characters are required'],
            max: [32, 'Too long, max 16 characters are required'],
            unique: true
        },
        email: {
            type: String,
            min: [4, 'Too short, min 4 characters are required'],
            max: [32, 'Too long, max 16 characters are required'],
            lowercase: true,
            unique: true,
            required: 'Email is required',
            match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/],
            unique: true
        },
        useraccess: {
            type: String,
        },
        password: {
            type: String,
            min: [4, 'Too short, min 4 characters are required'],
            max: [32, 'Too long, max 16 characters are required'],
            required: 'Password is required'
        }
    }, { timestamps: true });


    schema.method("toJSON", function() {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    const users = mongoose.model("users", schema);
    return users;
};