const { StreamClient } = require("@stream-io/node-sdk");

const apiKey = "bnvmc79qtrxy";
const secret = "mc42p2fyg4kmqhtztn2u8e2j95mvee3yenzbw539mzswaynvv735cxggvyrf5vbb";

const generateStreamIOToken = (req, res) => {
    const client = new StreamClient(apiKey, secret, );
    const { userId } = req.params;
    // const newUser = {
    //     id: userId,
    //     role: userRole,
    //     name: userId
    // };

    // await client.upsertUsers({
    //     users: {
    //         [newUser.id]: newUser
    //     }
    // });

    const exp = Math.round(new Date().getTime() / 1000) + 60 * 60;

    const token = client.createToken(userId, exp);

    return res.json({ streamIOToken: token });
};

module.exports = generateStreamIOToken;
