import  { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Box } from "lucide-react"; // Box icon for each product

type Product = {
  id: number;
  name: string;
};

// Sample products array
const products: Product[] = [
  { id: 1, name: "Product 1" },
  { id: 2, name: "Product 2" },
  { id: 3, name: "Product 3" },
];

export function SearchBarComponent() {
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [noResults, setNoResults] = useState(false);

  const handleSearch = () => {
    if(searchInput == "0" || ""){
      setSearchResults([])
    }
    const results = products.filter((product) => 
     
      product.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    setSearchResults(results);
    setNoResults(results.length === 0);
  };

  return (
    <div className="flex flex-col w-full max-w-sm items-center space-x-2 absolute z-10 my-4">
      <p className="py-2 font-Ubuntu text-white font-bold text-2xl text-border [text-shadow:_-1px_-1px_0_#000,_1px_-1px_0_#000,_-1px_1px_0_#000,_1px_1px_0_#000]">
        Enter your Tracking Number
      </p>
      <div className="flex py-2">
        <div className="w-full relative border-black border-solid">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search..."
            className="pl-8 w-72 py-2 bg-white text-gray-400 rounded-none"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
        </div>
        <Button onClick={handleSearch} className="rounded-none py-2 font-Ubuntu">
          Search
        </Button>
      </div>

      {/* Dropdown box for search results */}
      {(searchResults.length > 0 || noResults) && (
        <div
          className={`w-full mt-2 p-4 bg-white border border-gray-200 rounded-md shadow-lg transition-all duration-300 transform ${
            searchResults.length > 0 || noResults ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          {noResults ? (
            <p className="text-red-500 text-center">No products available</p>
          ) : (
            searchResults.map((product) => (
              <div key={product.id} className="flex items-center p-2 hover:bg-gray-100">
                <Box className="h-4 w-4 mr-2 text-gray-500" />
                <span>{product.name}</span>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}
