import React, { useState } from 'react';
import { UserProfile } from '../types';
import { Toast } from '../components/Toast';
import { 
  TrendingUp, 
  Search, 
  PiggyBank, 
  Smartphone, 
  Sun, 
  FileText, 
  Barcode, 
  Video, 
  Headphones, 
  MessageCircle, 
  Check, 
  X,
  CreditCard,
  Wallet,
  Copy,
  Edit2
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface ViewProfileProps {
  data: UserProfile;
  isPreview?: boolean;
}

export const ViewProfile: React.FC<ViewProfileProps> = ({ data, isPreview = false }) => {
  const [toastMsg, setToastMsg] = useState('');
  const [showToast, setShowToast] = useState(false);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setToastMsg(`Đã copy ${label}: ${text}`);
      setShowToast(true);
    });
  };

  return (
    <div className="w-full max-w-2xl mx-auto glass-panel rounded-[24px] overflow-hidden relative shadow-2xl animate-fade-in-up">
      {/* Edit Button if viewing own profile context or just accessible */}
      {!isPreview && (
        <Link to="/" className="absolute top-4 right-4 bg-white/40 hover:bg-white/80 p-2 rounded-full transition-colors z-10 text-white" title="Tạo trang của bạn">
           <Edit2 size={20} />
        </Link>
      )}

      {/* Header */}
      <div className="bg-gradient-to-r from-[#ff758c] to-[#ff7eb3] p-8 text-center text-white">
        <div className="relative inline-block">
          <img 
            src={data.avatarUrl} 
            alt="Avatar" 
            className="w-28 h-28 rounded-full border-4 border-white/80 bg-white object-cover mx-auto mb-4 shadow-lg"
            onError={(e) => { (e.target as HTMLImageElement).src = 'https://api.dicebear.com/7.x/fun-emoji/svg?seed=Fallback'; }}
          />
        </div>
        <h1 className="font-hand text-4xl md:text-5xl mb-2 drop-shadow-md">
          NUÔI {data.name.toUpperCase()} ĐI! 🥺
        </h1>
        <p className="text-lg italic opacity-90 font-medium">
          {data.slogan}
        </p>
      </div>

      <div className="p-6 md:p-8 space-y-8">
        
        {/* Why Feed Me */}
        <section>
          <div className="text-center mb-6">
            <h2 className="text-[#d63031] font-extrabold text-xl uppercase tracking-wider inline-block relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-12 after:h-1 after:bg-[#d63031] after:rounded-full">
              🎯 Tại Sao Nên Nuôi Tôi?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FeatureBox icon={<TrendingUp size={32} />} title="Sao Kê Realtime" desc="Cập nhật từng giây! Nhanh hơn cả tốc độ bạn chuyển tiền." />
            <FeatureBox icon={<Search size={32} />} title="Minh Bạch 300%" desc="Báo cáo cả việc mua ly trà sữa full topping." />
            <FeatureBox icon={<PiggyBank size={32} />} title="Chi Tiêu Hợp Lý" desc="Không G63. Chỉ mì tôm 2 trứng và trà đá." />
            <FeatureBox icon={<Smartphone size={32} />} title="App Tracking" desc="Theo dõi 24/7 tôi ăn gì, ở đâu như 'Big Brother'." />
          </div>
        </section>

        {/* Golden Commitment */}
        <section>
          <div className="text-center mb-6">
            <h2 className="text-[#d63031] font-extrabold text-xl uppercase tracking-wider inline-block relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-12 after:h-1 after:bg-[#d63031] after:rounded-full">
              🎪 Cam Kết Vàng
            </h2>
          </div>
          <div className="bg-white/50 rounded-2xl p-6 shadow-sm">
            <ListItem icon={<Sun />} text="Sao kê mỗi ngày: Cập nhật lúc 6h sáng, đều như vắt chanh! Nhanh hơn cả người yêu cũ chúc bạn buổi sáng" />
            <ListItem icon={<FileText />} text="Không giấu giếm như người yêu cũ của bạn: Từ tô phở 50k đến hộp sữa chua 8k." />
            <ListItem icon={<Barcode />} text="Full hóa đơn: Chụp bill, quét mã vạch, lưu biên lai đầy đủ." />
            <ListItem icon={<Video />} text="Video unboxing: Mở từng gói mì tôm live trên Facebook." />
            <ListItem icon={<Headphones />} text="Hotline 24/7: Gọi hỏi tôi ăn gì bất cứ lúc nào ( 0946614627 )." />
            <ListItem icon={<MessageCircle />} text="Không block: Hỏi khó đến mấy cũng trả lời. Không lơ tin nhắn như crush của bạn" />
          </div>
        </section>

        {/* Comparison */}
        <section>
          <div className="text-center mb-6">
             <h2 className="text-[#d63031] font-extrabold text-xl uppercase tracking-wider inline-block relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-12 after:h-1 after:bg-[#d63031] after:rounded-full">
              💰 So Sánh Nè
            </h2>
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 bg-red-500/10 border border-red-500/20 rounded-xl p-5">
              <h3 className="text-center font-bold text-red-700 uppercase mb-4">Người Khác</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex gap-2"><X className="text-red-500 w-4 h-4 mt-0.5 flex-shrink-0"/> Sao kê sau 3 năm</li>
                <li className="flex gap-2"><X className="text-red-500 w-4 h-4 mt-0.5 flex-shrink-0"/> File Excel mờ tịt</li>
                <li className="flex gap-2"><X className="text-red-500 w-4 h-4 mt-0.5 flex-shrink-0"/> Số liệu "làm tròn"</li>
                <li className="flex gap-2"><X className="text-red-500 w-4 h-4 mt-0.5 flex-shrink-0"/> Hay block người hỏi</li>
              </ul>
            </div>
            <div className="flex-1 bg-green-500/10 border border-green-500/20 rounded-xl p-5">
              <h3 className="text-center font-bold text-green-700 uppercase mb-4">Nuôi Tôi</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex gap-2"><Check className="text-green-600 w-4 h-4 mt-0.5 flex-shrink-0"/> Sao kê TRƯỚC khi tiêu</li>
                <li className="flex gap-2"><Check className="text-green-600 w-4 h-4 mt-0.5 flex-shrink-0"/> File Excel 4K Ultra HD</li>
                <li className="flex gap-2"><Check className="text-green-600 w-4 h-4 mt-0.5 flex-shrink-0"/> Chính xác từng đồng</li>
                <li className="flex gap-2"><Check className="text-green-600 w-4 h-4 mt-0.5 flex-shrink-0"/> Rep inbox siêu tốc</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Spending Plan */}
        <section>
          <div className="text-center mb-6">
            <h2 className="text-[#d63031] font-extrabold text-xl uppercase tracking-wider inline-block relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-12 after:h-1 after:bg-[#d63031] after:rounded-full">
              📈 Tiền Bay Đi Đâu?
            </h2>
          </div>
          <div className="bg-white/50 rounded-2xl p-6 shadow-sm space-y-4">
            <ProgressBar label="Ăn uống (Mì tôm, trứng)" percent={40} color="bg-[#FF6B6B]" />
            <ProgressBar label="Điện nước Internet" percent={20} color="bg-[#4ECDC4]" />
            <ProgressBar label="Thuê nhà" percent={15} color="bg-[#ffeaa7]" />
            <ProgressBar label="Y tế" percent={10} color="bg-[#74b9ff]" />
            <ProgressBar label="Học tập" percent={10} color="bg-[#a29bfe]" />
            <ProgressBar label="Giải trí" percent={5} color="bg-[#fd79a8]" />
            <p className="text-center text-xs text-gray-500 mt-4">*Biểu đồ cập nhật hàng tuần (hứa danh dự)!</p>
          </div>
        </section>

        {/* CTA */}
        <div className="bg-gradient-to-tr from-[#FF512F] to-[#DD2476] rounded-2xl p-8 text-center text-white shadow-xl transform transition hover:scale-[1.01]">
          <h2 className="font-hand text-4xl mb-2">💳 DONATE NGAY ĐI!</h2>
          <p className="text-sm opacity-90 mb-6">(Xin cảm ơn bạn đã tham gia dự án)</p>
          
          <div className="bg-white p-3 rounded-xl inline-block mb-4 shadow-inner">
            <img 
              src={data.qrCodeUrl} 
              alt="QR Code" 
              className="w-40 h-40 object-contain"
              onError={(e) => { (e.target as HTMLImageElement).src = 'https://cdn.imagetourls.com/uploads/tyImg/16fijS4r4.png'; }}
            />
          </div>
          <p className="text-xs font-bold mb-6 animate-pulse">⚡ Chuyển xong là có mail tự động! ⚡</p>

          <div className="space-y-3">
            <BankCard 
              icon={<CreditCard size={20} />} 
              name={data.bankName} 
              number={data.bankAccount} 
              onClick={() => copyToClipboard(data.bankAccount, data.bankName)}
            />
             <BankCard 
              icon={<Wallet size={20} />} 
              name={data.walletName} 
              number={data.walletAccount} 
              onClick={() => copyToClipboard(data.walletAccount, data.walletName)}
            />
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 pt-6 border-t border-gray-200/40 text-center">
            <p className="text-[11px] md:text-xs text-gray-600/80 font-medium italic">
                
            </p>
        </div>

      </div>

      <Toast 
        message={toastMsg} 
        isVisible={showToast} 
        onClose={() => setShowToast(false)} 
      />
    </div>
  );
};

/* Helper Components */
const FeatureBox = ({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) => (
  <div className="bg-white/60 p-5 rounded-2xl text-center hover:-translate-y-1 transition-transform duration-300 shadow-sm border border-white/40">
    <div className="text-primary flex justify-center mb-3">{icon}</div>
    <h3 className="font-bold text-gray-800 mb-2">{title}</h3>
    <p className="text-sm text-gray-600 leading-snug">{desc}</p>
  </div>
);

const ListItem = ({ icon, text }: { icon: React.ReactNode, text: string }) => (
  <div className="flex items-start gap-3 mb-3 text-sm md:text-base text-gray-700">
    <span className="text-yellow-500 mt-1 flex-shrink-0">{icon}</span>
    <span>{text.split(':').map((part, i) => i === 0 ? <strong key={i}>{part}:</strong> : part)}</span>
  </div>
);

const ProgressBar = ({ label, percent, color }: { label: string, percent: number, color: string }) => (
  <div>
    <div className="flex justify-between text-sm font-bold text-gray-700 mb-1">
      <span>{label}</span>
      <span>{percent}%</span>
    </div>
    <div className="h-3 bg-gray-200/50 rounded-full overflow-hidden">
      <div className={`h-full rounded-full ${color}`} style={{ width: `${percent}%` }}></div>
    </div>
  </div>
);

const BankCard = ({ icon, name, number, onClick }: { icon: React.ReactNode, name: string, number: string, onClick: () => void }) => (
  <button 
    onClick={onClick}
    className="w-full bg-white text-gray-800 p-4 rounded-xl flex items-center justify-between hover:bg-gray-50 transition-colors shadow-lg shadow-black/5 group"
  >
    <div className="flex items-center gap-3 font-bold text-lg">
      <span className="text-primary">{icon}</span>
      <span>{name}</span>
    </div>
    <div className="font-mono bg-gray-100 px-3 py-1 rounded text-base flex items-center gap-2 group-active:scale-95 transition-transform">
      {number}
      <Copy size={14} className="opacity-50" />
    </div>
  </button>
);