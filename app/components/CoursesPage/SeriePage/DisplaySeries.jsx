import SerieCard from "@/app/components/CoursesPage/SeriePage/SerieCard";

const DisplaySeries = ({ data }) => {
  return (
    <div className="flex justify-start items-start gap-4 flex-wrap">
      {data?.map((Serie, index) => (
        <SerieCard item={Serie} key={index} />
      ))}
    </div>
  );
};

export default DisplaySeries;
