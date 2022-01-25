import Redis from 'ioredis';

const redis = new Redis('localhost:6379');

redis.on('error', function (e) {
    if (e.message === 'ERR invalid password') {
      logger.error(`Fatal error occurred "${e.message}". Stopping server.`);
      throw e;
     }})

export default redis;