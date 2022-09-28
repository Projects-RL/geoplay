import { rest } from "msw";

const response = {
  access_token: "kuk är as gott",
  token_type: "bearer",
  expires_in: 3600,
  refresh_token: "Nd7wGbkYobJVR_92gwG-OA",
  user: {
    id: "cead9ebb-38c1-415c-8b0a-86aef7c155cd",
    aud: "authenticated",
    role: "authenticated",
    email: "test@user.com",
    email_confirmed_at: "2022-09-25T13:29:14.517251Z",
    phone: "",
    confirmed_at: "2022-09-25T13:29:14.517251Z",
    last_sign_in_at: "2022-09-28T19:58:10.097213175Z",
    app_metadata: { provider: "email", providers: ["email"] },
    user_metadata: {},
    identities: [
      {
        id: "cead9ebb-38c1-415c-8b0a-86aef7c155cd",
        user_id: "cead9ebb-38c1-415c-8b0a-86aef7c155cd",
        identity_data: { sub: "cead9ebb-38c1-415c-8b0a-86aef7c155cd" },
        provider: "email",
        last_sign_in_at: "2022-09-25T13:29:14.515464Z",
        created_at: "2022-09-25T13:29:14.5155Z",
        updated_at: "2022-09-25T13:29:14.515503Z",
      },
    ],
    created_at: "2022-09-25T13:29:14.51278Z",
    updated_at: "2022-09-28T19:58:10.09955Z",
  },
};

export const handlers = [
  rest.post(
    "https://viukkllawnbsxxzwahvj.supabase.co/auth/v1/token?grant_type=password",
    (req, res, ctx) => {
      return res(ctx.json(200), ctx.json(response));
    }
  ),
];
