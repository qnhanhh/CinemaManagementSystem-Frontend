"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Row } from "@tanstack/react-table";
import Dropdown from "./dropdown";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import GenreDropdown from "@/components/genre-dropdown";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";

interface DataTableRowActionsProps<TData> {
  row: Row<TData>;
  tab: String;
}

export function DataTableRowActions<TData>({
  row,
  tab,
}: DataTableRowActionsProps<TData>) {
  return (
    <Dialog>
      <Dropdown />
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit {tab}</DialogTitle>
          <DialogDescription>
            Make changes to your {tab} here. Click save when you are done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          {tab === "movie" ? (
            <>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="title" className="text-right">
                  Movie Title
                </Label>
                <Input id="title" value="Pedro Duarte" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="genres" className="text-right">
                  Genres
                </Label>
                <GenreDropdown />
              </div>
            </>
          ) : (
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="status" className="text-right">
                User Status
              </Label>
              <Switch id="status" />
            </div>
          )}
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
