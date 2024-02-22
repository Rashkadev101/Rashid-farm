import Banner from './Banner';
import Choose from './Choose';
import Deal from './Deal';
import Featured from './Featured';
import Footer from './Footer';
import Header from './Header';

import NewsLatter from './NewsLatter';
import Pure from './Pure';

const Home = () => {
  const targetDate = new Date('January 18, 2024 23:59:59');

  return (
    <div className=''>
      {/**Header */}
      <Header />
      {/**Banner */}
      <Banner />
      {/**Featured */}
      <Featured />
      {/**Pure */}
      <Pure />
      {/**Deal */}
      <Deal targetDate={targetDate} />
      {/**Choose */}
      <Choose />
      {/**NewsLatter */}
      <NewsLatter />
      {/**Footer */}
      <Footer />
    </div>
  );
};

export default Home;
