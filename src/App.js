import { useEffect, useState } from 'react';
import Country from './components/Country';
import IpAddress from './components/IpAddress';
import Skeleton from './components/Skeleton';
import './index.css'

const PATH = "http://ip-api.com/json/";
const FLAG_PATH = "images/";
const FLAG_EXT = ".png";

function App() {
  const [ip, setIp] = useState('');
  const [country, setCountry] = useState('');
  const [flag, setFlag] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchIpInfo();
  }, []);

  const fetchIpInfo = () => {
    setIsLoading(true);
    fetch(PATH)
      .then(response => response.json())
      .then((result)=> {
        setIp(result.query);
        setCountry(result.country);
        setFlag(`${FLAG_PATH}${result.countryCode}${FLAG_EXT}`);
        setIsLoading(false);
      })
      .catch(e => console.log(e));
  };

  let content;
  if(isLoading){
    content = <Skeleton />
  }else{
    content = (
      <>
        <IpAddress ip={ip}/>
        <Country country={country} flag={flag}/>
      </>
    )
  }

  return (
    <div className='min-w-56 min-h-20 flex flex-col mx-auto px-6 py-2 items-center text-2xl 
                    dark:bg-slate-800 dark:text-white border-none'>
      {content}
    </div>
  );
}

export default App;
