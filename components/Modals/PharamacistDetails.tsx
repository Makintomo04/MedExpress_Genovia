import { FC } from "react";
import PharmacistPhoto from "./PharmacistPhoto";
import usePharmasist from "@/hooks/usePharmasist";

interface IPharamacistDetailsProps {}

const PharamacistDetails: FC<IPharamacistDetailsProps> = ({}) => {
  const { data: pharmasist, error } = usePharmasist();
  return (
    <div className="mb-10 flex items-center gap-6">
      <PharmacistPhoto
        className=""
        src={pharmasist?.results[0]?.picture?.large}
      />
      <div className="flex flex-col">
        <p>
          {pharmasist?.results[0]?.name.first}{" "}
          {pharmasist?.results[0]?.name.last}
        </p>
        <p className="text-blue-600 font-semibold">Superintendent Pharmacist</p>
      </div>
    </div>
  );
};

export default PharamacistDetails;
