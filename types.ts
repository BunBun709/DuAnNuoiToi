export interface UserProfile {
  name: string;
  email: string; // Used as identifier
  avatarUrl: string;
  slogan: string;
  bankName: string;
  bankAccount: string;
  walletName: string;
  walletAccount: string;
  qrCodeUrl: string;
}

export const DEFAULT_PROFILE: UserProfile = {
  name: "BUN",
  email: "",
  avatarUrl: "https://api.dicebear.com/7.x/fun-emoji/svg?seed=Lucky",
  slogan: "\"Sự giàu có của tôi phụ thuộc vào lòng tốt của bạn\"",
  bankName: "Techcombank",
  bankAccount: "9946614627",
  walletName: "Momo",
  walletAccount: "0946614627",
  qrCodeUrl: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=ThankYou",
};