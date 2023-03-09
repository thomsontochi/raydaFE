import React, { useState, useEffect }  from 'react';

const Home = () => {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [gadgets, setGadget] = useState([]);

    useEffect(() => {
        fetch("https://run.mocky.io/v3/7f02819f-8254-410a-b8af-ab98572bd26b")
            .then(res => res.json())
            //.then(data => console.log(data));
            .then(
                (data) => {
                    setIsLoaded(true);
                    setGadget(data);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
      }, [])

      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (

            
            <ul>
                {users.map(user => (
                <li key={user.id}>
                    {user.name} 
                </li>
                ))}
            </ul>
        );
    }
}



   
  


export default Home