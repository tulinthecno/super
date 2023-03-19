import dynamic from "next/dynamic";
import Seo from "../../../components/common/Seo";
import AllCategoriesMain from "../../../components/admin/employers-dashboard/allCategory/index";

const index = () => {
  return (
    <>
      <Seo pageTitle="All Categories" />
      <AllCategoriesMain/>
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
