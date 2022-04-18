


const express = require('express');
const router=express.Router();
const courseController= require('../app/controllers/courseController');

router.get('/create', courseController.create);
router.post('/store', courseController.store);
router.get('/:id/edit', courseController.edit);
// checked khoá học
router.post('/handle-form-actions',courseController.handleFormAction );
router.post('/restore-form-actions',courseController.restoreFormAction );
// dung de sua khoa hoc
router.put('/:id', courseController.update);
router.delete('/:id', courseController.delete);
//khôi phục khoá học
router.patch('/:id/restore', courseController.restore);
//xoá  vĩnh viễn
router.delete('/:id/force', courseController.forcedelete);
router.get('/:slug', courseController.show);

module.exports= router;