import React, { useState } from 'react';
import Head from 'next/head';
import Sidenavbar from '../components/sidenavbar';
import EscalationForm from '../components/escalationForm';
import RequestForm from '../components/requestForm';

const HomePage: React.FC = () => {
  const [activeNavItem, setActiveNavItem] = useState<string>(''); 

  return (
    <React.Fragment>
      <Head>
        <title>TS Template</title>
      </Head>
      <div className='flex bg-gray-darker min-h-screen'>
        <Sidenavbar activeNavItem={activeNavItem} setActiveNavItem={setActiveNavItem} />
        <div className="flex-grow m-5">
          {activeNavItem === 'escalation' && <EscalationForm />} 
          {activeNavItem === 'request' && <RequestForm />} 
        </div>
      </div>
    </React.Fragment>
  );
};

export default HomePage;
