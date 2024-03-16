import { useMutation, useQuery } from "@tanstack/react-query"
import { useEffect, type FC } from "react"
import { Controller, useForm } from "react-hook-form"

import { getGeneration } from "~api"
import {
  Button,
  Input,
  Label,
  Output,
  ToggleGroup,
  ToggleGroupItem
} from "~components/ui"

type FormSchema = {
  input: string
  length: "auto" | "short" | "medium" | "long"
  format: "auto" | "email" | "message"
}

export const Write: FC = () => {
  const { control, handleSubmit } = useForm<FormSchema>({
    defaultValues: { input: "", length: "auto", format: "auto" }
  })

  const { mutate: generate, data: result } = useMutation({
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
            <Input
              value={value}
              onChange={onChange}
              placeholder="Tell me what to write for you."
            />
          )
        }}
      />
      <Controller
        control={control}
        name="length"
        render={({ field: { onChange, value } }) => {
          return (
            <ToggleGroup
              type="single"
              value={value}
              onValueChange={onChange}
              title="Length">
              {["auto", "short", "medium", "long"].map((item) => {
                return (
                  <ToggleGroupItem key={item} value={item}>
                    {item}
                  </ToggleGroupItem>
                )
              })}
            </ToggleGroup>
          )
        }}
      />
      <Controller
        control={control}
        name="format"
        render={({ field: { onChange, value } }) => {
          return (
            <ToggleGroup
              type="single"
              value={value}
              onValueChange={onChange}
              title="Format">
              {["auto", "email", "message"].map((item) => {
                return (
                  <ToggleGroupItem key={item} value={item}>
                    {item}
                  </ToggleGroupItem>
                )
              })}
            </ToggleGroup>
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
