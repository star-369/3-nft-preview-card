import Equilibrium from "../assets/images/image-equilibrium.jpg";
import Profile from "../assets/images/image-avatar.png";

interface Props {
  NFTId: string;
  description: string;
  price: number;
  auction: number;
  creator: string;
}

export default function PreviewCard({
  NFTId,
  description,
  price,
  auction,
  creator,
}: Props) {
  return (
    <>
      <main className="w-[330px] p-6 rounded-2xl bg-very-dark-blue-card-bg shadow-custom-1 font-outfit">
        <div className="h-[300px] grid rounded-lg place-items-center relative before:content-['_'] before:absolute before:inset-0 before:bg-cyan before:opacity-0 before:z-[2] hover:before:opacity-50 before:duration-500 before:ease-linear group overflow-hidden cursor-pointer">
          <img
            src={Equilibrium}
            alt="nft equilibrium picture"
            className="absolute w-full h-full "
          />
          <svg
            className="w-12 aspect-square z-[3] opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="none" fill-rule="evenodd">
              <path d="M0 0h48v48H0z" />
              <path
                d="M24 9C14 9 5.46 15.22 2 24c3.46 8.78 12 15 22 15 10.01 0 18.54-6.22 22-15-3.46-8.78-11.99-15-22-15Zm0 25c-5.52 0-10-4.48-10-10s4.48-10 10-10 10 4.48 10 10-4.48 10-10 10Zm0-16c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6Z"
                fill="#FFF"
                fill-rule="nonzero"
              />
            </g>
          </svg>
        </div>

        <div className="pt-6 pb-4">
          <h1 className="text-xl font-normal text-white transition-colors duration-700 ease-in-out cursor-pointer hover:text-cyan">
            {NFTId}
          </h1>
          <p className="my-4 text-lg font-light leading-[1.6] text-soft-blue">
            {description}
          </p>
          <div className="flex justify-between">
            <div className="flex items-center gap-2 text-cyan">
              <svg width="11" height="18" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M11 10.216 5.5 18 0 10.216l5.5 3.263 5.5-3.262ZM5.5 0l5.496 9.169L5.5 12.43 0 9.17 5.5 0Z"
                  fill="#00FFF8"
                />
              </svg>
              <span>{price} ETH</span>
            </div>
            <div className="flex items-center gap-2 text-soft-blue">
              <svg
                className="w-[17px] aspect-square"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.305 2.007a6.667 6.667 0 1 0 0 13.334 6.667 6.667 0 0 0 0-13.334Zm2.667 7.334H8.305a.667.667 0 0 1-.667-.667V6.007a.667.667 0 0 1 1.334 0v2h2a.667.667 0 0 1 0 1.334Z"
                  fill="#8BACD9"
                />
              </svg>
              <span>{auction} days left</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4 pt-4 pb-2 border-t border-solid profile border-t-very-dark-blue-line text-soft-blue">
          <img
            src={Profile}
            alt="profile picture"
            className="w-8 border-[1px] border-solid border-white rounded-full"
          />
          <p className="font-light">
            Creation of{" "}
            <mark className="font-normal text-white transition-colors duration-700 ease-linear cursor-pointer bg-very-dark-blue-card-bg hover:text-cyan">
              {creator}
            </mark>
          </p>
        </div>
      </main>
    </>
  );
}
