const superagent = require("superagent");

export default async function githubOAuth(req, res) {
  const client_id = process.env.CLIENT_ID;
  const client_secret = process.env.CLIENT_SECRET;
  const redirect_url = "https://moveit-iota-eight.vercel.app/api/githubOAuth";

  const data = await superagent
    .post("https://github.com/login/oauth/access_token")
    .send({ client_id, client_secret, code: req.query.code })
    .set("Accept", "application/json")
    .catch((err) => {
      console.log(err);
      res.send(err);
    });

  const access_data = await JSON.parse(data.text);

  return res
    .status(200)
    .redirect(
      `${redirect_url}?token_type=${access_data.token_type}&access_token=${access_data.access_token}`
    );
}
