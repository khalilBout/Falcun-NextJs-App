import { useEffect, useState } from "react";
import Card from "../Card/Card";
import { FaSearch } from "react-icons/fa";
import { dataUniforms, dataEmbroidery, dataPrinting } from "../data";

const dataFilter = [
  { id: 1, title: " الأزياء الوحدة", value: "Uniforms" },
  { id: 2, title: "التطريز المباشر", value: "Embroidery" },
  { id: 3, title: " الطباعة DTF و UV", value: "Printing" },
];

const Filter = () => {
  const [serv, setServ] = useState("all");
  const [filterData, setFilterData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const displayData = [...dataUniforms, ...dataEmbroidery, ...dataPrinting];

  useEffect(() => {
    const filtered =
      serv === "all"
        ? displayData
        : displayData.filter((item) => item.catygory === serv);

    const searched = filtered.filter((item) =>
      item.titel.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setFilterData(searched);
  }, [serv, searchQuery]);

  const handleFilter = (e) => {
    setServ(e.target.value);
  };

  const handleClick = (val) => {
    setServ(val);
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="relative min-h-[70vh] h-full mt-20 mdl:mt-24 flex flex-col mdl:flex-row">
      {/* Bar Filter */}
      <div className="max-mdl:w-full mdl:min-w-[200px] max-mdl:my-3 mdl:mr-8 py-1 bg-gray/30 text-white">
        {/* bar filter desktop */}
        <div className="hidden mdl:flex flex-col justify-start items-center gap-4 mt-40 w-full h-full">
          <button
            onClick={() => handleClick("all")}
            className="text-[16px] font-fontTitle bg-gray rounded-full cursor-pointer hover:scale-110 duration-200 transition-all py-2 px-4 min-w-[160px]"
          >
            كل الخدمات
          </button>
          {dataFilter.map((elm, ind) => (
            <button
              key={ind}
              onClick={() => handleClick(elm.value)}
              className="text-[16px] font-fontTitle bg-gray rounded-full cursor-pointer hover:scale-110 duration-200 transition-all py-2 px-4 min-w-[160px]"
            >
              {elm.title}
            </button>
          ))}
        </div>
        {/* bar filter mobile */}
        <div className="flex mdl:hidden justify-center items-center text-black/70 font-fontTitle text-[15px]">
          <select
            className="w-[80%] py-1 h-[30px] bg-white border-[1px] rounded-lg focus:border-black/60 px-3 focus:border-2 outline-none m-1"
            defaultValue="all"
            onChange={handleFilter}
          >
            <option
              value="all"
              className="font-TitleFont text-[14px] font-bold"
            >
              اختر الخدمة
            </option>
            {dataFilter.map((elm, ind) => (
              <option
                key={ind}
                value={elm.value}
                className="font-fontTitle text-[14px]"
              >
                {elm.title}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Display data */}
      <div className="grow">
        {/* Search bar */}
        <div className="bg-gray/30 absolute top-18 mdl:top-12 left-0 right-0 flex justify-center mdl:justify-end items-start mdl:pl-28">
          <div className="w-[80%] mdl:w-[60%] my-2 px-4 flex justify-center items-center gap-2 rounded-full bg-slate-100">
            <input
              className="grow my-1 bg-slate-100 text-[15px] font-fontBody outline-none rounded-full px-4 py-1"
              value={searchQuery}
              onChange={handleSearch}
            />
            <FaSearch size={20} />
          </div>
        </div>
        {/* Display elements */}
        <div className="p-10 mt-20 mdl:mt-28 flex justify-center gap-4 flex-wrap">
          {filterData.length > 0 ? (
            filterData.map((elm, ind) => <Card key={ind} data={elm} />)
          ) : (
            <p>no data</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Filter;
