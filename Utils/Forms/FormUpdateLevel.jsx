"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Loading from "@/app/components/Loading/Loading";
import { AiOutlineDelete } from "react-icons/ai";

const FormUpdateLevel = ({ data }) => {
  const router = useRouter();
  const [laudingSend, setLaudingSend] = useState(false);

  const [newClass, setNewClass] = useState("");
  const [title, setTitle] = useState(data.title);
  const [listUpdateClass, setListUpdateClass] = useState(data.listClass);

  const changeTitle = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
  };
  const handelNewClass = (e) => {
    e.preventDefault();
    setNewClass(e.target.value);
  };

  const addNewClassToList = (e) => {
    e.preventDefault();
    if (newClass !== "") {
      setListUpdateClass((prev) => [...prev, newClass]);
      // setClassName("");
    } else {
      alert("لا يمكن إضافة قسم فارغ ");
    }
  };
  const deleteCls = (val) => {
    const newList = listUpdateClass.filter((elm) => elm !== val);
    setListUpdateClass(newList);
  };

  const dataUpdated = {
    title,
    listClass: listUpdateClass,
  };
  // Sending Update Data
  const addLevelUpdate = async () => {
    const id = data?._id;
    console.log("data sending:", dataUpdated);
    try {
      setLaudingSend(true);
      const res = await fetch(`/api/levels/${id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
          // Authorization: `Bearer ${Cookies.get("token")}`,
        },
        body: JSON.stringify(dataUpdated),
      });
      if (res.status === 200) {
        // toast.success("level is Updated.");
        router.push("/dashboard/levels");
        router.refresh();
      }
    } catch (e) {
      console.log(e);
    } finally {
      setLaudingSend(false);
    }
  };
  // console.log('list class:',listClass)
  return (
    <>
      {laudingSend ? (
        <div className="w-full h-full flex justify-center item-center">
          <Loading />
        </div>
      ) : (
        <div>
          <form>
            <div className="grid lg:grid-cols-2 gap-2 mx-2 ">
              <input
                className=" h-[40px] border-[1px] rounded-lg focus:border-pink-200 px-3 focus:border-2 outline-none m-1"
                placeholder="اسم الصف"
                type="text"
                name="title"
                onChange={changeTitle}
                defaultValue={data.title}
              />

              <div className="flex gap-8 mx-2 ">
                <input
                  className=" h-[40px] min-w-[280px] border-[1px] rounded-lg focus:border-pink-200 px-3 focus:border-2 outline-none m-1"
                  placeholder="القسم  "
                  type="text"
                  name="newClass"
                  onChange={handelNewClass}
                />
                <p
                  className="mx-2 px-2 py-1 text-black bg-green-200 rounded-md"
                  onClick={addNewClassToList}
                >
                  إضافة القسم
                </p>
              </div>
              {listUpdateClass.length > 0 && (
                <div className="flex gap-2">
                  {listUpdateClass.map((elm, ind) => (
                    <div
                      key={ind}
                      className=" flex justify-center items-center gap-2 px-2 h-[20px] bg-red-100 rounded-full"
                    >
                      <p className="text-[15px]  ">{elm}</p>
                      <button
                        className="p-1 w-[10px] h-[10px] rounded-full bg-red-300 flex justify-center items-center "
                        onClick={() => deleteCls(elm)}
                      >
                        <AiOutlineDelete size={16} />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </form>

          <button
            className={` ${
              laudingSend === true
                ? "bg-gray-300 text-primeColor cursor-move"
                : "bg-primeColor text-lightText "
            } px-4 py-2 my-2 cursor-pointer rounded-md w-full`}
            disabled={laudingSend === true}
            onClick={() => addLevelUpdate()}
          >
            تعديل الصف
          </button>
        </div>
      )}
    </>
  );
};

export default FormUpdateLevel;
