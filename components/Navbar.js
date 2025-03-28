// [file path: /pages/page.jsx]
import React from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"



const Navbar = () => {
  return (
    <nav className="p-4 bg-background/50 sticky top-0 backdrop-blur">
      <div className="container mx-auto flex justify-between items-center">
<Link href={"/"}><div className="text-black text-lg font-bold">KhushiBlog</div></Link>
        <div className="hidden md:flex space-x-4 items-center">

          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>

        <div>
        <Button className = "m-2" variant="outline">Login</Button>
        <Button className = "mx-1" variant="outline">Signup</Button>
        </div>
 </div>

        <div className="md:hidden">
        <Sheet>
  <SheetTrigger>Open


          <button className="focus:outline-none ">
          <svg xmlns="http://www.w3.org/2000/svg"  className="h-6 w-6"  fill="none"  viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7"></path></svg>
            {/* Menu */}
          </button> </SheetTrigger>
          <SheetContent>
    <SheetHeader>
      <SheetTitle>Are you absolutely sure?</SheetTitle>
      <SheetDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>
        </div>

      </div>
      
    </nav>
  );
};


export default Navbar;
