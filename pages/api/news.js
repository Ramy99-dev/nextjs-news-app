import redis from "../../util/redis";

export default async function handler(req, res) {
    console.log(req.method)
    if(req.method == "POST")
    {  
        try {
            let data = await  redis.rpush(req.body.user , JSON.stringify(req.body.news))
            res.status(200).send(data);// This emit an error on the redis client, because it fails to connect (that's intended, to test the behaviour)
          } catch (e) {
            console.log(e)
          }
    
    }
    if(req.method == "GET")
    {
        await redis.del(req.body.user)
        const { user } = req.query
        let data = []
        data = await  redis.lrange(user,0,-1)
        res.status(200).send(data)
    }
    if(req.method == "DELETE")
    {
        await redis.lrem(req.body.user , 1 , JSON.stringify(req.body.news))
    }
   
}
  