import { useState } from "react";
import { Button } from "../ui/button";
import { DialogFooter, DialogTitle } from "../ui/dialog";
import { Textarea } from "../ui/textarea";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function Rating() {
  const rateValues = [
    {
      icon: "😓",
      value: 1,
    },
    {
      icon: "😀",
      value: 2,
    },
    {
      icon: "😁",
      value: 3,
    },
    {
      icon: "🤩",
      value: 4,
    },
    {
      icon: "🥰",
      value: 5,
    },
  ];

  const [value, setValue] = useState(3);

  const handleChange = (val: any) => {
    setValue(val.target.id);
  };

  return (
    <>
      <DialogTitle>Rate the movie</DialogTitle>
      <div className="text-2xl mx-auto my-2 font-bold flex gap-1 items-center text-slate-700">
        {value}
        <Star fill="orange" className="text-orange-400" size={20} />
        <span className="text-slate-500 text-sm items-end">/ 5</span>
      </div>
      <div className="flex justify-between">
        {rateValues.map((item) => {
          return (
            <motion.div
              key={item.value}
              whileHover={{
                scale: 1.2,
              }}
              className={`text-4xl cursor-pointer ${
                value == item.value && `text-5xl`
              }`}
              onClick={handleChange}
              id={item.value.toString()}
            >
              {item.icon}
            </motion.div>
          );
        })}
      </div>
      <Textarea placeholder="What do you think about this movie?" />
      <DialogFooter>
        <Button type="submit">Save changes</Button>
      </DialogFooter>
    </>
  );
}
