import { useRouter } from "next/router";
const ProfileUser = () => {
  const router = useRouter();
  const { username } = router.query;
  return <div>{username}</div>;
};
export default ProfileUser;
