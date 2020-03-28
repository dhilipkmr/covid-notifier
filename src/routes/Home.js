import { h } from 'preact';
import { useEffect } from 'preact/hooks';
import Notifier from '../containers/notifier/Notifier';
import TabularData from '../containers/tabularData/TablularData';

function Home() {
  useEffect(() => {
    console.log('hi');
  }, []);

  return (
    <div>
      <div style={{background: '#673AB7', color: 'white', height: '200px', borderRadius: '5px'}}>
        <div style={{ paddingTop: '100px', textAlign: 'center' }}>
          Covid-19 Notifier
        </div>
      </div>
      <Notifier/>
      <TabularData/>
    </div>
  );
}

export default Home;