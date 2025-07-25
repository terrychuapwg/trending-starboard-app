import { useParams } from "react-router-dom";
import Wrapper from "@layouts/Wrapper";
import moment from "moment";
import { formatStarCount } from "@utils/star";
import { useGetRepoById } from "@hooks/query/useRepoQuery";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const ViewRepo = () => {
  const { id } = useParams();
  const { data: repo, isLoading, isError } = useGetRepoById(id);
  const navigate = useNavigate();

  if (isLoading) {
    return (
      <Wrapper>
        <div className="p-4">Loading...</div>
      </Wrapper>
    );
  }

  if (isError || !repo) {
    return (
      <Wrapper>
        <div className="p-4 text-red-500">Repository not found.</div>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <div className="p-4 max-w-3xl mx-auto rounded-xl my-14">
        <div className="flex items-center gap-3 mb-4">
          <button
            onClick={() => navigate(-1)}
            className="text-gray-500 hover:text-black text-lg"
            aria-label="Go Back"
          >
            <ArrowLeftOutlined className="text-xl" />
          </button>
          <img
            src={repo.owner.avatar_url}
            alt={repo.owner.login}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h2 className="text-xl font-semibold">{repo.owner.login}</h2>
            <span className="text-sm text-gray-500">
              {moment(repo.created_at).format("YYYY-MM-DD")}
            </span>
          </div>
          <div className="text-right ml-auto">
            <span className="text-yellow-500 font-semibold">
              ⭐ {formatStarCount(repo.stargazers_count)}
            </span>
          </div>
        </div>

        <h1 className="text-2xl font-bold text-gray-900 mb-3">
          {repo.full_name}
        </h1>
        <p className="text-gray-700 mb-4">{repo.description}</p>

        {repo.language && (
          <p className="text-sm text-gray-500 mb-1">
            <strong>Language:</strong> {repo.language}
          </p>
        )}

        <div className="grid gap-4 mt-4 text-sm text-gray-500 mb-5">
          <div>⭐ Stars: {repo.stargazers_count}</div>
          <div>🍴 Forks: {repo.forks_count}</div>
          <div>🛎️ Watchers: {repo.watchers_count}</div>
          <div>🐛 Open Issues: {repo.open_issues_count}</div>
          <div>📅 Created: {moment(repo.created_at).format("LL")}</div>
          <div>📌 Last Push: {moment(repo.pushed_at).fromNow()}</div>
          <div>📄 License: {repo.license?.name || "None"}</div>
          <div>🔐 Visibility: {repo.visibility}</div>
        </div>

        <a
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full mt-4 text-center bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          View on GitHub →
        </a>
      </div>
    </Wrapper>
  );
};

export default ViewRepo;
