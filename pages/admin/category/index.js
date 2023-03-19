import dynamic from "next/dynamic";
import Seo from "../../../components/common/Seo";
import PostJob from "../../../components/admin/employers-dashboard/post-jobs";

const index = () => {
  return (
    <>
      <Seo pageTitle="All Categories" />
      All Categories
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });