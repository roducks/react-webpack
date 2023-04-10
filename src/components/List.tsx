import React, { useEffect, useState } from 'react';

type List = {
  id: number,
  name: string,
}

const Home = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    async function fetchData(url: string) {
      const response = await fetch(url);
      const data = await response.json();
  
      setList(data.results);
    }

    const URL: string = process.env.REACT_API ?? '';
    fetchData(URL);
  }, []);

  return (
    <>
      <ul>
        {list.map((item: List) => <li key={item.id}>{item.name}</li>)}
      </ul>
    </>
    
  );
}

export default Home;