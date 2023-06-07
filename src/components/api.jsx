const API_KEY = '35164837-0ab1384cb421b93089bd8e9f9';
const perPage = 12;

export const fetchPhotos = async (search, page) => {
  const response = await fetch(
    `https://pixabay.com/api/?q=${search}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${perPage}`
  );

  const photos = await response.json();
  console.log(photos);
  return photos;
};
