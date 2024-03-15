import { useMutation, useQuery } from "@tanstack/react-query"
import { useEffect, type FC } from "react"
import { Controller, useForm } from "react-hook-form"

import { getTranslation } from "~api"
import { DebounceInput, Input, Label, Output } from "~components/ui"

type FormSchema = { input: string }

export const Translate: FC = () => {
  const { control, watch } = useForm<FormSchema>({
    defaultValues: { input: "" }
  })

  const { mutate: translate, data: result } = useMutation({
    mutationFn: getTranslation,
    onError: (e) => console.log(e)
  })

  const input = watch("input")

  useEffect(() => {
    !!input.length && translate(input)
  }, [input])

  return (
    <form className="space-y-6">
      <Label>Translate</Label>
      <Controller
        control={control}
        name="input"
        render={({ field: { onChange, value } }) => {
          return (
            <DebounceInput
              value={value}
              debounce={500}
              onChange={onChange}
              placeholder="Enter Text"
            />
          )
        }}
      />
      <Output text={result} />
    </form>
  )
}
