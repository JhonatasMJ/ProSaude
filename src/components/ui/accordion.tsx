import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { Plus, Minus } from "lucide-react"

import { cn } from "@/lib/utils"

function Accordion({
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn("mb-3", className)}
      {...props}
    />
  )
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "focus-visible:ring-ring/50 flex flex-1 items-center justify-between gap-16 rounded-md px-6 py-4 text-left text-base font-medium transition-all outline-none hover:bg-[#D9D9D9]/20 focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 bg-[#D9D9D9]/10 group ",
          className
        )}
        {...props}
      >
        {children}
        <div className="pointer-events-none shrink-0 relative w-5 h-5 ">
   

          <Plus className="absolute inset-0 size-5 transition-all duration-300 group-data-[state=open]:rotate-90 group-data-[state=open]:opacity-0 group-data-[state=open]:scale-75" />
          <Minus className="absolute inset-0 size-5 transition-all duration-300 group-data-[state=closed]:rotate-90 group-data-[state=closed]:opacity-0 group-data-[state=closed]:scale-75" />
      
        </div>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm transition-all"
      {...props}
    >
      <div className={cn("px-6 pt-2 pb-4 bg-[#D9D9D9]/5 rounded-md mt-1", className)}>{children}</div>
    </AccordionPrimitive.Content>
  )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }