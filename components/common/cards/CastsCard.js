import Image from "next/image";

/* Icons */
import PersonIcon from "@mui/icons-material/Person";

const CastsCard = ({ profile_path, image, name, character }) => {
  return (
    <div className="inline-flex flex-col min-h-[250px] w-[110px] lg:min-h-[250px] bg-wah text-black lg:w-[119.99px] rounded overflow-hidden cus-box-shadow select-none">
      {profile_path !== null ? (
        <div className="w-[110px] relative lg:w-[119.99px] h-[139.5px] lg-h-[152.16px]">
          <Image
            layout="fill"
            className="w-full object-cover"
            quality="10"
            src={image}
            alt={name}
          />
        </div>
      ) : (
        <div className="text-primary bg-gray w-full min-h-[140px] lg:min-h-[9.575rem] flex justify-center items-center">
          <PersonIcon />
        </div>
      )}

      <div className="p-[10px] flex flex-col gap-1">
        <p className="font-bold text-sm lg:text-[1rem]">{name}</p>
        <p className="text-sm">{character}</p>
      </div>
    </div>
  );
};

export default CastsCard;
