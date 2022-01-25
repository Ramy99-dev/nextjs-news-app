import Redis from 'ioredis';

const redis = new Redis();

redis.on('error', function (e) {
    if (e.message === 'ERR invalid password') {
      logger.error(`Fatal error occurred "${e.message}". Stopping server.`);
      throw e;
     }})

export default redis;