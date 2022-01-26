import redis from "../../util/redis";

export default async function handler(req, res) {
    console.log(JSON.stringify(req.body.news))
    if (req.method == "POST") {
        try {
            let data = await redis.rpush(req.body.user, JSON.stringify(req.body.news))
            res.status(200).send(data);
        } catch (e) {
            console.log(e)
        }

    }
    if (req.method == "GET") {
        try {
            const { user } = req.query
            let data = await redis.lrange(user, 0, -1)
            res.status(200).send(data)
        } catch (e) {
            console.log(e)
        }
    }
    if (req.method == "DELETE") {
        await redis.lrem(req.body.user, 1, JSON.stringify(req.body.news))
        res.status(200).send({ "msg": "Success" })
    }

}
