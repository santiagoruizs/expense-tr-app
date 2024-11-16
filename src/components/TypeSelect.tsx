
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  
  export function TypeSelect({setTypeId, type}: any) {
  
    return (
      <Select onValueChange={setTypeId} defaultValue={type}>
        <SelectTrigger className="">
          <SelectValue placeholder="Select a Category" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value='expense'>Expense</SelectItem> 
          <SelectItem value='income'>Income</SelectItem> 
        </SelectContent>
      </Select>
    )
  }
  