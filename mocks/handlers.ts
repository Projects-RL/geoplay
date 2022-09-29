import { rest } from "msw";

const successResponse = {
  user: {
    id: "test_id",
    email: "test@user.com",
  },
};

export const handlers = [
  rest.post(
    `${process.env.NEXT_PUBLIC_SUPABASE_URL}/auth/v1/token?`,
    (req, res, ctx) => {
      return res(ctx.json(successResponse));
    }
  ),
];
