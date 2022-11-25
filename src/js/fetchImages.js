
  export const fetchImages = async (inputValue, pageNr) => {
    return await fetch(
      `https://pixabay.com/api/?key=31464508-22922532a9d3f99d2fc41025c&q=${inputValue}&orientation=horizontal&safesearch=true&image_type=photo&per_page=40&page=${pageNr}`
    )
      .then(async response => {
        if (!response.ok) {
          if (response.status === 404) {
            return [];
          }
          throw new Error(response.status);
        }
        return await response.json();
      })
      .catch(error => {
        console.error(error);
      });
  };
  
  import axios from 'axios';