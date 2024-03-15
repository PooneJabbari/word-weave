import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

import "../src/styles/globals.css"

import { useState } from "react"

import { Layout } from "~components/layout"
import { NotePencilIcon, TranslateIcon } from "~components/ui"
import { Translation } from "~tabs/translation"

const tabs = [
  { title: "Translate", Icon: TranslateIcon },
  {
    title: "Write",
    Icon: NotePencilIcon
  }
] as const

type TTab = (typeof tabs)[number]["title"]

function IndexSidePanel() {
  const queryClient = new QueryClient()
  const [tab, setTab] = useState<TTab>("Translate")

  return (
    <QueryClientProvider client={queryClient}>
      <Layout
        tabs={tabs}
        activeTab={tab}
        onChange={(tab) => setTab(tab as TTab)}>
        {tab === "Translate" ? <Translation /> : "Write"}
      </Layout>
    </QueryClientProvider>
  )
}

export default IndexSidePanel
