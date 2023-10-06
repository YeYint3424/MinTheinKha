const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController');

router.get('/', apiController.questions);
router.get('/:questionNo', apiController.selectRamdom);
router.get('/:questionNo/:answerNo', apiController.answer);

module.exports=router;