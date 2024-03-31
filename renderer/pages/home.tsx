import React, { useState } from 'react';
import Head from 'next/head';
import Sidenavbar from '../components/sidenavbar';
import EscalationForm from '../components/escalationForm';
import RequestForm from '../components/requestForm';

const HomePage: React.FC = () => {
  const [activeNavItem, setActiveNavItem] = useState<string>(''); // State to track active sidebar item

  return (
    <React.Fragment>
      <Head>
        <title>TS Template</title>
      </Head>
      <div className='flex bg-gray-dark min-h-screen'>
        <Sidenavbar activeNavItem={activeNavItem} setActiveNavItem={setActiveNavItem} />
        <div className="flex-grow">
          {activeNavItem === 'escalation' && <EscalationForm />} {/* Render EscalationForm if activeNavItem is 'escalation' */}
          {activeNavItem === 'request' && <RequestForm />} {/* Render RequestForm if activeNavItem is 'request' */}
        </div>
      </div>
    </React.Fragment>
  );
};

export default HomePage;
