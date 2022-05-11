import Footer from "../components/footer";
import Header from "../components/header";
import InfoGraphics from "../components/Infographics";
import Navbar from "../components/navbar";
import News2 from "../components/news2";
import NewsByCate from "../components/newsbycate";
import NewsMain from "../components/newsmain";
import Photo from "../components/photo";
import Topic from "../components/topic";
import TopStory from "../components/topstory";
import Video from "../components/video";

const Views = () => {
  return (
    <>
      <Header />
      <Navbar />
      <TopStory />
      <NewsMain />
      <Topic />
      <Video />
      <NewsByCate />
      <News2 />
      <Photo />
      <InfoGraphics />
      <Footer />
    </>
  );
};

export default Views;
