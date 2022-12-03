import React,{useEffect,useState} from 'react';

import Users from './components/Users';

const App = () => {
  // step1 : declare three states here : users, isLoading, error

  // step2 : use useEffect for fetching the data including updating isLoading and error states
  const [isLoading,setLoading] = useState(true);
  const [users,setUsers] = useState(null);
  const [error,setErrors] = useState(null);



  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
      if(!response){
        throw new Error('Whoops!');
      }else{
        return response.json();
      }
    })
    .then((json) => {
      setUsers(json);
      setLoading(false);
      })
    .catch((error) => {
      setErrors(error);
      setLoading(false);})
  }, []);
  return (
    <div className="container">
      <h1 className="title">Users Management App</h1>
      {isLoading && <p>Loading users...</p>}
      {error && <p>{error}</p>}

      {users && <Users users={users}/>}
    </div>
  );
};

export default App;
