import React, { useState } from 'react';

const Pricingtable = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  const togglePricing = () => {
    setIsMonthly(!isMonthly);
  };

  return (
    <div className="pricingtable py-12 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-chivo font-bold mb-6">Pricing Designed To Fit Your Business</h2>
        <div className="flex justify-center items-center mb-8">
          <span className="text-lg font-dmSan font-medium">Monthly</span>
          <label className="mx-4 relative inline-flex items-center cursor-pointer">
            <input 
              type="checkbox" 
              className="sr-only peer" 
              checked={!isMonthly}
              onChange={togglePricing} 
            />
            <div className="w-11 h-6 bg-gray-200 rounded-full dark:bg-gray-900 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
          </label>
          <span className="text-lg font-dmSan font-medium">Yearly</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Personal Plan */}
          <div className="p-6 bg-white rounded-lg shadow-lg hover:bg-blue-500 hover:text-white transition-all duration-300">
            <div className="mb-4">
              <div className="text-center text-blue-500 group-hover:text-white">
                <svg className="w-12 h-12 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A4.992 4.992 0 014 15a4.992 4.992 0 011.121-2.804l.65-.65m4.243 4.243a5 5 0 017.071 0m4.243 4.243a5 5 0 01-7.071 0M12 12v.01" />
                </svg>
              </div>
              <h3 className="text-xl font-chivo font-bold">Personal</h3>
              <p className="mt-2 font-dmSan">{isMonthly ? '$10/mth' : '$100/year'}</p>
              <p className="text-sm font-dmSan">Annual pricing (save 20%)</p>
            </div>
            <ul className="mb-6 font-dmSan">
              <li className="mb-2">✅ Calendar View</li>
              <li className="mb-2">✅ Custom Templates</li>
              <li className="mb-2">✅ List View</li>
              <li className="mb-2">✅ Board View</li>
              <li>✅ Assignees & Due Dates</li>
            </ul>
            <button className="w-full py-3 bg-white text-blue-500 rounded-lg font-dmSan font-medium hover:bg-blue-700 hover:text-white transition-colors">Purchase Now</button>
          </div>

          {/* Team Plan */}
          <div className="p-6 bg-white rounded-lg shadow-lg hover:bg-blue-500 hover:text-white transition-all duration-300">
            <div className="mb-4">
              <div className="text-center text-blue-500 group-hover:text-white">
                <svg className="w-12 h-12 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12V7a4 4 0 10-8 0v5m8 0h-8v5a4 4 0 008 0v-5z" />
                </svg>
              </div>
              <h3 className="text-xl font-chivo font-bold">Team</h3>
              <p className="mt-2 font-dmSan">{isMonthly ? '$25/mth' : '$250/year'}</p>
              <p className="text-sm font-dmSan">Annual pricing (save 35%)</p>
            </div>
            <ul className="mb-6 font-dmSan">
              <li className="mb-2">✅ Timeline Review</li>
              <li className="mb-2">✅ Custom Fields</li>
              <li className="mb-2">✅ Custom Templates</li>
              <li className="mb-2">✅ Task Dependencies</li>
              <li>✅ Milestones Manage</li>
            </ul>
            <button className="w-full py-3 bg-white text-blue-500 rounded-lg font-dmSan font-medium hover:bg-blue-700 hover:text-white transition-colors">Purchase Now</button>
          </div>

          {/* Enterprise Plan */}
          <div className="p-6 bg-white rounded-lg shadow-lg hover:bg-blue-500 hover:text-white transition-all duration-300">
            <div className="mb-4">
              <div className="text-center text-blue-500 group-hover:text-white">
                <svg className="w-12 h-12 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 21V7a2 2 0 00-2-2H6a2 2 0 00-2 2v14m2 0h12m-6 0v-4m4 4H8m8-12V3m0 0H8m0 0V3m0 0h8" />
                </svg>
              </div>
              <h3 className="text-xl font-chivo font-bold">Enterprise</h3>
              <p className="mt-2 font-dmSan">{isMonthly ? '$50/mth' : '$500/year'}</p>
              <p className="text-sm font-dmSan">Annual pricing (save 40%)</p>
            </div>
            <ul className="mb-6 font-dmSan">
              <li className="mb-2">✅ Data Export & Deletion</li>
              <li className="mb-2">✅ Block Native Integrations</li>
              <li className="mb-2">✅ Custom Branding</li>
              <li className="mb-2">✅ Lock Custom Fields</li>
              <li>✅ Priority Support</li>
            </ul>
            <button className="w-full py-3 bg-white text-blue-500 rounded-lg font-dmSan font-medium hover:bg-blue-700 hover:text-white transition-colors">Purchase Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricingtable;
