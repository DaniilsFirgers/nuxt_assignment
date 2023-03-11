import { todos } from "../../dbModels";

interface Todo {
 _id: string
}

export default defineEventHandler(async (event) => {

  const todoId = event.context.params!.id
  event.node.res.statusCode = 200;
  console.log("DELETE /api/users");
  try {
    await todos.findByIdAndDelete(todoId)
    return {
      response: 'ok'
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