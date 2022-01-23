import React from "react";
// import AddTask from './AddTask';
import TaskList from "./TaskList";
import useFetch from "./useFetch";
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  const baseurl = 'https://protected-brushlands-20047.herokuapp.com/';
  const {data: tasks, isPending, error} = useFetch(baseurl + 'tasks');

  return (
    <div className = "container">
      {error && <div>{error}</div>}
      {isPending && <div>Loading....</div>}
      {/*blogs is null intially so the below statement only renders when blogs data has been fetched!*/}
      {/* <AddTask/>
      <br></br> */}
      <h3>Tasks</h3>
      <div></div>
      {tasks && <TaskList tasks = {tasks} type = "normal"/>}
    </div>
  );
}
 
export default Home;