import axios from 'axios';
import { useEffect } from 'react';

export const SuperHeroApp = () => {
   const accessToken = '2368249143312302';
   const baseUrl = `https://superheroapi.com/api.php/${accessToken}`;

   const getSuperHeroes = () => {
      axios.get(baseUrl + '/search/batman').then((resp) => console.log(resp));
   };

   useEffect(() => {
      getSuperHeroes();
   }, []);

   return (
      <div>
         <h1>Super hero App</h1>
      </div>
   );
};
