module.exports={
    // render ra tất cả các khoá học
    mutipleMongooseToObject: function(mongooses){
        return mongooses.map(mongoose=> mongoose.toObject());
    },
    // render ra 1 khoá học
    mongooseToObject: function(mongoose){
        return mongoose ?  mongoose.toObject() : mongoose;
    },
};