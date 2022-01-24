import redis from "../../util/redis";

export default async function handler(req, res) {
    let data = await redis.get('news')
    res.status(200).send(data)
}
  