

const SALE_ITEMS = [
  { id: "sale-1", img: "https://m.media-amazon.com/images/I/61VHvg7wvCL._AC_UL480_FMwebp_QL65_.jpg", title: "Upto 65% Off" },
  { id: "sale-2", img: "https://m.media-amazon.com/images/I/71oW9ddfGsL._AC_UL480_FMwebp_QL65_.jpg", title: "@35% Flat" },
  { id: "sale-3", img: "https://m.media-amazon.com/images/I/81EvwnQJXmL._AC_UL480_FMwebp_QL65_.jpg", title: "BOGO Free" },
  { id: "sale-more", img: null, title: "More..." },
];

// ==========================================
// SUB-COMPONENTS (Isolated to limit re-renders)
// ==========================================

export default function SaleGrid() {
  return (
    <div className="flex flex-wrap gap-4 min-h-87.5 md:h-full">
      {SALE_ITEMS.map((item) =>
        item.img ? (
          <div
            key={item.id}
            className="relative w-full md:w-[45%] overflow-hidden rounded-3xl group h-38 md:h-1/2 bg-cover bg-center transition-transform duration-500 hover:scale-[1.02] border-2 border-blue-600"
            style={{ backgroundImage: `url(${item.img})` }}
          >
            <div className="absolute inset-0 bg-linear-to-t from-blue-900/80 to-transparent p-4 flex items-end">
              <span className="text-white font-bold text-xs bg-blue-600 px-3 py-1 rounded-full">
                {item.title}
              </span>
            </div>
          </div>
        ) : (
          <div
            key={item.id}
            className="h-38 w-full md:w-[45%] md:h-1/2 rounded-3xl bg-[#475ea3] flex items-center justify-center text-white font-black text-xl hover:bg-blue-700 cursor-pointer transition-all shadow-lg shadow-blue-200"
          >
            {item.title}
          </div>
        )
      )}
    </div>
  );
}