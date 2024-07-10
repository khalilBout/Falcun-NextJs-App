import VideoDetails from "@/app/components/CoursesPage/VideoPage/VideoDetails";
import { getVideoById } from "@/Utils/getData/getVideo";

// for SEO
// الدالة المسؤولة عن تحسين الموقع في محركات البحث
export async function generateMetadata({ params }) {
  const videoDetailsData = await getVideoById(params.id);

  return {
    title: videoDetailsData.title,
    description: videoDetailsData.description,
  };
}

export default async function TheVideo({ params }) {
  const videoDetailsData = await getVideoById(params.id);

  return <VideoDetails video={videoDetailsData} />;
}
