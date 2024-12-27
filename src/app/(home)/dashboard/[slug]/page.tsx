import InstagramPostManager from "../../_components/PostCretor/InstagramPostManager";
import TelegramPostManager from "../../_components/PostCretor/TelegramPostManager";
import TikTokPostManager from "../../_components/PostCretor/TikTokPostManager";
import FacebookPostManager from "../../_components/PostCretor/FacebookPostManager";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;

  const renderPlatform = () => {
    switch (slug) {
      case "instagram":
        return <InstagramPostManager />;
      case "telegram":
        return <TelegramPostManager />;
      case "tiktok":
        return <TikTokPostManager />;
      case "facebook":
        return <FacebookPostManager />;
      default:
        return <div>Платформа не знайдена</div>;
    }
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Dashboard</h2>
      {renderPlatform()}
    </div>
  );
}

