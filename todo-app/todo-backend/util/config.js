const MONGO_URL = process.env.MONGO_URL || undefined;
const REDIS_URL = process.env.REDIS_URL || undefined;

module.exports = {
  MONGO_URL, //: 'mongodb://localhost:27017/the_database',
  REDIS_URL, //: 'redis://localhost:6378'
};