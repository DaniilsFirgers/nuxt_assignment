import { todos } from "../../dbModels";

interface Todo {
  urgency: string;
  todo: string;
}

export default defineEventHandler(async (event) => {
  console.log("POST /api/users");
  const { urgency, todo } = await readBody<Todo>(event);
  try {
    const newUserData = await todos.create({
      urgency,
      todo,
    });
    return {
      id: newUserData._id,
    };
  } catch (err) {
    console.dir(err);
    event.node.res.statusCode = 500;
    return {
      code: "ERROR",
      message: "Something wrong.",
    };
  }
});
