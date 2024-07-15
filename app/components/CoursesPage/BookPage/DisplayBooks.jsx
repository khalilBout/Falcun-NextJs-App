import BookCard from "@/app/components/CoursesPage/BookPage/BookCard";

const DisplayBooks = ({ data }) => {
  return (
    <div className="flex justify-start items-start gap-4 flex-wrap">
      {data?.map((book, index) => (
        <BookCard item={book} key={index} />
      ))}
    </div>
  );
};

export default DisplayBooks;
