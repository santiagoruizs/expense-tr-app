
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function CategoriesSelect({categories, setCategoryId, type, categoryId}: any) {
  console.log(categories)
  console.log(categoryId)
  return (
    <Select onValueChange={setCategoryId} defaultValue={String(categoryId)}>
      <SelectTrigger className="">
        <SelectValue placeholder="Select a Category" />
      </SelectTrigger>
      <SelectContent>
        {categories && categories.map(c => c.type === type &&(<SelectItem value={String(c.category_id)} >{c.name}</SelectItem>))}  
      </SelectContent>
    </Select>
  )
}
