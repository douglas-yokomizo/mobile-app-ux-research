"use client";
import { useRouter } from "next/navigation";

const BeneficiaryCard = ({
  name,
  relationship,
  percentage,
  isActive,
  onToggle,
  borderColor,
}) => {
  const router = useRouter();

  return (
    <div className="mt-10 bg-gray-light p-8 rounded-2xl">
      <div className={`border-l-8 px-8 rounded-lg ${borderColor}`}>
        <div className="flex justify-between items-center relative">
          <h3 className="text-3xl font-bold">{name}</h3>
          <div
            onClick={onToggle}
            className="flex hover:cursor-pointer flex-col text-5xl pb-10 font-bold leading-[16px] text-blue-text"
          >
            <span>.</span>
            <span>.</span>
            <span>.</span>
          </div>
          {isActive && (
            <div className="absolute right-0 top-16 bg-white border text-3xl w-5/12 border-gray-300 p-4 rounded-2xl shadow-lg mt-2">
              <button
                onClick={() => router.push("/beneficiaries/details/edit")}
                className="block w-full text-left px-2 py-6 hover:bg-gray-100"
              >
                Editar
              </button>
              <hr className="border border-divider" />
              <button className="block w-full text-left px-2 py-6 hover:bg-gray-100">
                Excluir
              </button>
            </div>
          )}
        </div>
        <div className="flex justify-between mt-4">
          <div className="text-3xl">
            <p className="text-gray-text mb-2">Parentesco</p>
            <p>{relationship}</p>
          </div>
          <div className="text-3xl">
            <p className="text-gray-text mb-2">Percentual de participação</p>
            <p>{percentage}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeneficiaryCard;
