import React, {useState, useEffect} from 'react';

const RequestForm: React.FC = () => {

  const [checkboxData, setCheckboxData] = useState<string[]>([]);

  useEffect(() => {
    fetch('/data/Names.csv')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch CSV file');
        }
        return response.text();
      })
      .then(data => {
        const lines = data.split('\n');
        setCheckboxData(lines);
      })
      .catch(error => {
        console.error('Error fetching CSV file:', error);
      });
  }, []);
  
  
  return (
    <div>
      <div className='grid grid-rows-5 gap-1'>
        <div>Request CC</div>
        <div className='flex items-center flex-row gap-3'>
          <div>Support</div>
          <div className='w-full bg-gray-dark rounded-3xl p-5 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5 place-items-center'>
            
            {checkboxData.map((item, index) => (
                <div key={index} className='flex items-center gap-2'>
                  <input type="checkbox" defaultChecked className="checkbox checkbox-accent" />
                  <span className="label-text">{item}</span>
                </div>
              ))}

          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestForm;
