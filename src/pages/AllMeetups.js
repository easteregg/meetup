import MeetupList from '../components/meetups/MeetupList';
import { useState, useEffect } from 'react';
import { fetchData } from './fetchMeetups';
import { useFetchData } from './fetchMeetups';


const AllMeetups = () => {
  const {isLoading, data } = useFetchData(fetchData);

  if (isLoading) {
    return <div>... loading ...</div>;
  }

  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={data} />
    </section>
  );
};
export default AllMeetups;
