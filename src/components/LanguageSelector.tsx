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
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="p-0 font-normal hover:bg-transparent text-xl">
          Language
          <ChevronDown className="h-4 w-4 ml-1" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-[120px] bg-[#D1FFB7]">
        <DropdownMenuItem className="cursor-pointer focus:bg-[#bef299] text-xl">
          English
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer focus:bg-[#bef299] text-xl">
          中文
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
} 