import { useLocation } from 'react-router-dom';
import WatchList from './WatchList';
import Summary from './Summary';
import Orders from './Orders';
import Holdings from './Holdings';
import Positions from './Positions';
import Funds from './Funds';
import Apps from './Apps';
import { GeneralContextProvider } from './GeneralContext';


const Dashboard = () => {
  const location = useLocation();
  
  const renderContent = () => {
    switch (location.pathname) {
      case '/orders':
        return <Orders />;
      case '/holdings':
        return <Holdings />;
      case '/positions':
        return <Positions />;
      case '/funds':
        return <Funds />;
      case '/apps':
        return <Apps />;
      default:
        return <Summary />;
    }
  };

  return (
    <div className="dashboard-container">
      <GeneralContextProvider>
        <WatchList />

        <div className="content">
          {renderContent()}
        </div>
      </GeneralContextProvider>
    </div>
  );
};

export default Dashboard;