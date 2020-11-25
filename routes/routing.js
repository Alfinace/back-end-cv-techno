const express = require('express')
const router =  express.Router();
const  {verifyToken, hasNoProfile,isSuperAdmin} = require('../midlleware/index')
const  userController = require('../controllers/user.controller')
const profileController = require('../controllers/profile.controller')

// USER ROUTE
router.post('/register',userController.registration )
router.post('/login',userController.login)
router.get('/users',[verifyToken,isSuperAdmin],userController.getUsers)

// PROFILE ROUTE
router.post('/profile/new',[verifyToken,hasNoProfile],profileController.createProfile)
router.post('/profile/new',[verifyToken,hasNoProfile],profileController.createProfile)

module.exports = router