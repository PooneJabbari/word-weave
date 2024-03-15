import { useMutation, useQuery } from "@tanstack/react-query"
import { useEffect, type FC } from "react"
import { Controller, useForm } from "react-hook-form"

import { getGeneration } from "~api"
import { Button, Input, Label, Output } from "~components/ui"

type FormSchema = { input: string; size: string; format: string }

export const Write: FC = () => {
  const { control, handleSubmit } = useForm<FormSchema>({
    defaultValues: { input: "", size: "", format: "" }
  })

  const {
    mutate: generate,
    data: result,
    isPending
  } = useMutation({
    mutationFn: getGeneration,
    onError: (e) => console.log(e)
  })

  return (
    <form
      className="space-y-6"
      onSubmit={handleSubmit((data) => generate(data))}>
      <Label>Write</Label>
      <Controller
        control={control}
        name="input"
        render={({ field: { onChange, value } }) => {
          return (
            <Input value={value} onChange={onChange} placeholder="Enter Text" />
          )
        }}
      />
      <Button className="w-full" type="submit">
        Regenerate
      </Button>
      <Output text={result} />
    </form>
  )
}
