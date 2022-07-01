import express from "express";

const router = express.Router()
router.route("/").get((req, res) => {
    res.send("hello from restaurants")
})

export default router