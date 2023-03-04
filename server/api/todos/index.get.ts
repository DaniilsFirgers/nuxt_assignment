import { todos } from "../../dbModels";

export default defineEventHandler(async (event) => {
  console.log("GET /api/users");
  try {
    console.log("Find users");
    const todosData = await todos.find().exec();
    console.log(todosData);
    return todosData;
  } catch (err) {
    console.dir(err);
    event.node.res.statusCode = 500;
    return {
      code: "ERROR",
      message: "Something went wrong.",
    };
  }
});
