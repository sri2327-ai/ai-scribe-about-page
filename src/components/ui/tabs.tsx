
"use client"

import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"

import { cn } from "@/lib/utils"

interface TabsProps extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.Root> {
  children?: React.ReactNode;
}

const Tabs = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Root>,
  TabsProps
>(({ className, children, ...props }, ref) => (
  <TabsPrimitive.Root
    ref={ref}
    className={cn(
      "inline-flex items-center justify-start overflow-x-auto scrollbar-hide w-full",
      className
    )}
    {...props}
  >
    {children}
  </TabsPrimitive.Root>
))
Tabs.displayName = TabsPrimitive.Root.displayName

interface TabsListProps extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.List> {
  children?: React.ReactNode;
}

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  TabsListProps
>(({ className, children, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "inline-flex items-center justify-start overflow-x-auto scrollbar-hide w-full",
      className
    )}
    {...props}
  >
    {children}
  </TabsPrimitive.List>
))
TabsList.displayName = TabsPrimitive.List.displayName

interface TabsTriggerProps extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger> {
  children?: React.ReactNode;
}

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  TabsTriggerProps
>(({ className, children, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center whitespace-nowrap py-2 px-3 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border-b-2 border-transparent data-[state=active]:border-[#387E89] data-[state=active]:text-[#143151] mr-2 mb-2 hover:text-[#387E89] shrink-0 cursor-pointer",
      className
    )}
    {...props}
  >
    {children}
  </TabsPrimitive.Trigger>
))
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

interface TabsContentProps extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content> {
  children?: React.ReactNode;
}

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  TabsContentProps
>(({ className, children, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-4 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className
    )}
    {...props}
  >
    {children}
  </TabsPrimitive.Content>
))
TabsContent.displayName = TabsPrimitive.Content.displayName

export { Tabs, TabsList, TabsTrigger, TabsContent }
