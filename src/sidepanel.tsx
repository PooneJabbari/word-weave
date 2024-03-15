import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

import "../src/styles/globals.css"

import { Translation } from "~tabs/translation"

function IndexSidePanel() {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <div
        className="flex flex-col p-4"
        style={{
          fontFamily: "Ubuntu"
        }}>
        <Translation />
      </div>
    </QueryClientProvider>
  )
}

export default IndexSidePanel
