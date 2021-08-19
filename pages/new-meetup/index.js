import { Fragment } from 'react';
//Head comp allows us to add metadata to the head section of the page
import Head from 'next/head';
import { useRouter } from 'next/router';
//www.our-domain.com/new-meetup
import NewMeetupForm from '../../components/meetups/NewMeetupForm';

const addMeetupHandler = async (enteredMeetupData, router) => {
  // console.log(enteredMeetupData);
  //sending req. to api route (/especial api folder/folder name inside api folder). this sends the req. to new-meetup and triggers the handler function
  const response = await fetch('/api/new-meetup', {
    //configure the req.
    method: 'POST',
    //data attached to this rq. has to be an {} which enteredMeetupData already is
    body: JSON.stringify(enteredMeetupData),
    headers: {
      'content-type': 'application/json'
    }
  });
  const data = await response.json();
  //   console.log('data from addMeetupHandler new-meetup api', data);
  if (!router) {
    return;
  }
  router.push('/');
};

const NewMeetupPage = () => {
  const router = useRouter();
  return (
    <Fragment>
      <Head>
        <title>Add a new meetup</title>
        <meta
          name='description'
          content='Add your own meeetup and create great network opportunities'
        />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />;
    </Fragment>
  );
};

export default NewMeetupPage;
