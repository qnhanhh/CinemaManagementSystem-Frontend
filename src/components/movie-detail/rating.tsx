import { useState } from "react";
import { Button } from "../ui/button";
import { DialogFooter, DialogTitle } from "../ui/dialog";
import { Slider } from "../ui/slider";
import { Textarea } from "../ui/textarea";

export default function Rating() {
  const colors = ["#FF0000", "#FF7F00", "#FFFF00", "#00FF00", "#9400D3"];
  const [value, setValue] = useState(3);

  const handleChange = (val: number[]) => {
    setValue(val[val.length - 1]);
  };

  return (
    <>
      <DialogTitle>Rate the movie</DialogTitle>
      <p className={`text-center text-xl text-[${colors[value]}]`}>{value}</p>
      <Slider
        defaultValue={[3]}
        max={5}
        step={1}
        onValueCommit={handleChange}
        className="mb-4"
      />
      <Textarea placeholder="What do you think about this movie?" />
      <DialogFooter>
        <Button type="submit">Save changes</Button>
      </DialogFooter>
    </>
  );
}
