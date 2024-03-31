import React from 'react';

interface SidenavbarProps {
    activeNavItem: string;
    setActiveNavItem: (activeItem: string) => void;
  }
  

  const Sidenavbar: React.FC<SidenavbarProps> = ({ activeNavItem, setActiveNavItem }) => {
    return (
            <div className="flex w-[256px] flex-col h-screen justify-between border-r border-gray-light">
                <div>
                    <div className='flex items-center justify-center mt-10 mb-10'>
                        <div className="avatar">
                            <div className="w-[152px] rounded-full">
                                <img src="/images/avatar_sample.png" />
                            </div>
                        </div>
                    </div> 
            
                    <div>
                        <ul className="flex items-center flex-col space-y-10">
                            <li 
                                className={`transform hover:translate-y-2 transition-transform ease-in duration-200 pt-0 pb-0 px-10 hover:bg-cyan-light hover:text-gray-dark hover:rounded-3xl ${activeNavItem === 'request' ? 'text-gray-dark bg-cyan-light rounded-3xl' : 'text-white'}`}
                                onClick={() => setActiveNavItem('request')}
                                >
                                    <a href="#" className="flex items-center h-10 ">
                                        <span className='text-lg font-normal font-mono'>Request</span>
                                    </a>
                            </li>
                            <li 
                                className={`transform hover:translate-y-2 transition-transform ease-in duration-200 pt-0 pb-0 px-5 hover:bg-cyan-light hover:text-gray-dark hover:rounded-3xl ${activeNavItem === 'escalation' ? 'text-gray-dark bg-cyan-light rounded-3xl' : 'text-white'}`}
                                onClick={() => setActiveNavItem('escalation')}
                                >
                                    <a href="#" className="flex items-center h-10">                      
                                        <span className='text-lg font-normal font-mono'>Escalation</span>
                                    </a>
                            </li>
                        </ul>
                    </div>

                </div>
        
                <div className='flex justify-center'>
                    <div className="w-full mt-auto">
                        <div className='flex justify-center items-center py-4'>
                            <span className='text-gray-400'>TS_Template Version 3.0</span>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Sidenavbar;
