
import { useState, useEffect } from 'react';
import Api from '../../../Services/Api';

export const useGetUsers = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        Api.get('families')
          .then(response => {
            setPosts(response.data);
          })
          .catch(error => {
            console.log(error);
          });
      }, []);

  return posts?.results;
}

export default useGetUsers;