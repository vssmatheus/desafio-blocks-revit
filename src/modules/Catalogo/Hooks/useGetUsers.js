
import { useState, useEffect } from 'react';
import Api from '../../../Services/Api';

export const useGetUsers = (take) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        Api.get(`families?skip=10&take=${take}`)
          .then(response => {
            setPosts(response.data);
          })
          .catch(error => {
            console.log(error);
          });
      }, [take]);

  return posts;
}

export default useGetUsers;