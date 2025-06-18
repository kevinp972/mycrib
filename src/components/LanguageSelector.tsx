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
  return (
    <div className="relative flex items-center">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button 
            variant="ghost" 
            className="p-0 font-normal hover:bg-transparent text-xl focus:outline-none focus-visible:outline-none focus:ring-0 focus-visible:ring-0 focus:ring-offset-0 ring-0 outline-none"
          >
            Language
            <ChevronDown className="h-4 w-4 ml-1" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent 
          align="start" 
          className="w-max bg-[#2D2D2D] text-white rounded-none mt-0 border-0 shadow-none focus:outline-none focus-visible:outline-none focus:ring-0 focus-visible:ring-0"
          sideOffset={0}
        >
          <DropdownMenuItem className="cursor-pointer hover:bg-[#404040] hover:text-white text-lg rounded-none px-3 py-2 focus:outline-none focus-visible:outline-none focus:bg-[#404040] focus:text-white">
            English
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer hover:bg-[#404040] hover:text-white text-lg rounded-none px-3 py-2 whitespace-nowrap focus:outline-none focus-visible:outline-none focus:bg-[#404040] focus:text-white">
            中文 - Coming Soon
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
} 