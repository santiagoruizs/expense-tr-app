
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function CategoriesSelect({categories, setCategoryId, type}: any) {

  return (
    <Select onValueChange={setCategoryId}>
      <SelectTrigger className="">
        <SelectValue placeholder="Select a Category" />
      </SelectTrigger>
      <SelectContent>
        {categories && categories.map(c => c.type === type &&(<SelectItem value={c.category_id}>{c.name}</SelectItem>))}  
      </SelectContent>
    </Select>
  )
}
