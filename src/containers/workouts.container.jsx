import React from 'react';
import { graphql, QueryRenderer } from 'react-relay';

import environment from '../relay';

import Workout from '../components/Workout';

const WorkoutContainer = () => {
  return (
    <QueryRenderer
      environment={environment}
      query={graphql`
        query workoutsQuery {
          workouts {
            name
          }
        } 
      `}
      variables={{}}
      render={({ error, props }) => {
        console.log(error, props);
        if (error) {
          console.error(error);
        }
        if (!props) {
          return <div>Loading</div>;
        }
        console.log(props);
        return (
          <div>
            {props.workouts.map(workout => 
              <Workout {...workout} />
            )}
          </div>
        );
      }}
    />
  )
};

export default WorkoutContainer;