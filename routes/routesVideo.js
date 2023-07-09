const express = require("express");
const ControllerVideo = require("../controllers/ControllerVideo");
const router = express.Router();

router.get("/Cadastrar", ControllerVideo.cadastrarVideo);
router.post("/Cadastrar", ControllerVideo.VideoCreate);

router.get("/", ControllerVideo.listarVideos);

router.get("/update/:id_video", ControllerVideo.UpdateVideo);
router.post("/update", ControllerVideo.VideoUpdate);

router.post("/remover", ControllerVideo.removerVideo);

module.exports = router;