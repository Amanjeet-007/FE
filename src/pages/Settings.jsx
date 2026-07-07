import { useState } from "react";
import { useTheme } from "../components/ThemeContext";

export default function Settings() {
  const { theme, toggleTheme } = useTheme();

  // 2. Shopping Preferences State
  const [preferences, setPreferences] = useState({
    currency: "INR",
    language: "en",
    shippingSpeed: "standard",
  });

  // 3. Notification Toggles State
  const [notifications, setNotifications] = useState({
    orderUpdates: true,
    promotions: false,
    stockAlerts: true,
  });

  // 4. Privacy & Security State
  const [saveCards, setSaveCards] = useState(true);

  // Helper function to handle deep preference changes
  const handlePrefChange = (key, value) => {
    setPreferences((prev) => ({ ...prev, [key]: value }));
  };

  // Helper function to handle notification toggle shifts
  const handleToggle = (key) => {
    setNotifications((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const saveSettings = () => {
    // Send state payload to your database/API here
    console.log("Saving user configurations...", {
      theme,
      preferences,
      notifications,
      saveCards,
    });
    alert("Settings saved successfully!");
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 font-sans dark:border-slate-800 dark:bg-gray-800">
      <div className="mb-8">
        <h1 className="text-3xl font-black text-blue-900">Account Settings</h1>
        <p className="text-slate-500 font-medium">
          Manage your shopping experience, preferences, and security settings.
        </p>
      </div>

      <div className="space-y-8">
        {/* SECTION 1: APPEARANCE (THEME) */}
        <section className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
          <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
            🎨 Appearance
          </h2>
          <p className="text-sm text-slate-500 mb-4">
            Choose how the store looks on your device.
          </p>
          <div className="grid grid-cols-2 gap-4 max-w-md">
            {/* Light Mode Button */}
            <button
              type="button"
              onClick={() => theme === "dark" && toggleTheme()} // Only toggle if currently dark
              className={`p-4 rounded-2xl border-2 text-left transition-all ${
                theme === "light"
                  ? "border-blue-600 bg-blue-50/50 text-blue-900"
                  : "border-slate-200 hover:border-slate-300 text-slate-700"
              }`}
            >
              <div className="font-bold">Light Mode</div>
              <div className="text-xs opacity-75">
                Clean, bright, and highly legible.
              </div>
            </button>

            {/* Dark Mode Button */}
            <button
              type="button"
              onClick={() => theme === "light" && toggleTheme()} // Only toggle if currently light
              className={`p-4 rounded-2xl border-2 text-left transition-all ${
                theme === "dark"
                  ? "border-blue-600 bg-blue-950/20 text-blue-900"
                  : "border-slate-200 hover:border-slate-300 text-slate-700"
              }`}
            >
              <div className="font-bold">Dark Mode</div>
              <div className="text-xs opacity-75">
                Easy on the eyes, perfect for night shopping.
              </div>
            </button>
          </div>
        </section>

        {/* SECTION 2: SHOPPING PREFERENCES */}
        <section className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
          <h2 className="text-xl font-bold text-slate-800 mb-4">
            🛍️ Shopping Preferences
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Currency Select */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-slate-700">
                Display Currency
              </label>
              <select
                value={preferences.currency}
                onChange={(e) => handlePrefChange("currency", e.target.value)}
                className="p-3 bg-slate-50 border border-slate-200 rounded-xl font-medium text-slate-800 focus:outline-blue-500"
              >
                <option value="USD">USD ($) - US Dollar</option>
                <option value="EUR">EUR (€) - Euro</option>
                <option value="GBP">GBP (£) - British Pound</option>
                <option value="INR">INR (₹) - Indian Rupee</option>
              </select>
            </div>

            {/* Language Select */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-slate-700">
                Preferred Language
              </label>
              <select
                value={preferences.language}
                onChange={(e) => handlePrefChange("language", e.target.value)}
                className="p-3 bg-slate-50 border border-slate-200 rounded-xl font-medium text-slate-800 focus:outline-blue-500"
              >
                <option value="en">English</option>
                <option value="hi">Hindi</option>
                <option value="es">Español</option>
                <option value="fr">Français</option>
                <option value="de">Deutsch</option>
              </select>
            </div>

            {/* Delivery Presets */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-slate-700">
                Default Shipping Speed
              </label>
              <select
                value={preferences.shippingSpeed}
                onChange={(e) =>
                  handlePrefChange("shippingSpeed", e.target.value)
                }
                className="p-3 bg-slate-50 border border-slate-200 rounded-xl font-medium text-slate-800 focus:outline-blue-500"
              >
                <option value="standard">Standard (3-5 Business Days)</option>
                <option value="express">Express (1-2 Business Days)</option>
                <option value="overnight">Next-Day / Overnight</option>
              </select>
            </div>
          </div>
        </section>

        {/* SECTION 3: NOTIFICATIONS CONTROL */}
        <section className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
          <h2 className="text-xl font-bold text-slate-800 mb-4">
            🔔 Notifications
          </h2>
          <p className="text-sm text-slate-500 mb-6">
            Choose how and when you want to hear from us.
          </p>

          <div className="space-y-4">
            <div className="flex items-center justify-between py-2 border-b border-slate-50">
              <div>
                <div className="font-bold text-slate-800">
                  Order & Delivery Updates
                </div>
                <div className="text-xs text-slate-500">
                  Real-time alerts for tracking, shipments, and delivery
                  drop-offs.
                </div>
              </div>
              <input
                type="checkbox"
                checked={notifications.orderUpdates}
                onChange={() => handleToggle("orderUpdates")}
                className="w-5 h-5 accent-blue-600 cursor-pointer"
              />
            </div>

            <div className="flex items-center justify-between py-2 border-b border-slate-50">
              <div>
                <div className="font-bold text-slate-800">
                  Promotions & Discounts
                </div>
                <div className="text-xs text-slate-500">
                  Be the first to hear about seasonal sales, flash discounts,
                  and coupons.
                </div>
              </div>
              <input
                type="checkbox"
                checked={notifications.promotions}
                onChange={() => handleToggle("promotions")}
                className="w-5 h-5 accent-blue-600 cursor-pointer"
              />
            </div>

            <div className="flex items-center justify-between py-2">
              <div>
                <div className="font-bold text-slate-800">
                  Back-in-Stock Alerts
                </div>
                <div className="text-xs text-slate-500">
                  Get pinged instantly when an item on your wishlist restocks.
                </div>
              </div>
              <input
                type="checkbox"
                checked={notifications.stockAlerts}
                onChange={() => handleToggle("stockAlerts")}
                className="w-5 h-5 accent-blue-600 cursor-pointer"
              />
            </div>
          </div>
        </section>

        {/* SECTION 4: PRIVACY & SECURITY */}
        <section className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
          <h2 className="text-xl font-bold text-slate-800 mb-4">
            🔒 Security & Checkout
          </h2>
          <div className="flex items-center justify-between py-2">
            <div>
              <div className="font-bold text-slate-800">
                Save Express Payment Tokens
              </div>
              <div className="text-xs text-slate-500">
                Securely cache encrypted card details for faster checkout
                passes.
              </div>
            </div>
            <input
              type="checkbox"
              checked={saveCards}
              onChange={() => setSaveCards(!saveCards)}
              className="w-5 h-5 accent-blue-600 cursor-pointer"
            />
          </div>
        </section>

        {/* SAVE CONFIGURATION BUTTON BAR */}
        <div className="flex justify-end pt-4">
          <button
            type="button"
            onClick={saveSettings}
            className="px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-700 shadow-lg shadow-blue-200 transition-all active:scale-98"
          >
            Save All Changes
          </button>
        </div>
      </div>
    </div>
  );
}
