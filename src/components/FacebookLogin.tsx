import React from 'react';

const FacebookLogin = () => {
    const handleLogin = () => {
      window.FB.login(resp => {
        if (resp.status === "connected") {
          console.log(resp.authResponse.accessToken)
        }
      })
    }

    return (
      <div className="container py-10 px-10 mx-0 min-w-full flex flex-col items-center">
        <button onClick={handleLogin} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Login</button>
      </div>
    );
}

export default FacebookLogin;