import React from 'react';

const FacebookLogin = () => {
  const handleLogin = () => {
      window.FB.login(async (resp: any) => {
        if (resp.status === "connected") {
          const response = await fetch(`https://spotibookgroup.vercel.app/api/hello?token=${resp.authResponse.accessToken}`);
          console.log(response);
        }
      }, 
      { 
        scope: 'public_profile'
      })
    }


    return (
      <div className="container py-10 px-10 mx-0 min-w-full flex flex-col items-center">
        <button onClick={handleLogin} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Login</button>
      </div>
    );
}

export default FacebookLogin;