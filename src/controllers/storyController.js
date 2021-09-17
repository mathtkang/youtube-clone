//challenge - global
export const trending = (req, res) => res.send("Trending");
export const new_ = (req, res) => res.send("New");

//challenge - story
export const id_ = (req, res) => res.send(`Story ID is ${req.params.id}`);
export const edit = (req, res) => res.send(`Edit Story with ${req.params.id} ID`);
export const delete_ = (req, res) => res.send(`Delete Story with ${req.params.id} ID`);