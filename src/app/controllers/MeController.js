const Course = require('../models/course');
const { mutipleMongooseToObject }=require('../../util/mongoose');

class MeController {
  
  
    //[get] /me/stored/Courses
   
    storedCourses(req, res, next){
        Promise.all([ Course.find({}),Course.countDocumentsDeleted()])
            .then(([courses,deleteCount])=>
                res.render('me/stored-courses',{
                    deleteCount,
                    courses: mutipleMongooseToObject(courses),
            })           
            )
            .catch(next);


        // đếm số khoá học đã xoá
        // Course.countDocumentsDeleted()
        // .then((deleteCount)=>{

        // })
       // .catch(()=>{});
        // in ta tất  các khoá học
    //     Course.find({})
    //     .then(courses=>res.render('me/stored-courses',{
    //         courses: mutipleMongooseToObject(courses),
    //     }))
    //    .catch(next);
    }
    // lấy lại những khoá học đã xoá
     //[get] /me/trash/Courses
    trashCourses(req, res, next){
        Course.findDeleted({})
        .then(courses=>res.render('me/trash-courses',{
            courses: mutipleMongooseToObject(courses)
        }))
       .catch(next);
    }

}
module.exports= new MeController;