import { IEdit } from './edit'

export interface IToDoInputProps {
  onSubmit: ({ id: any, text: string }) => void
  edit?: IEdit
}
