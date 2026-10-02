'use client';

import React, { useState } from 'react';

export default function Home() {
  const [actionType, setActionType] = useState('sell');
  const [showDonateModal, setShowDonateModal] = useState(false);
  const [donateAmount, setDonateAmount] = useState('');
  
  const [products, setProducts] = useState([
    { id: 1, actionType: 'donate', title: '৬ষ্ঠ শ্রেণীর বই', location: 'খিলগাঁও', value: 'ফ্রি' },
    { id: 2, actionType: 'sell', title: 'স্টাডি টেবিল', location: 'মিরপুর', value: '৳ ২,৫০০' }
  ]);
  const [newProduct, setNewProduct] = useState({ title: '', location: '', phone: '', price: '' });

  const handleUpload = (e) => {
    e.preventDefault();
    if (!newProduct.title || !newProduct.location || !newProduct.phone) return;
    const item = {
      id: products.length + 1,
      actionType: actionType,
      title: newProduct.title,
      location: newProduct.location,
      value: actionType === 'sell' ? `৳ ${newProduct.price || '০'}` : 'ফ্রি'
    };
    setProducts([item, ...products]);
    setNewProduct({ title: '', location: '', phone: '', price: '' });
    alert('টোকাই প্ল্যাটফর্মে পণ্যটি সফলভাবে সরাসরি লাইভ করা হয়েছে!');
  };

  return (
    <div className="min-h-screen bg-[#fcfbfa] p-4 md:p-8 text-gray-800 font-sans">
      {/* হেডার */}
      <div className="max-w-7xl mx-auto flex justify-between items-center mb-8 border-b border-amber-900/10 pb-6">
        <div>
          <h1 className="text-4xl font-black text-[#8B4513]">TOKAI<span className="text-[#2E8B57]">.</span></h1>
          <p className="text-gray-600 mt-1 font-bold">“মানবতা ছড়িয়ে দিন টোকাইয়ের মাধ্যমে।”</p>
        </div>
        <button onClick={() => setShowDonateModal(true)} className="bg-[#2E8B57] text-white font-bold px-4 py-2.5 rounded-2xl text-sm shadow-md">
          🤝 গেস্ট ডোনেশন (বিকাশ/নগদ)
        </button>
      </div>

      {/* মূল গ্রিড */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* পণ্য আপলোড ফর্ম */}
        <div className="bg-white p-6 rounded-3xl border shadow-md h-fit">
          <h2 className="text-xl font-black mb-4">নতুন পণ্য যুক্ত করুন</h2>
          <div className="grid grid-cols-2 gap-2 mb-4">
            <button onClick={() => setActionType('sell')} className={`py-2 text-xs font-bold rounded-xl border ${actionType === 'sell' ? 'bg-[#8B4513] text-white' : 'bg-gray-50'}`}>🛒 কেনাবেচা</button>
            <button onClick={() => setActionType('donate')} className={`py-2 text-xs font-bold rounded-xl border ${actionType === 'donate' ? 'bg-amber-600 text-white' : 'bg-gray-50'}`}>🤝 দান করুন</button>
          </div>
          <form onSubmit={handleUpload} className="space-y-4">
            <input type="text" value={newProduct.title} onChange={(e) => setNewProduct({...newProduct, title: e.target.value})} placeholder="পণ্যের নাম" className="w-full px-4 py-2 bg-gray-50 rounded-xl border text-sm" required />
            {actionType === 'sell' && <input type="number" value={newProduct.price} onChange={(e) => setNewProduct({...newProduct, price: e.target.value})} placeholder="৳ মূল্য" className="w-full px-4 py-2 bg-gray-50 rounded-xl border text-sm" required />}
            <input type="text" value={newProduct.location} onChange={(e) => setNewProduct({...newProduct, location: e.target.value})} placeholder="লোকেশন" className="w-full px-4 py-2 bg-gray-50 rounded-xl border text-sm" required />
            <input type="tel" value={newProduct.phone} onChange={(e) => setNewProduct({...newProduct, phone: e.target.value})} placeholder="মোবাইল নম্বর" className="w-full px-4 py-2 bg-gray-50 rounded-xl border text-sm" required />
            <button type="submit" className="w-full bg-[#8B4513] text-white font-bold py-3 rounded-xl text-sm">টোকাই-এ লাইভ করুন 🚀</button>
          </form>
        </div>

        {/* পণ্য তালিকা */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-gray-800">আমার লাইভ পণ্যসমূহ ({products.length})</h2>
          <div className="space-y-4 max-h-[400px] overflow-y-auto">
            {products.map((prod) => (
              <div key={prod.id} className="bg-white p-5 rounded-2xl border shadow-sm">
                <span className={`px-2.5 py-0.5 text-xs font-bold rounded-full ${prod.actionType === 'donate' ? 'bg-emerald-100 text-[#2E8B57]' : 'bg-amber-100 text-[#8B4513]'}`}>{prod.actionType === 'donate' ? '🤝 অনুদান' : '🛒 কেনাবেচা'}</span>
                <h3 className="font-bold text-gray-900 mt-2">{prod.title}</h3>
                <div className="flex justify-between items-center mt-3 pt-2 border-t text-xs text-gray-500">
                  <span>📍 {prod.location}</span>
                  <span className="font-bold text-gray-900 bg-gray-50 px-2 py-0.5 rounded border">{prod.value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* পপআপ: বিকাশ/নগদ মার্চেন্ট গেটওয়ে */}
      {showDonateModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white w-full max-w-sm rounded-3xl shadow-2xl overflow-hidden relative">
            <div className="bg-gradient-to-r from-pink-600 to-red-500 p-4 text-white text-center">
              <h3 className="text-lg font-black">টোকাই ডিরেক্ট পেমেন্ট</h3>
              <p className="text-xs opacity-95">মাঝখানে কেউ নেই — সরাসরি অনুদান</p>
            </div>
            <div className="p-6 space-y-4">
              <input type="number" value={donateAmount} onChange={(e) => setDonateAmount(e.target.value)} placeholder="টাকার পরিমাণ লিখুন (৳)" className="w-full px-4 py-2.5 rounded-xl border text-center font-black text-xl bg-gray-50" />
              <button onClick={() => { alert(`৳ ${donateAmount || '০'} অনুদান সরাসরি বিকাশ/নগদ মার্চেন্ট গেটওয়েতে সফল হয়েছে!`); setShowDonateModal(false); setDonateAmount(''); }} className="w-full bg-gradient-to-r from-pink-600 to-red-500 text-white py-3 rounded-xl font-bold text-sm shadow-md">নিরাপদে পেমেন্ট সম্পন্ন করুন 🔒</button>
            </div>
            <button onClick={() => setShowDonateModal(false)} className="absolute top-3 right-4 text-white font-bold text-sm">✕</button>
          </div>
        </div>
      )}
    </div>
  );
}
