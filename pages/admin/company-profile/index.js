import dynamic from "next/dynamic";
import Seo from "../../../components/common/Seo";
import CompanyProfile from "../../../components/admin/employers-dashboard/company-profile";

const index = () => {
  return (
    <>
      <Seo pageTitle="Company Profile" />
      <CompanyProfile />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
