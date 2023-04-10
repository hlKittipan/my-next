import UserProgress from "@components/Layout/Admin/Component/Dashboard/UserProgress";
import { UserProgressProps } from "@interfaces/article";
interface Props {
  title: string;
}

const items: UserProgressProps[] = [
  {
    backgroundColor: "bg-amber-100",
    createdAt: "December 10, 2020",
    position: "Web Designing",
    userProgressStatus: "Prototyping",
    progressPercent: "60%",
    progressColor: "bg-yellow-700",
    progressColorText: "text-yellow-700",
    expireTime: "2 Days Left",
  },
  {
    backgroundColor: "bg-gray-300",
    createdAt: "March 10, 2021",
    position: "UX/UI Design",
    userProgressStatus: "Prototyping",
    progressPercent: "50%",
    progressColor: "bg-indigo-700",
    progressColorText: "text-indigo-700",
    expireTime: "12 Days Left",
  },
  {
    backgroundColor: "bg-green-200",
    createdAt: "July 15, 2021",
    position: "Full-Stack developer",
    userProgressStatus: "Prototyping",
    progressPercent: "80%",
    progressColor: "bg-green-700",
    progressColorText: "text-green-700",
    expireTime: "5 Days Left",
  },
  {
    backgroundColor: "bg-blue-200",
    createdAt: "July 17, 2021",
    position: "Backend developer",
    userProgressStatus: "Prototyping",
    progressPercent: "70%",
    progressColor: "bg-blue-700",
    progressColorText: "text-blue-700",
    expireTime: "7 Days Left",
  },
  {
    backgroundColor: "bg-red-200",
    createdAt: "July 15, 2021",
    position: "Frontend developer",
    userProgressStatus: "Prototyping",
    progressPercent: "10%",
    progressColor: "bg-indigo-700",
    progressColorText: "text-indigo-700",
    expireTime: "5 Days Left",
  },
  {
    backgroundColor: "bg-purple-200",
    createdAt: "October 15, 2021",
    position: "Project manager",
    userProgressStatus: "Prototyping",
    progressPercent: "90%",
    progressColor: "bg-purple-700",
    progressColorText: "text-purple-700",
    expireTime: "50 Days Left",
  },
];
const BoardStatus = ({ title }: Props) => (
  <div className="flex flex-wrap">
    <div className="w-full rounded-3xl bg-gray-800 px-6 py-6 lg:w-8/12">
      <div className="mb-8 flex items-center justify-between text-white">
        <p className="text-2xl font-bold">{title}</p>
        <p className="">December, 12</p>
      </div>
      <div className="flex flex-wrap items-center justify-between pb-8">
        <div className="flex flex-wrap text-white">
          <div className="pr-10">
            <div className="text-2xl font-bold">45</div>
            <div className="">In Progress</div>
          </div>
          <div className="pr-10">
            <div className="text-2xl font-bold">24</div>
            <div className="">Upcoming</div>
          </div>
          <div>
            <div className="text-2xl font-bold">62</div>
            <div className="">Total Projects</div>
          </div>
        </div>
        <div className="mt-4 flex items-center md:mt-0">
          <button className="bg-transparent text-white" title="List View">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="8" y1="6" x2="21" y2="6" />
              <line x1="8" y1="12" x2="21" y2="12" />
              <line x1="8" y1="18" x2="21" y2="18" />
              <line x1="3" y1="6" x2="3.01" y2="6" />
              <line x1="3" y1="12" x2="3.01" y2="12" />
              <line x1="3" y1="18" x2="3.01" y2="18" />
            </svg>
          </button>
          <button className="ml-2 bg-gray-700 p-2 text-white" title="Grid View">
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
            >
              <rect x="3" y="3" width="7" height="7" />
              <rect x="14" y="3" width="7" height="7" />
              <rect x="14" y="14" width="7" height="7" />
              <rect x="3" y="14" width="7" height="7" />
            </svg>
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {items?.map((data: UserProgressProps, i) => (
          <UserProgress key={i} {...data} />
        ))}
      </div>
    </div>
    <div className="mt-8 w-full lg:mt-0 lg:w-4/12 lg:pl-4">
      <div className="rounded-3xl bg-gray-800 px-6 pt-6">
        <div className="flex pb-6 text-2xl font-bold text-white">
          <p>Client Messages</p>
        </div>
        <div>
          <div className="solid flex w-full border-t border-gray-700 p-4 hover:bg-gray-700 2xl:items-start">
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
              alt="profile image"
              className="h-10 w-10 rounded-full object-cover"
            />
            <div className="w-full pl-4">
              <div className="flex w-full items-center justify-between">
                <div className="font-medium text-white">Stephanie</div>
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
              <p className="my-2 text-sm text-gray-400">
                I got your first assignment. It was quite good. 🥳 We can
                continue with the next assignment.
              </p>
              <p className="text-right text-sm text-gray-400">Dec, 12</p>
            </div>
          </div>
          <div className="solid flex w-full border-t border-gray-700 p-4 hover:bg-gray-700 2xl:items-start">
            <img
              src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
              alt="profile image"
              className="h-10 w-10 rounded-full object-cover"
            />
            <div className="w-full pl-4">
              <div className="flex w-full items-center justify-between">
                <div className="font-medium text-white">Mark</div>
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
              <p className="my-2 text-sm text-gray-400">
                Hey, can tell me about progress of project? I'm waiting for your
                response.
              </p>
              <p className="text-right text-sm text-gray-400">Dec, 12</p>
            </div>
          </div>
          <div className="solid flex w-full border-t border-gray-700 p-4 hover:bg-gray-700 2xl:items-start">
            <img
              src="https://images.unsplash.com/photo-1543965170-4c01a586684e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDZ8fG1hbnxlbnwwfDB8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
              alt="profile image"
              className="h-10 w-10 rounded-full object-cover"
            />
            <div className="w-full pl-4">
              <div className="flex w-full items-center justify-between">
                <div className="font-medium text-white">David</div>
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
              <p className="my-2 text-sm text-gray-400">
                Hey, can tell me about progress of project? I'm waiting for your
                response.
              </p>
              <p className="text-right text-sm text-gray-400">Dec, 12</p>
            </div>
          </div>
          <div className="solid flex w-full border-t border-gray-700 p-4 hover:bg-gray-700 2xl:items-start">
            <img
              src="https://images.unsplash.com/photo-1533993192821-2cce3a8267d1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTl8fHdvbWFuJTIwbW9kZXJufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
              alt="profile image"
              className="h-10 w-10 rounded-full object-cover"
            />
            <div className="w-full pl-4">
              <div className="flex w-full items-center justify-between">
                <div className="font-medium text-white">Mark</div>
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
              <p className="my-2 text-sm text-gray-400">
                I am really impressed! Can&apos;t wait to see the final result.
              </p>
              <p className="text-right text-sm text-gray-400">Dec, 12</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default BoardStatus;
