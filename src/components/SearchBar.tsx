import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="relative max-w-xl mx-auto mb-8">
      <div className="relative">
        <input
          type="text"
          placeholder="بیمه مورد نظر را جست‌وجو کنید..."
          className="w-full py-4 px-6 pr-14 rounded-2xl bg-card border border-border shadow-azki text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
        />
        <div className="absolute right-4 top-1/2 -translate-y-1/2">
          <Search className="w-5 h-5 text-muted-foreground" />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
