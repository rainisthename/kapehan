import Image from "next/image";
// import coffeeShop from "/images/coffeeshop.jpg";
import Link from "next/link";

const ShopCard = ({ shop }) => {
  return (
    <div className="relative">
      <div
        className={`relative bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105`}
      >
        <div className="relative w-full h-56">
          <Image
            src={'/images/coffeeshop.jpg'}
            alt={shop.coffee_shop_name}
            className="object-cover transition-opacity duration-300"
            fill // Use fill instead of layout="responsive"
          />

          {/* Rating at the top right */}
          <div className="absolute top-2 right-2 bg-white rounded-full px-2 py-1 shadow-md">
            <span className="text-yellow-500 font-poppins-bold">★</span>
            <span className="text-sm font-poppins text-[#4b4b4d] ml-1">
              {shop.rating}
            </span>
          </div>
          <div className="absolute bottom-2 left-2 bg-white rounded-full px-2 py-1 shadow-md">
            <p className="text-sm font-poppins text-gray-600">{shop.coffee_shop_city}</p>
          </div>
        </div>

        <div className="p-4">
          <p className="text-xl font-poppins-bold text-[#5f4429]">
            {shop.coffee_shop_name}
          </p>
          <span className="text-xs font-poppins text-[#4b4b4d]">
            {shop.coffee_shop_address}
          </span>
        </div>
      </div>
    </div>
  );
};

async function getPopularShops() {
    const res = await fetch(`${process.env.BASE_API_URL}/shops`, {
      // Next.js can cache or revalidate this depending on your needs
      cache: 'no-store' // or 'force-cache', or use `next: { revalidate: 60 }`
    });

    if (!res.ok) throw new Error('Failed to fetch popular shops');

    return res.json();
  }

export default async function Explore() {
  // Sample data for demonstration
  // const cards = [
  //   {
  //     id: 1,
  //     title: "Dream Coffee Shop",
  //     image: coffeeShop,
  //     rating: 4.5,
  //     address: "Pinagsama Village EP Housing 2",
  //     city: "Taguig",
  //   },
  //   {
  //     id: 2,
  //     title: "Malikhain Coffee Shop",
  //     image: coffeeShop,
  //     rating: 4.7,
  //     address: "Pinagsama Village EP Housing 2",
  //     city: "Makati",
  //   },
  //   {
  //     id: 3,
  //     title: "Rooftop Coffee Shop",
  //     image: coffeeShop,
  //     rating: 4.3,
  //     address: "Pinagsama Village EP Housing 2",
  //     city: "San Juan",
  //   },
  // ];

  const {data} = await getPopularShops();
  // console.log('data', data)

  return (
    <div className="bg-[#FAF7F2] flex flex-col min-h-screen">
      <div className="mx-8 md:mx-[10%] flex-grow">
        <section className="pt-0 sm:pt-14 text-left md:text-center pb-[30%] sm:pb-0">
          <h1 className="text-3xl lg:text-4xl xl:text-6xl tracking-wider 2xl:text-8xl text-[#5f4429] mb-5 font-poppins-extra-bold ">
            Discover Your Perfect Coffee Spot in Metro Manila
          </h1>
          <p className="mt-4 text-base md:text-base xl:text-lg 2xl:text-xl text-[#4b4b4d] font-poppins">
            Finding the perfect coffee shop in Metro Manila is now easier.
            Kapehan offers a curated list of the citi&apos;s best spots.
            Discover Metro Manila&apos;s vibrant coffee scene with us today!
          </p>
          <div className="flex justify-start md:justify-center mt-6">
            <Link href="/explore">
              <button className="pulse-button px-8 py-3 md:px-10 md:py-4 bg-[#5f4429] text-white rounded-full font-mona-semibold cursor-pointer">
                Find Coffee Shops
              </button>
            </Link>
          </div>
        </section>

        <section className="mt-[10%]">
          <p className="text-4xl md:text-7xl font-bold text-[#5f4429] mb-8 font-mona-black">
            Popular Coffee Shops
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-10">
            {data.map((shop) => (
              <ShopCard key={shop.coffee_shop_uuid} shop={shop} />
            ))}
          </div>
        </section>

        <section className="my-[10%]">
          <p className="text-4xl md:text-7xl font-bold text-[#5f4429] mb-8 font-mona-black">
            Our Story & Blogs
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-96 sm:max-w-none m-auto">
            <div className="flex flex-col items-center">
              <div className="w-full h-[370px] bg-[#5f4429] rounded-[20px]"></div>
              <p className="text-[#5f4429] font-mona-extrabold text-2xl mt-5 mb-3 w-full text-left ">
                Coffee & Dream: The Start of kapehan.ph
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
