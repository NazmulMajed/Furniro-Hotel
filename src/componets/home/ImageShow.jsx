const ImageShow = () => {
  const data = [
    {
      id: 1,
      image: "https://i.ibb.co.com/23Q0BS5/Mask-Group.png",
      p: "Dinning",
    },
    {
      id: 2,
      image: "https://i.ibb.co.com/zNWj8xL/image-100.png",
      p: "Living",
    },
    {
      id: 3,
      image: "https://i.ibb.co.com/92zfyYr/image-101.png",
      p: "Bedroom",
    },
  ];
  return (
    <div className="mt-16">
      <div className="text-center">
        <h2 className="font-bold text-3xl text-[#333333]">Browse The Range</h2>
        <p className="text-xl font-normal text-[#666666]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-3 mx-auto p-14 w-[1200px]">
        {data.map((item) => (
          <div key={item.id} className=" ">
            <img
              src={item.image}
              alt={`Image ${item.id}`}
              className="rounded-lg 
                   w-[381px] h-[480px]"
            />
            <p className=" mt-2 text-center  text-xl font-semibold ">
              {item.p}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageShow;
