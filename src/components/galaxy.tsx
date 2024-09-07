import Star from './star';

const Galaxy = () => {
  return (
    <>
      {Array.from({ length: 5 }).map((_, index) => (
        <Star key={index} />
      ))}
    </>
  );
};

export default Galaxy;
