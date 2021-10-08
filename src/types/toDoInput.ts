import { IEdit } from "./edit";

export interface IToDoInputProps {
  onSubmit: ({ id: number, text: string }) => void;
  edit?: IEdit;
}
