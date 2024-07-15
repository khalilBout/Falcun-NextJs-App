"use client";

const FormAddSerie = ({ form, setForm }) => {
  const handelChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form>
      <div className="grid lg:grid-cols-2 gap-2 mx-2 ">
        <input
          className=" h-[40px] border-[1px] rounded-lg focus:border-pink-200 px-3 focus:border-2 outline-none m-1"
          placeholder="عنوان السلسلة"
          type="text"
          name="title"
          onChange={handelChange}
        />
        <input
          className=" h-[40px] border-[1px] rounded-lg focus:border-pink-200 px-3 focus:border-2 outline-none m-1"
          placeholder="سعر  السلسلة"
          type="number"
          name="price"
          onChange={handelChange}
        />
        <input
          className=" h-[40px] border-[1px] rounded-lg focus:border-pink-200 px-3 focus:border-2 outline-none m-1"
          placeholder="عدد صفحات السلسلة"
          type="number"
          name="numberOfPages"
          onChange={handelChange}
        />
      </div>
      <div className="m-2">
        <textarea
          rows={3}
          className="w-full border-[1px] rounded-lg focus:border-pink-200 px-3 focus:border-2 outline-none "
          placeholder="وصف محتوى السلسلة"
          type="text"
          name="description"
          onChange={handelChange}
        />
      </div>
    </form>
  );
};

export default FormAddSerie;
