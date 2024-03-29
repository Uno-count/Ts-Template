import React from 'react';


const Sidenavbar: React.FC = () => {
    return (
        <>
            <link rel="stylesheet" href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css" />

            <div className="relative min-h-screen flex flex-row bg-gray-100">
                <div className="flex flex-col w-full sm:w-56 bg-white overflow-hidden">

                    <div className="flex items-center justify-center h-20 mb-12 mt-12">
                        <div className="avatar placeholder">
                            <div className="bg-neutral text-neutral-content rounded-full w-32">
                                <span className="text-3xl">S</span>
                            </div>
                        </div>
                    </div>

                    <ul className="flex flex-col space-y-4">
                        <li>
                            <a href="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800 px-4">
                                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><img className='w-8' src="/images/robot 1.png" alt="" /></span>
                                <span className="text-lg font-medium">Request</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800 px-4">
                                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><img className='w-8' src="/images/robot.png" alt="" /></span>
                                <span className="text-lg font-medium">Escalation</span>
                            </a>
                            <img src="../public/images/robot.png" alt="" />
                        </li>
                        
                    </ul>
                    <div className='flex flex-row justify-center absolute bottom-0'>
                        <p className="text-sm text-base-300">Ts Template Beta</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Sidenavbar;
