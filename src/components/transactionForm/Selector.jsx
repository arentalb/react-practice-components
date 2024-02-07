import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select.jsx";

export function Selector({ data, onValueChange }) {
  return (
    <Select onValueChange={onValueChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder={data.message} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{data.label}</SelectLabel>
          {data.items.map((item, index) => (
            <SelectItem value={item} key={data.items[index]}>
              {data.items[index]}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
