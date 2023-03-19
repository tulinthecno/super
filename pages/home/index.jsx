import dynamic from "next/dynamic";
import Seo from "../../components/common/Seo";
import HomeMain from "../../components/Home/index";

const HomeMe = () => {
  return (
    <>
      <Seo pageTitle="Home_Main" />
      <HomeMain />
    </>
  );
};

export default dynamic(() => Promise.resolve(HomeMe), { ssr: false });
