import axios from 'axios';

const key = '14644057-ca985d2fae582aa79c730fd25';
const imgUrl = `https://pixabay.com/api/?${key}&image_type=photo&q=`;

const getImagesByQuery = (serchQuery, page) => {
  return axios.get(
    `https://pixabay.com/api/?key=${key}&q=${serchQuery}&image_type=photo`,
  );
};

export default getImagesByQuery;
