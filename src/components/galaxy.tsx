import Star from './star';

const Galaxy = () => {
  return (
    <div className='overflow-hidden h-screen w-screen absolute top-0 left-0'>
      {Array.from({ length: 5 }).map((_, index) => (
        <Star key={index} />
      ))}
    </div>
  );
};

export default Galaxy;
