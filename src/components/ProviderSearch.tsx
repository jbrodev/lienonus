import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const ProviderSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/providers?search=${encodeURIComponent(searchTerm.trim())}`);
    }
  };

  return (
    <form onSubmit={handleSearch} className="w-full max-w-2xl mx-auto">
      <div className="relative flex gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
          <Input
            placeholder="Search by provider name, city, or zip code..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 h-12 text-base"
          />
        </div>
        <Button type="submit" size="lg" className="px-8">
          Search
        </Button>
      </div>
    </form>
  );
};

export default ProviderSearch;
