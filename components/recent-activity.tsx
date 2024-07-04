import Image from "next/image";
import React from "react";

interface RecentActivityProps {
  users: any;
}
const RecentActivity: React.FC<RecentActivityProps> = ({ users }) => {
  return (
    <div className="space-y-4">
      {users.map((user: any) => (
        <div key={user.id} className="flex items-center gap-x-6 w-full">
          <div className="text-2xl">🎉</div>
          <Image
            src={user.image}
            alt="user"
            height={50}
            width={50}
            className="rounded-full h-8 w-8"
          />
          <div className=" text-gray-500">
            {user.name} just joined
          </div>
          <div className="text-xs text-gray-800">
            {new Date(user.createdAt).toDateString()}
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecentActivity;
