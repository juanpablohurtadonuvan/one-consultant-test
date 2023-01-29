import { Academic } from "../models/Academic.js";

export const createData = async (req, res) => {
  const { student, subject, teacher, score } = req.body;
  let storage = new Academic({ student, subject, teacher, score });
  await storage.save();
  res.json({
    mensaje: "Se han agregado los datos satisfactoriamente",
    storage,
  });
};

export const getData = async (req, res) => {
  const data = await Academic.find();
  res.json({ status: "Consulta exitosa", data });
};

export const delData = async (req, res) => {
  const { id } = req.body;
  const data = await Academic.findByIdAndRemove(id);
  if (!data) return res.status(404).json({ message: "Data not found" });
  return res.json({ message: "Data removed successfully", data: req.body });
};
