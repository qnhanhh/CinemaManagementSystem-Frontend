import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Toaster } from "../ui/toaster";

export default function SearchBar() {
  const router=useRouter()
  const [searchString, setSearchString]=useState('')

  const handleChange=(e:any)=>{
    setSearchString(e.target.value)
  }

  const handleSearch=(e:any)=>{
    if (e.key=='Enter'){
      console.log(searchString)
      router.push(`/movies/search/${searchString}`)
    }
  }

  return (
    <div className="relative flex-1">
      <Search className="absolute z-10 left-2 top-1/2 -translate-y-1/2" />
      <Input className="absolute z-0 top-1/2 -translate-y-1/2 px-10" onChange={handleChange} onKeyDown={handleSearch} />
      <Toaster />
    </div>
  );
}
