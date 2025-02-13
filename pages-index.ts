import React from 'react';
import Head from 'next/head';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Partner Portal</title>
        <meta name="description" content="Partner Portal Dashboard" />
      </Head>

      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Analytics Card */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Analytics</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="text-sm text-blue-600">Total Views</h3>
                <p className="text-2xl font-bold">25,431</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="text-sm text-green-600">Conversion Rate</h3>
                <p className="text-2xl font-bold">2.4%</p>
              </div>
            </div>
          </div>

          {/* Activity Card */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
            <div className="space-y-4">
              <div className="p-3 bg-gray-50 rounded-lg">
                <p className="text-gray-600">New insight detected</p>
                <p className="text-sm text-gray-500">2 hours ago</p>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg">
                <p className="text-gray-600">Performance alert</p>
                <p className="text-sm text-gray-500">5 hours ago</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}