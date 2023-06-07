import { Circles } from 'react-loader-spinner';

const Loader = () => {
  return (
    <Circles
      height="80"
      width="100%"
      radius="9"
      color="green"
      ariaLabel="loading"
      wrapperStyle
      wrapperClass
    />
  );
};
export default Loader;
