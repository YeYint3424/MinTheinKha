const express = require('express');
const router = express.Router();
const pageController = require('../controllers/pageController');

router.get('/',pageController.home)
router.get('/:questionNo',pageController.answerList)
router.get('/:questionNo/:answerNo', pageController.answer)

module.exports=router