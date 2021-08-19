import { Fragment } from 'react';
//Head comp allows us to add metadata to the head section of the page
import Head from 'next/head';
import MeetupDetail from '../../components/meetups/MeetupDetail';
import { MongoClient, ObjectId } from 'mongodb';
// import { prop } from 'dom7';

const MeetupDetails = (props) => {
  return (
    <Fragment>
      <Head>
        <title>{props.meetupData.title}</title>
        <meta name='description' content={props.meetupData.description} />
      </Head>
      <MeetupDetail
        image={props.meetupData.image}
        title={props.meetupData.title}
        address={props.meetupData.address}
        description={props.meetupData.description}
        // image={
        //   'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg'
        // }
        // title={'First Meetup'}
        // address={'Some address 5, 12345 some city'}
        // description={'this is a first meetup!'}
      />
    </Fragment>
  );
};

//special function you need to export in a page comp if it's a dynamic page (id in the url for ex) and you're using getStaticProps. This is needed because since the page is pre-generated (during build, not when the user visits the page), next needs to know for which dynamic parameters (here is the id) this page needs to be pre-generated.
export async function getStaticPaths() {
  const client = await MongoClient.connect(
    'mongodb+srv://Karen:Antofagasta2200286@cluster0.yyz3a.mongodb.net/meetups?retryWrites=true&w=majority'
  );

  const dataBase = client.db();

  const meetupsCollection = dataBase.collection('meetups');

  //passing an empty {} as 1st arg to fetch all documents in the meetups [] and _id:1 to fetch all documents containing only the _id property
  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

  client.close();
  return {
    // fallback: false means we include all dynamic paths ourselves and if a user enters one that doesn't exist, the server wont try to generate a page to display but will show a 404 error
    fallback: false,
    //must have path key that's a [] ob objects
    //[
    //generating array of paths dynamically
    paths: meetups.map((meetup) => ({
      params: {
        meetupId: meetup._id.toString()
      }
    }))
    //include 1 {} per each version of this dynamic page
    // {
    //   params: {
    //     //dynamic values here
    //     meetupId: 'm1'
    //   }
    // },
    // {
    //   params: {
    //     //dynamic values here
    //     meetupId: 'm2'
    //   }
    // }
    // ]
  };
}

//after getStaticPaths, getStaticProps runs for every page we need to generate.
//you can't use hooks inside getStaticProps, so instead of useRouter, use the context {} parameter to access the params key (built in) and the dynamic values encoded in the url (meetupId --> name of our folder in the sq. brackets)
export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  const client = await MongoClient.connect(
    'mongodb+srv://Karen:Antofagasta2200286@cluster0.yyz3a.mongodb.net/meetups?retryWrites=true&w=majority'
  );

  const dataBase = client.db();

  const meetupsCollection = dataBase.collection('meetups');

  //converting the string id to the ObjectId shape mongodb provides
  const selectedMeetup = await meetupsCollection.findOne({ _id: ObjectId(meetupId) });

  client.close();

  //fetch data for a single meetup
  return {
    props: {
      meetupData: {
        //we need to pass an object to meetupData when we return props so we turn the id back to a string (from ObjectId) to use it in the FE
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        image: selectedMeetup.image,
        description: selectedMeetup.description
      }
      // {
      //   image:
      //     'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
      //   id: meetupId,
      //   title: 'First Meetup',
      //   address: 'Some address 5, 12345 some city',
      //   description: 'this is a first meetup!'
      // }
    }
  };
}

export default MeetupDetails;
