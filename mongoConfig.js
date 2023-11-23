const {MongoClient}  = require("mongodb");

const mongoUrl = `mongodb+srv://bhavanakarri:${process.env.MONGO_PASSWORD}@cluster0.nwnm0xi.mongodb.net/`;

const client = new MongoClient(mongoUrl);

const db = client.db(process.env.MONGO_DB);
const users = db.collection("Users");
const hotels = db.collection("Hotels");
const address = db.collection("Address");
const wishlist = db.collection("Wishlist");
const trips = db.collection("Trips");
const payment = db.collection("Payments");

module.exports = {users,hotels,address,wishlist,trips,payment,db};