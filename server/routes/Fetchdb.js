const query = { username: req.body.username};
const option = { projection: { _id:0, username:0, password:1}}
const user = await UserAuth.findOne( query, option)