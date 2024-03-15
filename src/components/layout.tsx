import { cva } from "class-variance-authority"
import type { FC, PropsWithChildren } from "react"

import type { TIcon } from "./ui/icons"

type Props = {
  activeTab: string
  tabs: readonly { title: string; Icon: TIcon }[]
  onChange: (tab: string) => void
}

export const Layout: FC<PropsWithChildren<Props>> = ({
  tabs,
  children,
  activeTab,
  onChange
}) => {
  return (
    <div
      style={{
        fontFamily: "Ubuntu"
      }}>
      <div className="fixed right-0 z-50 bg-slate-200 pt-16 h-full p-1">
        <div className="flex flex-col space-y-6">
          {tabs.map((tab) => (
            <Item
              item={tab}
              active={activeTab === tab.title}
              onClick={() => onChange(tab.title)}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col p-6 mr-16">{children}</div>
    </div>
  )
}

const Item: FC<{
  active: boolean
  onClick: () => void
  item: { Icon: TIcon; title: string }
}> = ({ active, item: { Icon, title }, onClick }) => {
  const itemStyle = cva("p-3", {
    variants: {
      active: {
        false: "text-slate-600",
        true: "text-blue-600 bg-white rounded-r-full relative right-2"
      }
    },
    defaultVariants: {
      active: false
    }
  })

  return (
    <button onClick={onClick}>
      <div className="flex flex-col justify-center items-center space-y-1">
        <div className={itemStyle({ active: active })}>
          <Icon size={24} weight="fill" />
        </div>
        <div className="text-slate-600 text-xs font-bold">{title}</div>
      </div>
    </button>
  )
}
