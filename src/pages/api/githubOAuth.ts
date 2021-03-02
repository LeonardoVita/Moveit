import { serialize } from "cookie";
import Superagent from "superagent";

type githubData = {
  text?: string;
};

export default async function githubOAuth(req, res) {
  const client_id = process.env.CLIENT_ID;
  const client_secret = process.env.CLIENT_SECRET;
  const redirect_url = "http://localhost:3000";

  const data: githubData = await Superagent.post(
    "https://github.com/login/oauth/access_token"
  )
    .send({ client_id, client_secret, code: req.query.code })
    .set("Accept", "application/json")
    .catch((err) => {
      console.log(err);
      res.send(err);
    });

  const access_data = await JSON.parse(data.text);

  res.setHeader("Set-Cookie", [
    serialize("token_type", access_data.token_type, { path: "/" }),
    serialize("access_token", access_data.access_token, { path: "/" }),
  ]);

  // Cookies.set("token_type", access_data.token_type);
  // Cookies.set("access_token", access_data.access_token);

  return res.status(200).redirect(redirect_url);
}
