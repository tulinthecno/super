import dynamic from "next/dynamic";
import Seo from "../../../components/common/Seo";
import PostJob from "../../../components/admin/employers-dashboard/addCategory/index";

const index = () => {
  return (
    <>
      <Seo pageTitle="Post Jobs" />
      <PostJob />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
