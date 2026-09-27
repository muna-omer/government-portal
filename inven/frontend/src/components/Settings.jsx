import React, { useState } from 'react';

const TABS = ['Business Profile', 'Currency & Tax', 'Notifications', 'Backup & Data'];

function Settings() {
  const [activeTab, setActiveTab] = useState('Business Profile');

  return (
    <main className="min-h-screen bg-slate-50 pt-24 pb-16">
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Settings
          </h1>
          <p className="mt-1 text-sm text-slate-500 sm:text-base">
            Manage your application settings
          </p>
        </div>

        {/* Tabs */}
        <div className="mb-4 overflow-hidden rounded-3xl border border-slate-200 bg-slate-100/70">
          <div className="flex flex-wrap gap-1 px-3 py-1.5 sm:px-4">
            {TABS.map((tab) => {
              const isActive = activeTab === tab;
              return (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  className={`rounded-2xl px-4 py-2 text-xs font-semibold tracking-wide ${
                    isActive
                      ? 'bg-white text-slate-900 shadow-sm'
                      : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  {tab}
                </button>
              );
            })}
          </div>
        </div>

        {/* Card */}
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <div className="px-5 py-6 sm:px-7 sm:py-7">
            {activeTab === 'Business Profile' && (
              <>
                <h2 className="mb-4 text-base font-semibold text-slate-900">
                  Business Information
                </h2>

                <form className="space-y-5">
                  <div className="space-y-1.5">
                    <label className="block text-sm font-medium text-slate-700">
                      Business Name
                    </label>
                    <input
                      type="text"
                      defaultValue="SHB"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-900 outline-none transition focus:border-slate-400"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-sm font-medium text-slate-700">
                      Email
                    </label>
                    <input
                      type="email"
                      defaultValue="munamanka01@gmail.com"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-900 outline-none transition focus:border-slate-400"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-sm font-medium text-slate-700">
                      Full Name
                    </label>
                    <input
                      type="text"
                      defaultValue="Muna Omar"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-900 outline-none transition focus:border-slate-400"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="button"
                      className="inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-slate-800"
                    >
                      <span className="text-lg">💾</span>
                      <span>Save Changes</span>
                    </button>
                  </div>
                </form>
              </>
            )}

            {activeTab !== 'Business Profile' && (
              <div className="py-6 text-sm text-slate-500">
                This section is not interactive yet, but the layout is ready for{' '}
                <span className="font-medium text-slate-700">{activeTab}</span> settings.
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Settings;









// export default function Settings() {
//     return (
//         <div className="p-6  bg-gray-50 min-h-screen">
//             <h1 className="text-2xl font-bold mb-6">Settings</h1>
//             <p className="text-gray-600">Manage your settings here.</p>
//         </div>
//     );
// }