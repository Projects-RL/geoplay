import { rest } from "msw";

const successResponse = {
  user: {
    id: "test_id",
    email: "test@user.com",
  },
};

export const handlers = [
  rest.post<string, Record<string, string>>(
    `${process.env.NEXT_PUBLIC_SUPABASE_URL}/auth/v1/token?`,
    (req, res, ctx) => {
      const userInputs = {
        email: JSON.parse(req.body).email,
        password: JSON.parse(req.body).password,
      };

      if (
        userInputs.email !== "test@user.com" ||
        userInputs.password !== "pwd123"
      ) {
        return res(
          ctx.json({
            error: "invalid_grant",
            error_description: "Invalid login credentials",
          })
        );
      }
      if (
        userInputs.email == "test@user.com" ||
        userInputs.password == "pwd123"
      ) {
        return res(ctx.json(successResponse));
      }
    }
  ),

  rest.post<string, Record<string, string>>(
    `${process.env.NEXT_PUBLIC_SUPABASE_URL}/auth/v1/signup`,
    (req, res, ctx) => {
      const userInputs = {
        email: JSON.parse(req.body).email,
        password: JSON.parse(req.body).password,
        username: JSON.parse(req.body).username,
      };

      if (userInputs.email === "test@user.com") {
        return res(ctx.json({ code: 400, msg: "User already registered" }));
      }
      if (userInputs.email !== "test@user.com") {
        return res(ctx.json(successResponse));
      }
    }
  ),
];
