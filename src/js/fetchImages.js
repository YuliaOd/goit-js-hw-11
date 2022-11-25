  import axios from 'axios';
  export const fetchImages = async (inputValue, pageNr) => {
   const response = await axios.get(
      `https://pixabay.com/api/?key=31464508-22922532a9d3f99d2fc41025c&q=${inputValue}&orientation=horizontal&safesearch=true&image_type=photo&per_page=40&page=${pageNr}`
    )
   consose.log(response)
      return response.data
  };
  
