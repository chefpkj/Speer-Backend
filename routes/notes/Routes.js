import express from "express";
import jwtControls from "../../middleware/jwtControls.js";
import controller from "./Controller.js";
const router=express.Router();


router.route('/notes/')
.get(jwtControls.authorizeToken,controller.getAllNotes)
.post(jwtControls.authorizeToken,controller.addNotes)

router.route('/notes/:id')
.get(jwtControls.authorizeToken,controller.getSpecificNotes)
.put(jwtControls.authorizeToken,controller.updateNotes)
.delete(jwtControls.authorizeToken,controller.deleteNotes)

router.route('/notes/:id/share')
.post(jwtControls.authorizeToken,controller.shareNotes)

router.route('/search')
.get(jwtControls.authorizeToken,controller.search)

export default router;
