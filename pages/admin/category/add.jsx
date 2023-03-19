import dynamic from "next/dynamic";
import Seo from "../../../components/common/Seo";
import AddCategoryMain from "../../../components/admin/employers-dashboard/addCategory/index";

const index = () => {
  return (
    <>
      <Seo pageTitle="Add Category Page" />
      <AddCategoryMain />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
