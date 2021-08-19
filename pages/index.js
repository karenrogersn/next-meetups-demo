import { useEffect, useState, Fragment } from 'react';
//Head comp allows us to add metadata to the head section of the page
import Head from 'next/head';
import MeetupList from '../components/meetups/MeetupList';
import { MongoClient } from 'mongodb';

// const meetupsArray = [
//   {
//     id: 'm1',
//     title: 'First Meetup',
//     image:
//       'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
//     address: 'Some address 5, 12345 some city',
//     description: 'this is a first meetup!'
//   },
//   {
//     id: 'm2',
//     title: 'Second Meetup',
//     image:
//       'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
//     address: 'Some address 5, 12346 some city',
//     description: 'this is a second meetup!'
//   }
// ];

//this props {} is the one we set in getStaticProps
const HomePage = (props) => {
  // const [loadedMeetups, setLoadedMeetups] = useState([])
  //useEffect executes this code after the component first renders. loadedMeetups is an empty [] in the 1st render
  // useEffect(() => {
  //     //send http request to load meetups
  //     setLoadedMeetups(meetupsArray);
  // }, [])

  return (
    <Fragment>
      <Head>
        <title>React Meetups</title>
        <meta name='description' content='Browse a large list of jighly active React meeetups' />
      </Head>
      <MeetupList meetups={props.meetups} />;
    </Fragment>
  );
};

//special function available through NextJs that allows fetching data. It runs before the component's first render cycle so we have the data from the api already for when the component is loaded.
//this code doesn't run on the client side. it runs on server side and during the build process.
//The issue with this page being generated only during the build process is that data might change constantly and between vuild our web app might be outdated.
//an alternative is adding the revalidate prop

//STATIC GENERATION: no need for updating state
export async function getStaticProps() {
  //fetch data from an API
  const client = await MongoClient.connect(
    'mongodb+srv://Karen:Antofagasta2200286@cluster0.yyz3a.mongodb.net/meetups?retryWrites=true&w=majority'
  );

  const dataBase = client.db();

  const meetupsCollection = dataBase.collection('meetups');

  //find all the docs in the collection. .toArray() makes sure we get back an [] of meetups
  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      //need to map the meetups [] and convert the data because _id in Mongo DB Atlas is an object
      meetups: /* dummy meetups: meetupsArray */ meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.description,
        image: meetup.image,
        //because _id in Mongo DB Atlas is an {} we need to convert into a string
        id: meetup._id.toString()
      }))
    },
    //this props ensures the page will be re-pregenerated on the server side after deployment as long as we're making an http req. without the need of re-deployment and building again.
    //This props needs a numeric value that represents secs.
    revalidate: 10
  };
}

//SERVER-SIDE GENERATION
//this runs always (and only) on the server after deployment
// export async function getServerSideProps(context) {
//     //fetch data from an API
//     //the context param gives you access to the request and response objects (which are server-side props)
//     const req = context.req
//     const res = context.res
//     return {
//         props: {
//             meetups: meetupsArray
//         }
//     }
// }

export default HomePage;
