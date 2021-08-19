//import MongoClient to connect to our data base in MongoDB and fetch data
import { MongoClient } from 'mongodb';

//we define function that contain server-side code. this only runs on the server. The file name acts as url paths

//endpoint for creating a new meetup: Nextjs will convert this into endopints on the server-side
//this function receives the request and response object
const handler = async (req, res) => {
  //SENDING THE REQ
  if (req.method === 'POST') {
    const data = req.body;
    //data we expect to get from the incoming req body
    // const { title, image, address, description } = data;

    //MongoClient.connect returns a promise and we can use await. the string inside the connect method is from MongoDB
    const client = await MongoClient.connect(
      'mongodb+srv://Karen:Antofagasta2200286@cluster0.yyz3a.mongodb.net/meetups?retryWrites=true&w=majority'
    );

    //get access to the DB by calling the db method on the client
    const dataBase = client.db();

    //this is a NSQL db (collection is a group of docs, docs being each meetup in this case)
    //access a certain collection by calling the collection method on the database.
    //give your collection a name 'meetups' it can be the same you added in the connect string as your database
    const meetupsCollection = dataBase.collection('meetups');
    //adding a new doc (will be an {}) into this collection. we can pass the data variable we created that holds title, image, address and description

    //this operation also returns a promise, so we can use await here
    const result = await meetupsCollection.insertOne(data);
    console.log('result', result);

    //closing the DB connection once we're done
    client.close();

    //SENDING THE RES
    //setting an http status code with a json message in case something was inserted successfully
    res.status(201).json({ message: 'Meetup was inserted' });
  }
};

export default handler;
