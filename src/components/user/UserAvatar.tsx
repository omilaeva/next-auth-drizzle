import Image from "next/image";

const getInitials = (name: string) => {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();
};

type UserProps = {
  name? : string | null | undefined;
  image? : string | null | undefined;
}

export const UserAvatar = ({ user }: { user: UserProps} ) => {
  if (user.image) {
    return <Image src={user.image} alt={user.name ? user.name : "Unknown"} className="w-12 h-12 rounded-full" width={48} height={48} />;
  }

  const initials = user.name ? getInitials(user.name) : "?";

  return (
    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-500 text-white text-lg font-bold">
      {initials}
    </div>
  );
};