import { Card } from "antd";
import { EyeOutlined } from "@ant-design/icons";
import moment from "moment";
import { formatStarCount } from '@/utils/star';

const RepoCard = ({
  date,
  title,
  body,
  avatar, // <<< user profile picture
  username, // <<< user name
  star, // rating
  onView,
}) => {
  const actions = [
    <EyeOutlined
      className="hover:!text-orange-light"
      key="view"
      onClick={onView}
    />,
  ];

  return (
<Card
  className="rounded-xl shadow-md bg-white w-full transition hover:shadow-lg"
  actions={actions}
  bodyStyle={{ minHeight: "180px", padding: "16px" }}
>
  {/* Grid layout for better responsiveness */}
  <div className="grid grid-rows-[auto_1fr_auto] gap-2">
    {/* Title + Description */}
    <div className="h-[150px]">
      <h3 className="text-base font-semibold text-gray-900 truncate">
        {title}
      </h3>
      <p className="text-gray-600 text-sm mt-1 line-clamp-6">
        {body}
      </p>
    </div>

    {/* Avatar + Username + Star at bottom */}
    <div className="flex justify-between items-center pt-2">
      <div className="flex items-center gap-2 overflow-hidden">
        <img src={avatar} alt={username} className="w-6 h-6 rounded-full shrink-0" />
        <span className="text-sm font-medium text-gray-800 truncate">{username}</span>
      </div>
      <span className="text-yellow-500 text-sm font-semibold shrink-0">⭐ {formatStarCount(star)}</span>
    </div>
  </div>
</Card>
  );
};

export default RepoCard;