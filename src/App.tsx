import React, { useEffect } from 'react';
import FacebookLogin from './components/FacebookLogin';

function App() {
 
  // Trigger facebook login on app load
  useEffect(() => {
    window.fbAsyncInit = function() {
      window.FB.init({
        appId            : process.env.FACEBOOK_AP_ID,
        autoLogAppEvents : true,
        xfbml            : true,
        version          : 'v16.0'
      });
    };
  }, [])


  return (
    <div className="App">
      <FacebookLogin />
    </div>
  );
}

export default App;
