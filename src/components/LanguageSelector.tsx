'use client';

import * as React from 'react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ChevronDown } from 'lucide-react';

export function LanguageSelector() {
  const [open, setOpen] = React.useState(false);

  return (
    <div 
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative flex items-center"
    >
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="p-0 font-normal hover:bg-transparent text-xl">
            Language
            <ChevronDown className="h-4 w-4 ml-1" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent 
          align="start" 
          className="flex bg-[#2D2D2D] text-white rounded-none mt-0 border-0 shadow-none"
          sideOffset={0}
        >
          <DropdownMenuItem className="cursor-pointer hover:bg-black text-lg rounded-none px-3 py-2">
            English
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer hover:bg-black text-lg rounded-none px-3 py-2 whitespace-nowrap">
            中文 - Coming Soon
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
} 