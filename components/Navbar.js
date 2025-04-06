// [file path: /pages/page.jsx]
"use client"
import React, { useEffect  , useState} from 'react';
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
import LoadingBar from 'react-top-loading-bar';
import { ModeToggle } from './theme-btn';
import { usePathname } from 'next/navigation';
import { Fira_Sans_Extra_Condensed } from 'next/font/google';

const Navbar = () => {

  const [progress, setProgress] = useState(0)
  const pathname = usePathname()
  useEffect(() => {
    setProgress(30 )

    setTimeout(() => {
      setProgress(70)
    }, 100);

    setTimeout(() => {
      setProgress(100)
    }, 400);
  
  }, [pathname])

  useEffect(() => {
    setTimeout(() => {
     setProgress(0)
     }, 500);
  } , [])
  
  return (
    <nav className="p-4 bg-background/50 sticky top-0 backdrop-blur z-10">
     <LoadingBar
        color="#f11946"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <div className="container mx-auto flex justify-between items-center pb-2">
<Link href={"/"}><div className="text-lg font-bold">KhushiBlog</div></Link>

        <div className="hidden md:flex space-x-4 items-center">
    <Link href="/" className="hover:text-blue-500 hover:font-semibold">Home</Link>
    <Link href="/about" className="hover:text-blue-500 hover:font-semibold">About</Link>
    <Link href="/blog" className="hover:text-blue-500 hover:font-semibold">Blog</Link>
    <Link href="/contact" className="hover:text-blue-500 hover:font-semibold">Contact</Link>
    <div>
        <Button className="m-2 text-xs" variant="outline">Login</Button>
        <Button className="m-2 text-xs" variant="outline">Signup</Button>
        <ModeToggle/>
    </div>
</div>
        <div className="md:hidden">
            <span className='m-2'>
            <ModeToggle/>
           </span>
        <Sheet>
  <SheetTrigger>

          <svg xmlns="http://www.w3.org/2000/svg"  className="h-6 w-6"  fill="none"  viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
           </SheetTrigger>

         
          <SheetContent className="bg-white text-black">
    <SheetHeader>
      <SheetTitle className= "font-bold my-4 text-center">KhushiBlog</SheetTitle>
      <SheetDescription>
      <div className="flex flex-col gap-5 items-center">

          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>

        <div className='flex items-center'>
        <Button className = "m-2" variant="outline">Login</Button>
        <Button className = "m-2" variant="outline">Signup</Button>
        </div> </div>

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
