import SerieDetails from "@/app/components/CoursesPage/SeriePage/SerieDetails";
import { getSerieById } from "@/Utils/getData/getSeries";

// for SEO
// الدالة المسؤولة عن تحسين الموقع في محركات البحث
export async function generateMetadata({ params }) {
  const SerieDetailsData = await getSerieById(params.id);

  return {
    title: SerieDetailsData.title,
    description: SerieDetailsData.description,
  };
}

export default async function TheSerie({ params }) {
  const SerieDetailsData = await getSerieById(params.id);

  return <SerieDetails Serie={SerieDetailsData} />;
}
