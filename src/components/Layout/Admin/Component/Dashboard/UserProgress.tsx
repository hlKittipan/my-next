import { UserProgressProps } from "@interfaces/article";
const UserProgress = ({
  backgroundColor,
  createdAt,
  position,
  userProgressStatus,
  progressPercent,
  progressColor,
  progressColorText,
  expireTime,
}: UserProgressProps) => {
  return (
    <div className="w-full dark:text-gray-900 md:w-4/12">
      <div className="p-2">
        <div className={`rounded-3xl p-4 ${backgroundColor}`}>
          <div className="justify-b flex items-center">
            <span className="text-sm">{createdAt}</span>
          </div>
          <div className="mb-4 mt-5 text-center">
            <p className="text-base font-bold opacity-70">{position}</p>
            <p className="mt-2 text-sm opacity-70">{userProgressStatus}</p>
          </div>
          <div>
            <p className="m-0 text-sm font-bold ">Progress</p>
            <div className="mx-0 my-2 h-1 w-full overflow-hidden rounded-md bg-white">
              <span
                className={`block h-1 rounded-md ${progressColor}`}
                style={{ width: `${progressPercent}` }}
              />
            </div>
            <p className="m-0 text-right text-sm font-bold">
              {progressPercent}
            </p>
          </div>
          <div className="relative flex justify-between pt-4">
            <div className="flex items-center">
              <img
                className="h-5 w-5 overflow-hidden rounded-full object-cover"
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
                alt="participant"
              />
              <img
                className="h-5 w-5 overflow-hidden rounded-full object-cover"
                src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
                alt="participant"
              />
              <button className="ml-3 flex h-5 w-5 items-center justify-center rounded-full border-none bg-white p-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-plus"
                >
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </button>
            </div>
            <div
              className={`flex flex-shrink-0 rounded-lg px-4 py-2 text-sm font-bold ${progressColorText}`}
            >
              {expireTime}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProgress;
