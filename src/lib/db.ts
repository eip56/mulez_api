//import mongoose from 'mongoose';
require('@dotenvx/dotenvx').config();

console.log(`Hello ${process.env.HOSTNAME}`);
// track the connection
// let isConnected = false;
// export const connectToDataBase = async () => {
//   mongoose.set("strictQuery", true);
//   if (isConnected) {
//     console.log("DB connected already");
//     return;
//   }
//   try {
//     await mongoose.connect(process.env.MONGODB_URI, {
//       dbName: "MY_DB",
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     isConnected = true;
//   } catch (error) {
//     console.log(error);
//   }
// };

// username = doadmin
// password = 918Uvoy5Jp27w6t3 hide
// host = mongodb+srv://development-db-mongodb-sfo3-24-b27a2040.mongo.ondigitalocean.com
// database = admin

// username mul3z
// password zx7tk810Z439Ci5Q
// database mulez

// Connection string
//mongodb+srv://doadmin:<replace-with-your-password>@development-db-mongodb-sfo3-24-b27a2040.mongo.ondigitalocean.com/admin?tls=true&authSource=admin&replicaSet=development-db-mongodb-sfo3-24

//connection string with password
// mongodb+srv://doadmin:918Uvoy5Jp27w6t3@development-db-mongodb-sfo3-24-b27a2040.mongo.ondigitalocean.com/admin?tls=true&authSource=admin&replicaSet=development-db-mongodb-sfo3-24

//mongodb+srv://mul3z:show-password@development-db-mongodb-sfo3-24-b27a2040.mongo.ondigitalocean.com/mulez?tls=true&authSource=admin&replicaSet=development-db-mongodb-sfo3-24

// mongodb+srv://mul3z:zx7tk810Z439Ci5Q@development-db-mongodb-sfo3-24-b27a2040.mongo.ondigitalocean.com/mulez?tls=true&authSource=admin&replicaSet=development-db-mongodb-sfo3-24
