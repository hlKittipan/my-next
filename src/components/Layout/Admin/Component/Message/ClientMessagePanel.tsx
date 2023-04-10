import { ClientMessagePanelProps } from "@interfaces/message";
const ClientMessagePanel = ({
  url,
  name,
  content,
  createdAt,
}: ClientMessagePanelProps) => {
  return (
    <div className="solid flex w-full border-t border-gray-700 p-4 hover:bg-gray-700 2xl:items-start">
      <img
        src={url}
        alt="profile image"
        className="h-10 w-10 rounded-full object-cover"
      />
      <div className="w-full pl-4">
        <div className="flex w-full items-center justify-between">
          <div className="font-medium text-white">{name}</div>
          <div className="flex h-7 w-7 cursor-pointer items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-white"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
          </div>
        </div>
        <p className="my-2 text-sm text-gray-400" dangerouslySetInnerHTML={{ __html: content }} />
        <p className="text-right text-sm text-gray-400">{createdAt}</p>
      </div>
    </div>
  );
};

export default ClientMessagePanel;
