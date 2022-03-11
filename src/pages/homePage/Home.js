import React, {useState, useEffect} from 'react'
import Detail_List from '../../components/Detail_List';

const Home = () => {
  const [fetchData, setFetchData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts").then((response) => {
      return response.json();
    }).then((data) => {
      setFetchData(data);
    }).catch((err) => {
      console.log(err);
    })
  }, []);

  return (
    <>
      <Detail_List fetchData = {fetchData} />
    </>
  )
}

export default Home