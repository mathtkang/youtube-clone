//globalRouter
export const join = (req, res) => res.send("Join");
export const login = (req, res) => res.send("Login");

//userRouter
export const edit = (req, res) => res.send("Edit User");
export const remove = (req, res) => res.send("Remove User");
export const logout = (req, res) => res.send("Log out");
// export const see = (req, res) => res.send("See User");


//challenge
export const home = (req, res) => res.send("User home");
export const id_ = (req, res) => res.send(`User ID is ${req.params.id}`);
export const editProfile = (req, res) => res.send("editProfile User");

