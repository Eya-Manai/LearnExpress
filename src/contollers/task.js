import Task from "../models/task.js";
export async function getAllTasks(req, res, next) {
  try {
    const tasks = await Task.find({});
    res.json(tasks);
  } catch (e) {
    console.log(e);
    res.json("could not find task");
  }
}
export async function GetTaskByID(req, res, next) {
  try {
    const { id } = req.params;
    const task = await Task.findById(id);
    res.json(task);
  } catch {
    res.json("could not find task");
  }
}
export async function AddTask(req, res, next) {
  try {
    const { name, description, date } = req.body;
    const task = await Task.create({
      name: name,
      description: description,
      date: date,
    });
    res.json(task);
  } catch (e) {
    console.log(e);
    res.json("something hapenned");
  }
}
export async function DeleteTask(req, res, next) {
  try {
    const { id } = req.params;
    const result = await Task.deleteOne({ _id: id });
    if (result.deletedCount === 0) {
      return res.json("there is no task with that id");
    }
    res.json({
      message: "deleted successfully",
    });
  } catch {
    res.json("could not delete task");
  }
}
export async function UpdateTask(req, res, next) {
  try {
    const { id } = req.params;
    const { name, description, date } = req.body;
    const result = await Task.updateOne(
      { _id: id },
      { name: name, description: description, date: date }
    );
    if (result.modifiedCount === 0) {
      return res.json("there is no task with that id");
    }
    res.json({
      message: "updated successfully",
    });
  } catch {
    res.json("something unexpectedly happened");
  }
}
